import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/common/SectionTitle';
import DevInfo from '../assets/data/dev';
import DevItem from '../components/DevItem';
import ContactBanner from '../components/ContactBanner';

const DevStyle = styled.div`
  padding: 12rem 0 0 0;
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
    padding: 8rem 0 0 0;
    .works__searchBar,
    .works__searchBar form,
    .works__searchBar input {
      width: 100%;
    }
  }
`;

export default function Dev() {
  const [searchText, setSearchText] = useState('');
  const [devData, setDevData] = useState(DevInfo);
  useEffect(() => {
    if (searchText === '') return;
    setDevData(() =>
      DevInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setDevData(DevInfo);
    }
  };
  return (
    <DevStyle>
      <div className="container">
        <SectionTitle heading="Dev Work" />
        <div className="works__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Work Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="works__allItems">
          {devData.map((item) => (
            <DevItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              link={item.link}
              gitLink={item.gitLink}
            />
          ))}
        </div>
      </div>
      <ContactBanner />
    </DevStyle>
  );
}
