import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Grid } from './styles';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <Grid>
          <img src={logo} alt="Logo Meetupp" />
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Seu Email" />
            <Input name="password" type="password" placeholder="Sua Senha" />

            <button type="submit">
              {loading ? 'Carregando...' : 'Acessar'}
            </button>
          </Form>
          <Link to="/register">Criar conta grátis</Link>
        </Grid>
      </Container>
    </>
  );
}
