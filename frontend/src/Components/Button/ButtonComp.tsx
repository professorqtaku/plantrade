import { StyledButton } from "./StyledButton";

interface Props {
  label: String;
}

const ButtonComp = ({ label }: Props) => {
  return <StyledButton type="submit" variant="contained">{label}</StyledButton>;
};

export default ButtonComp;
