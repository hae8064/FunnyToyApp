import styled from 'styled-components';

export const Inner = styled.div`
  height: 750px;
  background-color: #bcb8b1;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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

  .deleciousList {
    position: absolute;
    border: 1px solid #bcb8b1;
    background: #f4f3ee;
    width: 100%;
    bottom: 0px;
    z-index: 1;
    height: 110px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .nothingInfo {
      font-size: 24px;
      font-weight: 600;
      font-family: 'humanbumsuk';
      margin-left: 10px;
      margin-top: 10px;
    }

    .contents {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 10px;
      .title {
        margin: 0;
        margin-top: 10px;
        font-size: 22px;
        font-family: 'humanbumsuk';
      }

      .category {
        font-size: 14px;
        font-family: 'humanbumsuk';
        margin-top: 5px;
        color: brown;
      }

      .address {
        margin: 0;
        font-size: 17px;
        font-family: 'humanbumsuk';
      }
    }

    .infoBtn {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #8a817c;
      font-size: 15px;
      font-weight: 600;
      background-color: #bcb8b1;
    }
  }
`;
