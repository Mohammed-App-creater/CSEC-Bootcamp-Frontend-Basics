import PropTypes from "prop-types";

const PostInput = ({ field, options }) => {
  return (
    <>
      <label htmlFor={field.name} className="capitalize">
        Job {field.name}:
      </label>
      <select
        id={field.name}
        {...field}
        className="border-[0.5px] focus:border-2 border-[#0034D1] rounded-md w-full h-10 px-3 outline-none mt-1"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

PostInput.propTypes = {
  field: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure options is an array of strings
};

export default PostInput;
