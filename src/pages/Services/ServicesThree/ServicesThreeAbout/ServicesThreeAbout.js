import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const ServicesThreeAbout = () => {
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
                           <h1>Tratamientos Corporales.</h1>
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

                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img8.png" height="250px" class="mb-1+" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>MASAJES</h3>
                           <li>- Relajantes</li>
                           <li>- Descontracturantes</li>
                           <li>- Drenaje linfático</li>
                           <li>- Craneofaciales</li>
                        </div>
                     </div>
                  </div>

                  <HomeSIngleService icon="19" title="PRESOTERAPIA" border_className="service-box-border" descripcion="Técnica médica indicada para lograr un drenaje linfático en personas que presentan problemas médicos y estéticos, como alteraciones en el sistema circulatorio, piernas cansadas, edemas, celulitis y acumulaciones de grasa." />

                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img6.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>RADIOFRECUENCIA CORPORAL</h3>
                           <p>Elimina la flacidez de la piel.</p>
                           <h5>Después de una cirugía: </h5>
                           <li>- Consigue reactivar la circulación, mejora el drenaje linfático y estimula la creación de nuevo colágeno</li>
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                         <img src="img/services/images/img5.png" height="250px"  class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>ACCENT CORPORAL</h3>
                           <p>Con tecnología Accent es posible tratar la flacidez de distintas partes del cuerpo, producto de la edad, embarazos y la pérdida o ganancia repentina de peso.</p>
                           <h5>Pueden tratarse:</h5>
                           <li>- Abdomen</li>
                           <li>- Brazos</li>
                           <li>- Cintura</li>
                           <li>- Glúteos </li>
                           <li>- Piernas </li>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img4.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>ULTRASONIDO</h3>
                           <p>Ondas emitidas en distintas frecuencias que generan efectos terapéuticos en los tejidos alterados o dañados.</p>
                           <li>- Analgésico</li>
                           <li>- Cicatrizante</li>
                           <li>- Minimiza la fibrosis</li>
                           <li>- Mejora la circulación</li>
                           <li>- Estimula el drenaje linfático</li>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img3.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>CAVITACIÓN </h3>
                           <p>Tratamiento estético sin cirugía cuyo propósito es la eliminación de acumulaciones de grasa localizada, favoreciendo la reducción de volumen corporal a través de la utilización de ultrasonidos de baja frecuencia.</p>
                        </div>
                     </div>
                  </div>

                  <HomeSIngleService icon="20" title="RETIRO DE TATUAJE LASER ND YAG" border_className="service-box-border" descripcion="Dirige al tatuaje pulsos de energía, fragmentando las moléculas de tinta en partículas más pequeñas haciendo desaparecer el tatuaje." />
                  <HomeSIngleService icon="21" title="DEPILACIÓN LÁSER DIODO" border_className="service-box-border" descripcion="Sistema de depilación definitiva. Para eliminar el vello desde la raíz, se aplica un haz de luz que penetra en la piel sin dañarla, destruyendo el folículo para que el pelo no vuelva a aparecer." />
                  
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesThreeAbout;