import styled from "styled-components";

export const Img = styled.img`
  /* position: absolute; */
  width: 350px;
  height: 350px;
  margin-left: 5rem;
  position: relative;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 250px;
    height: 250px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    right: 50%;
    transform: translateX(50%);
    margin-bottom: 4rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    transform: translateX(0);
    right: 0;
    margin: 0 auto;
    width: 200px;
    height: 200px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
    height: 150px;
  }
  object-fit: cover;
  /* @media screen and (max-width: 1200px) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  } */
`;

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
