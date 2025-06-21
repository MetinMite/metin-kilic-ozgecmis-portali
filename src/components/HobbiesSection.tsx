
import React from 'react';

const HobbiesSection = () => {
  const hobbies = [
    {
      icon: "⚽",
      title: "Futbol",
      description: "Futbol oynamayı ve maç izlemeyi çok severim. Takım sporlarının verdiği motivasyon beni mutlu ediyor.",
      details: "Hem oynamayı hem de izlemeyi severim"
    },
    {
      icon: "🎮",
      title: "Bilgisayar Oyunları",
      description: "Bilgisayar oyunları oynamak hem eğlenceli vakit geçirmemi hem de teknolojiyle iç içe olmamı sağlıyor.",
      details: "Aksiyon, macera ve strateji oyunlarını tercih ederim"
    },
    {
      icon: "🎸",
      title: "Gitar",
      description: "Yeni başladığım bu müzikal yolculuk, hem beni motive ediyor hem de sabırlı olmayı öğretiyor.",
      details: "Müzik ve enstrüman eğitimi"
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

        {/* Memleketim Bölümü */}
        <div className="mt-16 bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">Memleketim</h3>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <img 
                src="/lovable-uploads/23977dc5-894a-4067-8034-f0936d982e4f.png" 
                alt="Türk Bayrağı" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h4 className="text-xl font-semibold text-card-foreground mb-4 text-center">Türkiye büyüdüğüm yer,</h4>
              <p className="leading-relaxed mb-4">
                Merhaba! Türkiye, üç kıtanın kalbinde yer alan, tarih ve doğanın iç içe geçtiği eşsiz bir coğrafyadır. Ege'nin zeytin kokulu sokaklarından Karadeniz'in yemyeşil yaylalarına kadar her bölgesi kendine özgü bir ruh taşır. İstanbul, hem geçmişin izlerini hem de modern yaşamın ritmini bir arada sunar. Bu kültürel zenginliklerin kesişim noktasında büyümek, bana farklı bakış açıları kazandırdı ve değişime kolayca uyum sağlama yeteneğimi geliştirdi. Türkiye'nin dinamik ve çözüm odaklı yapısı, karşılaştığım teknik zorluklara pratik ve yaratıcı çözümler üretme becerimi şekillendirdi. İnsani ilişkilerin merkezde olduğu bu toplumda yetişmek, yazılım geliştirirken kullanıcı deneyimini her zaman önceliğim haline getirdi.
              </p>
              <p className="leading-relaxed">
                Şu anda Bursa'da yaşıyorum. Serin iklimi, kış mevsimini seven biri olarak bana huzur veriyor. Türkiye'nin kuzeybatısında, batıya yakın ama kalabalıktan uzak bu şehir, ideal bir denge sunuyor. Hem doğayla iç içe hem de şehir olanaklarına yakın olmak benim için büyük bir avantaj.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
