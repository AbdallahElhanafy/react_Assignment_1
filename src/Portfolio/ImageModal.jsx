import React, { useState } from 'react';

function ImageModal({ src, alt }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <img src={src} alt={alt} className={'w-100'} onClick={toggleModal} />
            {isOpen && (
                <div className="model" onClick={toggleModal}>
                    <div className="model-content">
                        <img src={src} alt={alt} className={'w-100'} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageModal;