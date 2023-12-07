
const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y{' '}<span className="text-indigo-600 font-bold">Administralos</span></p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5">
                <div>
                 <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label> {/*el htmlfor es una buena buena practica para ayudr a seleccionar el input... este va relacionado con el id del input  */}
                <input className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md" id="mascota" type="text" placeholder="Nombre de la mascota"/>
                </div>
                
            </form>
        </div>
    );
}

export default Formulario;
