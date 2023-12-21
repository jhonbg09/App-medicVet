
  import { useState, useEffect } from "react";
  import Header from "./components/Header";
  import Formulario from "./components/Formulario";
  import ListadoPacientes from "./components/ListadoPacientes";

  function App() {

    const [pacientes, setPacientes] = useState([])
    const [pacienteEd, setPacienteEd] = useState({})
    //vamos a utilizar uuseEffect para hacer e localStorage  NOTA: en el localStorage solo se se puede guardar strings, no se pueden guardar objetos ni arreglos
    // simepre hay que convertirlo a un string

    useEffect(()=>{
      const obtenerLS = () =>{
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes'))??[];
        setPacientes(pacientesLS)
      }
      obtenerLS()
    },[])

    useEffect(()=>{
      localStorage.setItem('pacientes', JSON.stringify(pacientes)) //convierte el arreglo en un string
    },[pacientes]);

    //esta funcion me va a eliminar un paciente 
    const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacientesActualizados)
    }

    return (
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            pacienteEd={pacienteEd}
            setPacienteEd={setPacienteEd}
          />
          <ListadoPacientes 
            paciente={pacientes}
            setPacienteEd={setPacienteEd}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    );
  }

  export default App;
