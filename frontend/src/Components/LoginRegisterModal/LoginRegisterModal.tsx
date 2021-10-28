import { BaseSyntheticEvent, FormEvent } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";
import RegisterForm from "./RegisterForm/RegisterForm";
import BasicModal from "../Modal/BaiscModal";
import LoginForm from "./LoginForm/LoginForm";
import { useModal } from "../../Contexts/ModalContext";

const LoginRegisterModal = () => {

  const history = useHistory();
  const { login, wrongPassword, logout, whoAmI } = useAuth()
  const { showLoginModal, toggleLoginModal } = useModal();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const toggleRegister = () => setShowRegisterForm(!showRegisterForm);


    const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const userObj = {
      username: username,
      password: password
    }
    login(userObj)
  }

  const handleClose = (e: BaseSyntheticEvent) => {
    console.log("Closed");
    toggleLoginModal();
    setShowRegisterForm(false);
  }


  return (
    <BasicModal isOpen={showLoginModal} handleClose={handleClose}>
      {showRegisterForm ? (
        <RegisterForm />
      ) : (
        <LoginForm toggleRegister={toggleRegister} />
      )}
    </BasicModal>
  );
}
export default LoginRegisterModal;