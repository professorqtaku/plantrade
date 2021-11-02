import { StyledButton } from "./StyledButton";

interface Props {
  label: String;
  callback?: () => any;
  costumFontSize?: string;
  disabled?: boolean;
}

const ButtonComp = ({ label, callback, costumFontSize, disabled }: Props) => {
  let fontSize: string = costumFontSize ? costumFontSize : "1rem";
  
  return (
    <StyledButton
      onClick={callback}
      variant="contained"
      fontSize={fontSize}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

export default ButtonComp;
