import React from 'react'

const CrudtableRow = ({ el }) => {
    return (
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td><button>Editar</button><button>Eliminar</button></td>
        </tr>
    )
}

export default CrudtableRow