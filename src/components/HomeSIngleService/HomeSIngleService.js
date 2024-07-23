import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, title, descripcion, border_class}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={border_class ? `service-box ${border_class} text-center mb-40` : 'service-box text-center mb-40'}>
               <div className="service-thumb">
                  <img src={`img/services/service${icon}.png`} alt=""/>
               </div>
               <div className="service-content">
                  <h3><Link to="/servicesDetails">{title}</Link></h3>
                  <p>{descripcion}</p>
                  {/* <Link className="service-link" to="/servicesDetails">Conoce Más</Link> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;