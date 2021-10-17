import React, { useState } from 'react';
import styled from 'styled-components';
import PText from './PText';
import DesignInfo from '../assets/data/onlineads';
import DesignItem from './WebDesignItem';

const OnlineAdsStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  // .top-section {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   gap: 2rem;
  // }
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
    display: grid;
    grid-column: 1fr 3fr;
    grid-gap: 10px;
    margin-top: 5rem;
  }

  // .works__allItems {
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  //   gap: 2rem;
  //   margin-top: 5rem;
  // }
  // .works__allItems {
  //   display: grid;
  //   grid-template-columns: repeat(2, minmax(100px, 1fr));
  //   gap: 2rem;
  //   margin-top: 5rem;
  // }
  
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    // .top-section {
    //   flex-direction: column;
    //   gap: 5rem;
    }
  }
`;

export default function OnlineAds() {
  const [worksData] = useState(DesignInfo);
  return (
    <OnlineAdsStyles id="onlineAds">
      <div className="container">
        <div className="top-section">
          <div className="left">
            <h2 className="webSection__heading">Online Ads</h2>
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
          <div className="works__allItems">
            {worksData.map((item) => (
              <DesignItem key={item.id} img={item.img} />
            ))}
          </div>
        </div>
      </div>
    </OnlineAdsStyles>
  );
}
