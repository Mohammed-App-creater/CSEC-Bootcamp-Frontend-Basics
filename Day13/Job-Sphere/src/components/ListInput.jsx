import { useField, FieldArray } from "formik";
import PropTypes from 'prop-types';

const ListInput = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);

  const value = field.value || [];      

  return (
    <div className="mb-4">
      <label className="capitalize">{label}:</label>
      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <div>
            {value.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    helpers.setValue([
                      ...value.slice(0, index),
                      e.target.value,
                      ...value.slice(index + 1),
                    ])
                  }
                  className="border border-gray-300 rounded-md w-full p-2"
                />
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => arrayHelpers.push("")}
              className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
            >
              Add {label}
            </button>
          </div>
        )}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

ListInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ListInput;
