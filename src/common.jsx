import React from 'react'
import { NavLink } from 'react-router-dom';
function Common(p) {
    return (
        <>
            <section id="header" className=" d-flex align-items-center">
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                        <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 '>
                            <h1>{p.name} <strong className='brand-name'>Idiots Inside</strong></h1>
                            <h2 className='my-3'>
                                We are the team of talented developer making websites
                            </h2>
                            <div className='mt-3'>
                                <NavLink to={p.to} className='btn-get-started'>{p.btn}</NavLink>
                            </div>
                        </div>
                        <div className='col-lg-6 order-1 oerder-lg-2 header-img'>
                            <img src={p.img} className="img-fluid animated" alt="img" />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Common;