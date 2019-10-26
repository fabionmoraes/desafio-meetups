import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
  Line,
} from './styles';
import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import Header from '~/components/Header';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const passwordOldRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmeRef = useRef();

  const [username, setUsername] = useState(profile.username);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setPassword_confirmation('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        username,
        email,
        oldPassword,
        password,
        password_confirmation,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <Background>
        <Header />
        <Container>
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu nome"
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
              value={username}
              onChangeText={setUsername}
            />

            <FormInput
              icon="mail-outline"
              keiboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordOldRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <Line />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Sua senha atual"
              ref={passwordOldRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={oldPassword}
              onChangeText={setOldPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Senha nova"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordconfirmeRef.current.focus()}
              value={password}
              onChangeText={setPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Repete a senha"
              ref={passwordconfirmeRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password_confirmation}
              onChangeText={setPassword_confirmation}
            />

            <SubmitButton onPress={handleSubmit}>Atualizar Perfil</SubmitButton>
            <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
          </Form>
        </Container>
      </Background>
    </>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Profile);
