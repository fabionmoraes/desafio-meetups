import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

import { MdKeyboardArrowRight, MdControlPoint } from 'react-icons/md';
import api from '~/services/api';

import { Container, Topo, Grid, List } from './styles';
import Header from '~/components/Header';

export default function Dashboard() {
  const [meetups, SetMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`meetups`);

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

      SetMeetups(passa);
    }

    loadMeetups();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Topo>
          <h3>Meus meetups</h3>
          <Link to="/meetup/novo">
            <MdControlPoint size={20} /> Novo meetup
          </Link>
        </Topo>

        <Grid>
          {meetups.map(meetup => (
            <List key={meetup.id}>
              <Link to={`/meetups/${meetup.id}`}>
                <p>{meetup.title}</p>
                <div>
                  <span>{meetup.dateFormatted}</span>
                  <MdKeyboardArrowRight size={20} />
                </div>
              </Link>
            </List>
          ))}
        </Grid>
      </Container>
    </>
  );
}
