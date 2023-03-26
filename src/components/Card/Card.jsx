import React from 'react';

const Card = (props) => {
    const { name, image, features,published_in,id} = props.card

    // const handleId=(id)=>{
    //     console.log(id);
    // }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <figure><img src={image} alt="Tool Image" /></figure>
                <div className="card-body">
                <h2 className="card-title font-bold ">Feature</h2>
                    <ul>
                        {
                            features.map((feature,index)=> <li className='text-lg font-medium'>
                                {index+1}.  {feature}
                                </li>)
                        }
                    </ul>
                </div>
                <div className='mt-2 pr-9 pl-9 pb-7'>
                    <div className='border-t-2 flex justify-between items-center'>
                        <div>
                        <h2 className="card-title pt-1">{name}</h2>
                        <p className='pt-2 text-lg font-medium text-gray-700'><i className="fa-solid fa-calendar-days"></i> {published_in}</p>
                        </div>
                        <div>
                            <label htmlFor="my-modal-5" onClick={()=>props.setUniqueId(id)}   className="bg-red-200 text-error py-2 px-3 rounded-full cursor-pointer"><i className="fa-solid fa-arrow-right"></i></label>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Card;