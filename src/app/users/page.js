import axios from "axios"
import Link from "next/link";

async function getUsers() {
    let data = await fetch("http://localhost:3000/api/users")
    data = await data.json();
    return data;
}

export default async function Page() {
    const data = await getUsers();
    console.log("dataaa", data)
    return (
        <div>
            <h1>User Listtt</h1>
            <div>
                {data?.map((item) => (
                    <div key={item.id}>
                        <Link href={`/users/${item.id}`} >{item.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

