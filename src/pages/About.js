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
              <h4 className="about__subheading">
                Graphic Designer / Frontend Developer
              </h4>
              <div className="about__info">
                <PText>
                  Hello! I like take stary cat photos. I've worked as a graphic
                  designer for 9+ years and currently working as a web designer
                  and front end developer for 2+ years. I have experience
                  collaborating with external teams such as marketing, product
                  and management to plan, strategize and execute features.
                  <br /> <br />I was in charge of planning and producing
                  advertisements, magazines, and general promotional materials.
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
