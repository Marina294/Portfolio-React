import { createGlobalStyle } from 'styled-components';
// import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
// import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
// import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

// import KarlaBold from '../assets/fonts/Karla-Bold.ttf';
// import KarlaSemiBold from '../assets/fonts/Karla-SemiBold.ttf';
// import KarlaRegular from '../assets/fonts/Karla-Regular.ttf';

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
  h1,h2,h3,h4,h5,h6{
    font-family: 'Urbanist';
    font-weight: 700;
  }

`;

export default Typography;
