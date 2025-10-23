import React, { Children } from 'react'

const Conatiner = ({className,children}) => {
  return (
    <div className={`max-w-[1240px] m-auto ${className}`}>{children}</div>
  )
}

export default Conatiner