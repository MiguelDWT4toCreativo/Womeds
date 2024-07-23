import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';

const HomeHeroSingleSlide = ({ bg_className}) => {
   const videoPopup = useGlobalContext();
   const {setIsOpen} = videoPopup
   return (
      <>
         <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="hero-text">
                        <div className="hero-slider-caption ">
                           {/* <h1>Bienvenido a Womeds.</h1> */}
                           <br></br>
                           <br></br>
                           <br></br>
                           <br></br>
                           <br></br>
                           <br></br>
                           <p>Descubre la excelencia en medicina estética en Pachuca. Nuestros tratamientos personalizados y tecnología avanzada te brindan resultados visibles y duraderos.</p>
                        </div>
                        <div className="hero-slider-btn">
                           <Link to="https://wa.me/+5217711979737" className="primary_btn btn-icon ml-0">Reserva tu cita ahora</Link><br/>

                           {/* <Link to="/services" className="primary_btn btn-icon ml-0">Conoce nuestros tratamientos</Link> */}

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeHeroSingleSlide;
