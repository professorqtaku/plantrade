import { StyledButton } from "./StyledButton";

interface Props {
  label: String;
  callback?: () => any;
  fontsize?: string;
}

const ButtonComp = ({ label, callback, fontsize }: Props) => {

  let fontSize: string = fontsize ? fontsize: "1rem";
  return (
    <StyledButton
      onClick={callback}
      variant="contained"
      fontsize={fontSize}>
      {label}
    </StyledButton>
  );
};

export default ButtonComp;
