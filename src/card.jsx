import React from 'react'
import Sdata from './data';
function Card() {
    return (
        <>
            {
                Sdata.map((val, index) => {
                    return (
                        <div className='col-md-6 col-10 mx-auto col-lg-4 '>
                            <div className="card" key={index} > 
                                <img src={val.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{val.tittle}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn-get-started">Know More</a>
                                </div>
                            </div>
                        </div>

                    )
                })

            }
        </>
    )
}
export default Card;