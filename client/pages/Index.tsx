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
          <div style={{ textAlign: "center" }}>
            {/* Upper Slogan */}
            <p
              style={{
                fontSize: "14px",
                color: "#146448",
                fontWeight: "600",
                marginBottom: "16px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Veriye dayalı kararlar için 20+ profesyonel analiz
            </p>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "16px",
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
                textAlign: "center",
              }}
              className="text-gray-700"
            >
              Verim kayıplarının %40'ı yetersiz analiz, yanlış yatırım
              planlaması ve gecikmi�� aksiyonlardan kaynaklanır. SeraGPT; 20+
              teknik analiz, global veri servisleri ve tarımsal yapay zekâ
              destekli kurumsal raporlar sunar.
            </p>
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

          {/* Animated Tag Cloud */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            {[
              "Enerji Verimliliği",
              "İklim Senaryoları",
              "Pazar Öngörüleri",
              "ROI Analizi",
              "Su Optimizasyonu",
              "Hastalık Riski",
              "Karbon Ayak İzi",
              "Üretim AI",
              "Besin Yönetimi",
              "Işık Planlama",
              "Yapı Seçimi",
              "Hasat Zamanlama",
              "Risk Yönetimi",
              "Verimlilik",
              "Sürdürülebilirlik",
              "Maliyet Analizi",
              "Kalite Kontrol",
              "Otomasyon",
              "Veri Analizi",
              "Yapay Zeka",
            ].map((tag, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  backgroundColor: index % 4 === 0 ? "#146448" : index % 4 === 1 ? "#F3F4F6" : index % 4 === 2 ? "#E5F4F0" : "#FFFFFF",
                  color: index % 4 === 0 ? "#FFFFFF" : "#374151",
                  borderRadius: "20px",
                  fontSize: index % 5 === 0 ? "16px" : index % 5 === 1 ? "14px" : index % 5 === 2 ? "18px" : index % 5 === 3 ? "12px" : "15px",
                  fontWeight: index % 3 === 0 ? "700" : "500",
                  border: index % 4 === 0 ? "none" : "1px solid #E5E7EB",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                className="hover:scale-105 hover:shadow-md"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(20, 100, 72, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {tag}
              </span>
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

        {/* CSS Animation */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Hizmetlerimiz Section */}
      <section
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
        className="py-12 sm:py-20"
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Card A */}
            <div
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                height: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
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
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
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
                textAlign: "center",
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
                  textAlign: "left",
                  display: "inline-block",
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

      {/* Pricing Section */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundColor: "#F9FAFB",
        }}
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
              Abonelik Planları
            </h2>
            <p style={{ fontSize: "14px", color: "#6B7280" }}>
              İhtiyacınıza uygun planı seçin ve hemen başlayın
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6" style={{ gap: "24px" }}>
            {/* Basic Plan */}
            <div
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                Başlangıç
              </h3>
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                Küçük sera işletmeleri için
              </p>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "32px", fontWeight: "700" }}>₺99</span>
                <span style={{ color: "#6B7280", marginLeft: "4px" }}>/ay</span>
              </div>
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
                Hemen Başla
              </a>
            </div>

            {/* Professional Plan */}
            <div
              style={{
                border: "2px solid #146448",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#146448",
                  color: "#FFFFFF",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                En Popüler
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                Profesyonel
              </h3>
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                Orta ölçekli sera işletmeleri için
              </p>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "32px", fontWeight: "700" }}>
                  ₺299
                </span>
                <span style={{ color: "#6B7280", marginLeft: "4px" }}>/ay</span>
              </div>
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
                Hemen Başla
              </a>
            </div>

            {/* Enterprise Plan */}
            <div
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "24px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                Kurumsal
              </h3>
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                Büyük sera kompleksleri için
              </p>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "32px", fontWeight: "700" }}>
                  ₺999
                </span>
                <span style={{ color: "#6B7280", marginLeft: "4px" }}>/ay</span>
              </div>
              <Link
                to="/iletisim"
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
                İletişime Geç
              </Link>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <p style={{ color: "#6B7280", fontSize: "12px" }}>
              Tüm planlar 14 günlük ücretsiz deneme ile başlar
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Sık Sorulan Sorular
            </h2>
            <p style={{ fontSize: "14px", color: "#6B7280" }}>
              SeraGPT ile ilgili merak ettiklerinizi burada bulabilirsiniz
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "SeraGPT nasıl çalışır?",
                answer:
                  "SeraGPT, yapay zeka algoritmaları kullanarak sera sensörlerinden gelen verileri analiz eder ve optimal sera koşulları için öneriler sunar.",
              },
              {
                question: "Hangi sensörlerle uyumlu?",
                answer:
                  "Sıcaklık, nem, pH, EC, CO2, ışık sensörleri ile çalışır. Mevcut sera otomasyon sistemlerinizle entegrasyon sağlayabiliriz.",
              },
              {
                question: "Kurulum süreci ne kadar sürer?",
                answer:
                  "Standart kurulum 1-3 gün arasında tamamlanır. Sera büyüklüğü ve mevcut altyapıya bağlı olarak değişebilir.",
              },
              {
                question: "Ücretsiz deneme süresi var mı?",
                answer:
                  "Evet, 14 günlük ücretsiz deneme süremiz bulunur. Bu süre içinde tüm özellikleri test edebilirsiniz.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  padding: "20px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <h3
                  style={{
                    fontWeight: "700",
                    marginBottom: "8px",
                    fontSize: "16px",
                  }}
                >
                  {faq.question}
                </h3>
                <p
                  style={{
                    color: "#374151",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <p style={{ color: "#6B7280", marginBottom: "16px" }}>
              Aradığınız soruyu bulamadınız mı?
            </p>
            <a
              href="mailto:destek@seragpt.com"
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
<p>DESTEK</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundColor: "#F9FAFB",
        }}
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
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Sera Verimliliğinizi Artırmaya Hazır mısınız?
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              marginBottom: "32px",
            }}
          >
            Ücretsiz analiz ile başlayın, farkı hemen görün.
          </p>
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
                padding: "14px 22px",
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
                padding: "14px 22px",
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
