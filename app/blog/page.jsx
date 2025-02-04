import axios from "axios";

async function getUserData() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function blog() {
  const userDetails = await getUserData();

  return <div>user Data : {userDetails?.name}</div>;
}
