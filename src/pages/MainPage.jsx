import { Container } from '@material-ui/core';
import React from 'react';
// import { Link } from 'react-router-dom';
import Content from '../components/Content';
import LeftSidebar from '../components/LeftSidebar';
import Navbar from '../components/Navbar';
// import Psycho from './Psycho';

const MainPage = () => {
    return (
        <div className="mainPage">
            <Navbar />
            {/* <Navbar1 /> */}
            <Container>
                <div className="main">
                    {/* <h1> <Link to={Psycho}></Link> Психология</h1> */}
                    <LeftSidebar />
                    <Content />
                </div>
            </Container>
        </div>
    );
};

export default MainPage;