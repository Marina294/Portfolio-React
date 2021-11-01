import React from 'react';
import styled from 'styled-components';
import PText from '../common/PText';
import WorkImg1 from '../../assets/images/w-web1.jpg';
import WorkImg2 from '../../assets/images/w-web2.jpg';
import WorkImg5 from '../../assets/images/w-web3.jpg';
import WorkImg6 from '../../assets/images/w-web4.jpg';
import WorkImg3 from '../../assets/images/w-paidy-website1.webp';
import WorkImg4 from '../../assets/images/w-paidy-website2.webp';

const WebDesignStyles = styled.div`
  padding: 5rem 0;
  .container {
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
  .works__2ndwork {
    margin-top: 5rem;
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
    margin-bottom: 2rem;
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
    .works__2ndwork {
      margin-top: 3rem;
    }
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
            <h2 className="webSection__heading">Web Design</h2>
            <h4 className="works__subheading">
              Redesign the Corprate website / Company Branding
            </h4>
            <div className="works__info">
              <PText>
                Designed the corporate website. In charged of branding and
                design. Created internal company brand guide to unify brand
                awareness.
              </PText>
              <div className="works__infoDetail">
                <br /> Client: Symply Cubed Co., Ltd. <br /> Date: 5/2021 <br />
                Work: Concept, Design, branding <br /> Software: Sketch
              </div>
            </div>
          </div>
          <div className="workItem__img">
            <img src={WorkImg1} alt="work img" />
            <img src={WorkImg2} alt="work img" />
            <img src={WorkImg5} alt="work img" />
            <img src={WorkImg6} alt="work img" />
          </div>
        </div>
        <div>
          <div className="works__2ndwork">
            <div className="works__info">
              <PText>
                Rebrand the corporate website. In charge of page composition,
                corporate color proposals, illustration production. Also
                developed E-mail magazine templates.
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
