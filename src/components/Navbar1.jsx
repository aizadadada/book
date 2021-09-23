// import styled from 'styled-components';
// import { FaMagento } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { Container } from '../../globalStyles';
// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
// import { Button } from '../../globalStyles';

// export const Nav = styled.nav`
//   background: #101522;
//   height: 80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.2rem;
//   position: sticky;
//   top: 0;
//   z-index: 999;
// `;

// export const NavbarContainer = styled(Container)`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;

//   ${Container}
// `;

// export const NavLogo = styled(Link)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
// `;

// export const NavIcon = styled(FaMagento)`
//   margin-right: 0.5rem;
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 960px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;

//   @media screen and (max-width: 960px) {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 90vh;
//     position: absolute;
//     top: 80px;
//     left: ${({ click }) => (click ? 0 : '-100%')};
//     opacity: 1;
//     transition: all 0.5s ease;
//     background: #101522;
//   }
// `;

// export const NavItem = styled.li`
//   height: 80px;
//   border-bottom: 2px solid transparent;

//   &:hover {
//     border-bottom: 2px solid #4b59f7;
//   }

//   @media screen and (max-width: 960px) {
//     width: 100%;

//     &:hover {
//       border: none;
//     }
//   }
// `;

// export const NavItemBtn = styled.li`
//   @media screen and (max-width: 960px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 120px;
//   }
// `;

// export const NavLinks = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0.5rem 1rem;
//   height: 100%;

//   @media screen and (max-width: 960px) {
//     text-align: center;
//     padding: 2rem;
//     width: 100%;
//     display: table;

//     &:hover {
//       color: #4b59f7;
//       transition: all 0.3s ease;
//     }
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
//   padding: 8px 16px;
//   height: 100%;
//   width: 100%;
//   border: none;
//   outline: none;
// `;

// // import React, { useState, useEffect } from 'react';
// // import { FaBars, FaTimes } from 'react-icons/fa';
// // import { IconContext } from 'react-icons/lib';
// // import { Button } from '../../globalStyles';
// // import {
// //     Nav,
// //     NavbarContainer,
// //     NavLogo,
// //     NavIcon,
// //     MobileIcon,
// //     NavMenu,
// //     NavItem,
// //     NavItemBtn,
// //     NavLinks,
// //     NavBtnLink
// // } from './Navbar.elements';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if (window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton();
//     }, []);

//     window.addEventListener('resize', showButton);

//     return (
//         <>
//             <IconContext.Provider value={{ color: '#fff' }}>
//                 <Nav>
//                     <NavbarContainer>
//                         <NavLogo to='/' onClick={closeMobileMenu}>
//                             <NavIcon />
//                             Книги
//                         </NavLogo>
//                         <MobileIcon onClick={handleClick}>
//                             {click ? <FaTimes /> : <FaBars />}
//                         </MobileIcon>
//                         <NavMenu onClick={handleClick} click={click}>
//                             <NavItem>
//                                 <NavLinks to='/' onClick={closeMobileMenu}>
//                                     Главная
//                                 </NavLinks>
//                             </NavItem>
//                             <NavItem>
//                                 {/* <NavLinks to='/services' onClick={closeMobileMenu}>
//                   Services
//                 </NavLinks> */}
//                             </NavItem>
//                             <NavItem>
//                                 <NavLinks to='/products' onClick={closeMobileMenu}>
//                                     Каталог
//                                 </NavLinks>
//                             </NavItem>
//                             <NavItemBtn>
//                                 {button ? (
//                                     <NavBtnLink to='/sign-up'>
//                                         <Button primary>SIGN UP</Button>
//                                     </NavBtnLink>
//                                 ) : (
//                                     <NavBtnLink to='/sign-up'>
//                                         <Button onClick={closeMobileMenu} fontBig primary>
//                                             SIGN UP
//                                         </Button>
//                                     </NavBtnLink>
//                                 )}
//                             </NavItemBtn>
//                         </NavMenu>
//                     </NavbarContainer>
//                 </Nav>
//             </IconContext.Provider>
//         </>
//     );
// }

// export default Navbar;
