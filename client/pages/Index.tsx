import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";
import { PricingSection } from "../components/sections/PricingSection";
import { FAQSection } from "../components/sections/FAQSection";

export default function Index() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <div>
      {/* Hero Section - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left: Content - Mobile First */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
                {t("home.heroTitle")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                {t("home.heroSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  to={`/${language}/proje-danismanligi`}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-button-bg text-button-foreground text-sm sm:text-base font-semibold rounded-lg hover:bg-button-bg-hover transition-all duration-200 shadow-sm"
                >
                  Ücretsiz Başla
                </Link>
                <a
                  href="https://chat.seragpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-text-primary text-sm sm:text-base font-semibold rounded-lg border border-border hover:bg-background-muted transition-all duration-200"
                >
                  Canlı Demo
                </a>
              </div>
            </div>

            {/* Right: Visual/Mockup - Mobile First */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Minimal Device Mockup - Responsive */}
                <div className="bg-background-muted rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-border">
                  {/* Mock browser header */}
                  <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-border">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    <div className="ml-2 sm:ml-4 text-xs text-text-secondary font-mono hidden sm:block">
                      chat.seragpt.com
                    </div>
                  </div>

                  {/* Mock chat interface */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-background rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-text-secondary">
                      Sera sıcaklığım 28°C, nem %75. Öneriniz?
                    </div>
                    <div className="bg-button-bg text-button-foreground rounded-lg p-2 sm:p-3 text-xs sm:text-sm ml-4 sm:ml-8">
                      <span className="hidden sm:inline">
                        Sera koşullarınız optimum seviyede! İdeal sıcaklık
                        aralığındasınız. Havalandırmayı artırarak nem seviyesini
                        %65-70 arasına düşürmenizi öneririm.
                      </span>
                      <span className="sm:hidden">
                        Optimum seviyede! Havalandırmayı artırın, nem %65-70
                        olmalı.
                      </span>
                    </div>
                    <div className="bg-background rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-text-secondary">
                      <span className="hidden sm:inline">
                        Teşekkürler! Sulama programı için öneriniz var mı?
                      </span>
                      <span className="sm:hidden">Sulama önerisi?</span>
                    </div>
                    <div className="bg-button-bg/10 rounded-lg p-2 flex items-center text-xs sm:text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-button-bg rounded-full animate-pulse mr-2"></div>
                      SeraGPT yazıyor...
                    </div>
                  </div>
                </div>

                {/* Floating elements - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="hidden sm:block absolute -bottom-6 -right-6 w-8 h-8 sm:w-12 sm:h-12 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile First */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 px-2">
              {t("home.featuresTitle")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto px-4 sm:px-0">
              Sera tarımcılığında yenilikçi çözümler sunan teknoloji ve
              deneyimimizle yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="group bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 sm:hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-200 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                {t("home.aiOptimization")}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {t("home.aiOptimizationDesc")}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 sm:hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                {t("home.dataAnalytics")}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {t("home.dataAnalyticsDesc")}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 sm:hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-purple-200 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                {t("home.smartMonitoring")}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {t("home.smartMonitoringDesc")}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 sm:hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-200 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                Mobil Uygulamamız
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Her yerden sera koşullarınızı takip edin. iOS ve Android uyumlu
                mobil uygulama.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 sm:hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                Acil Durum Uyarıları
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Kritik sera koşullarında anlık bildirimler alın. SMS, email ve
                push notification desteği.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-200 sm:hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-teal-200 transition-colors">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3">
                Uzman Desteği
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                Deneyimli tarım mühendisleri ve teknisyenlerimizle 7/24 teknik
                destek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Sera projelerinizin her aşamasında profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service 1 */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Proje Dan��şmanlığı
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Sera projenizi planlama aşamasından işletmeye kadar profesyonel
                danışmanlık hizmetleri. Fizibilite etüdü, teknoloji seçimi ve
                ekonomik analiz dahil.
              </p>
              <Link
                to="/proje-danismanligi"
                className="inline-flex items-center text-link hover:text-link-hover font-medium"
              >
                Detayları İncele
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-background-muted rounded-lg p-8 card-shadow">
              <div className="text-4xl mb-4">📊</div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fizibilite Etüdü
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Teknoloji Seçimi
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ekonomik Analiz
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Proje Yönetimi
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Anahtar Teslim Sera Hizmetleri
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Sera kurulumundan yazılım entegrasyonuna kadar komple çözümler.
                Modern sera teknolojileri ile donatılmış, tam otomatik sera
                sistemleri.
              </p>
              <Link
                to="/anahtar-teslim-sera"
                className="inline-flex items-center text-link hover:text-link-hover font-medium"
              >
                Detayları İncele
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-background-muted rounded-lg p-8 card-shadow lg:order-1">
              <div className="text-4xl mb-4">🏗️</div>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sera Konstrüksiyonu
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Otomasyon Sistemleri
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Yazılım Entegrasyonu
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-button-bg mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Eğitim ve Devreye Alma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="section-padding bg-button-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-button-foreground mb-4">
            Projenizi Bugün Başlatın
          </h2>
          <p className="text-xl text-button-foreground mb-8 opacity-90">
            Uzman ekibimizle sera projenizi planlayın ve hayata geçirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/proje-danismanligi"
              className="inline-flex items-center justify-center px-8 py-3 bg-button-foreground text-button-bg text-base font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Ücretsiz Danışmanlık Al
            </Link>
            <Link
              to="/destek"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-button-foreground text-base font-medium rounded-lg border border-button-foreground hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
