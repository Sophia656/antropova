import React, { useEffect, useState } from 'react';
import s from './HomePage.module.css'
import { Circle, LeftLine, Links, RightLine, Title } from './styled';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img10 from '../../assets/10.jpg';

const HomePage = () => {
    const [hover, setHover] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHover(true)
        }, 1200);
    }, [])

    return (
        <div className={s.wrapper}>
            <Title transition={hover} >SOPHIA ANTROPOVA</Title>
            <LeftLine transition={hover} />
            <RightLine transition={hover} />
            <Links transition={hover}>
                <span>inst.:</span>
                <a href="https://www.instagram.com/accounts/login/?next=/antropova_sophia/">antropova_sophia </a>
                <span>mail:</span>
                <a href="mailto:antropovasophia@gmail.com">antropovasophia@gmail.com</a>
            </Links>
            <Circle transition={hover} >
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img1} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img2} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img3} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img4} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img5} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img6} alt="" />
                <img style={{width: '10vw'}} src={img7} alt="" />
            </Circle>
            <Circle transition={hover} >
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img8} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img9} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img3} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img2} alt="" />
                <img style={{width: '10vw'}} src={img1} alt="" />
            </Circle>
            <Circle transition={hover} >
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img3} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img4} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img10} alt="" />
                <img style={{width: '10vw'}} src={img5} alt="" />
            </Circle>
            <Circle transition={hover} >
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img7} alt="" />
                <img style={{width: '10vw', marginRight: '0.7vw'}} src={img6} alt="" />
                <img style={{width: '10vw'}} src={img9} alt="" />
            </Circle>
        </div>
    );
};

export default HomePage;