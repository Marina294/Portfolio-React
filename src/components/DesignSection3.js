import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import DesignInfo from '../assets/data/design';
import DesignItem from './DesignItem';
import Button from './Button';

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
  }
  .worksSection__button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
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
      <div className="worksSection__button">
        <Button btnText="Check All Design" btnLink="/design" />
      </div>
    </DesignStyle>
  );
}
