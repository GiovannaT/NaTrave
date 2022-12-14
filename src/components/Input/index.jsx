export const Input = ({ name, label, ...props }) => (
    <div className="flex flex-col mb-4 ">
      <label className="text-sm font-bold text-gray-500 mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-2 focus:outline-gray-700"
        name={name}
        id={name}
      />
    </div>
  );