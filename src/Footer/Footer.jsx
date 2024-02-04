import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
        <div className={'footer-class'}>
        <div className={'container py-5'}>
            <div className={'row text-center'}>
                <div className={'col-md-4'}>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className={'col-md-4'}>
                    <h3>AROUND THE WEB</h3>
                    <div className={'social-row justify-content-center  d-flex flex-row gap-3'}>
                        <div className={'social-icon '}>
                            <i className={' fa-brands  fa-facebook'}></i>
                        </div>
                        <div className={'social-icon'}>
                            <i className={'fa-brands fa-twitter'}></i>
                        </div>
                        <div className={'social-icon'}>
                            <i className={'fa-brands fa-linkedin'}></i>
                        </div>
                        <div className={'social-icon'}>
                            <i className={'fa-solid fa-globe'}></i>
                        </div>

                    </div>
                </div>
                <div className={'col-md-4'}>
                        <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                </div>
            </div>

        </div>
        </div>
            <div className={'copy-right py-3'}>
                Copyright © Your Website 2021
            </div>
        </div>
    )
}
