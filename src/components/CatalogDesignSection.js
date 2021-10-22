import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import WorkImg1 from '../assets/images/w-catalog1.webp';
import WorkImg2 from '../assets/images/w-catalog2.webp';
import WorkImg3 from '../assets/images/w-catalog3.webp';
import WorkImg4 from '../assets/images/w-catalog4.webp';

const CatalogDesignStyles = styled.div`
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
  .works__infoDetail-2line {
    display: flex;
    justify-content: space-around;
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
  span {
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .works__infoDetail-2line {
      display: block;
      justify-content: space-around;
    }
    .works__infoDetail {
      padding: 0rem;
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

export default function CatalogDesign() {
  return (
    <CatalogDesignStyles id="catalogDesign">
      <div className="container">
        <div>
          <div>
            <h2 className="webSection__heading">Catalog Design</h2>
            <h4 className="works__subheading">Product Catalogs</h4>
            <div className="works__info">
              <PText>
                Renewal of the corporate website. I am in charge of page
                composition, composition, corporate color proposals, and
                illustration production.
              </PText>
              <div className="works__infoDetail-2line">
                <div className="works__infoDetail">
                  <br /> Client: Mercedes-Benz <br /> Date: 08/2013 <br />
                  Work: Design
                </div>
                <div className="works__infoDetail">
                  <br /> Client: Fujitsu <br /> Date: 07/2013 <br />
                  Work: Design
                </div>
              </div>
              {/* <div className="works__infoDetail">
                <br />
                <span>Client:</span> Mercedes-Benz &nbsp;&nbsp;
                <span>Date:</span> 2013 &nbsp;&nbsp;<span>Work:</span>
                Design
              </div>
              <div className="works__infoDetail">
                <br />
                <span>Client:</span> Fujitsu &nbsp;&nbsp;<span>Date:</span> 2014
                &nbsp;&nbsp;<span>Work:</span>
                Design
              </div> */}
            </div>
          </div>
          <div className="workItem__img">
            <img src={WorkImg2} alt="work img" />
            <img src={WorkImg1} alt="work img" />
            <img src={WorkImg4} alt="work img" />
            <img src={WorkImg3} alt="work img" />
          </div>
        </div>
      </div>
    </CatalogDesignStyles>
  );
}
