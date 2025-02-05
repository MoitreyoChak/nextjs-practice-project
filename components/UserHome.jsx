import axios from "axios";

export default async function Home() {
  const userdata = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name : {userdata?.email}</div>
          id : {userdata?.id}
        </div>
      </div>
    </div>
  );
}

async function getUserDetails() {
  try {
    const res = await axios.get("http://localhost:3000/api/user");
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
