/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Pacientes from "./Pacientes";
const ListadoPacientes = ({ paciente }) => {
    // console.log(paciente)
    return (
        <div className="md:w-1/2 lg:-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 text-center mb-10">Administra tus {' '}<span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
            {paciente.map((paciente )=>(
                <Pacientes 
                key={paciente.id}
                paciente={paciente}

                />
                ))}
        </div>
    );
}

export default ListadoPacientes;
