import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

import { MdDelete, MdDateRange, MdRoom, MdEdit } from 'react-icons/md';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Topo, Grid, Imagem, Description, Footer } from '../styles';
import Header from '~/components/Header';

export default function Views() {
  const [meetup, setMeetup] = useState('');
  const [file, setFile] = useState('');
  const [date, setDate] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);

      const dateFormatted = format(
        parseISO(response.data.time),
        "dd 'de' MMMM', às ' HH:mm'h'",
        { locale: pt }
      );

      setMeetup(response.data);
      setFile(response.data.file.url);
      setDate(dateFormatted);
    }

    loadMeetup();
  }, [id]);

  async function handleDelete(data) {
    await api.delete(`meetups/${data}`);

    history.push('/dashboard');
  }

  return (
    <>
      <Header />
      <Container>
        <Topo>
          <h3>{meetup.title}</h3>
          <div>
            <Link to={`/edit/meetup/${meetup.id}`}>
              <MdEdit size={20} /> Editar
            </Link>
            <button type="button" onClick={() => handleDelete(meetup.id)}>
              <MdDelete size={20} /> Cancelar
            </button>
          </div>
        </Topo>

        <Grid>
          <Imagem>
            <img src={file} alt={meetup.title} />
          </Imagem>
          <Description>{meetup.description}</Description>
          <Footer>
            <li>
              <MdDateRange size={14} />
              {date}
            </li>
            <li>
              <MdRoom size={14} />
              {meetup.location}
            </li>
          </Footer>
        </Grid>
      </Container>
    </>
  );
}
