import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import DevItem from './DevItem';
import SectionTitle from './common/SectionTitle';
import 'swiper/swiper-bundle.min.css';
import works from '../assets/data/dev';
import Button from './common/Button';

SwiperCore.use([Navigation]);

const DevSectionStyle = styled.div`
  padding: 10rem 0;
  .works__allItems {
    display: flex;
    margin-top: -5rem;
    gap: 3rem;
  }
  .swiper {
    &-container {
      padding-top: 10rem;
      max-width: 100%;
    }
  }
  .swiper-button {
    &-prev,
    &-next {
      position: absolute;
      z-index: 10;
      transform: translateY(50%);
      border-radius: 100px;
      margin: auto;
      top: 0;
      height: 50px;
      width: 50px;
      background: var(--additional);
      color: var(--white);
    }
    &-prev::after,
    &-next::after {
      font-size: 2rem;
    }
  }
  .worksSection__button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .Works__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      gap: 5rem;
      .workItem__img {
        width: 100%;
      }
    }
    .worksSection__button {
      margin-top: 1rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function WorksSection() {
  return (
    <DevSectionStyle>
      <div className="container">
        <SectionTitle heading="Dev Work" />
        <div className="works__allItems">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              600: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {works.map((work, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={work.id}>
                  <DevItem
                    img={work.img}
                    title={work.name}
                    desc={work.desc}
                    link={work.link}
                    gitLink={work.gitLink}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="worksSection__button">
          <Button btnText="See More" btnLink="/dev" />
        </div>
      </div>
    </DevSectionStyle>
  );
}
