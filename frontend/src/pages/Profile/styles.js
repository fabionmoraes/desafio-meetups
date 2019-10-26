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

    hr {
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-top: 12px;
      margin-bottom: 18px;
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
