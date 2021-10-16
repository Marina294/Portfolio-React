import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import WorkImg1 from '../assets/images/rock.jpg';

const OnlineAdsSectionStyles = styled.div`
  padding: 10rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  // .top-section {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   gap: 2rem;
  // }
  .left {
    flex: 2;
  }
  .right {
    flex: 1;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--additional);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    margin-bottom: 1rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  .skills__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  .skillsContainer {
    padding-top: 15rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.9rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .skills__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function OnlineAdsSection() {
  return (
    <>
      <OnlineAdsSectionStyles id="onlineAds">
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h2 className="webSection__heading">Online Ads</h2>
              <p className="about__subheading">Graphic / Web Designer</p>
              <div className="about__info">
                <PText>
                  I have 2 years of experience in web design in a fintech
                  company. I was in charge of creating websites and landing
                  pages, company branding. I have also worked in an advertising
                  agency, producing banners for various clients, focusing on
                  in-feed advertising.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={WorkImg1} alt="Design work" />
              {/* <img src={AboutImg} alt="Design work" /> */}
            </div>
          </div>
        </div>
      </OnlineAdsSectionStyles>
    </>
  );
}
