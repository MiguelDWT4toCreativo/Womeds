import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService.js';

const ServicesOneABout = () => {
   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row ">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                        <div className="section-icon">
                        </div>
                        <div className="section-text section-text-small pos-rel">
                           <h1>Medicina Estética.</h1>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="facalty-text">
                        <img src="img/section/estetica.png" alt="" />
                     </div>
                  </div>
               </div>
               <div className="row">
                  <HomeSIngleService icon="11"  title="TOXINA BOTULÍNICA" border_className="service-box-border" descripcion="Es una sustancia que tiene la capacidad de producir parálisis muscular. Minimiza los surcos y arrugas de expresión." />
                  <HomeSIngleService icon="12" style=".icon{height:200px}"  title="RELLENO CON ÁCIDO HIALURÓNICO" border_className="service-box-border" descripcion="El ácido hialurónico es principalmente para suavizar o rellenar las arrugas, mejorar cicatrices, redefinir el contorno de la cara, aumentar o corregir los labios, rejuvenecimiento de las manos." />
                  <HomeSIngleService icon="13" title="RINOMODELACIÓN" border_className="service-box-border" descripcion="Es un tratamiento que se realiza con ácido hialurónico, con la finalidad de corregir, armonizar y embellecer la forma de la nariz. '<img>'" />
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img25.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>TRATAMIENTOS DESPIGMENTANTES</h3>
                           <p>Reducción y la regularización de la producción de melanina.</p>
                           <li>- Peeling</li>
                           <li>- Tratamiento Español</li>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img22.png" height="250px" class="mb-1" alt="" /> 
                        </div>
                        <div className="service-content">
                           <h3>PLASMA RICO EN PLAQUETAS</h3>
                           <p>Estimula la regeneración celular y renovar los tejidos utilizando para ello la propia sangre del paciente.</p>
                           <li>- Facial</li>
                           <li>- Articular</li>
                        </div>
                     </div>
                  </div>
                  <HomeSIngleService icon="14" title="PEPTONAS" border_className="service-box-border" descripcion="Tratamiento no invasivo que ayuda a aumentar el volumen y tono muscular de los glúteos, dando como resultado un desarrollo, crecimiento y tonificación muscular." />
                  <HomeSIngleService icon="15" title="ELIMINACIÓN DE LUNARES Y VERRUGAS" border_className="service-box-border" descripcion="Eliminación de lunares y verrugas con electrocauterio, es un equipo eléctrico que emite calor localizado en la verruga que se desea remover, quitandola de manera inmediata." />
                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img21.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>LIPOLÍTICO</h3>
                           <p>Técnica que consiste en inyecciones con sustancias que disuelven la grasa. Se trata de una mezcla de productos no invasivos.</p>
                           <h5>Beneficios:</h5>
                           <li>- Eliminar celulitis</li>
                           <li>- Reafirmar la piel</li>
                           <li>- Disminuye la grasa y así el sobrepeso</li>
                           <li>- Moldea un aparte especifica del cuerpo</li>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img20.png" height="250px" class="mb-1" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>REJUVENECIMIENTO CON HILOS TENSORES</h3>
                           <p>Tratamiento estético poco invasivo, rápido, seguro y eficaz.</p>
                           <h5>Beneficios:</h5>
                           <li>- Eleva mejillas y cejas</li>
                           <li>- Mejora la línea de marioneta y surco nasogeniano</li>
                           <li>- Disminuye la grasa y así el sobrepeso</li>
                           <li>- Rejuvenece el óvalo facial y el cuello.</li>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6">
                     <div className='service-box text-center mb-40'>
                        <div className="service-thumb">
                           <img src="img/services/images/img18.png" height="180px" alt="" />
                        </div>
                        <div className="service-content">
                           <h3>TRATAMIENTO CAPILAR</h3>
                           <p>Es un tratamiento coreano e innovador en el campo de la medicina estética, mediante micro inyecciones que estimulan la microcirculación en el cuero cabelludo y revitalizan los folículos capilares degenerados.</p>
                           <h5> - Dirigido a pacientes con alopecia, excesiva caída de cabello, pacientes con cabello muy fino y debilitado.</h5>
                           <h5>Beneficios:</h5>
                           <li>- Detiene la caída del cabello</li>
                           <li>- Estimula la circulación sanguínea en el cuero cabelludo</li>
                           <li>- Revitalización de los folículos pilosos</li>
                        </div>
                     </div>
                  </div>
                  
               </div>
            </div>
         </section>
      </>
   );
};

export default ServicesOneABout;