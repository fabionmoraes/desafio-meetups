import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 940px;
  margin: 26px auto;
`;

export const Grid = styled.div`
  display: block;

  form {
    display: flex;
    flex-direction: column;
    flex: 1;

    label {
      height: 320px;
      display: block;
      position: relative;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.2);
      margin-bottom: 8px;
      transition: background 0.5s;

      input[type='file'] {
        display: none;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.4);
      }

      div {
        position: absolute;
        width: 100%;
        color: rgba(255, 255, 255, 0.5);
        top: 40%;
        text-align: center;
        left: 0;
        z-index: 9;
      }

      img:hover {
        opacity: 0.5;
      }
    }

    input {
      border: 0;
      height: 52px;
      padding: 0 12px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-bottom: 8px;
      width: 100%;
      color: rgba(255, 255, 255, 0.5);
    }

    textarea {
      border: 0;
      height: 120px;
      padding: 10px 12px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.5);
      font-family: Roboto, sans-serif;
      font-size: 13px;
    }

    span {
      display: flex;
      justify-content: flex-end;

      button {
        border: 0;
        background: #f94d6a;
        height: 44px;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        width: 170px;
        transition: background 1s;

        &:hover {
          background: #f70d36;
        }
      }
    }
  }
`;
