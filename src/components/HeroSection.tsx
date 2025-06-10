
import React from 'react';
import { Computer } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary/20">
            <img 
              src="/lovable-uploads/1df9eb31-d1b9-4156-9cfc-e3b45b56a1ae.png" 
              alt="Metin Kılıç" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Metin Kılıç
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
              <Computer className="w-5 h-5 text-primary" />
              <span className="text-card-foreground">Yazılım Geliştirici</span>
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
