import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Header, Container, Nav } from './styles';
import logo from '~/assets/logo.svg';

export default function HeaderTopo() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Header>
      <Container>
        <Link to="/dashboard">
          <img src={logo} alt="Logo meetupp" />
        </Link>

        <Nav>
          <div>
            {profile.username}
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </Nav>
      </Container>
    </Header>
  );
}
