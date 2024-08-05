import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';

const DoctorOneTeamArea = () => {
    return (
        <>
            <section className="team-area pt-115 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="section-title pos-rel mb-75">
                                <div className="section-icon">
                                    <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                                </div>
                                <div className="section-text pos-rel">
                                    <h5>Nuestro Equipo</h5>
                                    <h1>Profesionales Dedicados a tu Cuidado y Bienestar</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="section-button text-end d-none d-lg-block pt-80">
                                <Link to="https://wa.me/+5217711979737" className="primary_btn btn-icon ml-0"><span>+</span>Agenda tu Cita</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <HomeSingleTeam image="1" title="Roberto Martínez García" subtitle="Dr. Medico cirujano." />
                        <HomeSingleTeam image="2" title="Ximena Guadalupe Pérez Cruz" subtitle="Lic. Terapia Física." />
                        <HomeSingleTeam image="3" title="Rocio Arlem Barrera Vazquez" subtitle="Lic. Terapia Física." />
                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorOneTeamArea;