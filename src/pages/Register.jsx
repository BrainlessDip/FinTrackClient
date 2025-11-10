import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { handleRegister, handleSignin } = useContext(AuthContext);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      toast.error(
        <div>
          <div>Password must</div>
          <div>- Have at least one uppercase letter</div>
          <div>- Have at least one lowercase letter</div>
          <div>- Be at least 6 characters long</div>
        </div>
      );
      return;
    }

    const result = await handleRegister(email, password, name, photoURL);

    if (result) {
      navigate("/");
    }
  };

  const handleGoogleSignin = async () => {
    const result = await handleSignin();
    if (result) {
      navigate("/");
    }
  };

  useEffect(() => {
    document.title = `Register | FinTrack`;
  }, []);

  return (
    <div className="flex  bg-base-300 justify-center items-center flex-col relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-4xl">Register</legend>
        <form onSubmit={registerUser}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input focus:outline-0"
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input focus:outline-0"
            name="photoURL"
            placeholder="Photo URL"
            autoComplete="off"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input focus:outline-0"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input focus:outline-0"
            placeholder="Password"
            name="password"
            autoComplete="new-password"
            required
          />

          <button className="btn btn-neutral mt-4 w-full">Register</button>
          <p
            onClick={() => navigate("/login")}
            className="mt-2 text-center text-[16px] text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            Already have an account?{" "}
            <span className="font-semibold hover:underline">Login</span>
          </p>
        </form>
        <div className="flex justify-around items-center mt-2">
          <button
            onClick={() => {
              handleGoogleSignin();
            }}
            className="btn bg-white text-black border-[#e5e5e5]"
            type="button"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default Register;
