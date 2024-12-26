import React from 'react';
import { Container } from 'react-bootstrap';
import Background from '../assets/Images/Background.jpg';
import './HomeCSS.css';

const Home = () => {
    return (
        <Container
            fluid
            className="home-container"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <h1>Pias Barua</h1>
            <h3>3D Artist and Web Design Enthusiast</h3>
        </Container>
        
    );
};

export default Home;
