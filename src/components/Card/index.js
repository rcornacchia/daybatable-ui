import React, { Component } from 'react';
import styled from 'styled-components';

const Card = props => (
  <CardContainer
    minWidth={props.minWidth}
    marginTop={props.marginTop}
  >
    { props.children }
  </CardContainer>
)

export default Card;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  min-width: ${props => props.minWidth ? props.minWidth : '300px'};
  margin: ${props => props.marginTop ? `${props.marginTop} auto 0 auto` : '0 auto'};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  padding: 20px;
`