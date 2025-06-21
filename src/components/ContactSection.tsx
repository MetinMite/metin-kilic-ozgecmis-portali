
import React from 'react';
import { Mail, User, Handshake, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="iletisim" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">İletişim</h2>
          <p className="text-xl text-muted-foreground">
            Benimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">Kişisel Bilgiler</h3>
                <p className="text-muted-foreground">Temel iletişim bilgileri</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Ad Soyad</h4>
                <p className="text-muted-foreground">Metin Kılıç</p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Unvan</h4>
                <p className="text-muted-foreground">Yazılım Geliştirici</p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Konum</h4>
                <p className="text-muted-foreground">Bursa, Türkiye (EET, GMT+3)</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">İletişim Kanalları</h3>
                <p className="text-muted-foreground">Bana ulaşabileceğiniz yollar</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold text-accent-foreground mb-2">E-posta</h4>
                <a href="mailto:ornek@mail.com" className="text-primary hover:text-primary/80 underline">
                  ornek@mail.com
                </a>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold text-accent-foreground mb-2">Sosyal Medya</h4>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border border-border text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">İşbirliği</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Yazılım projeleri, öğrenme fırsatları veya teknoloji hakkında sohbet etmek 
            için benimle iletişime geçebilirsiniz. Yeni şeyler öğrenmeye ve projeler 
            geliştirmeye her zaman açığım!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-card px-4 py-2 rounded-full text-sm text-card-foreground border border-border">
              Yazılım Geliştirme
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-sm text-card-foreground border border-border">
              Proje İşbirlikleri
            </span>
            <span className="bg-card px-4 py-2 rounded-full text-sm text-card-foreground border border-border">
              Öğrenme Fırsatları
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
