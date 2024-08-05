import React from 'react';
import { Link } from 'react-router-dom';

const HomeFact = () => {
   return (
      <>
         <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h2 className="black-color">Estamos disponibles 24/7 para atender tus necesidades de medicina estética.</h2>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-lg-6 col-md-8">
                     <div className="cta-satisfied">
                        <div className="single-satisfied mb-50">
                           {/* <h1>1M+</h1> */}
                           <h5> <i className="fas fa-user"></i> Pacientes Satisfechos</h5>
                           {/* <p>pacientes han confiado en nosotros para sus tratamientos estéticos, obteniendo resultados excepcionales y una experiencia de calidad.</p> */}
                        </div>
                        <div className="single-satisfied mb-50">
                           {/* <h1>100+</h1> */}
                           <h5><i className="far fa-thumbs-up"></i> Premios y Reconocimientos</h5>
                           {/* <p>Hemos sido galardonados con más de 100 premios a nivel mundial, destacando nuestra excelencia y compromiso en el campo de la medicina estética.</p> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFact;