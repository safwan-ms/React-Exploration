import { useState } from "react";
interface UserProfileData {
  name: string;
  age: number;
  email: string;
}
const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileData>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName = (name: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, name }));
  };
  const updateAge = (age: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, age: +age }));
  };
  const updateEmail = (email: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, email }));
  };
  return (
    <div>
      <h2>User Profile </h2>
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={profile.age > 0 ? profile.age : ""}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h1>User Information</h1>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
};
export default UserProfile;
