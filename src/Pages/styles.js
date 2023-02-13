import styled from 'styled-components';

export const Inner = styled.div`
  height: 650px;
  background-color: #bcb8b1;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .Title {
    font-size: large;
    font-weight: 600;
  }

  #map {
    width: 100%;
    height: 300px;
  }
`;
