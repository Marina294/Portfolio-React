import React from 'react';
import styled from 'styled-components';
import PText from '../components/common/PText';
import AboutImg from '../assets/images/about.webp';
import ContactBanner from '../components/ContactBanner';
import SkillsSection from '../components/SkillsSection';

const AboutPageStyles = styled.div`
  padding: 12rem 0 0 0;
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
  .about {
    &__heading {
      margin-bottom: 2rem;
    }
    &__subheading {
      margin-bottom: 2rem;
    }
    &__info {
      margin-bottom: 4rem;
      .para {
        max-width: 100%;
      }
    }
  }
  

  @media only screen and (max-width: 768px) {
    padding: 5rem 0 0 0;
    .top-section {
      flex-direction: column;
      gap: 2rem;
    }
    .about {
      &__subheading {
        font-size: 1.9rem;
      }
      &__info {
        margin-bottom: 4rem;
        .para {
          max-width: 100%;
        }
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
                Designer / Frontend Developer
              </h4>
              <div className="about__info">
                <PText>
                  Hello! I've worked as a graphic designer for 9+ years and
                  currently working as a web designer and front end developer
                  for 2+ years. I have experience collaborating with external
                  teams such as marketing, product and management to plan,
                  strategize and execute feature products.
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
