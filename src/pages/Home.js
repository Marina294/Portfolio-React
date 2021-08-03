import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorksSection from '../components/WorksSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactBanner />
    </div>
  );
}
