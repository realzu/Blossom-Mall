// import { Carousel } from 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; //★
import React from 'react';
import Main from '../assets/css/main.module.css';

const MainBanner = () => {
    return (
        <div>
            <Carousel className={Main.mb}>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="/images/ban1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="/images/ban2.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/ban3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainBanner;