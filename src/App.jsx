
import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState([])
  const [pacienteEd, setPacienteEd] = useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes 
          paciente={pacientes}
          setPacienteEd={setPacienteEd}
        />
      </div>
    </div>
  );
}

export default App;
