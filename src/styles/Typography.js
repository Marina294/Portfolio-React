import { createGlobalStyle } from 'styled-components';

import CaveatBold from '../assets/fonts/Caveat-Bold.ttf';
import CaveatSemiBold from '../assets/fonts/Caveat-SemiBold.ttf';
import CaveatRegular from '../assets/fonts/Caveat-Regular.ttf';

import UrbanistBold from '../assets/fonts/Urbanist-Bold.ttf';
import UrbanistSemiBold from '../assets/fonts/Urbanist-SemiBold.ttf';
import UrbanistRegular from '../assets/fonts/Urbanist-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Caveat';
    font-weight: 400;
    src: url(${CaveatRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Caveat';
    font-weight: 600;
    src: url(${CaveatSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Caveat';
    font-weight: 700;
    src: url(${CaveatBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Urbanist';
    font-weight: 400;
    src: url(${UrbanistRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Urbanist';
    font-weight: 600;
    src: url(${UrbanistSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Urbanist';
    font-weight: 700;
    src: url(${UrbanistBold});
    font-style: normal;
  }
  html{
    font-family: 'Urbanist';    
    font-weight: 400;
    color: var(--gray-1);
  }
  *{
    font-family: 'Urbanist';
    font-weight: 400;
    color: var(--gray-1);
  }
  h3,h4,h5,h6{
    font-family: 'Urbanist';
    font-weight: 700;
  }
  h1,h2{
    font-family: Caveat;
  }
  h1 {
    font-weight: 500;
    font-size: 6.5rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    h1 {
      font-size: 4.5rem;
    }
  }
  h2{
    font-size: 3.8rem;
    margin-bottom: 4rem;
  }
  h3{
    font-size: 2.2rem;
    font-family: 'Urbanist';
    font-weight: 600;
  }
  p{
    font-size: 1.8rem;
    line-height: 1.65em;
    letter-spacing: 0.05rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.7rem;
  }
`;

export default Typography;
