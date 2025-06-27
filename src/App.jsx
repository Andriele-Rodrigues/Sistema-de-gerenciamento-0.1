import React, { useState } from 'react';
import CadastroForm from './components/CadastroForm';
import TabelaOperadores from './components/TabelaOperadores';
import TabelaMaquinas from './components/TabelaMaquinas';
import ModalEdicao from './components/ModalEdicao';

const App = () => {
  const [operadores, setOperadores] = useState([]);
  const [maquinas, setMaquinas] = useState([]);
  const [tipoCadastro, setTipoCadastro] = useState('operador');
  const [editarItem, setEditarItem] = useState(null); 

 
  const adicionarOperador = (operador) => {
    setOperadores([...operadores, operador]);
  };

  const adicionarMaquina = (maquina) => {
    setMaquinas([...maquinas, maquina]);
  };

  const editarItemCadastro = (item, tipo) => {
    setEditarItem({ ...item, tipo });
  };

 
  const excluirItem = (item, tipo) => {
    if (tipo === 'operador') {
      setOperadores(operadores.filter((operador) => operador !== item));
    } else if (tipo === 'maquina') {
      setMaquinas(maquinas.filter((maquina) => maquina !== item));
    }
  };

  return (
    <div className="pp-containear">
      <h1>Sistema de Gerenciamento</h1>

   
      <div className="buttons-container">
        <button onClick={() => setTipoCadastro('operador')}>Cadastrar Operador</button>
        <button onClick={() => setTipoCadastro('maquina')}>Cadastrar Máquina</button>
      </div>

      <CadastroForm 
        tipo={tipoCadastro}
        adicionarOperador={adicionarOperador}
        adicionarMaquina={adicionarMaquina}
      />

      <TabelaOperadores 
        operadores={operadores} 
        editarItemCadastro={editarItemCadastro}
        excluirItem={excluirItem} 
      />
      <TabelaMaquinas 
        maquinas={maquinas} 
        editarItemCadastro={editarItemCadastro}
        excluirItem={excluirItem} 
      />

      {editarItem && <ModalEdicao item={editarItem} setEditarItem={setEditarItem} />}
    </div>
  );
};

export default App;