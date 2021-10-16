import React, { useState } from 'react';
import styled from 'styled-components';
// import { HashLink } from 'react-router-hash-link';
import SectionTitle from '../components/SectionTitle';
import DesignInfo from '../assets/data/design';
import DesignItem from '../components/DesignItem';
import WebDesignSection from '../components/WebDesignSection';
import OnlineAdsSection from '../components/OnlineAdsSection';
import CatalogDesignSection from '../components/CatalogDesignSection';
import ArtDirection from '../components/ArtDirectionSection';

const DesignStyle = styled.div`
  padding: 10rem 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .works__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
    text-align
  }
`;
export default function Design() {
  const [worksData] = useState(DesignInfo);
  return (
    <DesignStyle>
      <div className="container">
        <SectionTitle heading="Design Works" />
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
      <WebDesignSection />
      <OnlineAdsSection />
      <CatalogDesignSection />
      <ArtDirection />
    </DesignStyle>
  );
}
