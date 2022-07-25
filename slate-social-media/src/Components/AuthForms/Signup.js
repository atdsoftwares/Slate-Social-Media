import { signUpHandler } from "../../redux/reducers/authSlice";
import {
  Link,
  useNavigate,
  useDispatch,
  useSelector,
} from "../../Utils/SystemUtils";

import "./Signup.css";
import { useState } from "react";
function Signup() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.auth.loginData);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
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
    <div>
      <h3 className="login-page-title"> Signup Page</h3>
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
      </div>
    </div>
  );
}
export default Signup;
