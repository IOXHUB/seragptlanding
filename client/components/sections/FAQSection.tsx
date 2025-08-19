import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "SeraGPT nasıl çalışır?",
      answer: "SeraGPT, yapay zeka algoritmaları kullanarak sera sensörlerinden gelen verileri analiz eder. Sıcaklık, nem, ışık ve toprak nem değerlerini sürekli izleyerek optimal sera koşullarını sağlamak için otomatik ayarlamalar yapar ve size öneriler sunar."
    },
    {
      question: "Hangi sensörlerle uyumlu?",
      answer: "SeraGPT platformu yaygın kullanılan tüm sera sensörleriyle uyumludur. Sıcaklık, nem, pH, EC, CO2, ışık sensörleri ile çalışır. Ayrıca mevcut sera otomasyon sistemlerinizle entegrasyon sağlayabiliriz."
    },
    {
      question: "Kurulum süreci ne kadar sürer?",
      answer: "Standart kurulum 1-3 gün arasında tamamlanır. Bu süre sera büyüklüğü ve mevcut altyapıya bağlı olarak değişebilir. Uzman ekibimiz kurulum öncesi detaylı planlama yapar ve süreçle ilgili bilgi verir."
    },
    {
      question: "Mobil uygulamaya ihtiyaç var mı?",
      answer: "Mobil uygulama isteğe bağlıdır. SeraGPT'ye web tarayıcısından da erişebilirsiniz. Ancak mobil uygulama push bildirimleri, çevrimdışı erişim ve daha hızlı kontrol imkanları sağlar."
    },
    {
      question: "Veri güvenliği nasıl sağlanıyor?",
      answer: "Tüm verileriniz SSL şifreleme ile korunur. Veriler güvenli bulut sunucularımızda depolanır ve sadece sizin erişiminiz vardır. Veri yedekleme ve kurtarma sistemlerimiz 7/24 aktiftir."
    },
    {
      question: "Teknik destek nasıl alırım?",
      answer: "7/24 teknik destek hattımız, email destek ve canlı chat desteğimiz bulunur. Acil durumlar için SMS uyarı sistemi mevcuttur. Ayrıca uzaktan erişim ile anlık müdahale imkanı sağlarız."
    },
    {
      question: "Ücretsiz deneme süresi var mı?",
      answer: "Evet, 14 günlük ücretsiz deneme süremiz bulunur. Bu süre içinde tüm özellikleri test edebilir, sera verilerinizi analiz edebilirsiniz. Kredi kartı bilgisi gerektirmez."
    },
    {
      question: "Sözleşmeyi iptal edebilir miyim?",
      answer: "Evet, istediğiniz zaman sözleşmenizi iptal edebilirsiniz. 30 günlük bildirimle iptal işlemi yapılır. Ödediğiniz aylık ücret boyunca hizmet almaya devam edersiniz."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-lg text-text-secondary">
            SeraGPT ile ilgili merak ettiklerinizi burada bulabilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-background"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-background-muted transition-colors"
              >
                <span className="font-semibold text-text-primary pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-text-secondary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 pt-0">
                  <div className="border-t border-border pt-4">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Aradığınız soruyu bulamadınız mı?
          </p>
          <a
            href="mailto:destek@seragpt.com"
            className="inline-flex items-center px-6 py-3 bg-button-bg text-button-foreground font-semibold rounded-lg hover:bg-button-bg-hover transition-colors"
          >
            Bize Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
}
