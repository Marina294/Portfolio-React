import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImGithub } from 'react-icons/im';
import WorkImg from '../assets/images/projectImg.png';

const WorkItemStyles = styled.div`
  .worItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .workItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .workItem__title {
    font-size: 2.5rem;
  }
  .workItem__desc {
    font-size: 1.8rem;
    font-family: 'RobotoMono Regular';
    line-height: 3rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .workItem__img {
      height: 350px;
    }
  }
  table {
    justify-content: flex-end;
  }
  tr {
    justify-content: flex-end;
  }
  td {
    font-size: 1.5rem;
    text-align: right;
    justify-content: flex-end;
  }
  .sns-icon {
    color: var(--white);
    margin: 1.3rem 1rem 1.3rem 0rem;
    display: inline-block;
    align-items: cente;
  }
  svg {
    width: 3rem;
  }
`;

export default function WorkItem({
  img = WorkImg,
  title = 'Work Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  gitLink = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <WorkItemStyles className="workItem__img">
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="workItem__link"
      >
        <img src={img} alt="work img" />
      </a>
      <div className="workItem__info">
        <h3 className="workItem__title">{title}</h3>
        <p className="workItem__desc">{desc}</p>
        <table className="workItem__gitLink">
          <tr>
            <td>
              <a
                className="sns-icon"
                href={gitLink}
                target="_blank"
                rel="noreferrer"
              >
                <ImGithub />
              </a>
            </td>
            <td>
              <a href={gitLink} target="_blank" rel="noreferrer">
                Check my code
              </a>
            </td>
          </tr>
        </table>
      </div>
    </WorkItemStyles>
  );
}
