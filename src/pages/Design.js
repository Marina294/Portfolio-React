import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import DesignInfo from '../assets/data/design';
import DesignItem from '../components/DesignItem';
import WebdesignSection from '../components/WebdesignSection';

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
  .works__searchBar {
    position: relative;
    width: 600px;
    margin-top: 5rem;
    margin: auto;
  }
  .works__searchBar input {
    width: 100%;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    color: var(--gray-1);
    border-radius: 100px;
    outline: none;
    border: none;
  }
  .works__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .works__searchBar .searchIcon path {
    color: var(--gray-1);
  }
  @media only screen and (max-width: 768px) {
    .works__searchBar,
    .works__searchBar form,
    .works__searchBar input {
      width: 100%;
    }
  }
`;

export default function Design() {
  // const [searchText] = useState('');
  const [worksData] = useState(DesignInfo);
  // useEffect(() => {
  //   if (searchText === '') return;
  //   setDesignData(() =>
  //     DesignInfo.filter((item) =>
  //       item.name.toLowerCase().match(searchText.toLowerCase())
  //     )
  //   );
  // }, [searchText]);
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchText(e.target.value);
  //   if (!e.target.value.length > 0) {
  //     setWorksData(WorksInfo);
  //   }
  // };
  return (
    <DesignStyle>
      <div className="container">
        <SectionTitle heading="Design" />
        {/* <div className="works__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Work Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div> */}
        <div className="works__allItems">
          {worksData.map((item) => (
            <DesignItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <WebdesignSection />
    </DesignStyle>
  );
}
