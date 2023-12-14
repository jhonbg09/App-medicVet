
/* eslint-disable react/prop-types */
const Pacientes = ({ paciente, setPacienteEd }) => {
  // console.log(paciente)
  //otro uso de use state es que cargue el componente cuando este listo


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Nombre:{" "}
        <span className="font-normal normal-case">
          {paciente.nombreMascota}
        </span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">
          {paciente.nombrePropietario}
        </span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Email: <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold text-gray-700 mb-3 uppercase">
        Sintomas{" "}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPacienteEd(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacientes;
