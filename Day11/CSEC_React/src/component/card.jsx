import PropTypes from "prop-types";

export const Cards = ({ header, text }) => {
  return (
    <div className=" w-80 h-96 bg-[#00000031] text-gray-100 flex flex-col items-center rounded-4xl p-4 shadow-[#020101] hover:shadow-[#21202e] hover:scale-115 shadow-2xl border-[0.5px] border-blue-600 transition-transform delay-300">
      <h1 className=" text-4xl border-b w-full text-center p-4">{header}</h1>
      <p className=" text-[17px] text-start   p-4">{text}</p>
    </div>
  );
};

Cards.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Cards;
