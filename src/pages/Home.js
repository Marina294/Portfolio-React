import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import DesignSectionHome from '../components/DesignSection-home';
import DevSection from '../components/DevSection';
import ContactBanner from '../components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <DesignSectionHome />
      <DevSection />
      <ContactBanner id="contact" />
    </div>
  );
}
