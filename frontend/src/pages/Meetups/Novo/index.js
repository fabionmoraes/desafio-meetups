import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ptBR from 'date-fns/locale/pt-BR';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { MdImage } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Grid } from './styles';
import Header from '~/components/Header';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é opção obrigatória'),
  description: Yup.string().required('A descrição é opção obrigatória'),
  location: Yup.string().required('A localização é opção obrigatória'),
});

export default function Novo() {
  const [startDate, setStartDate] = useState('');
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  async function handleSubmit({ title, description, location }) {
    try {
      await api.post('meetups', {
        title,
        description,
        date_meetup: startDate,
        time: startDate,
        file_id: file || '',
        location,
      });

      history.push('/dashboard');
    } catch (err) {
      toast.error('Algo deu errado no cadastro');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Grid>
          <Form schema={schema} onSubmit={handleSubmit}>
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
              locale={ptBR}
              showTimeSelect
              timeFormat="p"
              placeholderText="Data do meetup"
              timeIntervals={15}
              dateFormat="Pp"
            />
            <Input type="text" name="location" placeholder="Localização" />
            <span>
              <button type="submit">Salvar meetup</button>
            </span>
          </Form>
        </Grid>
      </Container>
    </>
  );
}
