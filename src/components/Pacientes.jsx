/* eslint-disable react/prop-types */
const Pacientes = ({ paciente }) => {
    // console.log(paciente)
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold text-gray-700 mb-3 uppercase">
                    Nombre:{' '}
                    <span className="font-normal normal-case">{paciente.nombreMascota}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase">
                    Propietario:{' '}
                    <span className="font-normal normal-case">{paciente.nombrePropietario}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase">
                    Email:{' '}
                    <span className="font-normal normal-case">{paciente.email}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase">
                    Fecha Alta:{' '}
                    <span className="font-normal normal-case">{paciente.fecha}</span>
                </p>
                <p className="font-bold text-gray-700 mb-3 uppercase">
                    Sintomas{' '}
                    <span className="font-normal normal-case">{paciente.sintomas}</span>
                </p>

            </div>
    );
}

export default Pacientes;
