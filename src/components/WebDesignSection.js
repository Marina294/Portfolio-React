import React, { useState } from 'react';
import styled from 'styled-components';
import PText from './PText';
import DesignInfo from '../assets/data/webdesign';
import DesignItem from './WebDesignItem';

const WebStyles = styled.div`
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
  .webSection__heading {
    margin-bottom: 3rem;
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
    .skills__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Web() {
  const [worksData] = useState(DesignInfo);
  return (
    <WebStyles id="webDesign">
      <div className="container">
        <div className="top-section">
          <div className="left">
            <h2 className="webSection__heading">Web Design</h2>
            <h4 className="about__subheading">Graphic / Web Designer</h4>
            <div className="about__info">
              <PText>
                I have 2 years of experience in web design in a fintech websites
                and landing pages, company I have also also also worked also
                worked in an advertising agency, producing banners banners
                banners for various clients, focusing on in-feed advertising.
              </PText>
            </div>
          </div>
          <div className="works__allItems">
            {worksData.map((item) => (
              <DesignItem key={item.id} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </WebStyles>
  );
}
