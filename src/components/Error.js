import React from 'react'
const ErrorMsg = ({message}) => {
    return(
    <div className="error">
        <span >{message}</span>
    </div>)
}

export default ErrorMsg