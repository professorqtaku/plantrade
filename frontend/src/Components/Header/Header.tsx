import { StyledWrapper } from "./StyledHeader";

interface Props {
  children: JSX.Element | JSX.Element[];
  grid?: boolean;
  gridColumns?: string;
}

export const Header = ({ children, grid, gridColumns }: Props) => {
  return (
    <StyledWrapper grid={grid && grid} gridColumns={gridColumns && gridColumns}>
      {children}
    </StyledWrapper>
  );
};

export default Header;
