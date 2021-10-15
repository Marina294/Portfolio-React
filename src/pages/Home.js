import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import DesignSection3 from '../components/DesignSection3';
import DevSection from '../components/DevSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <DesignSection3 />
      <DevSection />
      <ContactBanner />
    </div>
  );
}
