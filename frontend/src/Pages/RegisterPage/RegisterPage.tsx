import { Ref } from "react";
import { RefObject } from "react";
import { MutableRefObject } from "react";
import { useRef } from "react";
import { StyledWrapper } from "./StyledRegisterPage";


const RegisterPage = () => {

  const usernameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
 
    const user = {

    }
    // Create user-object and call on the register func from AuthContext.
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