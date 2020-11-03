import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import * as loginActions from '../../store/login/action';

export default () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [watched, setWatched] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');

  const [movies, setMovies] = useState('');

  async function handleStoreMovie() {
    await api
      .post(
        '/movies',
        {
          name,
          watched,
          type,
          duration,
        }
        // {
        //   headers: {"Authorization": "Bearer " + btoa(token)},
        // }
      )
      .then((response) => setMovies([...movies, response.data]))
      .catch((error) => console.log(error));
    setName('');
    setWatched('');
    setType('');
    setDuration('');
  }

  return (
    <div>
      <button type="button" onClick={() => dispatch(loginActions.logout())}>
        Sair da conta
      </button>

      <Form style={{ width: '600px', margin: 'auto' }}>
        <FormGroup>
          <Label>Nome do Filme</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Gênero</Label>
          <Input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Duração</Label>
          <Input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              value={watched}
              onChange={(e) => setWatched(e.target.value)}
            />
            Marque esta opção se você já assistiu!
          </Label>
        </FormGroup>

        <Button onClick={handleStoreMovie}>Cadastrar filme</Button>

        <Link to="/login"> Voltar para página de login</Link>
      </Form>
    </div>
  );
};
