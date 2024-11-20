import styled from 'styled-components';

import Background from '../../assets/background.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div `
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: #F4F4F4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;

export const Container = styled.section `
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${Background});
`;