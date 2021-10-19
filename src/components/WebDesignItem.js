import React from 'react';
import styled from 'styled-components';
import WorkImg from '../assets/images/drawing.jpg';

const WebDesignItemStyles = styled.div`
  .workItem__img {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 50%;
    }
  }
`;

export default function WorkItem({ img = WorkImg }) {
  return (
    <WebDesignItemStyles className="workItem__img">
      <img src={img} alt="work img" />
    </WebDesignItemStyles>
  );
}
