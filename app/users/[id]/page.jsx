async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <div className="bg-emerald-500 p-4 rounded-md mt-10">
        <img src={user.avatar} className="m-auto my-4" />
        <h3 className="text-3xl font-bold">
          {user.id} {user.first_name} {user.last_name}
        </h3>
        <p>email: {user.email}</p>
      </div>
    </div>
  );
}
