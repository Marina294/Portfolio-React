import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import WorkImg from '../../assets/images/l-promotional.jpg';

const DesignItemStyles = styled.div`
  .workItem {
    &__img {
      filter: drop-shadow(0px 0px 8px rgba(154, 134, 227, 0.5));
    }
    &__title {
      color: var(--additional);
      font-weight: 600;
    }
    &__info {
      text-align: center;
      margin-top: 1rem;
    }
    &__link {
      color: var(--gray-2);
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 768px) {
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
    <DesignItemStyles>
      <div className="workItem__all">
        <HashLink to={link}>
          <div className="workItem__img">
            <img src={img} alt="work img" />
          </div>
          <div className="workItem__info">
            <h4 className="workItem__title">{title}</h4>
          </div>
        </HashLink>
      </div>
    </DesignItemStyles>
  );
}
