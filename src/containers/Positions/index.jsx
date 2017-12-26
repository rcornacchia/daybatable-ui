import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Position from './Position';

export default () => (
  <div>
    <Position position='for' />
    <Position position='against' />
  </div>
)

const Positions = styled.div`
  display: inline-flex;
  justify-content: space-around;
`