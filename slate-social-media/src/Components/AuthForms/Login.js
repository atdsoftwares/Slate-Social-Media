import {
  Link,
  useNavigate,
  useDispatch,
  useSelector,
  useState,
} from "../../Utils/SystemUtils";
import { loginHandler } from "../../redux/reducers/authSlice";

// import "./Login.css";
function Login() {
  const loginData = useSelector((state) => state.auth.loginData);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function submitLogin(e) {
    e.preventDefault();
    dispatch(loginHandler({ username, password }));
    navigate("/explore");
  }
  return (
    <div className="flex justify-center items-center mt-36 w-full">
      {/* <h3 className="login-page-title"> Login Page</h3>
      <div className="Login-Form">
        <div class="form-control">
          <img
            src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_secure_login_pdn4.svg"
            alt="user"
            className="user-icon"
          />
          <form onSubmit={submitLogin}>
            <label>
              <input
                class="input__field"
                type="text"
                name="username"
                placeholder="user name"
                required
                onChange={(e) => setUsername(e.target.value)}
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
            Not a member ?<Link to="/Signup"> Signup</Link> here
          </h4>
        </div>
      </div> */}

      <div class="block p-6 rounded-lg shadow-lg bg-gray-600 max-w-sm ">
        <form onSubmit={submitLogin}>
          <div class="form-group mb-6">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-white"
            >
              Email address
            </label>
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              class="form-control
        block
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
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
            />
            <small id="emailHelp" class="block mt-1 text-xs text-white">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-white"
            >
              Password
            </label>

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
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <input
            type="submit"
            value="Login"
            class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      cursor-pointer
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
        <h4 className="text-center">
          Not a member ?
          <Link to="/Signup">
            <span class="text-white"> Signup</span>
          </Link>{" "}
          here
        </h4>
      </div>
    </div>
  );
}

export default Login;
