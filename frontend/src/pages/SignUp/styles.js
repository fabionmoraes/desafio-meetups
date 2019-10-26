import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
    margin-bottom: 36px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 320px;

    input {
      border: 0;
      height: 52px;
      padding: 0 12px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      margin-bottom: 8px;
      color: rgba(255, 255, 255, 0.5);
    }

    button {
      border: 0;
      background: #f94d6a;
      height: 52px;
      border-radius: 4px;
      color: #fff;
      font-size: 14px;
      transition: background 1s;

      &:hover {
        background: #f70d36;
      }
    }
  }

  a {
    margin-top: 6px;
    color: rgba(255, 255, 255, 0.5);

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
