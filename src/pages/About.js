import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about.jpg';
import ContactBanner from '../components/ContactBanner';
import SkillsSection from '../components/SkillsSection';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

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
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
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
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
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

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h2 className="about__heading">Marina Yamamoto</h2>
              <p className="about__subheading">Graphic / Web Designer</p>
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
          {/* <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div>
          </div> */}
        </div>
        <SkillsSection />
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
