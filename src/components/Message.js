import React from 'react';

const Message = ({ isFormValid }) => {
    return (
        <div>
            <h3 className="text-center message">
                {
                    isFormValid
                        ? 'Form is Complete!'
                        : 'Form is Incomplete!'
                }
            </h3>
        </div>
    )
}

export default Message;
