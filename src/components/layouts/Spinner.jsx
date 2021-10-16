import React from 'react'

const Spinner = ({size}) => {
    return (
        <>
        {
            size ? (
                    <div className={`spinner-border ${size}`} role="status"></div>
            ) : (
                <div className="screen-loader">
                    <div className={"spinner-border"} role="status"></div>
                </div>
            )
        }
        </>
    )
}

export default Spinner
