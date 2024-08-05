import React from 'react';

const HomeAboutArea = () => {
   return (
      <>
         <section className="about-area pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-5 about_left">
                     <div className="medical-icon-brand-2">
                        <img src="img/about/medical-brand-icon-border1.png" alt=""/>
                     </div>
                     <div className="about-left-side pos-rel mb-30">
                        <div className="about-front-img">
                           <img src="img/about/about.jpg" alt=""/>
                        </div>
                        <div className="about-shape">
                           <img src="img/about/about-shape.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                     <div className="about-right-side pt-55 mb-30">
                        <div className="about-title mb-20">
                           <h4>Acerca de Womeds</h4>
                        </div>
                        <div className="about-text">
                           <p>Womeds es una clínica de medicina estética ubicada en la prestigiosa zona de Camino Real de la Plata, en Pachuca, Hidalgo. 
                              Nos especializamos en una amplia gama de tratamientos estéticos como depilación láser, eliminación de tatuajes y arrugas, 
                              tratamientos faciales personalizados, masajes relajantes y descontracturantes, y procedimientos con ácido hialurónico como perfilado nasal y rellenos.</p>
                           <p>Nuestro equipo de especialistas
                              está comprometido con tu bienestar integral, utilizando tecnología avanzada y productos de alta calidad para brindarte resultados visibles y duraderos.</p><br/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeAboutArea;