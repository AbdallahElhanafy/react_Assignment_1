import React, {useState} from 'react'

export default function InputComponent({placeHolder, ID, type}) {

    const [isTyping, setIsTyping] = useState(false);

    const handleInputChange = (event) => {
        if (event.target.value === '') {

            setIsTyping(false);
        } else {
            setIsTyping(true);
        }
    }
    return (
        <div>
            {isTyping &&
                <label>{placeHolder}</label>
            }
            <input placeholder={placeHolder} id={ID} onChange={handleInputChange} type={type} className={'form-control my-3'}/>


        </div>
    )
}
