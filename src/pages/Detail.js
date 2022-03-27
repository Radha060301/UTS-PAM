import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Right } from 'react-base';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <left/>
                    <Body>
                        <Title>OngkirApp</Title>
                        <Subtitle>Input Data</Subtitle>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        )
    }
}