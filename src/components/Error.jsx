/* eslint-disable react/prop-types */
const Error = ({ mensaje }) => {
  return (
    <div className="text-center p-3 transition-all bg-red-800 rounded-md mb-3 uppercase text-white font-bold ">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
