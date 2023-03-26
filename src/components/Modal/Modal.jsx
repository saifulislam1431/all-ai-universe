import React from 'react';
import './modal.css'

const Modal = (props) => {
    console.log(props.modalData);
    const { tool_name, description, image_link, integrations, features } = props.modalData;
     
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">

                        <div className="card-body border-2 border-error rounded-xl m-10 bg-red-100">
                            <h2 className="card-title">{description ? description : "Not found"}</h2>

                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-2xl font-semibold'>Feature</h1>

                                    <ul>
                                        {
                                            Object.values(features || {}).map((feature)=> <p className='text-lg font-medium my-1 text-gray-600 pt-3'><i className="fa-solid fa-circle icon-font"></i> {feature.feature_name ? feature.feature_name : "Data not found"}</p>)
                                        }
                                    </ul>
                                </div>

                                <div>
                                    <h1 className='text-2xl font-semibold'>Integrations</h1>

                                    <ul>
                                        {
                                            integrations.map((int)=><p className='text-lg font-medium my-1 text-gray-600 pt-3'><i className="fa-solid fa-circle icon-font"></i> {int ? int : "Data not found"}</p>)
                                        }
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div>
                            <figure><img src={image_link && image_link[0]} alt="Album" className='w-96 h-full rounded-lg' /></figure>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;