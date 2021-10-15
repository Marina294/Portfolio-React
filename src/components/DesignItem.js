import React from 'react';
import styled from 'styled-components';
import WorkImg from '../assets/images/drawing.jpg';

const DesignItemStyles = styled.div`
  .workItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    // box-shadow: 5px 10px #888888;
    img {
      height: 100%;
    }
  }
  .workItem__title {
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
    font-size: 1.8rem;
    font-family: 'Urbanist';
    line-height: 3rem;
    margin-top: 1rem;
  }
  .workItem__link {
    color: var(--gray-2);
    font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    .workItem__img {
      height: 350px;
    }
    .workItem__desc {
      font-size: 1.7rem;
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
    height: 2.5rem;
    margin: 1.3rem 1rem 1.3rem 0rem;
    display: inline-block;
    align-items: cente;
  }
`;

export default function WorkItem({
  img = WorkImg,
  title = 'Work Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <DesignItemStyles className="workItem__img">
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
      </div>
    </DesignItemStyles>
  );
}
