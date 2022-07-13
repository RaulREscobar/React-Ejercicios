import React, { useState, useEffect } from 'react'

const initialForm = {
  name: "",
  constellation: "",
  id: null,
}

const CrudForm = () => {
  const [form, setForm] = useState(initialForm)

  const handleChange = () => { };

  const handleSubmit = () => { };

  const handleReset = () => { };

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          value={form.name}
        />

        <input type="text"
          name='contellation'
          placeholder='Constelación'
          onChange={handleChange}
          value={form.constellation}
        />

        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onChange={handleReset} />
      </form>
    </div>
  )
}
export default CrudForm