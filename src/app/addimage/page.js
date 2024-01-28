"use client"

import { useState } from "react"

export default function Page() {
    const [file, setFile] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('file', file);
        let result = await fetch("api/upload", {
            method: "POST",
            body: data
        })
        result = await result.json();
        console.log("resultt", result);
        if (result.success) {
            alert("Image Uploaded");
        } else {
            alert("Some Error")
        }
    }
    return (
        <>
            <div className="container">
                <h2>Upload Image</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
                    <button className="btn btn-outline-success" type="submit">Upload Image</button>
                </form>
            </div>
        </>
    )
}