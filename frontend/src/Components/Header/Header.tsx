import { StyledWrapper } from "./StyledHeader";

interface Props {
  children: JSX.Element;
}

export const Header = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Header;
