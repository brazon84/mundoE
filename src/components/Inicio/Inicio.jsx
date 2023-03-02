import React from 'react'
import imagen1 from '../../assets/images/img.jpeg'
import imagen2 from '../../assets/images/img1.jpeg'
import imagen3 from '../../assets/images/img2.jpeg'
import './inicio.scss'

const Inicio = () => {
    return (
        <div className='inicio-content' id='inicio'>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100" alt="img1" />
                        <div className="carousel-caption">
                            <h1>Te llevamos a donde lleguen tus pensamientos</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima, repellat debitis at autem eum!</p>
                            <button type='button'>¡Conocé más!</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100" alt="img2" />
                        <div className="carousel-caption">
                            <h1>Disfruta de cada momento</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam similique laborum ab inventore magnam id.</p>
                            <button type='button'>¡Visitanos!</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={imagen3} className="d-block w-100" alt="img3" />
                        <div className="carousel-caption">
                            <h1>Vive la aventura</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ut et porro maxime necessitatibus ratione laboriosam quaerat, doloribus eos quis!</p>
                            <button type='button'>Descubrí más</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Inicio