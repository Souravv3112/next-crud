
"use client"

import { useState } from "react"
import ".././style.css";
import Link from "next/link";

export default function Page() {
    const [data, setData] = useState({
        name: "",
        price: "",
        color: "",
        category: "",
        company: ""
    })

    async function handleSubmit() {

        console.log("data", data)
        let result = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify(data)
        });
        result = await result.json();
        if (result.success) {
            alert("New Product Added")
        } else {
            alert("Their is some error");
        }
    }
    return (
        <>
            <div className="container border">

                <p><Link href="/" >Back</Link></p>
                <h3 className="p-3" style={{ color: "#1888" }}>Add Product Page</h3>
                {/* <input type="text" onChange={(e) => setData({ ...data, name: e.target.value })} /> */}
                <div className="form-floating mb-3">
                    <input onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="Name" />
                    <label>Name</label>
                </div>
                <div className="form-floating  mb-3">
                    <input onChange={(e) => setData({ ...data, company: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Company</label>
                </div>
                <div className="form-floating  mb-3">
                    <input onChange={(e) => setData({ ...data, price: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="price" />
                    <label>Price</label>
                </div>
                <div className="form-floating  mb-3">
                    <input onChange={(e) => setData({ ...data, color: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="color" />
                    <label>Color</label>
                </div>
                <div className="form-floating  mb-3">
                    <input onChange={(e) => setData({ ...data, category: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Category</label>
                </div>
                <div className="mb-3 ">
                    <button onClick={handleSubmit} className="btn btn-outline-success">Success</button>
                </div>

            </div >
        </>
    )
}