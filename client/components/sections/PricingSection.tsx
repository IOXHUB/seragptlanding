import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../contexts/LanguageContext";

export function PricingSection() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Başlangıç",
      description: "Küçük sera işletmeleri için",
      monthlyPrice: "₺99",
      yearlyPrice: "₺990",
      features: [
        "Temel sensör izleme",
        "1 sera destegi",
        "Mobil uygulama",
        "Email destek",
        "Temel raporlar",
      ],
      popular: false,
      ctaText: "Başla",
    },
    {
      name: "Profesyonel",
      description: "Orta ölçekli sera işletmeleri için",
      monthlyPrice: "₺299",
      yearlyPrice: "₺2990",
      features: [
        "Gelişmiş AI analizi",
        "5 sera desteği",
        "Otomatik sulama kontrolü",
        "Öncelikli destek",
        "Detaylı raporlama",
        "API entegrasyonu",
        "Acil durum uyarıları",
      ],
      popular: true,
      ctaText: "En Popüler",
    },
    {
      name: "Kurumsal",
      description: "Büyük sera kompleksleri için",
      monthlyPrice: "₺999",
      yearlyPrice: "₺9990",
      features: [
        "Sınırsız sera desteği",
        "Özel AI modelleri",
        "Tam otomasyon paketi",
        "7/24 telefon desteği",
        "Özel raporlama",
        "Dedike hesap yöneticisi",
        "Yerinde kurulum",
        "Özel eğitim",
      ],
      popular: false,
      ctaText: "İletişime Geç",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background-muted">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 px-2">
            Fiyatlandırma
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            İhtiyacınıza uygun planı seçin. İstediğiniz zaman yükseltebilir veya
            iptal edebilirsiniz.
          </p>

          {/* Yearly/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-text-primary" : "text-text-secondary"}`}
            >
              Aylık
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? "bg-button-bg" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${isYearly ? "text-text-primary" : "text-text-secondary"}`}
            >
              Yıllık
              <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                %17 indirim
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-background rounded-2xl p-8 border-2 transition-all duration-200 hover:shadow-lg ${
                plan.popular
                  ? "border-button-bg shadow-lg scale-105"
                  : "border-border hover:border-button-bg/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-button-bg text-button-foreground px-4 py-1 rounded-full text-sm font-medium">
                    En Popüler
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-text-primary">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-text-secondary ml-1">
                    /{isYearly ? "yıl" : "ay"}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={
                  index === 2
                    ? `/${language}/destek`
                    : `/${language}/proje-danismanligi`
                }
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-button-bg text-button-foreground hover:bg-button-bg-hover shadow-sm"
                    : "bg-transparent text-text-primary border border-border hover:bg-background-muted"
                }`}
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary text-sm">
            Tüm planlar 14 günlük ücretsiz deneme ile başlar. Kredi kartı
            bilgisi gerekmez.
          </p>
        </div>
      </div>
    </section>
  );
}
