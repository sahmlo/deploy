// react-basico3\src\components\ListarUsuarios\index.jsx
import React from 'react';
import './styles.css';

function ListarUsuarios({ listaUsuarios }) {
    return (
        <div className="listar-usuarios">
            <h2>Lista de Usuários</h2>
            <ul>
                {listaUsuarios.map((usuario, index) => (
                    <li key={index}>{usuario.nome} - {usuario.email} - {usuario.numero}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarUsuarios;