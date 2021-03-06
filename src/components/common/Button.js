import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    display: inline-block;
    padding: 0.7em 2em;
    border: 2px solid var(--additional);
    border-radius: 100px;
    font-size: 1.8rem;
    letter-spacing: 0.05rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--additional)'};
    color: ${(props) => (props.outline ? 'var(--additional)' : 'white')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.6rem;
      letter-spacing: 0.05rem;
    }
  }
`;

export default function Button({
  btnText = 'button',
  btnLink = 'button',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
