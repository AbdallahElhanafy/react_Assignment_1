import React from 'react'
import './StartFrameWork.css'

export default function StartFrameWork() {
    return (

        <div className={'vh-100 light-blue-bg d-flex justify-content-center align-items-center   '}>
            <div className={'container d-flex  flex-column justify-content-center align-items-center text-white'}>
                <img src={'/images/avatar.svg' } className={'w-25 py-5'}/>
                <div className={'section-header'}>
                    <h2 className={'text-uppercase'}>start framework</h2>
                    <div className={'d-flex flex-row justify-content-center align-items-center'}>
                        <div className={'line bg-white'}></div>
                        <i className={'fa-solid fa-star'}></i>
                        <div className={'line bg-white'}></div>
                    </div>
                </div>
                <p className={'py-3'}>
                    Graphic Artist - Web Designer - Illustrator
                </p>
            </div>
        </div>
    )
}
