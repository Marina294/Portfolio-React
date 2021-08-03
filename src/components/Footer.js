import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  .copyright {
    background-color: var(--dark-bg);
    text-align: center;
    padding: 2rem 0;
    margin-top: 2rem;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    .copyright {
      font-size: 1.2rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="copyright">
        <p>© 2021 - Marina Yamamoto</p>
      </div>
    </FooterStyle>
  );
}
