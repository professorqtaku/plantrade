import Box from "@mui/material/Box";
import { StyledInput } from "./StyledInputField";

interface Props {
  label?: string;
  type?: string;
  updateState: React.Dispatch<React.SetStateAction<any>>;
  value: string | number | undefined;
  InputLabelProps?: Object;
  InputProps?: Object;
}

const InputField = ({
  label,
  type,
  updateState,
  value,
  InputLabelProps,
  InputProps,
}: Props) => {
  return (
    <StyledInput
      required
      onChange={(e) => updateState(e.target.value)}
      fullWidth
      value={value ? value : ""}
      type={type ? type : "text"}
      label={label}
      id={label}
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
    />
  );
};

export default InputField;
