import styled from 'styled-components';

export const Header = styled.div`
  height: 90px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  width: 940px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
  }
`;

export const Nav = styled.div`
  height: 90px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 10px;
    color: #fff;
    font-size: 12px;

    a {
      color: rgba(255, 255, 255, 0.4);

      &:hover {
        color: #fff;
      }
    }
  }

  button {
    height: 42px;
    width: 70px;
    background: #d44059;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 1s;

    &:hover {
      background: #bf2b45;
    }
  }
`;
