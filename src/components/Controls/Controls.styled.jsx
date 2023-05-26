import styled from '@emotion/styled';

export const Button = styled.button`
  color: hotpink;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: inherit;
  cursor: pointer;
  border-color: transparent;
  border: 2px solid;
  border-radius: 10px;
  transition: transform 150ms ease-in;
    :hover,
    :focus {
  transform: scale(1.1);
}

svg {
  fill: #07c274;
}

`

export const Div = styled.div`
  display: flex;
  justify-content: center;
`