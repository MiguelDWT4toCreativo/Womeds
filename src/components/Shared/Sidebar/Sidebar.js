import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Home = <NavLink to="/home">Inicio</NavLink>
   const Doctors = <NavLink to="/doctors">Especialistas </NavLink>
   const ME = <NavLink to="/services">Medicina Estética </NavLink>
   const TF = <NavLink to="/servicesTwoTwo">Tratamientos Faciales </NavLink>
   const TC = <NavLink to="/servicesThree">Tratamientos Corporales </NavLink>
   const Pages = <a href="#">Más</a>
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close">
                     {/* <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/">Home style 1</NavLink></li>
                        <li><NavLink to="/homeTwo">Home style 2</NavLink></li>
                        <li><NavLink to="/homeThree">Home style 3</NavLink></li>
                        <li><NavLink to="/homeFour">Home style 4</NavLink></li>
                        <li><NavLink to="/homeFive">Home style 5</NavLink></li>
                     </ul> */}
                  </Collapsible>

                  {/* <Collapsible trigger={Department} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/services">Services 01</NavLink></li>
                        <li><NavLink to="/servicesTwo">Services 02</NavLink></li>
                        <li><NavLink to="/servicesDetails">Services Details</NavLink></li>
                     </ul>
                  </Collapsible> */}

                  <Collapsible trigger={Doctors} triggerTagName="div"
                     triggerOpenedClassName="icon_close">
                     {/* <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/doctors">Doctors 01</NavLink></li>
                        <li><NavLink to="/doctorsTwo">Doctors 02</NavLink></li>
                        <li><NavLink to="/doctorDetails">Doctors Details</NavLink></li>
                     </ul> */}
                  </Collapsible>

                  <Collapsible trigger={ME} triggerTagName="div"
                     triggerOpenedClassName="icon_close">
                  </Collapsible>
                  <Collapsible trigger={TF} triggerTagName="div"
                     triggerOpenedClassName="icon_close">
                  </Collapsible>
                  <Collapsible trigger={TC} triggerTagName="div"
                     triggerOpenedClassName="icon_close">
                  </Collapsible>

                  {/* <Collapsible trigger={Shop} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/shop">Shop Page</NavLink></li>
                        <li><NavLink to="/shopDetails">Shop Details</NavLink></li>
                        <li><NavLink to="/shoppingCart">Shopping Cart</NavLink></li>
                        <li><NavLink to="/checkout">Checkout</NavLink></li>
                        <li><NavLink to="/wishList">Wishlist</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                     </ul>
                  </Collapsible> */}

                  {/* <Collapsible trigger={News} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/blogs">Blog Right Sidebar</NavLink></li>
                        <li><NavLink to="/blogLeftSideBar">Blog Left Sidebar</NavLink></li>
                        <li><NavLink to="/blogNoSideBar">Blog No Sidebar</NavLink></li>
                        <li><NavLink to="/blogTwoColumn">Blog 2 Column</NavLink></li>
                        <li><NavLink to="/blogTwoMasonry">Blog 2 Col Masonry</NavLink></li>
                        <li><NavLink to="/blogThreeColumn">Blog 3 Column</NavLink></li>
                        <li><NavLink to="/blogThreeColMasonry">Blog 3 Col Masonry</NavLink></li>
                        <li><NavLink to="/blogDetails">Blog Details</NavLink></li>
                        <li><NavLink to="/blogDetailsLeftSidebar">Details Left Sidebar</NavLink></li>
                        <li><NavLink to="/blogDetailsAudio">Details Audio</NavLink></li>
                        <li><NavLink to="/blogDetailsVideo">Details Video</NavLink></li>
                        <li><NavLink to="/blogDetailsGallery">Details Gallery</NavLink></li>
                     </ul>
                  </Collapsible> */}

                  <Collapsible trigger={Pages} triggerTagName="div"
                     triggerOpenedClassName="" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/about">Acerca de</NavLink></li>
                        <li><a href="https://clinicawomeds.com/blog/author/admin/">Blog</a></li>
                        <li><NavLink to="/contact">Contacto</NavLink></li>
                     </ul>
                  </Collapsible>


               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;