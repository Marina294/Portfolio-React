import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/common/SectionTitle';
import DesignInfo from '../assets/data/design';
import DesignItem from '../components/designSection/DesignItem';
import WebDesignSection from '../components/designSection/WebDesignSection';
import OnlineAdsSection from '../components/designSection/OnlineAdsSection';
import CatalogDesignSection from '../components/designSection/CatalogDesignSection';
import MagazineDesignSection from '../components/designSection/MagazineDesignSection';
import PromotionalSection from '../components/designSection/PromotionalSection';
import PickupSection from '../components/designSection/PickupSection';
import ContactBanner from '../components/ContactBanner';

const DesignStyle = styled.div`
  padding: 12rem 0 0 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .white__section {
    padding: 5rem 0 5rem 0;
    margin: 10rem 0 0 0;
    background-color: var(--white);
  }
  .section__heading {
    margin-top: 2rem;
    text-align: center;
  }
  .works__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2.5rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 8rem 0 0 0;
    .white__section {
      padding: 2rem 0 4rem 0;
      margin: 2rem 0 2rem 0;
      background-color: var(--white);
    }
  }
`;
export default function Design() {
  const [worksData] = useState(DesignInfo);
  return (
    <DesignStyle>
      <SectionTitle heading="Design Work" />
      <PickupSection />
      <div className="white__section">
        <div className="container">
          <h4 className="section__heading">See More Work</h4>
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
      </div>
      <WebDesignSection />
      <OnlineAdsSection />
      <CatalogDesignSection />
      <MagazineDesignSection />
      <PromotionalSection />
      <ContactBanner />
    </DesignStyle>
  );
}
