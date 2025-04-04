import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://uwm.edu/engineering/wp-content/uploads/sites/537/2021/02/banner-1500-400.jpg"
  );

  const [profileUrl, setProfileUrl] = useState(
    "https://raw.githubusercontent.com/antonshell/placeholder-service/master/resources/test_images/img.jpeg"
  );

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      {/* Banner Section */}
      <div className="relative w-full">
        <img
          src={bannerUrl}
          alt="background image"
          className="w-full h-60 object-cover rounded-lg"
        />
        <button className="absolute top-5 right-5 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={18} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      {/* Profile & Details */}
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <img
            src={profileUrl}
            alt="Channel Logo"
            className="w-full h-full object-cover rounded-full border-4 border-white"
          />
          <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="profile-upload" className="cursor-pointer">
              <FaCamera size={20} />
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
          </button>
        </div>

        {/* Channel Details */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold">Safwax Webdev</h1>
          <p className="text-gray-600">1M views</p>
          <p className="mt-2 text-gray-700 max-w-md">
            This is a short description of the YouTube channel. It gives an
            overview of the content and what viewers can expect.
          </p>
          <button className="mt-4 btn bg-red-600 text-white py-2 px-6 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
