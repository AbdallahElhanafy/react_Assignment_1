import React, {useState} from 'react'
import './About.css'
export default function AboutModal({src}) {

    const [isOpen,setIsOpen] = useState(false)

   let toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <img src={src} className={'w-100'} onClick={toggleModal}/>
            {isOpen?
            <div className={'about-modal'} onClick={toggleModal}>
                <div className={'about-modal-content'} >
                    <img src={src} className={'w-100'}/>
                </div>

            </div>
            :
                ''
            }
        </div>


    )
}
