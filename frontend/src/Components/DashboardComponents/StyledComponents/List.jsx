import styled from "styled-components";

export const List = styled.div`
  display: grid;
  padding: 2%;
  width: 95%;
  grid-template-columns: 30% 17% 13% 15% 25%;
  margin: 0;

  justify-content: space-evenly;
  box-sizing: border-box;

  .left-align {
    text-align: left;
  }

  .center-align {
    text-align: center;
  }
`;
