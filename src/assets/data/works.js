import { v4 as uuidv4 } from 'uuid';
import DrawingTimeImg from '../images/work1.png';

const works = [
  {
    id: uuidv4(),
    name: 'Drawing Time!',
    desc: 'An application to Draw illustration. Desktop Only.',
    link: 'https://drawing-time.netlify.app/',
    img: DrawingTimeImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    link: 'https://www.linkedin.com/in/marina-yamamoto-558276128/',
    img: DrawingTimeImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    link: 'https://www.linkedin.com/in/marina-yamamoto-558276128/',
    img: DrawingTimeImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    link: 'https://www.linkedin.com/in/marina-yamamoto-558276128/',
    img: DrawingTimeImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    link: 'https://www.linkedin.com/in/marina-yamamoto-558276128/',
    img: DrawingTimeImg,
  },
];

export default works;
