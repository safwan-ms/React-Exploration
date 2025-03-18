import AdminInfo from "../../React-Complete-Exploration/04. React with Typescript/3. Reusable Types/live coding/components/AdminInfo";
import UserInfo from "../../React-Complete-Exploration/04. React with Typescript/3. Reusable Types/live coding/components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>👇 User Info</h1>
      <UserInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Earth", "USA"]}
      />
      <h1>👇 Admin Info</h1>
      <AdminInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Mars", "Unknown"]}
        admin="yes"
      />
    </div>
  );
};
export default App;
