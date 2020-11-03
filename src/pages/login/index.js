import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import * as loginActions from '../../store/login/action';
import api from '../../services/api';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleLogin() {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      if (response.data.token) {
        dispatch(loginActions.login(response.data.token));
      }
    } catch (error) {
      alert('erro ao tentar logar');
    }
  }

  return (
    <Form style={{ width: '600px', margin: 'auto' }}>
      <FormGroup>
        <Label for="emailUser">Email</Label>
        <Input
          type="email"
          value={email}
          id="emailUser"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="passwordUser">Senha</Label>
        <Input
          type="text"
          value={password}
          id="passwordUser"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>

      <Button onClick={() => handleLogin()}>Logar</Button>

      <Link to="/cadastro">Cadastrar Usuário</Link>
    </Form>
  );
};
