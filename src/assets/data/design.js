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
    link: '/Design#onlineAds',
    img: WhatTOCookTodayImg,
  },
  {
    id: uuidv4(),
    name: 'Catalog Design',
    link: '/Design#catalogDesign',
    img: RockPaperMeowImg,
  },
  {
    id: uuidv4(),
    name: 'Magazine Design',
    link: '/Design#magazineDesign',
    img: CalculatorImg,
  },
  {
    id: uuidv4(),
    name: 'Train Ads',
    link: '/Design#trainAds',
    img: CalculatorImg,
  },
  {
    id: uuidv4(),
    name: 'Event Goods',
    link: '/Design#eventGoods',
    img: CalculatorImg,
  },
];

export default design;
