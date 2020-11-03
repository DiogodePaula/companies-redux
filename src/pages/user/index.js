import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState('');

  async function handleStoreUser() {
    await api
      .post('/users', {
        name,
        email,
        age,
        password,
      })
      .then((response) => setUsers([...users, response.data]))
      .catch((error) => console.log(error));
    setName('');
    setEmail('');
    setAge('');
    setPassword('');
  }

  return (
    <Form style={{ width: '600px', margin: 'auto' }}>
      <FormGroup>
        <Label for="nameUser">Nome</Label>
        <Input
          type="text"
          value={name}
          id="nameUser"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="ageUser">Idade</Label>
        <Input
          type="number"
          value={age}
          id="ageUser"
          placeholder="Idade"
          onChange={(e) => setAge(e.target.value)}
        />
      </FormGroup>

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

      <Button onClick={handleStoreUser}>Cadastrar usuário</Button>
      <Link to="/login"> Voltar para página de login</Link>
    </Form>
  );
};
