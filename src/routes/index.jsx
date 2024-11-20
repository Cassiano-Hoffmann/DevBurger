import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cart, Checkout, CompletePayment, Home, Login, Menu, Register, Admin } from '../pages';
import ListProducts from '../pages/Admin/ListProducts';
import NewProduct from '../pages/Admin/NewProduct';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: <Cart />,
    },
    {
        path: '/checkout',
        element: <Checkout />,
    },
    {
        path: '/complete',
        element: <CompletePayment />,
    },
    {
        path: '/pedidos',
        element: <Admin />,
    },
    {
        path: '/listar-produtos',
        element: <ListProducts />,
    },
    {
        path: '/novo-produto',
        element: <NewProduct />,
    },
]);

export default router