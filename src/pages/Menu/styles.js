import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BannerHamburguer from '../../assets/banner-hamburguer.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #F0F0F0;

    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ), url('${Background}');
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
    width: 100%;
    position: relative;
    background: url('${BannerHamburguer}') no-repeat;
    background-color: #1F1F1F;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: 'Road rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #FFF;
        position: absolute;
        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #FFF;
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#9758A6' : '#696969')};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758A6'};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`;

export const BackButton = styled.button`
    position: absolute;
    left: 40px;
    height: 50px;
    width: 100px;
    padding: 5px;
    background: #9758A6;
    color: #FFF;
    font-size: 18px;
    font-weight: 500;
    border: none;
    border-radius: 10px;

    &:hover {
        background: #6F357C;
    }
`;