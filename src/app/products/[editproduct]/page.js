
"use client"

import { useEffect, useState } from "react"
import "../../style.css";
import Link from "next/link";
import axios from "axios";

export default function Page({ params }) {
    const [data, setData] = useState()

    useEffect(() => {
        console.log("params", params.editproduct)
        const productID = params.editproduct;
        axios.get(`http://localhost:3000/api/products/${productID}`)
            .then((response) => {
                console.log("response", response)
                setData(response.data.result)
            })
            .catch((error) => {
                console.log('error', error);
            })
    }, [params])

    function handleSubmit() {
        console.log("data", data)
        const productID = params.editproduct;
        axios.put(`http://localhost:3000/api/products/${productID}`, data)
            .then((response) => {
                console.log("response", response)
                if (response.data.success) {
                    alert("Product Has Been Updated")
                }
            })
            .catch((error) => {
                console.log('error', error);
            })
        // console.log("data", data)
        // let result = await fetch("http://localhost:3000/api/products", {
        //     method: "POST",
        //     body: JSON.stringify(data)
        // });
        // result = await result.json();
        // if (result.success) {
        //     alert("New Product Added")
        // } else {
        //     alert("Their is some error");
        // }
    }
    return (
        <>
            <div className="container border">
                <p><Link href="/viewproducts" >Back</Link></p>
                <h3 className="p-3" style={{ color: "#1888" }}>Edit Product</h3>
                {/* <input type="text" onChange={(e) => setData({ ...data, name: e.target.value })} /> */}
                <div className="form-floating mb-3">
                    <input defaultValue={data?.name} onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="Name" />
                    <label>Name</label>
                </div>
                <div className="form-floating  mb-3">
                    <input defaultValue={data?.company} onChange={(e) => setData({ ...data, company: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Company</label>
                </div>
                <div className="form-floating  mb-3">
                    <input defaultValue={data?.price} onChange={(e) => setData({ ...data, price: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="price" />
                    <label>Price</label>
                </div>
                <div className="form-floating  mb-3">
                    <input defaultValue={data?.color} onChange={(e) => setData({ ...data, color: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="color" />
                    <label>Color</label>
                </div>
                <div className="form-floating  mb-3">
                    <input defaultValue={data?.category} onChange={(e) => setData({ ...data, category: e.target.value })} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label>Category</label>
                </div>
                <div className="mb-3 ">
                    <button onClick={handleSubmit} className="btnn btn-outline-success">Success</button>
                </div>

            </div >
        </>
    )
}