
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import HobbiesSection from './HobbiesSection';
import ContactSection from './ContactSection';
import DarkModeToggle from './DarkModeToggle';

const PersonalProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <DarkModeToggle />
      <HeroSection />
      <AboutSection />
      <HobbiesSection />
      <ContactSection />
      
      {/* Projeler için gelecekte kullanılacak alan */}
      <section id="projeler" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Projelerim</h2>
          <div className="bg-card p-12 rounded-lg border border-border">
            <p className="text-muted-foreground text-lg">
              Bu bölüm gelecekteki projeler için ayrılmıştır. 
              <br />
              Yakında burada çalışmalarımı paylaşacağım.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalProfile;
