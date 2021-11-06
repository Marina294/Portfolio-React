import React from 'react';
import styled from 'styled-components';
import PText from '../common/PText';
import WorkImg1 from '../../assets/images/w-oa-1.webp';
import WorkImg2 from '../../assets/images/w-oa-2.webp';
import WorkImg3 from '../../assets/images/w-oa-3.webp';
import WorkImg4 from '../../assets/images/w-oa-4.webp';

const OnlineAdsStyles = styled.div`
  padding: 5rem 0 0 0;
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

export default function OnlineAds() {
  return (
    <OnlineAdsStyles id="onlineAds">
      <div className="container">
        <div>
          <div>
            <h2 className="section__heading">Online Ads</h2>
            <h4 className="works__subheading">
              Online advertisements for Social media
            </h4>
            <div className="works__info">
              <PText>
                On Instagram and facebook. In charge of design, and art
                direction.
              </PText>
              <div className="works__infoDetail">
                <br /> Client: samsung, Rakuten, Rotte <br /> Date: 2018 <br />
                Work: Design <br /> Software: Photoshop, Illustorator
              </div>
            </div>
          </div>
          <div className="workItem__img">
            <img src={WorkImg1} alt="work img" />
            <img src={WorkImg2} alt="work img" />
            <img src={WorkImg3} alt="work img" />
            <img src={WorkImg4} alt="work img" />
          </div>
        </div>
      </div>
    </OnlineAdsStyles>
  );
}
