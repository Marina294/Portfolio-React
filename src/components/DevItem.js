import React from 'react';
import styled from 'styled-components';
import { ImGithub } from 'react-icons/im';
import WorkImg from '../assets/images/drawing.jpg';

const DevItemStyles = styled.div`
  .workItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    box-shadow: 5px 10px #888888;
    img {
      height: 100%;
    }
    @media only screen and (max-width: 768px) {
      .workItem__img {
        height: 350px;
      }
    }
  }
  .workItem__title {
    font-weight: 600;
    color: var(--additional);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .workItem__info {
    margin-top: 1rem;
    background-color: var(--white);
    padding: 1rem;
    border-radius: 12px;
  }
  .workItem__desc {
    margin-top: 1rem;
  }
  .workItem__gitLink {
    color: var(--gray-1);
  }
  .workItem__link {
    color: var(--gray-1);
    font-weight: 600;
  }
  // table {
  //   justify-content: flex-end;
  // }
  // tr {
  //   justify-content: flex-end;
  // }
  td {
    font-size: 1.4rem;
    // text-align: right;
    // justify-content: flex-end;
  }
  .sns-icon {
    height: 2.5rem;
    margin: 1.3rem 1rem 1.3rem 0rem;
    display: inline-block;
    align-items: cente;
    }
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
    <DevItemStyles className="workItem__img">
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="workItem__link"
      >
        <img src={img} alt="work img" />
      </a>
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
        <table className="workItem__gitLink">
          <tbody>
            <tr>
              <td>
                <a
                  className="sns-icon"
                  href={gitLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImGithub style={{ fill: 'var(--gray-1)' }} />
                </a>
              </td>
              <td>
                <a
                  className="workItem__link"
                  href={gitLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Check my code
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DevItemStyles>
  );
}
