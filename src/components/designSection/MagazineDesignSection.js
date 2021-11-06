import React from 'react';
import styled from 'styled-components';
import PText from '../common/PText';
import WorkImg1 from '../../assets/images/w-magazine1.webp';
import WorkImg2 from '../../assets/images/w-magazine2.webp';
import WorkImg3 from '../../assets/images/w-magazine3.webp';
import WorkImg4 from '../../assets/images/w-magazine4.webp';

const MagazineDesignStyles = styled.div`
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
    &__infoDetail-2line {
      display: flex;
      justify-content: space-around;
    }
    &__infoDetail {
      font-size: 1.4rem;
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
      border: 0.5px solid var(--gray-2);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .works {
      &__infoDetail-2line {
        display: block;
        justify-content: space-around;
      }
      &__infoDetail {
        padding: 0rem;
      }
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

export default function MagazineDesign() {
  return (
    <MagazineDesignStyles id="magazineDesign">
      <div className="container">
        <div>
          <div>
            <h2 className="section__heading">Magazine Design</h2>
            <h4 className="works__subheading">
              The Magazine Association of Nail Artists and Food Magazine
            </h4>
            <div className="works__info">
              <PText>
                In charge of cover art and page design in the Nail artists
                magazine. Designed page layout in food magazine.
              </PText>
              <div className="works__infoDetail-2line">
                <div className="works__infoDetail">
                  <br /> Client: Japan Nailist Association
                  <br /> Date: 04/2017 <br /> Work: Art Direction, Design <br />
                  Software: Photoshop, InDesign
                </div>
                <div className="works__infoDetail">
                  <br /> Client: Hitosara <br /> Date: 02/2014 <br />
                  Work: Design <br />
                  Software: Photoshop, InDesign
                </div>
              </div>
            </div>
          </div>
          <div className="workItem__img">
            <img src={WorkImg1} alt="work img" />
            <img src={WorkImg3} alt="work img" />
            <img src={WorkImg2} alt="work img" />
            <img src={WorkImg4} alt="work img" />
          </div>
        </div>
      </div>
    </MagazineDesignStyles>
  );
}
