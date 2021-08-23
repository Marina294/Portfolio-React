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
    desc:
      'An app for calculation. It will change to iOS and MacOS design by responsive.',
    link: 'https://calculator-clone-apple.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Calculator-app',
  },
  {
    id: uuidv4(),
    name: 'Rock Paper Meow',
    desc: 'Rock paper scissors game with cat paws. Responsive design.',
    link: 'https://rock-paper-meow.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/Rock-Paper-Scissors-app',
  },
  {
    id: uuidv4(),
    name: 'What To Cook Today',
    desc:
      'An app for searching food recipe. It Help ideas of your meal today. Responsive design.',
    link: 'https://whattocooktoday.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/whatToCookToday',
  },
  {
    id: uuidv4(),
    name: 'Check World Time',
    desc:
      'A world clcok app. Search city name or time zone. You can move the list sort and change background every time. Responsive design.',
    link: 'https://check-world-time.netlify.app/',
    img: DrawingTimeImg,
    gitLink: 'https://github.com/Marina294/World-clock-react',
  },
];

export default works;
