import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import SectionTitle from './common/SectionTitle';
import Button from './common/Button';
import WorkImg1 from '../assets/images/l-webdesign.webp';
import WorkImg2 from '../assets/images/l-onlineads.webp';
import WorkImg3 from '../assets/images/l-catalogdesign.webp';
import WorkImg4 from '../assets/images/l-magazinedesign.webp';
import WorkImg5 from '../assets/images/l-promotional.webp';
import WorkImg6 from '../assets/images/l-6.jpg';
import WorkImg7 from '../assets/images/l-7.jpg';
import WorkImg8 from '../assets/images/l-8.jpg';

const DesignStyle = styled.div`
  padding: 10rem 0;
  .workItem__img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      padding: 0.4rem;
      width: 25%;
    }
  }
  .worksSection__button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .workItem__img {
      display: flex;
      flex-wrap: wrap;
      img {
        width: 50%;
      }
    }
    .worksSection__button {
      margin-top: 2rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function Design() {
  return (
    <DesignStyle>
      <div className="container">
        <SectionTitle heading="Design Work" />
        <HashLink to="/Design">
          <div className="workItem__img">
            <img src={WorkImg1} alt="work img" />
            <img src={WorkImg2} alt="work img" />
            <img src={WorkImg3} alt="work img" />
            <img src={WorkImg4} alt="work img" />
            <img src={WorkImg5} alt="work img" />
            <img src={WorkImg6} alt="work img" />
            <img src={WorkImg7} alt="work img" />
            <img src={WorkImg8} alt="work img" />
          </div>
        </HashLink>
        <div className="worksSection__button">
          <Button btnText="See More" btnLink="/design" />
        </div>
      </div>
    </DesignStyle>
  );
}
