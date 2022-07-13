import React from 'react'
import CrudtableRow from './CrudtableRow'

const CrudTable = ({ data }) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.lengt === 0 ?
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                        :
                        data.map((el) =>
                            <CrudtableRow key={el.id} el={el} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable