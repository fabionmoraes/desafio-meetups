import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import {
  Container,
  Grid,
  Bloco,
  Imagem,
  Title,
  Linha,
  SubmitButton,
  Body,
  Carrega,
  GridT,
  Nda,
} from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';

function Inscricoes({ isFocused }) {
  const [loading, setLoading] = useState(false);
  const [insc, setInsc] = useState([]);

  useEffect(() => {
    async function loadLista() {
      setLoading(true);
      const response = await api.get(`inscricoes`);

      const passa = response.data.map(meet => ({
        ...meet,
        dateFormatted: format(
          parseISO(meet.meetup.time),
          "dd 'de' MMMM', às ' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      }));

      setLoading(false);
      setInsc(passa);
    }

    if (isFocused) {
      loadLista();
    }

    loadLista();
  }, [isFocused]);

  async function handleSubmit({ id }) {
    await api.delete(`inscricoes/${id}`);

    setInsc(insc.filter(meetup => meetup.id !== id));

    Alert.alert('Inscrição deletado com sucesso.');
  }

  return (
    <Background>
      <Header />
      <Container>
        {loading ? (
          <Carrega>
            <ActivityIndicator size="small" color="#fff" />
          </Carrega>
        ) : (
          <>
            {insc.length === 0 ? (
              <Nda>
                <GridT>Sem nenhuma inscrição</GridT>
              </Nda>
            ) : (
              <Grid
                data={insc}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Bloco>
                    <Imagem source={{ uri: item.file.url }} />
                    <Body>
                      <Title>{item.meetup.title}</Title>
                      <Linha>
                        <Icon name="date-range" size={13} color="#999" />{' '}
                        {item.dateFormatted}
                      </Linha>
                      <Linha>
                        <Icon name="edit-location" size={13} color="#999" />{' '}
                        {item.meetup.location}
                      </Linha>
                      <Linha>
                        <Icon name="person" size={13} color="#999" />{' '}
                        Organizador: {item.organizador.username}
                      </Linha>
                      <SubmitButton onPress={() => handleSubmit(item)}>
                        Cancelar inscrição
                      </SubmitButton>
                    </Body>
                  </Bloco>
                )}
              />
            )}
          </>
        )}
      </Container>
    </Background>
  );
}

Inscricoes.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

Inscricoes.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Inscricoes);
