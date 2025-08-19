import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

export default function Index() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, -apple-system",
        color: "#0A0A0A",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Hero Section */}
      <section
        style={{ paddingTop: "96px", paddingBottom: "96px" }}
        className="sm:py-16 md:py-24"
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            padding: "0 16px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.1",
              fontWeight: "700",
              marginBottom: "16px",
              "@media (min-width: 768px)": { fontSize: "48px" },
              "@media (min-width: 1024px)": { fontSize: "56px" },
            }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Tarımsal Zekâyı Keşfedin
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#6B7280",
              marginBottom: "24px",
              "@media (min-width: 1024px)": { fontSize: "20px" },
            }}
            className="text-lg sm:text-xl text-gray-500 mb-6"
          >
            Profesyonel analizler, danışmanlık ve anahtar teslim sera çözümleri
            tek noktada.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="https://chat.seragpt.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#146448",
                color: "#FFFFFF",
                padding: "14px 22px",
                borderRadius: "9999px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.2s",
              }}
              className="hover:bg-blue-700"
            >
              Ücretsiz Analiz Başlat
            </a>
            <Link
              to="/ornek-analizler"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #E5E7EB",
                color: "#111827",
                padding: "14px 22px",
                borderRadius: "9999px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.2s",
              }}
              className="hover:bg-gray-50"
            >
              Örnek Analizleri İncele
            </Link>
          </div>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "12px" }}>
            Ücretsiz plan ile sınırlı analiz ve mesaj hakk��.
          </p>
        </div>
      </section>

      {/* Neden Bu Kadar Kritik Section */}
      <section
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="py-12 sm:py-20"
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
          <div className="grid grid-cols-1 gap-10" style={{ gap: "40px" }}>
            {/* Content */}
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "12px",
                  textAlign: "center",
                }}
                className="text-2xl sm:text-3xl font-bold mb-4"
              >
                Seracılıkta En Kritik Sorun: Veriye Dayalı Karar Eksikliği
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#374151",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
                className="text-gray-700"
              >
                Verim kayıplarının %40'ı yetersiz analiz, yanlış yatırım
                planlaması ve gecikmi�� aksiyonlardan kaynaklanır. SeraGPT; 20+
                teknik analiz, global veri servisleri ve tarımsal yapay zekâ
                destekli kurumsal raporlar sunar.
              </p>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "5–10 yıl iklim senaryosu",
                  "ROI & CAPEX/OPEX modelleme",
                  "Enerji & su optimizasyonu",
                  "Pazar & fiyat öngörüleri",
                ].map((text, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid #E5E7EB",
                      borderRadius: "16px",
                      padding: "16px",
                      backgroundColor: "#FFFFFF",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Analiz Modülleri Section */}
      <section
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="py-12 sm:py-20"
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
              className="text-2xl sm:text-3xl font-bold mb-3"
            >
              SeraGPT'nin Teknik Analiz Modülleri
            </h2>
            <p style={{ fontSize: "14px", color: "#6B7280" }}>
              Veriye dayalı kararlar için 20+ profesyonel analiz
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4" style={{ gap: "16px" }}>
            {[
              {
                title: "Enerji Verimliliği Analizi",
                desc: "Isıtma/soğutma/aydınlatma için optimizasyon.",
              },
              {
                title: "İklim Senaryoları & Risk",
                desc: "Bölgesel verilerle 5–10 yıllık projeksiyon.",
              },
              {
                title: "Pazar & Fiyat Öngörüleri",
                desc: "Global API trendleriyle planlama.",
              },
              {
                title: "Yatırım Geri Dönüş (ROI)",
                desc: "Amortisman ve kârlılık senaryoları.",
              },
              {
                title: "Su & Sulama Optimizasyonu",
                desc: "Su ayak izi ve verimlilik.",
              },
              {
                title: "Hastalık & Zararlı Risk",
                desc: "Önleyici eylem planları.",
              },
              { title: "Karbon Ayak İzi", desc: "Yeşil finansman uyumu." },
              {
                title: "Üretim Optimizasyonu (AI)",
                desc: "Verim senaryoları ve öneriler.",
              },
              {
                title: "Substrate & Besin Yönetimi",
                desc: "EC/pH hedefleme stratejileri.",
              },
              {
                title: "Işık/PPFD Planlama",
                desc: "DLI bazlı aydınlatma senaryosu.",
              },
              {
                title: "Yapı & Kaplama Seçimi",
                desc: "Isı yükü ve transmisyon analizi.",
              },
              { title: "Lojistik & Hasat Zamanlama", desc: "Talep eşleşmesi." },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  padding: "20px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <h3 style={{ fontWeight: "700", marginBottom: "6px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#374151", fontSize: "14px" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link
              to="/moduller"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #E5E7EB",
                color: "#111827",
                padding: "12px 20px",
                borderRadius: "9999px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Tüm Modülleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz Section */}
      <section
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="py-12 sm:py-20"
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
          <div className="grid grid-cols-1 gap-6" style={{ gap: "24px" }}>
            {/* Card A */}
            <div
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                height: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Proje ve Zirai Danışmanlık
              </h3>
              <p
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                Uzman ekibimizle teknik danışmanlık, fizibilite, hibe/teşvik ve
                mevzuat süreçleri.
              </p>
              <ul
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  marginBottom: "16px",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li style={{ marginBottom: "4px" }}>
                  • Bitki fizyolojisi ve iklim yönetimi
                </li>
                <li style={{ marginBottom: "4px" }}>
                  • Fizibilite & yatırım planlama
                </li>
                <li style={{ marginBottom: "4px" }}>
                  • Hibe/teşvik başvuruları
                </li>
                <li style={{ marginBottom: "4px" }}>• Mevzuata uygunluk</li>
                <li>• Sürdürülebilirlik/kalite</li>
              </ul>
              <Link
                to="/danismanlik"
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "9999px",
                  padding: "12px 20px",
                  backgroundColor: "transparent",
                  color: "#111827",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Danışmanlık Talep Et
              </Link>
            </div>

            {/* Card B */}
            <div
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                height: "100%",
              }}
            >
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Çözüm ortakları: ININSA, HBAGRO, HERMISAN, ISITMAX
              </p>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Anahtar Teslim Sera
              </h3>
              <ul
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  marginBottom: "16px",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li style={{ marginBottom: "4px" }}>
                  • Konsept tasarım & mühendislik
                </li>
                <li style={{ marginBottom: "4px" }}>
                  • CAPEX/OPEX optimizasyonu
                </li>
                <li style={{ marginBottom: "4px" }}>• Kurulum & otomasyon</li>
                <li>• Süpervizörlük ve eğitim</li>
              </ul>
              <Link
                to="/anahtar-teslim-sera"
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "9999px",
                  padding: "12px 20px",
                  backgroundColor: "transparent",
                  color: "#111827",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Teklif İste
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Canlı Deneyim – Sohbet Akışı Section */}
      <section
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="py-12 sm:py-20"
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 16px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Canlı Deneyim – Sohbet Akışı
          </h2>

          {/* Phone Mockup */}
          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "28px",
              padding: "24px",
              backgroundColor: "#FFFFFF",
              textAlign: "left",
              maxWidth: "420px",
              margin: "0 auto 16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#F3F4F6",
                padding: "10px 14px",
                borderRadius: "14px",
                marginBottom: "8px",
                display: "inline-block",
              }}
            >
              Kullanıcı: Domates serası ROI analizi?
            </div>
            <div
              style={{
                backgroundColor: "#111827",
                color: "#FFFFFF",
                padding: "10px 14px",
                borderRadius: "14px",
                marginBottom: "8px",
                display: "inline-block",
                marginLeft: "auto",
                float: "right",
                clear: "both",
              }}
            >
              AI: Baz senaryoda 4.2 yıl; enerji optimizasyonuyla 3.5 yıla iner.
            </div>
            <div style={{ clear: "both" }}></div>
            <div
              style={{
                backgroundColor: "#F3F4F6",
                padding: "10px 14px",
                borderRadius: "14px",
                marginBottom: "8px",
                display: "inline-block",
              }}
            >
              Kullanıcı: Hangi teşvikler uygun?
            </div>
            <div
              style={{
                backgroundColor: "#111827",
                color: "#FFFFFF",
                padding: "10px 14px",
                borderRadius: "14px",
                display: "inline-block",
                marginLeft: "auto",
                float: "right",
              }}
            >
              AI: 2025 modernizasyon hibesi uygun. Şartları göstereyim mi?
            </div>
            <div style={{ clear: "both" }}></div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://chat.seragpt.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#146448",
                color: "#FFFFFF",
                padding: "12px 20px",
                borderRadius: "9999px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Ücretsiz Analiz Başlat
            </a>
            <Link
              to="/ornek-analizler"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #E5E7EB",
                color: "#111827",
                padding: "12px 20px",
                borderRadius: "9999px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Örnek Analizleri İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Güven & Uyum */}
      <div
        style={{
          textAlign: "center",
          color: "#6B7280",
          fontSize: "12px",
          paddingTop: "8px",
          paddingBottom: "32px",
        }}
      >
        Verileriniz gizli tutulur. KVKK/GDPR uyumlu süreçler.
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "64px",
          borderTop: "1px solid #E5E7EB",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 16px",
            flexWrap: "wrap",
            gap: "12px",
          }}
          className="flex-col sm:flex-row"
        >
          <div style={{ fontWeight: "700" }}>SeraGPT © 2025</div>
          <div
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            className="text-sm"
          >
            <Link
              to="/hakkimizda"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Hakkımızda
            </Link>
            <Link
              to="/moduller"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Modüller
            </Link>
            <Link
              to="/danismanlik"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Danışmanlık
            </Link>
            <Link
              to="/anahtar-teslim-sera"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Anahtar Teslim
            </Link>
            <Link
              to="/destek"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Destek
            </Link>
            <Link
              to="/blog"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Blog
            </Link>
            <Link
              to="/iletisim"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              İletişim
            </Link>
            <span style={{ color: "#374151" }}>TR / EN / DE / RU</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
