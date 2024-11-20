import React from 'react';

import { SideMenuAdmin } from '../../components';
import ListProducts from './ListProducts';
import { Container, ContainerItems } from './styles';
import Orders from './Orders';
import NewProduct from './NewProduct';

export function Admin() {
    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                <ListProducts />
                <Orders />
                <NewProduct />
            </ContainerItems>
        </Container>
    );
}