import { v4 as uuidv4 } from 'uuid';
import CalculatorImg from '../images/calculator.jpg';
import RockPaperMeowImg from '../images/rock.jpg';
import WhatTOCookTodayImg from '../images/cook.jpg';
import CheckWorldTimeImg from '../images/clock.jpg';

const design = [
  {
    id: uuidv4(),
    name: 'Web Design',
    link: '/Design#webDesign',
    img: CheckWorldTimeImg,
  },
  {
    id: uuidv4(),
    name: 'Online Ads',
    link: 'https://whattocooktoday.netlify.app/',
    img: WhatTOCookTodayImg,
  },
  {
    id: uuidv4(),
    name: 'Catalogue Design',
    link: 'https://rock-paper-meow.netlify.app/',
    img: RockPaperMeowImg,
  },
  {
    id: uuidv4(),
    name: 'Art Direction',
    link: 'https://calculator-clone-apple.netlify.app/',
    img: CalculatorImg,
  },
];

export default design;
