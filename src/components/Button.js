import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2rem;
    background-color: ${(props) =>
      props.outline ? 'transperant' : 'var(--additional)'};
    padding: 0.7em 2em;
    border: 2px solid var(--additional);
    border-radius: 100px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--additional)' : 'white')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.4rem;
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
