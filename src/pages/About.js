import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about.webp';
import ContactBanner from '../components/ContactBanner';
import SkillsSection from '../components/SkillsSection';

const AboutPageStyles = styled.div`
  padding: 12rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
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
    margin-bottom: 2rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
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
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h1 className="about__heading">Marina Yamamoto</h1>
              <h4 className="about__subheading">Graphic / Web Designer</h4>
              <div className="about__info">
                <PText>
                  I have 2 years of experience in web design in a fintech
                  company. I was in charge of creating websites and landing
                  pages, company branding. I have also worked in an advertising
                  agency, producing banners for various clients, focusing on
                  in-feed advertising.
                  <br /> <br />I have +9 years of experience in graphic design
                  direction in print industry. I was in charge of planning and
                  producing advertisements, magazines, and general promotional
                  materials.
                  <br /> <br />I worked with marketing team and developer team
                  specify exact time. flexibly in projects, including design,
                  planning and management.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="Marina Yamamoto" />
            </div>
          </div>
        </div>
        <SkillsSection />
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
