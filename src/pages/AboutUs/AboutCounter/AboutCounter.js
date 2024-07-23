import React from 'react';
import AboutSingleCounter from '../../../components/AboutSingleCounter/AboutSingleCounter';

const AboutCounter = () => {
   return (
      <>
         <section className="counter-wraper pt-120 pb-90 gray-bg">
            <div className="container">
               <div className="row">

                  <AboutSingleCounter icon="1" counter="358" title="Tratamientos Realizados" descripcion="Hemos realizado más de 358 tratamientos exitosos, brindando resultados visibles y duraderos a nuestros pacientes." />
                  <AboutSingleCounter icon="2" counter="358" title="Pacientes Satisfechos" descripcion="Más de 358 pacientes han confiado en nosotros y han experimentado una mejora significativa en su bienestar estético." />
                  <AboutSingleCounter icon="3" counter="238" title="Colaboraciones Locales" descripcion="Contamos con más de 238 socios locales que nos apoyan en la provisión de productos y servicios de alta calidad." />

               </div>
            </div>
         </section>
      </>
   );
};

export default AboutCounter;