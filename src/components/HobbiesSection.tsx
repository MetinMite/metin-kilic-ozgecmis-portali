
import React from 'react';
import { Gamepad2, Heart, Computer } from 'lucide-react';

const HobbiesSection = () => {
  const hobbies = [
    {
      icon: "⚽",
      title: "Futbol",
      description: "Futbol oynamayı ve maç izlemeyi çok severim. Takım sporlarının verdiği motivasyon beni etkiliyor.",
      details: "Hem oynamayı hem de izlemeyi severim"
    },
    {
      icon: "🎮",
      title: "Bilgisayar Oyunları",
      description: "Bilgisayar oyunları oynamak hem eğlenceli vakit geçirmemi hem de teknolojiyle iç içe olmamı sağlıyor.",
      details: "Strateji ve aksiyon oyunlarını tercih ederim"
    },
    {
      icon: "💻",
      title: "Yazılım Geliştirme",
      description: "Kod yazmak, problemleri çözmek ve yeni teknolojiler öğrenmek beni çok mutlu ediyor.",
      details: "Web geliştirme ve programlama dilleri"
    },
    {
      icon: "🦜",
      title: "Muhabbet Kuşum",
      description: "Muhabbet kuşumla vakit geçirmek ve onunla ilgilenmek günümün en keyifli anlarından biri.",
      details: "Hayvan bakımı ve eğitimi"
    }
  ];

  return (
    <section id="hobiler" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Hobilerim</h2>
          <p className="text-xl text-muted-foreground">
            Boş zamanlarımda severek yaptığım aktiviteler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="text-5xl mb-4">{hobby.icon}</div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">{hobby.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{hobby.description}</p>
              <div className="bg-accent/20 p-3 rounded-lg">
                <p className="text-sm text-accent-foreground font-medium">{hobby.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Mevsim Tercihleri</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">❄️</div>
              <h4 className="text-xl font-semibold text-card-foreground mb-2">Kış</h4>
              <p className="text-muted-foreground">
                Kış aylarını çok severim! Soğuk havada evde sıcak bir ortamda 
                bilgisayar başında vakit geçirmek beni mutlu ediyor.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏖️</div>
              <h4 className="text-xl font-semibold text-card-foreground mb-2">Yaz</h4>
              <p className="text-muted-foreground">
                Yaz aylarını pek sevmem ama deniz çok güzel! Sadece denizde 
                vakit geçirmeyi severim yazın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
