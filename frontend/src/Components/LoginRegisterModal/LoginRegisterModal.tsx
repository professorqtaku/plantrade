import { BaseSyntheticEvent, FormEvent } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";
import RegisterForm from "./RegisterForm/RegisterForm";
import BasicModal from "../Modal/BaiscModal";
import LoginForm from "./LoginForm/LoginForm";
import { useModal } from "../../Contexts/ModalContext";

const LoginRegisterModal = () => {
  const { showLoginModal, toggleLoginModal } = useModal();
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const toggleRegister = () => setShowRegisterForm(!showRegisterForm);

  const handleClose = (e: BaseSyntheticEvent) => {
    toggleLoginModal();
    setShowRegisterForm(false);
  }


  return (
    <BasicModal isOpen={showLoginModal} handleClose={handleClose}>
      {showRegisterForm ? (
        <RegisterForm toggleRegister={toggleRegister} />
      ) : (
        <LoginForm toggleRegister={toggleRegister} />
      )}
    </BasicModal>
  );
}
export default LoginRegisterModal;