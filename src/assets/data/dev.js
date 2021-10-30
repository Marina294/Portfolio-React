import { v4 as uuidv4 } from 'uuid';
import DrawingTimeImg from '../images/dev-draw.webp';
import CalculatorImg from '../images/dev-calculator.webp';
import RockPaperMeowImg from '../images/dev-rockpapermeow.webp';
import WhatTOCookTodayImg from '../images/dev-recipe.webp';
import CheckWorldTimeImg from '../images/dev-world-clock.webp';

const dev = [
  {
    id: uuidv4(),
    name: 'Drawing Time!',
    desc:
      'An app to draw illustration. You can change Pen size, color, and easy to erase. Built with Canvas.',
    link: 'https://drawing-time.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Drawing-APP',
  },
  {
    id: uuidv4(),
    name: 'What To Cook Today',
    desc:
      'An app for searching food recipe. It Help ideas for your meal today. Built with ReactJS.',
    link: 'https://whattocooktoday.netlify.app/',
    img: WhatTOCookTodayImg,
    gitLink: 'https://github.com/Marina294/whatToCookToday',
  },
  {
    id: uuidv4(),
    name: 'Apple Calculator',
    desc:
      'An app for calculation. Responsive design based on apple iOS and MacOS. Built with ReactJS.',
    link: 'https://calculator-clone-apple.netlify.app/',
    img: CalculatorImg,
    gitLink: 'https://github.com/Marina294/Calculator-app',
  },
  {
    id: uuidv4(),
    name: 'Rock Paper Meow',
    desc:
      'An app to play rock paper scissors game with cat paws. Responsive design. Built with ReactJS.',
    link: 'https://rock-paper-meow.netlify.app/',
    img: RockPaperMeowImg,
    gitLink: 'https://github.com/Marina294/Rock-Paper-Scissors-app',
  },
  {
    id: uuidv4(),
    name: 'Check World Time',
    desc:
      'A world clcok app to search city name and time zones. Responsive design. Built with ReactJS.',
    link: 'https://check-world-time.netlify.app/',
    img: CheckWorldTimeImg,
    gitLink: 'https://github.com/Marina294/World-clock-react',
  },
];

export default dev;
