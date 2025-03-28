import { useNavigate } from "react-router-dom";

const UserCard = ({ user, deleteUser }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-lg shadow-md flex flex-col items-center">
      <img src={user.avatar} alt={user.first_name} className="rounded-full w-16 h-16 mb-2" />
      <h2 className="text-lg font-semibold">{user.first_name} {user.last_name}</h2>
      <div className="mt-2 flex gap-2">
        <button onClick={() => navigate(`/edit/${user.id}`)} className="text-blue-500">Edit</button>
        <button onClick={() => deleteUser(user.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
