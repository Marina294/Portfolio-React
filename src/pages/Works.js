import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import WorksInfo from '../assets/data/works';
import WorksItem from '../components/WorksItem';

const WorksStyle = styled.div`
  padding: 10rem 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .works__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .works__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .works__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .works__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .works__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .works__searchBar,
    .works__searchBar form,
    .works__searchBar input {
      width: 100%;
    }
  }
`;

export default function Works() {
  const [searchText, setSearchText] = useState('');
  const [worksData, setWorksData] = useState(WorksInfo);
  useEffect(() => {
    if (searchText === '') return;
    setWorksData(() =>
      WorksInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setWorksData(WorksInfo);
    }
  };
  return (
    <WorksStyle>
      <div className="container">
        <SectionTitle heading="Works" />
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
            <WorksItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </WorksStyle>
  );
}
