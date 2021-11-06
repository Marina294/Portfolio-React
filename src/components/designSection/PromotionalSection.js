import React from 'react';
import styled from 'styled-components';
import PText from '../common/PText';
import WorkImg1 from '../../assets/images/w-event1.webp';
import WorkImg2 from '../../assets/images/w-event2.webp';
import WorkImg3 from '../../assets/images/w-event3.webp';
import WorkImg4 from '../../assets/images/w-event4.webp';

const PromotionalSectionStyles = styled.div`
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

export default function PromotionalSection() {
  return (
    <PromotionalSectionStyles id="promotional">
      <div className="container">
        <div>
          <div>
            <h2 className="section__heading">Promotional Materials</h2>
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
