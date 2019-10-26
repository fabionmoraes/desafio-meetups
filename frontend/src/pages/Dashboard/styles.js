import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 940px;
  margin: 26px auto;
`;

export const Topo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  h3 {
    font-size: 26px;
    color: #fff;
    font-weight: bold;
  }

  a {
    border: 0;
    display: flex;
    height: 36px;
    align-items: center;
    background: #f94d6a;
    border-radius: 4px;
    padding: 0 15px;
    color: #fff;
    transition: background 0.6s;

    &:hover {
      background: #f82348;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Grid = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 46px;
`;

export const List = styled.li`
  margin-top: 4px;
  margin-bottom: 4px;

  a {
    display: flex;
    flex: 1;
    background: rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    padding: 16px 22px;
    color: #fff;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }

    p {
      font-size: 16px;
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;

      span {
        margin-right: 8px;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;
