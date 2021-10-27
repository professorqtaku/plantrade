import Box from "@mui/material/Box";
import { StyledInput } from "./StyledInputField";

interface Props {
  label: string;
  type?: string;
  updateState: React.Dispatch<React.SetStateAction<any>>;
}

const InputField = ({ label, type, updateState }: Props) => {
  return (
    <StyledInput
      onChange={(e) => updateState(e.target.value)}
      fullWidth
      type={type ? type : "text"}
      label={label}
      id={label}
    />
  );
};

export default InputField;
