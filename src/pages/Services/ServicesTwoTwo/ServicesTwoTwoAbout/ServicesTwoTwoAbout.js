import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const ServicesTwoTwoAbout = () => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row ">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                        <div className="section-icon">
                        </div>
                        <div className="section-text section-text-small pos-rel">
                           <h1>Tratamientos Faciales.</h1>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="facalty-text">
                        <img src="img/section/.png" alt="" />
                     </div>
                  </div>
               </div>
               <div className="row">
                  <HomeSIngleService icon="16" title="LIMPIEZA FACIAL PROFUNDA" border_className="service-box-border" descripcion="Procedimiento no invasivo,destinado a mejorar el aspecto de la piel, corregir la dilatación de los poros, eliminar las células más superficiales y extraer los “puntos negros” o comedones y los micro quistes que se van acumulando con el tiempo." />
                  <HomeSIngleService icon="17" title="HYDRAFACIAL" border_className="service-box-border" descripcion="Tratamiento calmante, refrescante, no irritante y de efecto inmediato. Remueve las células muertas y el exceso de sebo en tu piel." />
                  <HomeSIngleService icon="18" title="MICRODERMOABRASIÒN" border_className="service-box-border" descripcion="Tratamiento no invasivo, indoloro, el cual se realiza con una punta diamante ideal para mantener la piel joven, suave y limpia. Se obtiene resultados similares a los del peeling superficial ayudando al rejuvenecimiento de la piel eliminando las células muertas." />
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img14.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>RADIOFRECUENCIA FACIAL</h3>
                           <p>Estimula la producción de colágeno para una mayor elasticidad y firmeza de la piel.</p>
                           <li>- Disminuye las arrugas</li>
                           <li>- Activa la circulación y devuelve la luminosidad a la piel</li>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img10.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>ACCENT FACIAL</h3>
                           <p>Tratamiento de rejuvenecimiento que tiene como efecto un lifting sin cirugía.</p>
                           <li>- Ayuda a mejorar las líneas de expresión y arrugas</li>
                           <li>- Desvanece cicatrices</li>
                           <li>- Tensa la piel</li>
                           <li>- Drenaje linfático</li>
                           <li>- Estimula la producción de colágeno y elastina</li>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img12.png"  height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>E-LIGHT</h3>
                           <p>Sistema basado en una combinación de dos tipos diferentes de energía: la energía de luz y radiofrecuencia para obtener óptimos resultados.</p>
                           <h5>Tratamiento ideal para:</h5>
                           <li>- Acné</li>
                           <li>- Vascular/Rosácea</li>
                           <li>- Despigmentante</li>
                           <li>- Fotoenvejecimiento</li>
                           <li>- Depilación</li>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img11.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>HOLLYWOOD PEEL</h3>
                           <p>Procedimiento no invasivo que ayuda al rejuvenecimiento de la piel.</p>
                           <li>- Unifica el tono de la piel</li>
                           <li>- Reduce o elimina la pigmentación de la piel</li>
                           <li>- Reducción de la apariencia de líneas finas y cicatrices de acné</li>
                           <li>- Disminuye el tamaño de los poros</li>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesTwoTwoAbout;