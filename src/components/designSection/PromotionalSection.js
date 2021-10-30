import React from 'react';
import styled from 'styled-components';
import PText from '../common/PText';
import WorkImg1 from '../../assets/images/w-event1.webp';
import WorkImg2 from '../../assets/images/w-event2.webp';
import WorkImg3 from '../../assets/images/w-event3.webp';
import WorkImg4 from '../../assets/images/w-event4.webp';

const PromotionalSectionStyles = styled.div`
  padding: 5rem 0;
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
    .para {
      max-width: 600px;
    }
  }
  .works__infoDetail {
    font-size: 1.4rem;
    line-height: 1.8em;
    margin-bottom: 2rem;
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

export default function PromotionalSection() {
  return (
    <PromotionalSectionStyles id="promotional">
      <div className="container">
        <div>
          <div>
            <h2 className="webSection__heading">Promotional Materials</h2>
            <h4 className="works__subheading">
              Company Calender and Snow Festival Booth
            </h4>
            <div className="works__info">
              <PText>
                Company calendar for client distribution. Only corporate colors
                are used, and the stand is made of real wood. And custom the
                background based on month. <br /> Art directed for a booth at
                Japan's largest snow festival, which over 2,700,000 visitors
                every year. I also designed the flyers and cups.
              </PText>
              <div className="works__infoDetail">
                <br /> Client: Paidy Co., Ltd. <br /> Date: 11/2018 <br /> Work:
                Concept, Design
              </div>
            </div>
          </div>
          <div className="workItem__img">
            <img src={WorkImg1} alt="work img" />
            <img src={WorkImg2} alt="work img" />
          </div>
          <div>
            <div className="works__infoDetail">
              <br /> Client: Paidy Co., Ltd. <br /> Date: 2/2019 <br /> Work:
              Concept, Art direction
            </div>
            <div className="workItem__img">
              <img src={WorkImg3} alt="work img" />
              <img src={WorkImg4} alt="work img" />
            </div>
          </div>
        </div>
      </div>
    </PromotionalSectionStyles>
  );
}
