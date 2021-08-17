import { v4 as uuidv4 } from 'uuid';
import DrawingTimeImg from '../images/work1.png';

const works = [
  {
    id: uuidv4(),
    name: 'Drawing Time!',
    desc: 'An app to Draw illustration. Desktop Only.',
    link: 'https://drawing-time.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Drawing-APP',
  },
  {
    id: uuidv4(),
    name: 'apple Calculator',
    desc: 'An app for calculation. Responsive, MacOS and iOS clone.',
    link: 'https://calculator-clone-apple.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Calculator-app',
  },
  {
    id: uuidv4(),
    name: 'Rock Paper Meow',
    desc: 'Rock paper scissors with cats. Responsive design.',
    link: 'https://rock-paper-meow.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Rock-Paper-Scissors-app',
  },
  {
    id: uuidv4(),
    name: 'What To Cook Today',
    desc: 'An app for helping ideas of your meal today. Responsive design.',
    link: 'https://whattocooktoday.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/whatToCookToday',
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    link: 'https://www.linkedin.com/in/marina-yamamoto-558276128/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Rock-Paper-Scissors-app',
  },
];

export default works;
