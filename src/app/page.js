"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./style.css";
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then((response) => {
        setData(response.data.result)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }, [show])


  const handleDelete = (e) => {
    setShow(true)
    const productID = e.target.value;
    console.log("e.t.v", e.target.value)
    axios.delete(`http://localhost:3000/api/products/${productID}`)
      .then((response) => {
        console.log("response", response)
        setShow(false)
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  return (
    <div className="container ">
      <h3>Products Table</h3>
      <hr />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Color</th>
            <th scope="col">Company</th>
            <th scope="col">Category</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td >{item.name}</td>
              <td >{item.price}</td>
              <td >{item.color}</td>
              <td >{item.company}</td>
              <td >{item.category}</td>
              <td ><Link href={"/products/" + item._id}>Edit</Link></td>
              <td ><button className="btn btn-outline-danger" onClick={handleDelete} value={item._id}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div >
        <button className="btn btn-primary m-2" onClick={() => router.push('/addproduct')}>Add Product</button>
        <button className="btn btn-primary m-2" onClick={() => router.push('/addimage')}>Add Image</button>
      </div>
    </div >

  )
}