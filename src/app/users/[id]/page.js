async function getUsers(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    return data;
}

export default async function Page({ params }) {
    const user = await getUsers(params.id);
    console.log("user", user)
    return (
        <div>
            <h1>User Data</h1>
            <h4>{user.result.name}</h4>
            <h4>{user.result.age}</h4>
            <h4>{user.result.email}</h4>
        </div>
    )
}

