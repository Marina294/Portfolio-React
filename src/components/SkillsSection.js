import React from 'react';
import { MdComputer, MdImportContacts, MdCode } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './common/SectionTitle';
import SkillsItem from './SkillsItem';

const SkillsItemsStyles = styled.div`
  padding: 10rem 0;
  .skills__allItems {
    display: flex;
    gap: 7rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .skills__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function SkillsSection() {
  return (
    <SkillsItemsStyles>
      <div className="container">
        <SectionTitle heading="Skills" />
        <div className="skills__allItems">
          <SkillsItem
            icon={<MdComputer />}
            title="Web design"
            desc="I do UI design for websites, marketing e-mail and web advertising."
            tools="[Figma, Sketch, Adobe XD]"
          />
          <SkillsItem
            icon={<MdImportContacts />}
            title="Graphic design"
            desc="I design print materials, magazines, catalogue and promotional items."
            tools="[Photoshop, Illustrator, InDesign]"
          />
          <SkillsItem
            icon={<MdCode />}
            title="Dev"
            desc="I develop marketing marketing templates, web applications and e-commerce sites
            "
            tools="[React, Javascript, HTML, CSS]"
          />
        </div>
      </div>
    </SkillsItemsStyles>
  );
}
