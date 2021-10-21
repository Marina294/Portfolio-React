import { v4 as uuidv4 } from 'uuid';
import OnlineAdsImg from '../images/onlineads.jpg';
import WebDesignImg from '../images/webdesign.jpg';
import CatalogImg from '../images/catalogdesign.jpg';
import MagazineImg from '../images/magazinedesign.jpg';
import PromotionalImg from '../images/promotional.jpg';

const design = [
  {
    id: uuidv4(),
    name: 'Online Ads',
    link: '/Design#onlineAds',
    img: OnlineAdsImg,
  },
  {
    id: uuidv4(),
    name: 'Web Design',
    link: '/Design#webDesign',
    img: WebDesignImg,
  },
  {
    id: uuidv4(),
    name: 'Catalog Design',
    link: '/Design#catalogDesign',
    img: CatalogImg,
  },
  {
    id: uuidv4(),
    name: 'Magazine Design',
    link: '/Design#magazineDesign',
    img: MagazineImg,
  },
  {
    id: uuidv4(),
    name: 'Promotional materials',
    link: '/Design#eventGoods',
    img: PromotionalImg,
  },
];

export default design;
