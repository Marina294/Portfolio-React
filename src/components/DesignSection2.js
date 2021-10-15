import React from 'react';
import styled from 'styled-components';
import { ImLinkedin } from 'react-icons/im';
import SectionTitle from './SectionTitle';
import WorkImg from '../assets/images/drawing.jpg';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  height: 100vh;
  min-height: 100px;
  .contactBanner__wrapper {
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 3.8rem;
    margin-bottom: 4rem;
  }
  .contactBanner__p {
    font-size: 2.2rem;
    margin-bottom: 4.5rem;
  }
  .sns-icon {
    color: var(--white);
    padding: 1.8rem;
    align-items: center;
  }
  svg {
    width: 3rem;
  }

  .example {
    position: relative;
  }
  .example p {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
  .example img {
    width: 20%;
  }

  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
    .contactBanner__p {
      font-size: 1.8rem;
      margin-bottom: 4.5rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Design" />
        <div className="designType__wrapper">
          <div className="example">
            <img src={WorkImg} alt="Design Type" />
            <p>SUNSET</p>
          </div>
          <p className="contactBanner__p">marina.yamamoto8@gmail.com</p>
          <a
            className="sns-icon"
            href="https://www.linkedin.com/in/marina-yamamoto-558276128"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
