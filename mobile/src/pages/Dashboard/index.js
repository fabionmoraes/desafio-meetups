import React, { useState, useMemo, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, subDays, addDays, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import api from '~/services/api';
import {
  Container,
  Calendar,
  Grid,
  Bloco,
  Imagem,
  Title,
  Linha,
  SubmitButton,
  Body,
  ButtonIcon,
  Text,
  Icone,
  Carrega,
  GridT,
  Nda,
} from './styles';
import Background from '~/components/Background';
import Header from '~/components/Header';

function Dashboard({ isFocused, navigation }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(new Date());
  const [meetup, setMeetup] = useState([]);

  const dataFormatted = useMemo(
    () => format(data, "d 'de' MMMM", { locale: pt }),
    [data]
  );

  useEffect(() => {
    async function loadLista() {
      setLoading(true);
      const response = await api.get('listas', {
        params: { date: data },
      });

      const passa = response.data.map(meet => ({
        ...meet,
        dateFormatted: format(
          parseISO(meet.time),
          "dd 'de' MMMM', às ' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      }));

      setLoading(false);
      setMeetup(passa);
    }

    if (isFocused) {
      loadLista();
    }

    loadLista();
  }, [data, isFocused]);

  async function handleSubmit(item) {
    const insc = await api.post('inscricoes', {
      meetup_id: item.id,
      file_id: item.file_id,
      org_id: item.user_id,
    });

    if (insc.data.error) {
      Alert.alert(insc.data.error);
      return;
    }

    Alert.alert('Inscrição realizada');
    navigation.navigate('Inscricoes');
  }

  function handlePrevDay() {
    setData(subDays(data, 1));
  }

  function handleNextDay() {
    setData(addDays(data, 1));
  }

  return (
    <Background>
      <Header />
      <Container>
        <Calendar>
          <ButtonIcon onPress={handlePrevDay}>
            <Icone>
              <Icon name="arrow-back" size={22} color="#fff" />
            </Icone>
          </ButtonIcon>
          <Text>{dataFormatted}</Text>
          <ButtonIcon onPress={handleNextDay}>
            <Icone>
              <Icon name="arrow-forward" size={22} color="#fff" />
            </Icone>
          </ButtonIcon>
        </Calendar>
        {loading ? (
          <Carrega>
            <ActivityIndicator size="small" color="#fff" />
          </Carrega>
        ) : (
          <>
            {meetup.length === 0 ? (
              <Nda>
                <GridT>Sem meetup</GridT>
              </Nda>
            ) : (
              <Grid
                data={meetup}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Bloco>
                    <Imagem source={{ uri: item.file.url }} />
                    <Body>
                      <Title>{item.title}</Title>
                      <Linha>
                        <Icon name="date-range" size={13} color="#999" />{' '}
                        {item.dateFormatted}
                      </Linha>
                      <Linha>
                        <Icon name="edit-location" size={13} color="#999" />{' '}
                        {item.location}
                      </Linha>
                      <Linha>
                        <Icon name="person" size={13} color="#999" />{' '}
                        Organizador: {item.user.username}
                      </Linha>
                      <SubmitButton onPress={() => handleSubmit(item)}>
                        Realizar inscrição
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

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
