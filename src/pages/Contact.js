import React from 'react';
import styled from 'styled-components';
import { ImLinkedin, ImGithub } from 'react-icons/im';
import SectionTitle from '../components/common/SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 12rem 0;
  height: 90vh;
  min-height: 100px;
  .contactBanner {
    &__wrapper {
      text-align: center;
    }
    &__p {
      font-size: 2.2rem;
      margin-bottom: 4.5rem;
    }
  }
  .sns-icon {
    padding: 1.8rem;
    align-items: center;
  }
  svg {
    width: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner {
      &__heading {
        font-size: 2.8rem;
      }
      &__p {
        margin-bottom: 4.5rem;
        font-size: 1.8rem;
      }
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
