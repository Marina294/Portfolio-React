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
              Hello! I have been working as a UI/UX designer for 2 years in a
              BtoB SaaS company, and also I have worked as a web/graphic
              designer for 10 years in design agencies and a fintech company.
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
