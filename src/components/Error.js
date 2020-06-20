import React from 'react'
const ErrorMsg = ({message}) => {
    return(
    <div className="card">
        <span >{message}</span>
        <span className="error"></span>
    </div>)
}

export default ErrorMsg