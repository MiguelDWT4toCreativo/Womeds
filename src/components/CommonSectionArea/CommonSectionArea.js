import React from 'react';

const CommonSectionArea = ({area_header}) => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5">
                     {area_header}
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h5>Acerca de</h5>
                           <h1>Estamos aquí para tu cuidado.</h1>
                        </div>
                        <div className="about-text mb-50">
                           <p>Womeds es una clínica de medicina estética ubicada en la prestigiosa zona de Camino Real de la Plata, 
                              en Pachuca, Hidalgo. Nos especializamos en una amplia gama de tratamientos estéticos como depilación láser, 
                              eliminación de tatuajes y arrugas, tratamientos faciales personalizados, masajes relajantes y descontracturantes, y 
                              procedimientos con ácido hialurónico como perfilado nasal y rellenos. Nuestro equipo de especialistas está comprometido con tu
                              bienestar integral, utilizando tecnología avanzada y productos de alta calidad para brindarte resultados visibles 
                              y duraderos.</p>
                        </div>
                        <div className="our-destination">
                           <div className="single-item mb-30">
                              <div className="mv-icon f-left">
                                 <img src="img/about/destination-icon-1.png" alt=""/>
                              </div>
                              <div className="mv-title fix">
                                 <h3>Nuestra Misión</h3>
                                 <p>Proporcionar a nuestros pacientes una experiencia satisfactoria mediante un enfoque integral 
                                    en su salud y bienestar estético, utilizando tecnología avanzada y productos de alta calidad.</p>
                              </div>
                           </div>
                           <div className="single-item">
                              <div className="mv-icon f-left">
                                 <img src="img/about/destination-icon-2.png" alt=""/>
                              </div>
                              <div className="mv-title fix">
                                 <h3>Nuestra Visión</h3>
                                 <p>Ser la clínica líder en medicina estética en Pachuca, reconocida por nuestra excelencia en servicios
                                    y el compromiso con el bienestar integral de nuestros pacientes.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CommonSectionArea;