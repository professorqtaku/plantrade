import { StyledButton } from "./StyledClearButton";

interface Props {
  label: string;
  type?: "button" | "submit";
  callback?: (data?: any) => any;
  costumFontSize?: string;
  costumBackgroundColor?: string;
  disabled?: boolean;
}

const ClearButton = ({
  label,
  type,
  callback,
  costumFontSize,
  disabled,
  costumBackgroundColor,
}: Props) => {
  let fontSize: string = costumFontSize ? costumFontSize : "0.7rem";

  return (
    <StyledButton
      onClick={callback}
      type={type ? type : "button"}
      variant="outlined"
      fontSize={fontSize}
      backgroundcolor={costumBackgroundColor}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default ClearButton;
