import { FormEvent } from "react";
import { useState } from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import BasicModal from "../Modal/BaiscModal";
import LoginForm from "./LoginForm/LoginForm";
import { useModal } from "../../Contexts/ModalContext";
import { useAuth } from "../../Contexts/AuthContext";

const LoginRegisterModal = () => {
  const { setWrongPassword } = useAuth();
  const { showLoginModal, toggleLoginModal } = useModal();
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const toggleRegister = () => setShowRegisterForm(!showRegisterForm);

  const handleClose = (e: FormEvent) => {
    toggleLoginModal();
    setShowRegisterForm(false);
    setWrongPassword(false);
  }

  return (
    <BasicModal isOpen={showLoginModal} handleClose={handleClose}>
      {showRegisterForm
        ? 
        <RegisterForm toggleRegister={toggleRegister} />
        : 
        <LoginForm toggleRegister={toggleRegister} />
      }
    </BasicModal>
  );
}
export default LoginRegisterModal;