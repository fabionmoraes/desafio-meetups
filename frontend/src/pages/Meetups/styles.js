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

  div {
    display: flex;

    a {
      display: flex;
      height: 36px;
      align-items: center;
      background: #4dbaf9;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      transition: background 0.6s;

      &:hover {
        background: #0994e8;
      }
    }

    button {
      border: 0;
      display: flex;
      height: 36px;
      align-items: center;
      background: #d44059;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      transition: background 0.6s;
      margin-left: 8px;

      &:hover {
        background: #af273f;
      }
    }
  }

  h3 {
    font-size: 26px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Grid = styled.div``;

export const Imagem = styled.div`
  display: block;
  overflow: hidden;
  height: 320px;

  img {
    margin-top: 30px;
    width: 100%;
  }
`;

export const Description = styled.div`
  color: #fff;
  font-size: 15px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Footer = styled.ul`
  list-style: none;
  display: flex;

  li + li {
    margin-left: 12px;
  }

  li {
    font-size: 12px;
    color: #ccc;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;
