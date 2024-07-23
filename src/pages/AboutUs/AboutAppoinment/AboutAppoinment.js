import React from 'react';
import { Link } from 'react-router-dom';

const AboutAppoinment = () => {
   return (
      <>
         <section className="appoinment-section pt-120 pb-120" data-background="img/bg/appointment.jpg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="appoinment-box white">
                        <div className="appoinment-content">
                           <span className="small-text">Nuestro Enfoque</span>
                           <h1>Si eres un paciente en busca de calidad.</h1>
                           <p>En Womeds, nos dedicamos a proporcionar tratamientos estéticos de alta calidad adaptados a tus necesidades. 
                              Nuestro equipo de especialistas utiliza la tecnología más avanzada y productos de primera categoría para 
                              garantizar resultados visibles y duraderos. Nos enfocamos en tu bienestar integral y trabajamos para ofrecerte 
                              una experiencia satisfactoria en cada visita.</p>
                           <ul className="professinals-list pt-30">
                              <li>
                                 <i className="fa fa-check"></i>
                                 Enfocamos nuestros esfuerzos en comprender tus necesidades individuales.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Utilizamos tecnología de punta para todos nuestros tratamientos.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Ofrecemos un ambiente acogedor y profesional.
                              </li>
                              <li>
                                 <i className="fa fa-check"></i>
                                 Estamos comprometidos con la satisfacción y bienestar de nuestros pacientes.
                              </li>
                           </ul>
                        </div>
                        <Link to="https://wa.me/+5217711979737" className="primary_btn mt-40">Haz una cita</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutAppoinment;