import React, { useState } from 'react';
import { Modal, Carousel, Image, Container, Row, Col } from 'react-bootstrap';
import './Galleria.css';
import prova3 from '../../assets/FilieraImg1.jpg';
import prova4 from '../../assets/FilieraImg2.jpg';
import prova5 from '../../assets/FilieraImg3.jpg';

const Galleria = () => {
    const images = [
        { src: prova3, alt: 'Fourth Slide' },
        { src: prova4, alt: 'Fifth Slide' },
        { src: prova5, alt: 'Sixth Slide' },
        { src: prova3, alt: 'Fourth Slide' },
        { src: prova4, alt: 'Fifth Slide' },
        { src: prova5, alt: 'Sixth Slide' },
        { src: prova3, alt: 'Fourth Slide' },
        { src: prova4, alt: 'Fifth Slide' },
        { src: prova5, alt: 'Sixth Slide' },
        { src: prova3, alt: 'Fourth Slide' },
        { src: prova4, alt: 'Fifth Slide' },
        { src: prova5, alt: 'Sixth Slide' },
        { src: prova3, alt: 'Fourth Slide' },
        { src: prova4, alt: 'Fifth Slide' },
        { src: prova5, alt: 'Sixth Slide' },
        { src: prova3, alt: 'Fourth Slide' },
        { src: prova4, alt: 'Fifth Slide' },
        { src: prova5, alt: 'Sixth Slide' },
    ];

    const [show, setShow] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleShow = (index) => {
        setSelectedIndex(index);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <Container className="galleria-container">
            <h1 className='h2iamo'>Alcuni nostri scatti</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {images.map((img, index) => (
                    <div key={index} style={{ flex: '1 1 150px', maxWidth: '300px' }}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            thumbnail
                            onClick={() => handleShow(index)}
                            className="cursor-pointer miniature-img"
                        />
                    </div>
                ))}
            </div>

            <Modal show={show} onHide={handleClose} size="lg" centered className="modal-carousel">
                <Modal.Header closeButton>
                    <Modal.Title>{images[selectedIndex].alt}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={selectedIndex} onSelect={(selectedIndex, e) => setSelectedIndex(selectedIndex)}>
                        {images.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={img.src}
                                    alt={img.alt}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Galleria;
