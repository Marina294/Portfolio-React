import React from 'react';
import styled from 'styled-components';
// import PText from '../../common/PText';
// import WorkImg1 from '../../../assets/images/w-web1.jpg';
import WorkImg1Zoom from '../../../assets/images/w-web1-2.jpg';
// import WorkImg2 from '../../../assets/images/w-web2.jpg';

const WebDesignStyles = styled.div`
  // padding: 0;
  // .container {
  //   align-items: center;
  //   justify-content: flex-start;
  //   text-align: center;
  // }
  // .works__subheading {
  //   margin-bottom: 2rem;
  //   span {
  //     background-color: var(--additional);
  //     padding: 0.5rem;
  //     border-radius: 8px;
  //   }
  // }
  // .works__heading {
  //   margin-bottom: 1rem;
  // }
  // .works__info {
  //   margin-bottom: 2rem;
  //   .para {
  //     max-width: 600px;
  //   }
  // }
  // .works__infoDetail {
  //   font-size: 1.4rem;
  //   line-height: 1.8em;
  // }
  // .works__info__item {
  //   margin-bottom: 10rem;
  // }
  // .webSection__heading {
  //   margin-bottom: 3rem;
  // }
  // .workItem__img {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-around;
  //   img {
  //     width: 45%;
  //     margin-bottom: 5rem;
  //     border: 0.5px solid var(--gray-2);
  //   }
  // }

  // @media only screen and (max-width: 768px) {
  //   padding: 2.5rem 0;
  //   .works__2ndwork {
  //     margin-top: 3rem;
  //   }
  //   .workItem__img {
  //     display: flex;
  //     flex-wrap: wrap;
  //     img {
  //       margin-bottom: 2rem;
  //       width: 100%;
  //     }
  //   }
  // }
`;

export default function WebDesign() {
  return (
    <WebDesignStyles>
      <div className="container">
        <img src={WorkImg1Zoom} alt="zoom img" />
      </div>
    </WebDesignStyles>
  );
}
