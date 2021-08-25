import { v4 as uuidv4 } from 'uuid';
import DrawingTimeImg from '../images/drawing.jpg';
import CalculatorImg from '../images/calculator.jpg';
import RockPaperMeowImg from '../images/rock.jpg';
import WhatTOCookTodayImg from '../images/cook.jpg';
import CheckWorldTimeImg from '../images/clock.jpg';

const works = [
  {
    id: uuidv4(),
    name: 'Drawing Time!',
    desc: 'An app to draw illustration. Made by Canvas, Desktop Only.',
    link: 'https://drawing-time.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Drawing-APP',
  },
  {
    id: uuidv4(),
    name: 'apple Calculator',
    desc:
      'An app for calculation. It will change to iOS and MacOS design by responsive.',
    link: 'https://calculator-clone-apple.netlify.app/',
    img: CalculatorImg,
    gitLink: 'https://github.com/Marina294/Calculator-app',
  },
  {
    id: uuidv4(),
    name: 'Rock Paper Meow',
    desc: 'Rock paper scissors game with cat paws. Responsive design.',
    link: 'https://rock-paper-meow.netlify.app/',
    img: RockPaperMeowImg,
    gitLink: 'https://github.com/Marina294/Rock-Paper-Scissors-app',
  },
  {
    id: uuidv4(),
    name: 'What To Cook Today',
    desc:
      'An app for searching food recipe. It Help ideas of your meal today. Responsive design.',
    link: 'https://whattocooktoday.netlify.app/',
    img: WhatTOCookTodayImg,
    gitLink: 'https://github.com/Marina294/whatToCookToday',
  },
  {
    id: uuidv4(),
    name: 'Check World Time',
    desc:
      'A world clcok app. Search city name or time zone. You can move the list sort and change background every time. Responsive design.',
    link: 'https://check-world-time.netlify.app/',
    img: CheckWorldTimeImg,
    gitLink: 'https://github.com/Marina294/World-clock-react',
  },
];

export default works;
