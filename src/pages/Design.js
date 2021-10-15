import React, { useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import SectionTitle from '../components/SectionTitle';
import DesignInfo from '../assets/data/design';
import DesignItem from '../components/DesignItem';
import WebdesignSection from '../components/WebdesignSection';
import OnlineadsSection from '../components/OnlineadsSection';
import DesignSection2 from '../components/DesignSection2';

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
`;
export default function Design() {
  const [worksData] = useState(DesignInfo);
  return (
    <DesignStyle>
      <div className="container">
        <SectionTitle heading="Design" />
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
      <WebdesignSection />
      <OnlineadsSection />
      <DesignSection2 />
      <div>
        Hello
        <HashLink to="/Design#webDesign">
          fugaページのidがpiyoの要素に移動できる例
        </HashLink>
      </div>
    </DesignStyle>
  );
}

// export default function Design() {
//   // const [searchText] = useState('');
//   const [worksData] = useState(DesignInfo);
//   // useEffect(() => {
//   //   if (searchText === '') return;
//   //   setDesignData(() =>
//   //     DesignInfo.filter((item) =>
//   //       item.name.toLowerCase().match(searchText.toLowerCase())
//   //     )
//   //   );
//   // }, [searchText]);
//   // const handleChange = (e) => {
//   //   e.preventDefault();
//   //   setSearchText(e.target.value);
//   //   if (!e.target.value.length > 0) {
//   //     setWorksData(WorksInfo);
//   //   }
//   // };
//   return (
//     <DesignStyle>
//       <div className="container">
//         <SectionTitle heading="Design" />
//         {/* <div className="works__searchBar">
//           <form>
//             <input
//               type="text"
//               value={searchText}
//               onChange={handleChange}
//               placeholder="Work Name"
//             />
//             <MdSearch className="searchIcon" />
//           </form>
//         </div> */}
//         <div className="works__allItems">
//           {worksData.map((item) => (
//             <DesignItem
//               key={item.id}
//               title={item.name}
//               desc={item.desc}
//               img={item.img}
//               link={item.link}
//             />
//           ))}
//         </div>
//       </div>
