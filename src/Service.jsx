import React from 'react'
import Card from './card';
function Service() {
    return (
        <>
            <div className='my-5 '>
            <div className='d-flex justify-content-center mb-5'>
                <div className='conhead '>
                    <h1 className="text-center mb-2">Our Services</h1>
                </div>
                </div>
                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row gy-4'>
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;