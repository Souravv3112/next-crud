import Link from "next/link";
import ".././style.css"
const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products");
    data = await data.json();
    if (data.success) {
        return data.result
    } else {
        return { success: false }
    }
}

export default async function Page() {
    const products = await getProducts();
    return (
        <>
            <div className="container d-block">
                <div>
                    <Link href="/" >Back</Link>
                    <h2>Products</h2>
                    <hr />
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Color</th>
                            <th scope="col">Company</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td >{item.name}</td>
                                <td >{item.price}</td>
                                <td >{item.color}</td>
                                <td >{item.company}</td>
                                <td >{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}