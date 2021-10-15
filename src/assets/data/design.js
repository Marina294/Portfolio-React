import { v4 as uuidv4 } from 'uuid';
import CalculatorImg from '../images/calculator.jpg';
import RockPaperMeowImg from '../images/rock.jpg';
import WhatTOCookTodayImg from '../images/cook.jpg';
import CheckWorldTimeImg from '../images/clock.jpg';

const design = [
  {
    id: uuidv4(),
    name: 'Web Design',
    desc: '',
    link: '#home',
    img: CheckWorldTimeImg,
  },
  {
    id: uuidv4(),
    name: 'What To Cook Today',
    desc:
      'An app for searching food recipe. It Help ideas of your meal today. Responsive design.',
    link: 'https://whattocooktoday.netlify.app/',
    img: WhatTOCookTodayImg,
  },
  {
    id: uuidv4(),
    name: 'Rock Paper Meow',
    desc: 'Rock paper scissors game with cat paws. Responsive design.',
    link: 'https://rock-paper-meow.netlify.app/',
    img: RockPaperMeowImg,
  },
  {
    id: uuidv4(),
    name: 'apple Calculator',
    desc:
      'An app for calculation. It will change to iOS and MacOS design by responsive.',
    link: 'https://calculator-clone-apple.netlify.app/',
    img: CalculatorImg,
  },
];

export default design;
