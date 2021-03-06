import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './common/PText';

const ItemStyles = styled.div`
  text-align: center;
  .skillsItem__icon {
    svg {
      width: 5rem;
    }
  }
  .skillsItem__title {
    font-weight: 600;
    margin-top: 2rem;
  }
  .para {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export default function SkillsSectionItem({
  icon = <MdDesktopMac />,
  title = 'skill title',
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
  tools = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok",
}) {
  return (
    <ItemStyles className="skillsItem">
      <div className="skillsItem__icon">{icon}</div>
      <h4 className="skillsItem__title">{title}</h4>
      <PText>{desc}</PText>
      <PText>
        <span>{tools}</span>
      </PText>
    </ItemStyles>
  );
}
