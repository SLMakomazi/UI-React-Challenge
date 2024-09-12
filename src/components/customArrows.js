// src/components/CustomArrows.js
import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: black;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;

const PrevArrow = styled(ArrowButton)`
  left: 10px;
`;

const NextArrow = styled(ArrowButton)`
  right: 10px;
`;

export const PrevArrowComponent = (props) => {
  const { className, onClick } = props;
  return (
    <PrevArrow className={className} onClick={onClick}>
      <FaChevronLeft />
    </PrevArrow>
  );
};

export const NextArrowComponent = (props) => {
  const { className, onClick } = props;
  return (
    <NextArrow className={className} onClick={onClick}>
      <FaChevronRight />
    </NextArrow>
  );
};
