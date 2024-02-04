import React from 'react'
import AboutModal from "./AboutModal";

export default function About() {
    return (
        <div className={'text-white light-blue-bg vh-100 d-flex justify-content-center align-items-center' }>
            <div className={'container'}>
                <div className={'section-header'}>
                    <h2 className={'text-uppercase'}>about component</h2>
                    <div className={'d-flex flex-row justify-content-center align-items-center'}>
                        <div className={'line bg-white'}></div>
                        <i className={'fa-solid fa-star'}></i>
                        <div className={'line bg-white'}></div>
                    </div>
                </div>

                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className={'col-md-6'}>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>

            </div>

            </div>
    )
}
