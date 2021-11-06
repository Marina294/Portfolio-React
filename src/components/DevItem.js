import React from 'react';
import styled from 'styled-components';
import { ImGithub } from 'react-icons/im';
import WorkImg from '../assets/images/dev-calculator.webp';

const DevItemStyles = styled.div`
  .workItem__img {
    width: 100%;
    img {
      height: 100%;
    }
    @media only screen and (max-width: 768px) {
      .workItem__img {
        height: 350px;
      }
    }
  }
  .workItem__Shadow {
    filter: drop-shadow(5px 5px 5px rgba(154, 134, 227, 0.5));
  }
  .workItem__link {
    color: var(--gray-1);
    font-weight: 600;
  }
  .workItem__title {
    font-weight: 600;
    color: var(--additional);
    margin-bottom: 1rem;
  }
  .workItem__info {
    margin-top: 1rem;
    background-color: var(--white);
    padding: 2rem;
  }
  .workItem__desc {
    margin-top: 1rem;
  }
  .workItem__git {
    display: flex;
    margin-top: 1rem;
    justify-content: flex-end;
  }
  .git-icon {
    width: 2.2rem;
  }
`;

export default function DevItem({
  img = WorkImg,
  title = 'Work Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  gitLink = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <DevItemStyles>
      <div className="workItem__img">
        <div className="workItem__Shadow">
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="workItem__link"
          >
            <img src={img} alt="work img" />
          </a>
        </div>
        <div className="workItem__info">
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="workItem__link"
          >
            <h4 className="workItem__title">{title}</h4>
          </a>
          <p className="workItem__desc">{desc}</p>
          <div className="workItem__git">
            <a
              className="git-icon"
              href={gitLink}
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub style={{ fill: 'var(--gray-1)' }} />
            </a>
          </div>
        </div>
      </div>
    </DevItemStyles>
  );
}
