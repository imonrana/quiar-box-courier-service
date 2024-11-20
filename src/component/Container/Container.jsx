import React from 'react'

const Container = ( {className, children}) => {
  return (
    <div className={`${className} max-w-container mx-auto`} >
        {children}

    </div>
  )
}

export default Container