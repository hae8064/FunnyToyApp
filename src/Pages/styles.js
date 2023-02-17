import styled from 'styled-components';

export const Inner = styled.div`
  height: 650px;
  background-color: #bcb8b1;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  .topComponent {
    display: flex;
    flex-direction: column;
    position: relative;

    .Title {
      font-size: 22px;
      font-weight: 600;
    }

    .currentLocation {
      font-weight: 600;
      font-size: medium;
    }

    .searchIcon {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 50%;
      transform: translate(-10%, -50%);
      right: 10px;
    }
  }
`;
