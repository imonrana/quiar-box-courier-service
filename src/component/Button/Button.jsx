import React from 'react'

const Button = ( {className, children} ) => {
  return (
    <button className={`py-[12px] px-[20px] bg-[#F95C19] ${className} `}>
        {children}
    </button>
  )
}

export default Button