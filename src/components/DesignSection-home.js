import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import SectionTitle from './common/SectionTitle';
import Button from './common/Button';
import WorkImg1 from '../assets/images/w-home1.webp';
import WorkImg2 from '../assets/images/w-home2.webp';

const DesignStyle = styled.div`
  padding: 10rem 0;
  h4 {
    font-weight: 600;
  }
  .container {
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .workItem__img {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img {
      width: 45%;
      margin-bottom: 5rem;
      filter: drop-shadow(0px 0px 4px rgba(154, 134, 227, 0.2));
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .workItem__img {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      img {
        width: 100%;
        margin-bottom: 2rem;
        filter: drop-shadow(0px 0px 4px rgba(154, 134, 227, 0.2));
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
          </div>
        </HashLink>
        <div className="worksSection__button">
          <Button btnText="See More" btnLink="/design" />
        </div>
      </div>
    </DesignStyle>
  );
}
