/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Error from "../components/Error";

const Formulario = ({ pacientes, setPacientes, pacienteEd, setPacienteEd }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setnombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [errors, setErrors] = useState(false);
  //La finalidad de useEffect es escuchar los cambios que esten sucediendo en el state

  useEffect(() => {
    if (Object.keys(pacienteEd).length > 0) {
      //Con Object.keys(pacienteEd).length comprobamos si hay algo en el arreglo
      setNombreMascota(pacienteEd.nombreMascota);
      setnombrePropietario(pacienteEd.nombrePropietario);
      setEmail(pacienteEd.email);
      setFecha(pacienteEd.fecha);
      setSintomas(pacienteEd.sintomas);
    } else {
      console.log("No hay nada");
    }
  }, [pacienteEd]); //Solo va a cambiar cuando pacientes alla cambiado...

  //Estoy usando este handle para capturar la informacion del input
  const handleNombreMascota = (e) => setNombreMascota(e.target.value);
  // console.log(nombreMascota);

  const handleNombrePropietario = (e) => setnombrePropietario(e.target.value);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFecha = (e) => {
    setFecha(e.target.value);
  };

  const handleSintomas = (e) => {
    setSintomas(e.target.value);
  };
  // console.log(sintomas);

  //Con esta funcion voy a crear el key para eliminar el error de la consola
  const generarId = () => {
    const random = Math.random().toString(36);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  //Este handle hace la validacion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // para validar todos los espacios del formulario voy colocar el value en el arreglo

    if (
      [nombreMascota, nombrePropietario, email, fecha, sintomas].includes("")
    ) {
      // console.log("Hay campos vacio");
      setErrors(true);
      return;
    }
    setErrors(false);
    // console.log("Enviando formulario");
    // Construimos un objeto para pasarlo al use state que esta en el archivo app " const [pacientes, setPacientes] = useState([])"

    const objetoPaciente = {
      nombreMascota,
      nombrePropietario,
      email,
      fecha,
      sintomas,
      
    };

    if (pacienteEd.id) {
      //Editando el registro
      objetoPaciente.id = pacienteEd.id;
      const pacientesAtualizados = pacientes.map(pacienteState => pacienteState.id === pacienteEd.id ? objetoPaciente :  pacienteState)
      setPacientes(pacientesAtualizados)
      setPacienteEd({})
    } else {
      //Nuevo Registro
      // console.log(objetoPaciente); aca deben pasar todos los pacientes
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Con esto reinicio el formulario

    setNombreMascota("");
    setnombrePropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        <div>
          {errors && (
            <Error>
              {/*  de esta manera puedo pasar props tambien, se utiliza cuando vamos a enviar bastante HTML */}
              <p>todos los campos son obligatorios</p>
            </Error>
          )}
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>{" "}
          {/*el htmlfor es una buena buena practica para ayudar a seleccionar el input... este va relacionado con el id del input  */}
          <input
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombreMascota}
            onChange={handleNombreMascota}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>{" "}
          {/*el htmlfor es una buena buena practica para ayudr a seleccionar el input... este va relacionado con el id del input  */}
          <input
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            id="propietario"
            type="text"
            placeholder="Nombre Propietario"
            value={nombrePropietario}
            onChange={handleNombrePropietario}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>{" "}
          {/*el htmlfor es una buena buena practica para ayudr a seleccionar el input... este va relacionado con el id del input  */}
          <input
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            id="email"
            type="text"
            placeholder="correo@correo.com"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>{" "}
          {/*el htmlfor es una buena buena practica para ayudr a seleccionar el input... este va relacionado con el id del input  */}
          <input
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            id="alta"
            type="date"
            value={fecha}
            onChange={handleFecha}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>{" "}
          {/*el htmlfor es una buena buena practica para ayudr a seleccionar el input... este va relacionado con el id del input  */}
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={handleSintomas}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={pacienteEd.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
