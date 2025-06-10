
import React from 'react';
import { GraduationCap, Languages, Computer, Heart } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Eğitim",
      description: "Lise eğitimimi başarıyla tamamladım ve yakında üniversite eğitimime başlayacağım."
    },
    {
      icon: Languages,
      title: "İngilizce",
      description: "B2 seviyesinde İngilizce bilgim var. Teknik dokümantasyonları rahatça okuyabiliyorum."
    },
    {
      icon: Computer,
      title: "Teknoloji",
      description: "Bilgisayarla uğraşmayı, geliştirmeyi ve vakit geçirmeyi çok seviyorum."
    },
    {
      icon: Heart,
      title: "Hayvan Sevgisi",
      description: "Hayvanları çok severim ve bir muhabbet kuşum var. Onlarla vakit geçirmek beni mutlu ediyor."
    }
  ];

  return (
    <section id="hakkimda" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Hakkımda</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Öğrenmeye açık, hızlı kavrayan ve teknik konularda çözüm üretme becerisi yüksek biriyim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-6">Kişisel Özelliklerim</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-card-foreground mb-3">Güçlü Yanlarım</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hızlı öğrenme ve kavrama yeteneği</li>
                <li>• Teknik problem çözme becerisi</li>
                <li>• Başarılı bir iletişim</li>
                <li>• Teknolojiye olan ilgi ve merak</li>
                <li>• Ehliyet sahibi olma</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-3">Kişisel Tercihlerim</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kış mevsimini yaz aylarına tercih ederim</li>
                <li>• Ailecek film izleme veya aktivite yapmayı severim</li>
                <li>• Kış aylarında daha keyifli vakit geçiririm</li>
                <li>• Bilgisayar başında vakit geçirmeyi severim</li>
                <li>• Hayvanlarla ilgilenmeyi severim</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
