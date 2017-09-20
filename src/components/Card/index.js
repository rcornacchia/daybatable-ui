import React, { Component } from 'react';
import styled from 'styled-components';

const Card = props => (
  <CardContainer minWidth={props.minWidth}>
    { props.children }
  </CardContainer>
)

export default Card;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  min-width: ${props => props.minWidth ? props.minWidth : '300px'};
  margin: 0 auto;
  background-color: #ffffff;
  padding: 20px;
`