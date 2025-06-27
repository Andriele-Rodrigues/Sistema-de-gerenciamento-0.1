import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ModalEdicao = ({ item, setEditarItem }) => {
  const [nome, setNome] = useState(item.nome);
  const [cpf, setCpf] = useState(item.cpf);
  const [matricula, setMatricula] = useState(item.matricula);
  const [codigoInterno, setCodigoInterno] = useState(item.codigoInterno);

  const handleClose = () => {
    setEditarItem(null); 
  };

  const handleSave = () => {

    console.log('Dados editados:', { nome, cpf, matricula, codigoInterno });
    setEditarItem(null); 
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Editar {item.tipo === 'operador' ? 'Operador' : 'Máquina'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
        />
        {item.tipo === 'operador' && (
          <>
            <TextField
              label="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              fullWidth
            />
            <TextField
              label="Matrícula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              fullWidth
            />
          </>
        )}
        {item.tipo === 'maquina' && (
          <TextField
            label="Código Interno"
            value={codigoInterno}
            onChange={(e) => setCodigoInterno(e.target.value)}
            fullWidth
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalEdicao;