import React, { useState } from 'react'
function Contact() {
    const [data,setData]=useState({
        Fname:"",
        Email:" ",
        Phone:" ",
        Message:""
    })
    const submit=()=>{
        alert(`hy ${data.Fname} your phone no. is ${data.Phone}, Email is${data.Email} and your message is ${data.Message}` )
    }
    const inputEvent=(e)=>{
              const { name, value}=e.target;
            setData((p)=>{
                return{
                ...p,
                [name]:value,
                }

            }
            )

    }
    return (
        <>
            <div className="my-5 d-flex justify-content-center">
                <div className='conhead'>
                <h1 className="text-center">Contact Us</h1>
                </div>
            </div>
            <div className="container contact_div">
                <div className="row mb-5">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={submit} className='mb-5'>
                        <div className="form-group">
                                <label for="exampleInputPassword1">FullName</label>
                                <input type="text" name='Fname' value={data.Fname} onChange={inputEvent} className="form-control mb-2" id="exampleInputTeaxt1" placeholder="enter your name"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Phone</label>
                                <input type="phone" name='Phone' value={data.Phone} onChange={inputEvent} className="form-control mb-2" id="exampleInputPassword1" placeholder="mobile number"/>
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name='Email' value={data.Email} onChange={inputEvent} className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" className="form-text text-muted mb-2">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea type="taxt" name='Message' value={data.Message} onChange={inputEvent} className="form-control mb-3" id="exampleInputPassword1" placeholder="type here"/>
                            </div>
                            <button type="submit" className="btn-get-started" id='btnb'>Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;