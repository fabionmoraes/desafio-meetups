import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Grid } from './styles';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit(username, email, password, password_confirmation) {
    dispatch(signUpRequest(username, email, password, password_confirmation));
  }

  return (
    <>
      <Container>
        <Grid>
          <img src={logo} alt="Logo Meetupp" />
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="username" placeholder="Seu Nome" />
            <Input name="email" type="email" placeholder="Seu Email" />
            <Input
              name="password"
              type="password"
              placeholder="Sua Senha secreta"
            />
            <Input
              name="password_confirmation"
              type="password"
              placeholder="Confirme a senha"
            />
            <button type="submit">Criar conta</button>
          </Form>
          <Link to="/">Já tenho login</Link>
        </Grid>
      </Container>
    </>
  );
}
