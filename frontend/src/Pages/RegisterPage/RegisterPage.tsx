
import { StyledWrapper } from "./StyledRegisterPage";

const RegisterPage = () => {

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
 
    // Create user-object and call on the register func from AuthContext.
  }

  return (
    <StyledWrapper>
      <h3>Register Page</h3>

      <form onSubmit={(e) => handleRegister(e)}>

      </form>
    </StyledWrapper>
  );
}

export default RegisterPage;