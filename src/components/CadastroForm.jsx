import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Margin } from '@mui/icons-material';





const  CadastroForm = ({ tipo, adicionarOperador, adicionarMaquina }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [matricula, setMatricula] = useState('');
  const [codigoInterno, setCodigoInterno] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoCadastro = { nome, cpf, matricula, codigoInterno };

    if (tipo === 'operador') {
      adicionarOperador(novoCadastro);
    } else {
      adicionarMaquina({ nome, codigoInterno });
    }

  
    setNome('');
    setCpf('');
    setMatricula('');
    setCodigoInterno('');
    
  };

  return (
    <div>
      <h2>{tipo === 'operador' ? 'Cadastrar Operador' : 'Cadastrar Máquina'}</h2>
      <form onSubmit={handleSubmit}>
        {tipo === 'operador' && (
          <>
            <TextField label="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <TextField label="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
            <TextField label="Matrícula" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />
          </>
        )}
        {tipo === 'maquina' && (
          <>
            <TextField label="Nome da Máquina" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <TextField label="Código Interno" value={codigoInterno} onChange={(e) => setCodigoInterno(e.target.value)} required />
          </>
        )}
        <Button type="submit"><AddIcon>Cadastrar</AddIcon><Button size="Cadastrar">Cadastrar</Button></Button>
      </form>
    </div>
    
  );
};



export default CadastroForm;