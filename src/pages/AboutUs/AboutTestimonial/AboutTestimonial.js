import React from 'react';

const AboutTestimonial = () => {
   return (
      <>
         <div className="testimonials-area pt-115 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                     <div className="section-title text-center pos-rel mb-40">
                        <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div>
                        <div className="section-text pos-rel">
                           <h5>Opiniones</h5>
                           <h1>Nuestros Clientes Opinan Acerca de Nosotros</h1>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="single-testi">
                  <div className="row">
                     <div className="col-xl-10 offset-xl-1 col-lg-12 col-md-12">
                        <div className="testi-box text-center pos-rel">
                           <div className="testi-content pos-rel">
                              <div className="testi-bg-icon">
                                 <img src="img/testimonials/testi-box-bg.png" alt=""/>
                              </div>
                              <div className="testi-quato-icon">
                                 <img src="img/testimonials/testi-quato-icon.png" alt=""/>
                              </div>
                              <div className="text-text-boxx">
                                 <p>El equipo de Womeds ha transformado mi vida. Los resultados de mis tratamientos han superado mis expectativas. La atención y profesionalismo que ofrecen es inigualable.</p>
                              </div>
                              {/* <span></span> */}
                           </div>
                           {/* <div className="testi-author">
                              <h2 className="testi-author-title">Rosalina D. Williamson</h2>
                              <span className="testi-author-desination">Fundadora</span>
                           </div>
                           <div className="test-author-icon">
                              <img src="img/testimonials/testi-author-icon.png" alt=""/>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutTestimonial;