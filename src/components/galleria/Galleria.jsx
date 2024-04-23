import React, { useState } from 'react';
import { Modal, Carousel, Image, Container, Row, Col } from 'react-bootstrap';
import './Galleria.css';
import prova3 from '../../assets/FilieraImg1.jpg';
import prova5 from '../../assets/FilieraImg3.jpg';
import prova6 from '../../assets/16ca.jpg';
import prova8 from '../../assets/Cocomero_copertina.jpg';
import prova9 from '../../assets/IMG-20240416-WA0001-1.jpg';
import prova10 from '../../assets/IMG-20240416-WA0009.jpg';
import prova11 from '../../assets/IMG-20240417-WA0002.jpg';
import prova12 from '../../assets/IMG-20240417-WA0003.jpg';
import prova13 from '../../assets/IMG-20240417-WA0008.jpg';
import prova15 from '../../assets/IMG-20240417-WA0012.jpg';
import prova16 from '../../assets/IMG-20240417-WA0014.jpg';
import prova17 from '../../assets/IMG-20240417-WA0016.jpg';
import prova18 from '../../assets/IMG-20240417-WA0017.jpg';
import prova19 from '../../assets/IMG-20240417-WA0018.jpg';
import prova20 from '../../assets/IMG-20240417-WA0019.jpg';
import prova21 from '../../assets/IMG-20240417-WA0020.jpg';
import prova22 from '../../assets/IMG-20240417-WA0023.jpg';
import prova23 from '../../assets/IMG-20240417-WA0024.jpg';
import prova24 from '../../assets/IMG-20240417-WA0025.jpg';
import prova25 from '../../assets/IMG-20240417-WA0026.jpg';
import prova26 from '../../assets/IMG-20240417-WA0029.jpg';
import prova27 from '../../assets/IMG-20240417-WA0031.jpg';
import prova29 from '../../assets/IMG-20240417-WA0035.jpg';
import prova30 from '../../assets/IMG-20240417-WA0037.jpg';
import prova31 from '../../assets/IMG-20240417-WA0038.jpg';
import prova32 from '../../assets/IMG-20240420-WA0003.jpg';
import prova33 from '../../assets/IMG-20240420-WA0004.jpg';
import prova37 from '../../assets/binscoc.jpg';
import prova38 from '../../assets/binsmel.jpg';
import prova40 from '../../assets/broccolo.jpg';
import prova41 from '../../assets/campo-di-carciofi.jpg';
import prova42 from '../../assets/campo.jpg';
import prova43 from '../../assets/campobroccolo.jpg';
import prova44 from '../../assets/campofinocchi.jpg';
import prova45 from '../../assets/carciofo-singolo.jpg';
import prova46 from '../../assets/cassabroccolo.jpg';
import prova47 from '../../assets/cassadicarciofi.jpg';
import prova48 from '../../assets/campo.jpg';
import prova49 from '../../assets/cassamel.jpg';
import prova50 from '../../assets/cestomisto.jpg';
import prova51 from '../../assets/coc1.webp';
import prova52 from '../../assets/cocomero.jpg';
import prova53 from '../../assets/coltivazione-delle-angurie-1024x682.jpg';
import prova54 from '../../assets/copertinafiga.jpg';
import prova55 from '../../assets/finocchio.jpg';
import prova57 from '../../assets/mazzo.jpg';
import prova58 from '../../assets/melbins1.jpg';
import prova59 from '../../assets/melcampo.jpg';
import prova60 from '../../assets/melcassa1.jpg';
import prova61 from '../../assets/melimp.jpg';
import prova62 from '../../assets/meloni-retati-nunhems-1200-600-az.jpg';


const Galleria = () => {
    const images = [
        { src: prova3, alt: '1' },
        { src: prova5, alt: '2' },
        { src: prova6, alt: '3' },
        { src: prova8, alt: '4' },
        { src: prova9, alt: '5' },
        { src: prova10, alt: '6' },
        { src: prova11, alt: '7' },
        { src: prova12, alt: '8' },
        { src: prova13, alt: '9' },
        { src: prova15, alt: '10' },
        { src: prova16, alt: '11' },
        { src: prova17, alt: '12' },
        { src: prova18, alt: '13' },
        { src: prova19, alt: '14' },
        { src: prova20, alt: '15' },
        { src: prova21, alt: '16' },
        { src: prova22, alt: '17' },
        { src: prova23, alt: '18' },
        { src: prova24, alt: '19' },
        { src: prova25, alt: '20' },
        { src: prova26, alt: '21' },
        { src: prova27, alt: '22' },
        { src: prova29, alt: '23' },
        { src: prova30, alt: '24' },
        { src: prova31, alt: '25' },
        { src: prova32, alt: '26' },
        { src: prova33, alt: '27' },
        { src: prova37, alt: '28' },
        { src: prova38, alt: '29' },
        { src: prova40, alt: '30' },
        { src: prova41, alt: '31' },
        { src: prova42, alt: '32' },
        { src: prova43, alt: '33' },
        { src: prova44, alt: '34' },
        { src: prova45, alt: '35' },
        { src: prova46, alt: '36' },
        { src: prova47, alt: '37' },
        { src: prova48, alt: '38' },
        { src: prova49, alt: '39' },
        { src: prova50, alt: '40' },
        { src: prova51, alt: '41' },
        { src: prova52, alt: '42' },
        { src: prova53, alt: '43' },
        { src: prova54, alt: '44' },
        { src: prova55, alt: '45' },
        { src: prova57, alt: '46' },
        { src: prova58, alt: '47' },
        { src: prova59, alt: '48' },
        { src: prova60, alt: '49' },
        { src: prova61, alt: '50' },
        { src: prova62, alt: '51' }
        
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
    <h1 className='h2iamo text-center'>Alcuni nostri scatti</h1>
    <div className="gallery-grid">
        {images.map((img, index) => (
            <Image
                key={index}
                src={img.src}
                alt={img.alt}
                thumbnail
                onClick={() => handleShow(index)}
                className="gallery-image"
            />
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
