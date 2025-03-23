import { FaUserCircle } from "react-icons/fa";
import { Person } from "./PeopleToFollow";

interface UserCardProps {
  person: Person;
}

const UserCard: React.FC<UserCardProps> = ({ person }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <span className="mr-3 text-3xl text-gray-500">
          <FaUserCircle />
        </span>
        <span>{person.name}</span>
      </div>
      <button
        className={`px-4 py-1 text-sm rounded-full ${
          person.following ? "bg-black text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
