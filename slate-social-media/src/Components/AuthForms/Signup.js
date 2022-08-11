import { signUpHandler } from "../../redux/reducers/authSlice";
import {
  Link,
  useNavigate,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";

import { useState } from "react";
function Signup() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.auth.loginData);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitSignUp(e) {
    e.preventDefault();
    dispatch(signUpHandler({ avatar, fullName, username, email, password }));
    navigate("/explore");
  }

  function handleImage(e) {
    console.log(`image handles`);
    setAvatar(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="flex justify-center items-center mt-36">
      {/* <h3 className="login-page-title"> Signup Page</h3>
      <div className="Signup-Form">
        <div class="form-control">
          <img
            src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_secure_login_pdn4.svg"
            alt="user"
            className="user-icon"
          />

          <form onSubmit={submitSignUp}>
            <label className="image-handle">
              <input
                class="input__field"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
              <span className="material-icons">image</span>
              {!avatar ? (
                <span>uplaod image</span>
              ) : (
                <span>
                  <img src={avatar} alt="user" className="user-icon-round" />
                  {avatar.replace(`blob:http://localhost:3000/`, "/")}
                </span>
              )}
            </label>

            <label>
              <input
                class="input__field"
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={(e) => setFullName(e.target.value)}
                // onChange={(e) =>
                //   dispatch({ type: "NAME", payload: e.target.value })
                // }
              />
            </label>

            <label>
              <input
                class="input__field"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <input
                class="input__field"
                type="text"
                name="username"
                placeholder="User Name"
                required
                onChange={(e) => setUsername(e.target.value)}
                // onChange={(e) =>
                //   dispatch({ type: "NUMBER", payload: e.target.value })
                // }
              />
            </label>
            <label>
              <input
                class="input__field"
                type="password"
                name="input password"
                placeholder="Password"
                required
                minlength="6"
                onChange={(e) => setPassword(e.target.value)}
                // onChange={(e) =>
                //   dispatch({ type: "PASSWORD", payload: e.target.value })
                // }
              />
            </label>

            <label>
              <input
                class="input__field"
                type="submit"
                name="input submit"
                required
              />
            </label>
          </form>
          <h4 className="login-instruction">
            Already member ?<Link to="/Login"> Login</Link> here
          </h4>
        </div>
      </div> */}

      <div class="block p-6 rounded-lg shadow-lg bg-gray-600 max-w-md">
        <div class="flex justify-center items-center">
          {!avatar ? (
            <span className="material-icons">account_circle</span>
          ) : (
            <span>
              <img src={avatar} alt="user" class="rounded-full w-24 p-2" />
            </span>
          )}
        </div>

        <form onSubmit={submitSignUp}>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                type="text"
                required
                onChange={(e) => setFullName(e.target.value)}
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Full name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                required
                class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Upload Avatar"
              />
            </div>
          </div>

          <div class="form-group mb-6">
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput125"
              placeholder="Email address"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput125"
              placeholder="User Name"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Password"
            />
          </div>

          <input
            type="submit"
            required
            value="Signup"
            class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      cursor-pointer
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          />
        </form>
        <h4 className="login-instruction">
          Already member ?
          <Link to="/Login">
            <span class="text-white"> Login</span>
          </Link>{" "}
          here
        </h4>
      </div>
    </div>
  );
}
export default Signup;
