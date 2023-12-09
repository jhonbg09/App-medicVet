import { useState, useEffect } from "react";

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setnombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  //Estoy usando este handle para capturar la informacion del input
  const handleNombreMascota = (e) => setNombreMascota(e.target.value);
  console.log(nombreMascota);

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
  console.log(sintomas);

  //Este handle hace la validacion del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // para validar todos los espacios del formulario voy colocar el value de cada uno en un arreglo

    if (
      [nombreMascota, nombrePropietario, email, fecha, sintomas].includes("")
    ) {
      console.log("Hay campos vacio");
      setError(true);
      return;
    } 
    setError(false);
    console.log("Enviando formulario");
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
          {error && (
            <div className="text-center p-3 transition-all bg-red-800 rounded-md mb-3 uppercase text-white font-bold ">
              <p>todos los campos son obligatorios</p>
            </div>
          )}
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>{" "}
          {/*el htmlfor es una buena buena practica para ayudr a seleccionar el input... este va relacionado con el id del input  */}
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
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
