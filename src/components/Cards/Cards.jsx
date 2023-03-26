import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

const Cards = () => {
    const[cards,setCards] = useState([])


    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res=>res.json())
        .then(data=>setCards(data.data.tools))
    },[])


    // State for show data
    const[showAll,setShowAll]=useState(false);

    // Function for all data
    const handelShowAll =()=>{
        setShowAll(true)
    }

    // For id modal
    const [uniqueId, setUniqueId] = useState(null)
    const [modalData, setModalData] = useState({})

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res=>res.json())
        .then(data=>setModalData(data.data))
    },[uniqueId])


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mt-9 ml-5'>
            {
                cards.slice(0,showAll ? 12 : 6).map(card=><Card 
                    key={card.id}
                    card={card}
                    setUniqueId={setUniqueId}
                ></Card>)
            }

            </div>


            {/* Show all btn handler */}
            {
                !showAll && <span onClick={handelShowAll}>
                <Button> Show All </Button>
                </span>
            }
            <Modal modalData={modalData}></Modal>
        </div>
    );
};

export default Cards;