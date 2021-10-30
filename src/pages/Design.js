import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import DesignInfo from '../assets/data/design';
import DesignItem from '../components/DesignItem';
import WebDesignSection from '../components/designSection/WebDesignSection';
import OnlineAdsSection from '../components/designSection/OnlineAdsSection';
import CatalogDesignSection from '../components/designSection/CatalogDesignSection';
import MagazineDesignSection from '../components/designSection/MagazineDesignSection';
import PromotionalSection from '../components/designSection/PromotionalSection';
import ContactBanner from '../components/ContactBanner';

const DesignStyle = styled.div`
  padding: 12rem 0 0 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .works__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2.5rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 8rem 0 0 0;
  }
`;
export default function Design() {
  const [worksData] = useState(DesignInfo);
  return (
    <DesignStyle>
      <div className="container">
        <SectionTitle heading="Design Work" />
        <div className="works__allItems">
          {worksData.map((item) => (
            <DesignItem
              key={item.id}
              title={item.name}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <OnlineAdsSection />
      <WebDesignSection />
      <CatalogDesignSection />
      <MagazineDesignSection />
      <PromotionalSection />
      <ContactBanner />
    </DesignStyle>
  );
}
