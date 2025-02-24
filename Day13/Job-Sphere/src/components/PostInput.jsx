import PropTypes from "prop-types";

const PostInput = ({ field }) => {
  return (
    <>
      <label htmlFor={field.name} className="capitalize">
        Job {field.name}:
      </label>
      <input
        className="border-[0.5px] focus:border-2 border-[#0034D1] rounded-md w-full h-10 px-3 outline-none mt-1"
        type="text"
        id={field.name}
        {...field}
      />
    </>
  );
};

PostInput.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default PostInput;
