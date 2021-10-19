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
  // @media only screen and (max-width: 768px) {
  //   .workItem__img {
  //     height: 350px;
  //   }
  //   .workItem__desc {
  //     font-size: 1.7rem;
  //   }
  // }
`;

export default function WorkItem({ img = WorkImg }) {
  return (
    <WebDesignItemStyles className="workItem__img">
      <img src={img} alt="work img" />
    </WebDesignItemStyles>
  );
}
