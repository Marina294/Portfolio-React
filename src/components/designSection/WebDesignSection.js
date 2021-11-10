import React from 'react';
import styled from 'styled-components';
import PText from '../common/PText';
import WorkImg3 from '../../assets/images/w-paidy-website1.webp';
import WorkImg4 from '../../assets/images/w-paidy-website2.webp';

const WebDesignStyles = styled.div`
  padding: 10rem 0 0 0;
  .container {
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .section__heading {
    margin-bottom: 3rem;
  }
  .works {
    &__subheading {
      margin-bottom: 2rem;
    }
    &__info {
      margin-bottom: 2rem;
      .para {
        max-width: 600px;
      }
    }
    &__infoDetail {
      font-size: 1.3rem;
      line-height: 1.8em;
    }
  }
  .workItem__img {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img {
      width: 45%;
      margin-bottom: 5rem;
      border: 0.1px solid var(--gray-2);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 0;

    .workItem__img {
      display: flex;
      flex-wrap: wrap;
      img {
        margin-bottom: 2rem;
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
            <h2 className="section__heading">Web Design</h2>
            <h4 className="works__subheading">
              Redesign the Corprate website / Company Branding
            </h4>
            <div className="works__info">
              <PText>
                Rebrand deferred payment service's corporate website. In charge
                of page composition, corporate color proposals, illustration
                production. Also developed E-mail magazine templates.
              </PText>
              <div className="works__infoDetail">
                <br /> Client: Paidy Co., Ltd. <br /> Date: 4/2019 <br /> Work:
                Concept, Design, branding <br /> Software: Sketch, Abstract
              </div>
            </div>
          </div>
          <div className="workItem__img">
            <img src={WorkImg3} alt="work img" />
            <img src={WorkImg4} alt="work img" />
          </div>
        </div>
      </div>
    </WebDesignStyles>
  );
}
