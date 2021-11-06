import React from 'react';
import styled from 'styled-components';
import PText from '../common/PText';
import MainImg from '../../assets/images/w-web-sc-top.webp';
import WorkImg1 from '../../assets/images/w-web1.webp';
import WorkImg2 from '../../assets/images/w-web2.webp';
import WorkImg3 from '../../assets/images/w-web1-2.webp';
import WorkImg4 from '../../assets/images/w-web2-2.webp';
import SiteMap from '../../assets/images/w-web-sc-sitemap.webp';
import WireFrameImg from '../../assets/images/w-web-sc-wire1.webp';
import LogoImg1 from '../../assets/images/w-web-sc-logo1.webp';
import LogoImg2 from '../../assets/images/w-web-sc-logo2.webp';
import LogoImg3 from '../../assets/images/w-web-sc-logo3.webp';

const PickupStyles = styled.div`
  padding: 0;
  img {
    filter: drop-shadow(0px 0px 4px rgba(154, 134, 227, 0.2));
  }
  .container {
    align-items: left;
    justify-content: flex-start;
    text-align: left;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .secound-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  .left {
    flex: 2;
    img {
      filter: none;
    }
  }
  .right {
    flex: 2;
  }
  .works {
    &__subheading {
      margin-bottom: 2rem;
      span {
        padding: 0.5rem;
        background-color: var(--additional);
      }
    }
    &__heading {
      margin-bottom: 1rem;
    }
    &__info {
      .para {
        max-width: 600px;
      }
    }
    &__infoDetail {
      font-size: 1.3rem;
      line-height: 1.8em;
    }
    &__info__item {
      margin-bottom: 10rem;
    }
  }

  .workItem {
    &__title {
      text-align: center;
      margin: 5rem 0 3rem 0;
    }
    &__img__3line {
      display: inline-block;
      text-align: center;
      img {
        margin: 0 1rem 0 1rem;
        width: 30%;
      }
    }
    &__img__2line {
      display: inline-block;
      text-align: center;
      img {
        margin: 0 1.3rem 0 1.3rem;
        width: 46%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .container {
      text-align: center;
    }
    .top-section {
      flex-direction: column;
      gap: 1rem;
    }
    .secound-section {
      flex-direction: column;
      gap: 1rem;
      margin-top: 2rem;
    }
    .workItem {
      &__title {
        margin: 2rem 0 1rem 0;
        text-align: center;
      }
      &__img__3line {
        text-align: center;
        img {
          margin: 0 0 2rem 0;
          width: 100%;
        }
      }
      &__img__2line {
        text-align: center;
        img {
          margin: 0 0 2rem 0;
          width: 100%;
        }
      }
    }
  }
`;

export default function Pickup() {
  return (
    <PickupStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <img className="works__mainImg" src={MainImg} alt="work img" />
          </div>
          <div className="right">
            <h4 className="works__subheading">
              Redesign the Corprate website / Company Branding
            </h4>
            <div className="works__info">
              <PText>
                Designed the corporate website. In charged of branding and
                design. Created internal company brand guide to unify brand
                awareness.
              </PText>
              <div className="works__infoDetail">
                <br /> Client: Symply Cubed Co., Ltd. <br /> Date: 5/2021 <br />
                Work: Concept, Design, branding <br /> Software: Sketch
              </div>
            </div>
          </div>
        </div>
        <div className="workItem__title">
          <h4>Sitemap / Wireframe</h4>
        </div>
        <div className="workItem__img__3line">
          <a href={SiteMap} target="_blank" rel="noreferrer">
            <img src={SiteMap} alt="work img" />
          </a>
          <a href={WireFrameImg} target="_blank" rel="noreferrer">
            <img src={WireFrameImg} alt="work img" />
          </a>
        </div>
        <div>
          <div className="workItem__title">
            <h4>Logo Guide Line</h4>
          </div>
          <div className="workItem__img__3line">
            <a href={LogoImg2} target="_blank" rel="noreferrer">
              <img src={LogoImg1} alt="work img" />
            </a>
            <a href={LogoImg3} target="_blank" rel="noreferrer">
              <img src={LogoImg2} alt="work img" />
            </a>
            <a href={LogoImg3} target="_blank" rel="noreferrer">
              <img src={LogoImg3} alt="work img" />
            </a>
          </div>
        </div>
        <div>
          <div className="workItem__title">
            <h4>Final Design</h4>
          </div>
          <div className="workItem__img__2line">
            <a href={WorkImg3} target="_blank" rel="noreferrer">
              <img src={WorkImg1} alt="work img" />
            </a>
            <a href={WorkImg4} target="_blank" rel="noreferrer">
              <img src={WorkImg2} alt="work img" />
            </a>
          </div>
        </div>
      </div>
    </PickupStyles>
  );
}
