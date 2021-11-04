import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  .copyright {
    background-color: var(--bg);
    text-align: center;
    padding: 2rem 0;
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 768px) {
    .copyright {
      font-size: 1.1rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="copyright">
        <div>© 2021 - Marina Yamamoto</div>
      </div>
    </FooterStyle>
  );
}
