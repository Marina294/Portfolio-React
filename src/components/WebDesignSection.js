import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import WorkImg1 from '../assets/images/w-paidy-website1.jpg';
import WorkImg2 from '../assets/images/w-paidy-website2.jpg';

const WebDesignStyles = styled.div`
  padding: 10rem 0;
  .container {
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .works__subheading {
    margin-bottom: 2rem;
    span {
      background-color: var(--additional);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .works__heading {
    margin-bottom: 1rem;
  }
  .works__info {
    margin-bottom: 4rem;
    .para {
      max-width: 600px;
    }
  }
  .works__infoDetail {
    font-size: 1.4rem;
    line-height: 1.8em;
  }
  .works__info__item {
    margin-bottom: 10rem;
  }
  .webSection__heading {
    margin-bottom: 3rem;
  }
  .works__allItems {
    // display: flex;
    // grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    // gap: 2rem;
    // margin-top: 5rem;
  }
  .workItem__img {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img {
      width: 45%;
      margin-bottom: 5rem;
      border: 0.5px solid var(--gray-2);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .workItem__img {
      display: flex;
      flex-wrap: wrap;
      img {
        padding: 0.5rem;
        width: 100%;
      }
    }
  }
`;

export default function WebDesign() {
  return (
    <WebDesignStyles id="webDesign">
      <div className="container">
        <div>
          <div>
            <h2 className="webSection__heading">Web Design</h2>
            <h4 className="works__subheading">
              Renewal the Corprate website / Company Branding
            </h4>
            <div className="works__info">
              <PText>
                Renewal of the corporate website. I am in charge of page
                composition, composition, corporate color proposals, and
                illustration production.
              </PText>
              <div className="works__infoDetail">
                <br /> Client: Paidy Co., Ltd. <br /> Date: 4/2019 <br /> Work:
                Concept, Design
              </div>
            </div>
          </div>
          <div className="workItem__img">
            <img src={WorkImg1} alt="work img" />
            <img src={WorkImg2} alt="work img" />
          </div>
        </div>
      </div>
    </WebDesignStyles>
  );
}
