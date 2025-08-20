import React from 'react';

const InputDetails =React.forwardRef (({ label, placeholder, error,errorMessage },ref) => {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-base sm:text-lg md:text-xl lg:text-2xl mb-1">
        {label}:
      </label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full border ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:ring-0 min-h-[40px] px-3 py-2 rounded-md text-sm sm:text-base focus:border-white focus:ring-white`}
      />
      {error && 
      <span>
        
        {
          errorMessage ? (
            <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
          ):(
          <div className="text-red-500 text-sm mt-1">Invalid Details</div>
          )
        }
      </span>
      }
    </div>
  );
});


export default InputDetails;
