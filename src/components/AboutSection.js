import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
// import AboutImg from '../assets/images/about.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .aboutSection {
    flex: 1;
  }
  .section-title {
    text-align: center;
  }
  .ptext__allItems {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .para {
    margin-top: 2rem;
    margin-center: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection {
      flex: 4;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection">
          <SectionTitle heading="About Me" />
          <div className="ptext__allItems">
            <PText>
              2 years experience in web design in IT and fintech companies. +9
              years experience in graphic design and art direction for print.
              Worked with marketing team and developer team for specify exact
              time. flexibly in projects, including design, planning and
              management.
            </PText>
          </div>
          <div className="aboutSection__buttons">
            <Button btnText="Read More" btnLink="/about" outline />
            <Button btnText="Check My Design" btnLink="/design" />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
