import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  h1 {
    margin: 0 0 5rem 0;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    h1 {
      margin-bottom: 3rem;
    }
  }
`;

export default function SectionTitle({ heading = 'need heading' }) {
  return (
    <SectionTitleStyle className="section-title">
      <h1>{heading}</h1>
    </SectionTitleStyle>
  );
}
