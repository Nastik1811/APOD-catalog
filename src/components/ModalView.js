import React from 'react'

const ModalView = ({onDismiss, children}) => {
    return(
        <div className="window" onClick={onDismiss}>
                    {children}
        </div>
    )
}

export default ModalView