import { v4 as uuidv4 } from 'uuid';
import CalculatorImg from '../images/calculator.jpg';
import RockPaperMeowImg from '../images/rock.jpg';
import WhatTOCookTodayImg from '../images/cook.jpg';
import CheckWorldTimeImg from '../images/clock.jpg';

const webdesign = [
  {
    id: uuidv4(),
    img: CheckWorldTimeImg,
    desc: 'aadfsdfsdfsdfsd',
  },
  {
    id: uuidv4(),
    img: WhatTOCookTodayImg,
  },
  {
    id: uuidv4(),
    img: RockPaperMeowImg,
  },
  {
    id: uuidv4(),
    img: CalculatorImg,
  },
];

export default webdesign;
