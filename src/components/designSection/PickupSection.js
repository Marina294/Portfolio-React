import React from 'react';
import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';
import MainImg from '../../assets/images/w-web-sc-top.png';
import WorkImg1 from '../../assets/images/w-web1.jpg';
import WorkImg2 from '../../assets/images/w-web2.jpg';
import WorkImg3 from '../../assets/images/w-web1-2.jpg';
import WorkImg4 from '../../assets/images/w-web2-2.jpg';
import SiteMap from '../../assets/images/w-web-sc-sitemap.jpg';
import WireFrameImg1 from '../../assets/images/w-web-sc-wire1.png';
import WireFrameImg2 from '../../assets/images/w-web-sc-wire2.png';
import LogoImg1 from '../../assets/images/w-web-sc-logo1.jpg';
import LogoImg2 from '../../assets/images/w-web-sc-logo2.jpg';
import LogoImg3 from '../../assets/images/w-web-sc-logo3.jpg';

const PickupStyles = styled.div`
  padding: 0;
  img {
    filter: drop-shadow(0px 0px 4px rgba(154, 134, 227, 0.2));
  }
  .workItem__title {
    margin: 5rem 0 3rem 0;
    text-align: center;
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
  .left__sitemap {
    flex: 2;
  }
  .right__sitemap {
    flex: 2;
  }
  .zoom__box {
    position: relative;
  }
  .zoom {
    width: 2rem;
    display: flex;
    position: absolute;
    bottom: 4%;
    right: 2%;
  }
  .works__subheading {
    margin-bottom: 2rem;
    span {
      background-color: var(--additional);
      padding: 0.5rem;
    }
  }
  .works__heading {
    margin-bottom: 1rem;
  }
  .works__info {
    .para {
      max-width: 600px;
    }
  }
  .works__infoDetail {
    font-size: 1.4rem;
    line-height: 1.8em;
  }
  .works__info__item {
    margin-bottom: 10rem;
  }
  .webSection__heading {
    margin-bottom: 3rem;
  }
  .workItem__img__3line {
    display: inline-block;
    text-align: center;
    position: relative;
    img {
      margin: 0 1rem 0 1rem;
      width: 30%;
    }
  }
  .workItem__img__2line {
    display: inline-block;
    text-align: center;
    img {
      margin: 0 1.3rem 0 1.3rem;
      width: 46%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .container {
      text-align: center;
    }
    .workItem__title {
      margin: 2rem 0 1rem 0;
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
    .workItem__img__3line {
      text-align: center;
      img {
        margin-bottom: 2rem;
        margin: 0 0 2rem 0;
        width: 100%;
      }
    }
    .workItem__img__2line {
      text-align: center;
      img {
        margin-bottom: 2rem;
        margin: 0 0 2rem 0;
        width: 100%;
      }
    }
    .left__sitemap {
      margin-left: 0rem;
    }
    .zoom {
      width: 1.3rem;
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
              <p>
                Designed the corporate website. In charged of branding and
                design. Created internal company brand guide to unify brand
                awareness.
              </p>
              <div className="works__infoDetail">
                <br /> Client: Symply Cubed Co., Ltd. <br /> Date: 5/2021 <br />
                Work: Concept, Design, branding <br /> Software: Sketch
              </div>
            </div>
          </div>
        </div>
        <div className="secound-section">
          <div className="left__sitemap">
            <div className="zoom__box">
              <a href={SiteMap} target="_blank" rel="noreferrer">
                <img className="works__Img" src={SiteMap} alt="work img" />
                <div className="zoom">
                  <BsPlusCircle style={{ fill: 'var(--additional)' }} />
                </div>
              </a>
            </div>
          </div>
          <div className="right__sitemap">
            <div className="works__info">
              <p>
                Designed the corporate website. In charged of branding and
                design. Created internal company brand guide to unify brand
                awareness.
              </p>
            </div>
          </div>
        </div>
        <div className="secound-section">
          <div className="left__sitemap">
            <div className="zoom__box">
              <a href={WireFrameImg2} target="_blank" rel="noreferrer">
                <img
                  className="works__Img"
                  src={WireFrameImg1}
                  alt="work img"
                />
                <div className="zoom">
                  <BsPlusCircle style={{ fill: 'var(--additional)' }} />
                </div>
              </a>
            </div>
          </div>
          <div className="right__sitemap">
            <div className="works__info">
              {/* <p>
                Designed the corporate website. In charged of branding and
                design. Created internal company brand guide to unify brand
                awareness.
              </p> */}
            </div>
          </div>
        </div>
        <div>
          <div className="workItem__title">
            <h4>Logo guide line</h4>
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
          <div className="workItem__title">
            <h4>Final design</h4>
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
