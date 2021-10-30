import React from 'react';
import styled from 'styled-components';
import { ImLinkedin, ImGithub } from 'react-icons/im';
import SectionTitle from './common/SectionTitle';

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
        <SectionTitle heading="Contact Me" />
        <div className="contactBanner__wrapper">
          <p className="contactBanner__p">marina.yamamoto8@gmail.com</p>
          <a
            className="sns-icon"
            href="https://www.linkedin.com/in/marina-yamamoto-558276128"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin style={{ fill: 'var(--additional)' }} />
          </a>
          <a
            className="sns-icon"
            href="https://github.com/Marina294"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub style={{ fill: 'var(--additional)' }} />
          </a>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
