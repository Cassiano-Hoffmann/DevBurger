import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';

import { useUser } from '../../hooks/UserContext';
import listLinks from './menu-list';
import { Container, ItemContainer, ListLink } from './styles';

export function SideMenuAdmin() {
    const { logout } = useUser()
    return (
        <Container>
            <hr />
            {listLinks.map(item => (
                <ItemContainer key={item.id} $isActive={true}>
                    <item.icon className='icon' />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr />
            <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
                <LogoutIcon style={{ color: '#FFF' }} />
                <ListLink to="/login" onClick={logout}>Sair</ListLink>
            </ItemContainer>
        </Container>
    )
};