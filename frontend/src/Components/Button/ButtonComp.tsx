import { StyledButton } from "./StyledButton";

interface Props {
  label: String;
  callback?: (data?:any) => any;
  costumFontSize?: string;
  costumBackgroundColor?: string;
  disabled?: boolean;
}

const ButtonComp = ({
  label,
  callback,
  costumFontSize,
  disabled,
  costumBackgroundColor,
}: Props) => {
  let fontSize: string = costumFontSize ? costumFontSize : "1rem";

  return (
    <StyledButton
      onClick={callback}
      variant="contained"
      fontSize={fontSize}
      backgroundcolor={costumBackgroundColor}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default ButtonComp;
