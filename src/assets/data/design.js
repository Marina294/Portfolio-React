import { v4 as uuidv4 } from 'uuid';
import OnlineAdsImg from '../images/l-onlineads.webp';
import WebDesignImg from '../images/l-website.jpg';
import CatalogImg from '../images/l-catalogdesign.webp';
import MagazineImg from '../images/l-magazinedesign.webp';
import PromotionalImg from '../images/l-promotional.webp';

const design = [
  {
    id: uuidv4(),
    name: 'Web Design',
    link: '/Design#webDesign',
    img: WebDesignImg,
  },
  {
    id: uuidv4(),
    name: 'Online Ads',
    link: '/Design#onlineAds',
    img: OnlineAdsImg,
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
    link: '/Design#promotional',
    img: PromotionalImg,
  },
];

export default design;
