import React,{useState} from "react";

const Contact = () => {
    const[data, setData]= useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event) =>{
        const{name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]: value,
            }
        })
    }
    const formSubmit =(e) =>{
        e.preventDefault();
        alert(`${data.fullname}`);


    }
  return (
    <>
      <div className="my-4">
        <h1 className="text-center"> Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='fullname'
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phonenumber
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='phone'
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='msg'
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
