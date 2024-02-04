import './Portfolio.css'
import ImageModal from "./ImageModal";

export default function Portfolio() {


    return (
        <div className={'vh-100 '}>
            <div className={'container '}>
                <div className={'section-header py-5 dark-blue-text'}>
                    <h2 className={'text-uppercase'}>portfolio component</h2>
                    <div className={'d-flex flex-row justify-content-center align-items-center'}>
                        <div className={'line dark-blue-bg'}></div>
                        <i className={'fa-solid fa-star'}></i>
                        <div className={'line dark-blue-bg'}></div>
                    </div>
                </div>
                <div className={'row g-5'}>
                    <div className={'col-md-6 col-lg-4'} >
                        <ImageModal alt={'faf'} src={'/images/1.png'} className={'w-100'}/>
                    </div>
                    <div className={'col-md-6 col-lg-4'} >
                        <ImageModal alt={'faf'} src={'/images/2.png'} className={'w-100'}/>
                    </div>
                    <div className={'col-md-6 col-lg-4'} >
                        <ImageModal alt={'faf'} src={'/images/3.png'} className={'w-100'}/>
                    </div>
                    <div className={'col-md-6 col-lg-4'} >
                        <ImageModal alt={'faf'} src={'/images/1.png'} className={'w-100'}/>
                    </div>
                    <div className={'col-md-6 col-lg-4'} >
                        <ImageModal alt={'faf'} src={'/images/2.png'} className={'w-100'}/>
                    </div>
                    <div className={'col-md-6 col-lg-4'} >
                        <ImageModal alt={'faf'} src={'/images/3.png'} className={'w-100'}/>
                    </div>

                </div>
            </div>
        </div>

    )
}