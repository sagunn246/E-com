import React from 'react'

const OrangeButton = ({title,disabled,...props}) => {
  return (
    <div>
      <button disabled={disabled} className={`  ${disabled ? "bg-orange-300 hover:bg-orange-300 cursor-not-allowed" : "hover:bg-orange-600"} bg-[#f57125] text-[13px] md:text-[15px] text-white px-2 py-2 md:px-5 md:py-2 rounded-md font-semibold hover:bg-[#e35e16] transition `} {...props}>{title}</button>
    </div>
  )
}

export default OrangeButton
