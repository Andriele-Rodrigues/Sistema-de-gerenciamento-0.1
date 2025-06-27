import React from 'react';
import EditIcon from '@mui/icons-material/Edit';  
import DeleteIcon from '@mui/icons-material/Delete';  
import { IconButton } from '@mui/material';


const TabelaMaquinas = ({ maquinas, editarItemCadastro, excluirItem }) => {
  return (
    <div>
      <h2>Máquinas Cadastradas</h2>
      <table>
        <thead>
          <tr>
            <th>Nome da Máquina</th>
            <th>Código Interno</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {maquinas.map((maquina) => (
            <tr key={maquina.codigoInterno}>
              <td>{maquina.nome}</td>
              <td>{maquina.codigoInterno}</td>
              <td>
                <button onClick={() => editarItemCadastro(maquina, 'maquina')}><EditIcon>Editar</EditIcon></button>
                <button onClick={() => excluirItem(maquina, 'maquina')} aria-label="delete"><DeleteIcon>delete</DeleteIcon></button>
      
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TabelaMaquinas;