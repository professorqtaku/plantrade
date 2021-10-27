import Box from "@mui/material/Box";
import { StyledInput } from "./StyledInputField";

interface Props {
  label: string;
  type?: string
}

const InputField = ({ label, type }: Props) => {
  return <StyledInput fullWidth type={type ? type : "text"} label={label} id={label} />;
};

export default InputField;
