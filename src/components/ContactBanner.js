import React from 'react';
import styled from 'styled-components';
import { ImLinkedin, ImGithub } from 'react-icons/im';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--white);
  .contactBanner {
    &__wrapper {
      padding: 5rem 0rem;
      text-align: center;
      background-color: var(--white);
    }
    &__heading {
      margin-bottom: 4rem;
    }
    &__p {
      margin-bottom: 4.5rem;
      font-size: 2rem;
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
    .contactBanner__p {
      margin-bottom: 4.5rem;
      font-size: 1.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles id="contact">
      <div className="container">
        <div className="contactBanner__wrapper">
          <h3 className="contactBanner__heading">Contact Me</h3>
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
    </ContactBannerStyles>
  );
}
