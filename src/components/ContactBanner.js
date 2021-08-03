import React from 'react';
import styled from 'styled-components';
import { MdMailOutline } from 'react-icons/md';
import { ImLinkedin, ImGithub } from 'react-icons/im';
import ContactInfoItem from './ContactInfoItem';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--deep-dark);
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    // border-radius: 12px;
    padding: 5rem 0rem;
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
    // background-color: var(--gray-2);
    padding: 1.8rem;
    // display: flex;
    align-items: center;
    // border-radius: 50%;
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

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <h3 className="contactBanner__heading">CONTACT</h3>
          {/* <ContactInfoItem
            icon={<MdMailOutline />}
            text="marina.yamamoto8@gmail.com"
          /> */}
          {/* <a className="icon">
            <MdMailOutline />
          </a> */}
          <p className="contactBanner__p">marina.yamamoto8@gmail.com</p>
          <a
            className="sns-icon"
            href="https://www.linkedin.com/in/marina-yamamoto-558276128"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
          <a
            className="sns-icon"
            href="https://github.com/Marina294"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub />
          </a>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
