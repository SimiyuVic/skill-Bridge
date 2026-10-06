import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const redirect = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const messages = { name, email, phone, message }

        fetch("http://localhost:4000/contat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(messages)
        })
        .then((response)=>{
            if(!response.ok)
            {
                throw Error("Cannot submit the message");
            }
        })
        .then(()=>{
            redirect("/");
            toast.success("Message submitted successfully");
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }

    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3 border-0 shadow-sm mb-3">
                            <h5>
                                Our Office
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequatur beatae blanditiis architecto non, quae nisi odit.
                            </p>
                            <p>
                                Westlands , Mpaka Road
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 border-0 shadow-sm mb-3">
                            <h5>
                                Call Us
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequatur beatae blanditiis architecto non, quae nisi odit.
                            </p>
                            <p>
                                +254799737826
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 border-0 shadow-sm mb-3">
                            <h5>
                                Email Us
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequatur beatae blanditiis architecto non, quae nisi odit.
                            </p>
                            <p>
                                info@skillbridge.co.ke
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="card border-0 shadow-sm p-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Your Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g James Thornhill"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Email</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g james@gmail.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="e.g +25472090000"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-floating" >
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave your message here"
                                            style={{ height: "100px" }}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                        <label htmlFor="floatingTextarea">Your Message</label>
                                    </div>
                                    <button className="btn btn-primary my-3">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;