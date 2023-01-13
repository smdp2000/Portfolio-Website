import styled from 'styled-components';
export const Img = styled.img`
width: 400px;
height: 400px;
  border-radius: 20px;
  justify-content: left;
  align-items: left;
  `
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
