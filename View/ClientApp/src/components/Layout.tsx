import React from 'react';
import { Container } from 'reactstrap';

interface Props {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {

    return (
        <div>
            <Container tag="main">
                {children}
            </Container>
        </div>
    );
}

export { Layout };