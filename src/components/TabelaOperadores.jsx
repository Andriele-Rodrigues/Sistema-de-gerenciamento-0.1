import React from 'react';
import EditIcon from '@mui/icons-material/Edit';  
import DeleteIcon from '@mui/icons-material/Delete';  
import { IconButton } from '@mui/material';


const TabelaOperadores = ({ operadores, editarItemCadastro, excluirItem }) => {
  return (
    <div>
      <h2>Operadores Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>CPF</th>
            <th>Matrícula</th>
            <th>Ações </th>
          </tr>
        </thead>
        <tbody>
          {operadores.map((operador, index) => (
            <tr key={index}>
              <td>{operador.nome}</td>
              <td>{operador.cpf}</td>
              <td>{operador.matricula}</td>
              <td>
                <button onClick={() => editarItemCadastro(operador, 'operador')}><EditIcon>Editar</EditIcon></button>
                <button onClick={() => excluirItem(operador, 'operador')}><DeleteIcon>delete</DeleteIcon></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaOperadores;