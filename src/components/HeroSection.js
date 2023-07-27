import React from 'react';
import styled from 'styled-components';
import { CgArrowLongDown } from 'react-icons/cg';
import AboutImg from '../assets/images/about2.webp';

const HeroStyles = styled.div`
  .top-section {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 0rem;
  }
  .hero {
    & {
      height: 100vh;
      min-height: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    &__heading {
      margin-top: 5rem;
      position: relative;
      text-align: center;
    }
    &__name {
      font-family: 'Caveat';
      font-weight: 500;
      font-size: 7rem;
      line-height: 0.8em;
      margin-bottom: 3rem;
      color: var(--gray-1);
    }
    &__title {
      font-family: 'Caveat';
      font-weight: 400;
      font-size: 2.5rem;
      color: var(--gray-1);
      margin-bottom: 3rem;
    }
    &__img {
      width: 85%;
      align-items: start;
      margin-top: 5rem;
    }
    &__scrollDown {
      text-align: center;
      svg {
        color: var(--gray-1);
        margin-top: 5rem;
        width: 2.5rem;
      }
    }
  }

  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }

  @media only screen and (max-width: 768px) {
    .top-section {
      flex-direction: column;
      gap: 0.5rem;
    }
    .hero {
      &__heading {
        font-size: 1.45rem;
        margin-top: 20rem;
        margin-right: 0rem;
        position: relative;
        margin-top: 0rem;
        margin-bottom: 3rem;
      }
      &__name {
        font-size: 4.5rem;
      }
      &__title {
        font-size: 2.1rem;
        margin-top: 1rem;
      }
      &__img {
        width: 70%;
        margin-top: 0;
      }
      &__scrollDown {
        svg {
          margin-top: 5rem;
        }
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <div className="hero__heading">
                <div className="hero__name">Marina Yamamoto</div>
                <div className="hero__title">
                  I'm a UI/UX Designer, <br /> based in Vancouver, Canada
                </div>
                {/* <Button
                  btnText="Download CV"
                  href="../assets/images/marina-yamamoto.pdf"
                  title=""
                  download
                /> */}
              </div>
            </div>
            <div className="right">
              <img className="hero__img" src={AboutImg} alt="Marina Yamamoto" />
            </div>
          </div>
          <div className="hero__scrollDown">
            <CgArrowLongDown />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
