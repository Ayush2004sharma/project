import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => setUser(res.data.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`, user);
    navigate("/users");
  };

  return (
    <form onSubmit={handleUpdate} className="p-6 bg-gray-100 rounded-lg shadow-md">
      <input className="p-2 border w-full mb-2" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
      <input className="p-2 border w-full mb-2" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Update</button>
    </form>
  );
};

export default EditUser;
