import React from 'react';
import styled from 'styled-components';
import { ImLinkedin, ImGithub } from 'react-icons/im';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--white);
  .contactBanner__wrapper {
    background-color: var(--white);
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    margin-bottom: 4rem;
  }
  .contactBanner__p {
    font-size: 2rem;
    margin-bottom: 4.5rem;
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
      font-size: 1.8rem;
      margin-bottom: 4.5rem;
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
