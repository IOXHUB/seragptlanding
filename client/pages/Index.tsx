import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Yapay Zeka Destekli{" "}
              <span className="block">Sera Teknolojileri</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              SeraGPT ile tarımsal verimliliğinizi artırın. Modern sera
              teknolojileri, akıllı otomasyon sistemleri ve profesyonel
              danışmanlık hizmetleri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/proje-danismanligi"
                className="inline-flex items-center justify-center px-8 py-3 bg-button-bg text-button-foreground text-base font-medium rounded-lg hover:bg-button-bg-hover transition-colors"
              >
                Proje Başlat
              </Link>
              <Link
                to="/anahtar-teslim-sera"
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-text-primary text-base font-medium rounded-lg border border-border hover:bg-background-muted transition-colors"
              >
                Hizmetleri İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Neden SeraGPT?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Sera tarımcılığında yenilikçi çözümler sunan teknoloji ve
              deneyimimizle yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-lg p-8 card-shadow">
              <div className="w-12 h-12 bg-button-bg rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-button-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Akıllı Otomasyon
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Yapay zeka destekli sistemlerle sera ortamınızı otomatik olarak
                optimize edin. Sıcaklık, nem ve ışık kontrolü hiç bu kadar kolay
                olmamıştı.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-lg p-8 card-shadow">
              <div className="w-12 h-12 bg-button-bg rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-button-foreground"
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
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Veri Analizi
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Sera verilerinizi analiz ederek verimlilik önerileri sunuyoruz.
                Gerçek zamanlı raporlama ve performans takibi.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-lg p-8 card-shadow">
              <div className="w-12 h-12 bg-button-bg rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-button-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Uzman Desteği
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Deneyimli tarım mühendisleri ve teknisyenlerimizle 7/24 teknik
                destek. Projelerinizde baştan sona yanınızdayız.
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
                Proje Danışmanlığı
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
