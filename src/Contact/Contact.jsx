import React, {useState} from 'react'
import InputComponent from "./InputComponent";

export default function Contact() {

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

            <div className={'section-header py-5 dark-blue-text'}>
            <h2 className={'text-uppercase'}>contact component</h2>
            <div className={'d-flex flex-row justify-content-center align-items-center'}>
                <div className={'line dark-blue-bg'}></div>
                <i className={'fa-solid fa-star'}></i>
                <div className={'line dark-blue-bg'}></div>
            </div>
        </div>
            <div className={'container vh-100'}>
                <div className={'form'}>
                    <InputComponent placeHolder={'Name'} type={'name'} ID={'name'}/>
                    <InputComponent placeHolder={'Age'} type={'number'} ID={'name'}/>
                    <InputComponent placeHolder={'Email'} type={'email'} ID={'name'}/>
                    <InputComponent placeHolder={'Password'} type={'password'} ID={'name'}/>
                    <button className={'btn light-blue-bg text-light'}>Send Message</button>
                </div>
            </div>


        </div>
    )
}
