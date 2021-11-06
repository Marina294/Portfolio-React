import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import PText from './common/PText';
import SectionTitle from './common/SectionTitle';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    align-items: center;
    text-align: center;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection {
      & {
        width: 100%;
      }
      &__buttons {
        flex-direction: column;
        gap: 0rem;
        .button-wrapper,
        a {
          width: 100%;
          text-align: center;
        }
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
              Hello! I've worked as a graphic designer for 9+ years and
              currently working as a web designer and front end developer for 2+
              years. I have experience collaborating with external teams such as
              marketing, product and management to plan, strategize and execute
              features.
            </PText>
          </div>
          <div className="aboutSection__buttons">
            <Button btnText="Check My Designs" btnLink="/design" />
            <Button btnText="About" btnLink="/about" outline />
          </div>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
