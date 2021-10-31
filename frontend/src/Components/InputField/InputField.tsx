import Box from "@mui/material/Box";
import { StyledInput } from "./StyledInputField";

interface Props {
  label: string;
  type?: string;
  updateState: React.Dispatch<React.SetStateAction<any>>;
  required?: boolean;
  margintop?: number;
  value: string | number | undefined;
}

const InputField = ({
  label,
  type,
  updateState,
  value,
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
      margintop={margintop ? margintop : 0}
    />
  );
};

export default InputField;
