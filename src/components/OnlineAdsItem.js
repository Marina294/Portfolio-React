import React from 'react';
import styled from 'styled-components';
import WorkImg from '../assets/images/drawing.jpg';

const WebDesignItemStyles = styled.div`
  .workItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    .img {
      height: 100%;
    }
  }
  .workItem__title {
    color: var(--additional);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .workItem__info {
    margin-top: 1rem;
    text-align: center;
    background-color: var(--white);
    padding: 1rem;
    border-radius: 12px;
  }
  .workItem__desc {
    font-size: 1.8rem;
    font-family: 'Urbanist';
    line-height: 3rem;
    margin-top: 1rem;
  }
  .workItem__link {
    color: var(--gray-2);
    font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    .workItem__img {
      height: 350px;
    }
    .workItem__desc {
      font-size: 1.7rem;
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
