// src/components/Card.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const CardImage = styled.div`
  height: 100px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const Card = ({ title, image }) => {
  return (
    <CardContainer>
      <CardImage image={image} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default Card;
