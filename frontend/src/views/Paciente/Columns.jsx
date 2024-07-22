const Columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "Apellidos y Nombres",
      selector: row => row.apellido_nombre,
      sortable: true
    },
    {
      name: "Fecha de nacimiento",
      selector: row => row.fecha_nacimiento,
      sortable: true
    },
    {
      name: "Telefono",
      selector: row => row.telefono
    },
    {
      name: "Convenio",
      selector: row => row.convenio
    },
    {
      name: "Expediente",
      selector: row => row.expediente
    },
  ]
  
  export default Columns;