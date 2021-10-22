import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import WorkImg from '../assets/images/dev-calculator.png';

const DesignItemStyles = styled.div`
  .workItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    .img {
      height: 100%;
    }
  }
  .workItem__title {
    color: var(--additional);
    font-weight: 600;
  }
  .workItem__info {
    margin-top: 1rem;
    text-align: center;
    border-radius: 12px;
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
`;

export default function WorkItem({
  img = WorkImg,
  title = 'Work Name',
  link = 'link',
}) {
  return (
    <DesignItemStyles className="workItem__img">
      <HashLink to={link}>
        <img src={img} alt="work img" />
        <div className="workItem__info">
          <h4 className="workItem__title">{title}</h4>
        </div>
      </HashLink>
    </DesignItemStyles>
  );
}
