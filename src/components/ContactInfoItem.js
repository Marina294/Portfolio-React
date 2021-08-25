import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  padding: 2rem;
  .icon {
    color: var(--white);
  }
  svg {
    width: 3rem;
  }
`;

export default function ContactInfoItem({ icon = <MdPlace />, text = 'text' }) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}
