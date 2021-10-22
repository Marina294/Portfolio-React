import { v4 as uuidv4 } from 'uuid';
import DrawingTimeImg from '../images/dev-draw.png';
import CalculatorImg from '../images/dev-calculator.png';
import RockPaperMeowImg from '../images/dev-rockpapermeow.png';
import WhatTOCookTodayImg from '../images/dev-recipe.png';
import CheckWorldTimeImg from '../images/dev-world-clock.png';

const dev = [
  {
    id: uuidv4(),
    name: 'Check World Time',
    desc:
      'A world clcok app. Search city name or time zone. You can move the list sort and change background every time. Built with ReactJS.',
    link: 'https://check-world-time.netlify.app/',
    img: CheckWorldTimeImg,
    gitLink: 'https://github.com/Marina294/World-clock-react',
  },
  {
    id: uuidv4(),
    name: 'What To Cook Today',
    desc:
      'An app for searching food recipe. It Help ideas of your meal today. Built with ReactJS.',
    link: 'https://whattocooktoday.netlify.app/',
    img: WhatTOCookTodayImg,
    gitLink: 'https://github.com/Marina294/whatToCookToday',
  },
  {
    id: uuidv4(),
    name: 'Rock Paper Meow',
    desc: 'Rock paper scissors game with cat paws. Built with ReactJS.',
    link: 'https://rock-paper-meow.netlify.app/',
    img: RockPaperMeowImg,
    gitLink: 'https://github.com/Marina294/Rock-Paper-Scissors-app',
  },
  {
    id: uuidv4(),
    name: 'apple Calculator',
    desc:
      'An app for calculation. It will change to iOS and MacOS design by responsive. Built with ReactJS.',
    link: 'https://calculator-clone-apple.netlify.app/',
    img: CalculatorImg,
    gitLink: 'https://github.com/Marina294/Calculator-app',
  },
  {
    id: uuidv4(),
    name: 'Drawing Time!',
    desc:
      'An app to draw illustration. You can change Pen size and color, also easy to erase. Built with Canvas, Desktop Only.',
    link: 'https://drawing-time.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Drawing-APP',
  },
];

export default dev;
