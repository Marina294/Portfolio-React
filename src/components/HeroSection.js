import React from 'react';
import styled from 'styled-components';
import { CgArrowLongDown } from 'react-icons/cg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 100px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Caveat';
      font-weight: 500;
      font-size: 7rem;
      color: var(--gray-1);
    }
    .hero__title {
      font-family: 'Caveat';
      font-weight: 400;
      font-size: 2.5rem;
      color: var(--gray-1);
      margin-top: 4rem;
    }
  }
  .hero__scrollDown {
    svg {
      color: var(--gray-1);
      margin-top: 13rem;
      text-align: center;
      width: 2.5rem;
    }
  }


  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span className="hero__name">Marina Yamamoto</span>
            <span className="hero__title">
              Graphic Designer / Frontend Developer
            </span>
          </h1>
          <div className="hero__scrollDown">
            <a className="hero__scrollDown">
              <CgArrowLongDown />
            </a>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
