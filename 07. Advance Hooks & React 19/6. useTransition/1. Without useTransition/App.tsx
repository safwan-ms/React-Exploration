import { useState } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "posts":
        return <Posts />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <div className="tabs">
        <button
          className="border-2 p-4 m-1"
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          className="border-2 p-4 m-1"
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className="border-2 p-4 m-1"
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      <div className="content">{renderContent()}</div>
    </div>
  );
};
export default App;
