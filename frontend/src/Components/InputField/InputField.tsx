import Box from "@mui/material/Box";
import { StyledInput } from "./StyledInputField";

interface Props {
  label: string;
  type?: string;
  updateState: React.Dispatch<React.SetStateAction<any>>;
  value: string | number;
  required?: boolean;
}

const InputField = ({ label, type, updateState, value, required }: Props) => {
  return (
    <StyledInput
      onChange={(e) => updateState(e.target.value)}
      fullWidth
      required={required}
      value={value}
      type={type ? type : "text"}
      label={label}
      id={label}
    />
  );
};

export default InputField;
