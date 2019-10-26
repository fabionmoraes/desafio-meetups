import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { Container, Grid } from './styles';
import Header from '~/components/Header';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <>
      <Header />
      <Container>
        <Grid>
          <Form initialData={profile} onSubmit={handleSubmit}>
            <Input type="text" name="username" />
            <Input type="text" name="email" />
            <hr />
            <Input type="text" name="oldPassword" placeholder="Senha atual" />
            <Input type="text" name="password" placeholder="Nova senha" />
            <Input
              type="text"
              name="password_confirmed"
              placeholder="Confirmação de senha"
            />
            <span>
              <button type="submit">Atualizar</button>
            </span>
          </Form>
        </Grid>
      </Container>
    </>
  );
}
