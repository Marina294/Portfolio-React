import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'Caveat';
    font-weight: 400;
    font-size: 2rem;
  }
  h2 {
    font-family: 'Caveat';
    font-weight: 700;
    font-size: 6rem;
    margin-top: 2rem;
    margin-bottom: 6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
      margin-bottom: 3rem;
    }
  }
`;

export default function SectionTitle({
  // subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
