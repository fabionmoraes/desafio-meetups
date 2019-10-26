import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Form, Input } from '@rocketseat/unform';

import { MdImage } from 'react-icons/md';

import { useParams } from 'react-router-dom';
import api from '~/services/api';

import { Container, Grid } from './styles';
import Header from '~/components/Header';

export default function Editar() {
  const [startDate, setStartDate] = useState('');
  const [meetup, setMeetup] = useState('');
  const [dataFormatted, setDataFormatted] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${id}`);

      const datapt = format(
        parseISO(response.data.time),
        "dd 'de' MMMM', às ' HH:mm'h'",
        {
          locale: pt,
        }
      );
      setPreview(response.data.file.url);
      setFile(response.data.file.id);
      setDataFormatted(datapt);
      setMeetup(response.data);
    }

    loadMeetup();
  }, [id]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    setFile(response.data.id);
    setPreview(response.data.url);
  }

  async function handleSubmit({ title, description, location }) {
    try {
      await api.put(`/meetups/${id}`, {
        title,
        description,
        date_meetup: startDate || meetup.date_meetup,
        time: startDate || meetup.time,
        file_id: file,
        location,
      });

      toast.success('Atualizado com sucesso!');
    } catch (err) {
      toast.error('Algo deu errado no cadastro');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Grid>
          <Form initialData={meetup} onSubmit={handleSubmit}>
            <label htmlFor="avatar">
              <img src={preview} alt="" />

              <input
                type="file"
                id="avatar"
                accept="image/*"
                data-file={file}
                onChange={handleChange}
              />

              <div>
                <MdImage size={50} />
                <p>Selecionar</p>
              </div>
            </label>
            <Input type="text" name="title" placeholder="Título do Meetup" />
            <Input
              name="description"
              placeholder="Descrição completa"
              multiline
            />
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              locale={pt}
              showTimeSelect
              timeFormat="p"
              placeholderText={dataFormatted}
              timeIntervals={15}
              dateFormat="Pp"
            />
            <Input type="text" name="location" placeholder="Localização" />
            <span>
              <button type="submit">Atualizar</button>
            </span>
          </Form>
        </Grid>
      </Container>
    </>
  );
}
