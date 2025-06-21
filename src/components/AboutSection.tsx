
import React from 'react';
import { GraduationCap, Languages, Computer, Heart, Code, Users, MessageCircle, Clock, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Eğitim",
      description: "Lise eğitimimi başarıyla tamamladım. Şu anda üniversite eğitimime başlamak üzereyim ve akademik hedeflerime odaklanmış durumdayım."
    },
    {
      icon: Languages,
      title: "İngilizce",
      description: "B2 seviyesinde İngilizce bilgim var. Teknik dokümantasyonları rahatça okuyabiliyorum."
    },
    {
      icon: Computer,
      title: "Teknoloji",
      description: "Bilgisayarlarla çalışmayı, yeni şeyler geliştirmeyi ve teknolojiyi keşfetmeyi büyük bir tutkuyla seviyorum. Boş zamanlarımda sürekli bu alanda kendimi geliştiriyorum."
    },
    {
      icon: Heart,
      title: "Hayvan Sevgisi",
      description: "Hayvanları çok severim ve bir muhabbet kuşum var. Onlarla vakit geçirmek beni mutlu ediyor."
    }
  ];

  const technicalSkills = [
    "HTML5, CSS",
    "Git & GitHub, VS Code",
    "Python (Öğreniyorum)"
  ];

  const socialSkills = [
    "Problem Çözme",
    "Etkili İletişim", 
    "Takım Çalışmasına Yatkınlık",
    "Geri Bildirime Açıklık",
    "Zaman Yönetimi"
  ];

  return (
    <section id="hakkimda" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Hakkımda</h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              Teknolojiye ve problem çözmeye tutkuyla bağlı, öğrenmeye açık bir yazılım geliştiricisi adayıyım. Lise eğitimimi başarıyla tamamladım ve yakında başlayacağım üniversite eğitimiyle birlikte kendimi yazılım alanında daha da ileriye taşımayı hedefliyorum.
            </p>
            <p>
              Hızlı öğrenme ve teknik sorunlara çözüm üretme yeteneğim sayesinde yeni teknolojilere kolayca adapte olabiliyorum. B2 seviyesindeki İngilizce bilgimle teknik dokümanları rahatça takip ediyor ve global kaynaklardan besleniyorum.
            </p>
            <p>
              Bu site, yazılım yolculuğumdaki ilk adımlarımı ve tutkumu yansıtan kişisel projemdir.
            </p>
          </div>
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

        {/* Yeteneklerim Bölümü */}
        <div className="bg-card p-8 rounded-lg border border-border mb-16">
          <h3 className="text-2xl font-bold text-card-foreground mb-6">Yeteneklerim</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-card-foreground text-lg">Teknik Yetenekler</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-card-foreground">Diller:</span>
                  <span className="text-muted-foreground ml-2">HTML5, CSS</span>
                </div>
                <div>
                  <span className="font-medium text-card-foreground">Araçlar & Platformlar:</span>
                  <span className="text-muted-foreground ml-2">Git & GitHub, VS Code</span>
                </div>
                <div>
                  <span className="font-medium text-card-foreground">Öğreniyorum:</span>
                  <span className="text-muted-foreground ml-2">Python</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h4 className="font-semibold text-card-foreground text-lg">Sosyal Yetenekler</h4>
              </div>
              <ul className="space-y-2">
                {socialSkills.map((skill, index) => (
                  <li key={index} className="text-muted-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bilgisayar fotoğrafı ve blog yazısı */}
        <div className="mt-16 bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Yazılım Yolculuğum</h3>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <img 
                src="/lovable-uploads/b69844ab-dc94-4a9b-a941-44ee74995ee9.png" 
                alt="Bilgisayar Sistemim" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                Yazılım ve bilgisayara olan ilgimi bu sistem sayesinde kazandım. Aşırı güçlü olmasa da oldukça hızlı ve verimli bir sistem. Bu sayede internette gezindikçe ilgim arttı ve bu alanı seçmeye karar verdim.
              </p>
              <p className="leading-relaxed mb-4">
                Şimdi ise, gerek kendi çabalarımla gerekse hocalarımın ve Munduz abinin yardımıyla yazılım alanında adımlar atmaya başladım. Bu da kendimle ilgili ilk web sitem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
