import Box from "@mui/material/Box";
import { StyledInput } from "./StyledInputField";

interface Props {
  label?: string;
  type?: string;
  updateState: Function | React.Dispatch<React.SetStateAction<any>>;
  required?: boolean;
  margintop?: number;
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
  required,
  margintop,
}: Props) => {
  return (
    <StyledInput
      onChange={(e) => updateState(e.target.value)}
      fullWidth
      required={required ? true : false}
      value={value ? value : ""}
      type={type ? type : "text"}
      label={label}
      id={label}
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
      margintop={margintop ? margintop : 0}
    />
  );
};

export default InputField;
