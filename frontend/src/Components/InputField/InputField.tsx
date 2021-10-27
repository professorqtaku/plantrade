import Box from "@mui/material/Box";
import { StyledInput } from "./StyledInputField";

interface Props {
  label: string;
}

const InputField = ({ label }: Props) => {
  return <StyledInput fullWidth label={label} id={label} />;
};

export default InputField;
