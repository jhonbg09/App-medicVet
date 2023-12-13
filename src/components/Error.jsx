/* eslint-disable react/prop-types */
const Error = ({ children }) => {//para poder pasar props lo podemos hacer con la palabra reservada Children
  return (
    <div className="text-center p-3 transition-all bg-red-800 rounded-md mb-3 uppercase text-white font-bold ">
      {children}
    </div>
  );
};

export default Error;
