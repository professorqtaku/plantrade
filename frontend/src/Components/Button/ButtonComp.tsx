import { StyledButton } from "./StyledButton";

interface Props {
  label: String;
  callback?: () => any;
}

const ButtonComp = ({ label, callback }: Props) => {
  return (
    <StyledButton onClick={callback} variant="contained" type="submit">
      {label}
    </StyledButton>
  );
};

export default ButtonComp;
