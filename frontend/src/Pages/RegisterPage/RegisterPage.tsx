import { useRef, useContext} from "react";
import { StyledWrapper } from "./StyledRegisterPage";
import { AuthContext } from "../../Contexts/AuthContextProvider"
interface User {
  username: string,
  email: string,
  password: string
}

const RegisterPage = () => {

  const { registerUser } = useContext(AuthContext);

  const usernameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
 
    const userObject: User = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    console.log(userObject ,'obj?')
    // registerUser(userObject);
  }

  return (
    <StyledWrapper>
      <h3>Register Page</h3>

      <form onSubmit={(e) => handleRegister(e)}>

        <input ref={usernameRef} type="text" placeholder="Username" />
        <input ref={emailRef} type="text" placeholder="Email" />
        <input ref={passwordRef} type="text" placeholder="Password" />

        <button>Skapa Konto</button>
      </form>
    </StyledWrapper>
  );
}

export default RegisterPage;