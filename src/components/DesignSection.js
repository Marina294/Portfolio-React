import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import WorksItem from './WorksItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import works from '../assets/data/works';
import Button from './Button';

SwiperCore.use([Navigation]);

const WorkSectionStyle = styled.div`
  padding: 10rem 0;
  .works__allItems {
    display: flex;
    gap: 3rem;
  }
  .swiper-container {
    padding-top: 10rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--additional);
    z-index: 10;
    top: 0;
    transform: translateY(50%);
    color: var(--white);
    border-radius: 100px;
    margin: auto;
  }
  .swiper-button-next {
    margin: auto;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  .worksSection__button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  .works__allItems {
    margin-top: -5rem;
  }
  @media only screen and (max-width: 768px) {
    .Works__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 3rem;
      gap: 5rem;
      .workItem__img {
        width: 100%;
      }
    }
  }
`;

export default function WorksSection() {
  return (
    <WorkSectionStyle>
      <div className="container">
        <SectionTitle heading="Works" />
        <div className="works__allItems">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            navigation
            breakpoints={{
              425: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {works.map((work, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={work.id}>
                  <WorksItem
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
      </div>
      <div className="worksSection__button">
        <Button btnText="Go To Works List" btnLink="/works" />
      </div>
    </WorkSectionStyle>
  );
}
