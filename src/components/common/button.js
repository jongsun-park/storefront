import styled, { css } from "styled-components";
import { colors } from "../../styles/theme";

export const StyledButton = styled.button`
  padding: 14px 28px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  border: 2px solid ${colors.primary};
  outline: none;

  background: ${colors.primary};
  color: ${colors.white};

  transition: all ease-out 300ms;

  &:hover {
    background: ${colors.accent};
    border: 2px solid ${colors.gray};
    color: ${colors.gray};
    box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.1);
  }

  cursor: pointer;

  ${({ small }) =>
    small &&
    css`
      padding: 8px 16px;
      font-weight: normal;
      border: none;
      &:hover {
        font-weight: normal;
        border: none;
      }
    `}
`;
