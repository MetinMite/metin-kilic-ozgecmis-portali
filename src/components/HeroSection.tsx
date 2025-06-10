
import React from 'react';
import { Computer, GraduationCap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary-foreground">MK</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Metin Kılıç
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <Computer className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">Yazılım Geliştirici</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">Üniversite Adayı</span>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Yazılım dünyasına tutkuyla bağlı, öğrenmeye açık ve hızlı kavrayan bir gencim. 
            Teknik çözümler üretmeyi seviyorum.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#hakkimda" 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Hakkımda
          </a>
          <a 
            href="#iletisim" 
            className="bg-card text-card-foreground px-8 py-3 rounded-lg font-semibold border border-border hover:bg-accent transition-colors"
          >
            İletişim
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
