import React, { useContext } from "react";
import { updateProfile } from "@firebase/auth";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    try {
      const update = updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });

      toast.promise(update, {
        pending: "Updating profile...",
        success: "Profile updated successfully!",
        error: "Promise rejected 🤯",
      });

      await update;
      setUser({ ...auth.currentUser });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 my-10">
        <div className="bg-base-200 border-base-300 rounded-box rounded-3xl shadow-md w-xs border p-4 flex justify-between items-center flex-col gap-5">
          <img
            src={
              user.photoURL ||
              "https://img.icons8.com/?size=100&id=fUUEbUbXhzOA&format=png&color=ffffff"
            }
            className="rounded-3xl w-[100px] h-[100px]"
          />
          <h1 className="font-bold">{user.displayName}</h1>
          <h1>Email: {user.email || "Not available"}</h1>
        </div>
        <div className="bg-base-200 border-base-300 rounded-box rounded-3xl shadow-md w-xs border p-3 flex justify-between items-start flex-col gap-5">
          <fieldset>
            <legend className="fieldset-legend text-2xl">Change Profile</legend>
            <form onSubmit={handleUpdateProfile}>
              <label className="label">Name</label>
              <input
                type="text"
                className="input focus:outline-0"
                name="name"
                defaultValue={user.displayName}
                placeholder="Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input focus:outline-0"
                name="photoURL"
                defaultValue={user.photoURL}
                placeholder="Photo URL"
                required
              />
              <button className="btn btn-success mt-4 w-full">Change</button>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
