import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 800px;
  margin: 0 auto;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
