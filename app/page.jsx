import { Users } from "@/components/Users";

async function FetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const users = await FetchUsers();

  return <Users users={users} />;
}
