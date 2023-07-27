import React from 'react';
import styled from 'styled-components';
import PText from '../components/common/PText';
import AboutImg from '../assets/images/about1.webp';
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
              <h4 className="about__subheading">UI/UX designer</h4>
              <div className="about__info">
                <PText>
                  My strengths lie in my experience working on various projects,
                  from print design to online services.
                  <br />
                  I’ve been working as a UI/UX designer for 2 years and am in
                  charge of creating a new SaaS product for HR management. Also,
                  I've worked as a web and graphic designer for 10 years in
                  design agencies and a fintech company.
                  <br />
                  From that experience, I am good at capturing the client's
                  intentions and smoothly cooperating with all teams regardless
                  of department.
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
