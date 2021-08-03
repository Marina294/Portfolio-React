import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const FooterStyle = styled.div`
  // background-color: var(--deep-dark);
  // padding-top: 10rem;
  // .container {
  //   display: flex;
  //   gap: 3rem;
  // }
  // .footer__col1 {
  //   flex: 2;
  // }
  // .footer__col2,
  // .footer__col3,
  // .footer__col4 {
  //   flex: 1;
  // }
  // .footer__col1__title {
  //   font-size: 3.5rem;
  //   margin-bottom: 1rem;
  // }
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
