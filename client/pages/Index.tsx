import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";
import { useSEO } from "../hooks/useSEO";

export default function Index() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // SEO Management
  useSEO({
    title: t("home.heroTitle") + " | SeraGPT",
    description: t("home.heroSubtitle"),
    ogTitle: t("home.heroTitle") + " | SeraGPT",
    ogDescription: t("home.heroSubtitle"),
    canonicalUrl: window.location.origin + (language === 'tr' ? '/' : `/${language}`),
  });

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
            {t("home.heroTitle")}
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
            {t("home.heroSubtitle")}
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
              {t("home.heroButton")}
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
              {t("home.heroSecondaryButton")}
            </Link>
          </div>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "12px" }}>
            {t("home.heroNote")}
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
              {t("home.upperSlogan")}
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
              {t("home.criticalTitle")}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#374151",
                textAlign: "center",
              }}
              className="text-gray-700"
            >
              {t("home.criticalDescription")}
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
              {t("home.modulesTitle")}
            </h2>
            <p style={{ fontSize: "14px", color: "#6B7280" }}>
              {t("home.modulesSubtitle")}
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
                  backgroundColor:
                    index % 4 === 0
                      ? "#146448"
                      : index % 4 === 1
                        ? "#F3F4F6"
                        : index % 4 === 2
                          ? "#E5F4F0"
                          : "#FFFFFF",
                  color: index % 4 === 0 ? "#FFFFFF" : "#374151",
                  borderRadius: "20px",
                  fontSize:
                    index % 5 === 0
                      ? "16px"
                      : index % 5 === 1
                        ? "14px"
                        : index % 5 === 2
                          ? "18px"
                          : index % 5 === 3
                            ? "12px"
                            : "15px",
                  fontWeight: index % 3 === 0 ? "700" : "500",
                  border: index % 4 === 0 ? "none" : "1px solid #E5E7EB",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  opacity: 1,
                }}
                className="hover:scale-105 hover:shadow-md"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(20, 100, 72, 0.15)";
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
              {t("home.modulesButton")}
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
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
                {t("home.consultingTitle")}
              </h3>
              <p
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                {t("home.consultingDescription")}
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
                {t("home.consultingFeatures").map((feature, index) => (
                  <li key={index} style={{ marginBottom: "4px" }}>
                    • {feature}
                  </li>
                ))}
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
                {t("home.consultingButton")}
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
                  margin: "0 0 10px 1px",
                }}
              >
                {t("home.turnkeyTitle")}
              </h3>
              <p
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                <p>{t("home.turnkeyPartners")}</p>
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
                {t("home.turnkeyFeatures").map((feature, index) => (
                  <li key={index} style={{ marginBottom: "4px" }}>
                    • {feature}
                  </li>
                ))}
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
                {t("home.turnkeyButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
          backgroundColor: "#FFFFFF",
        }}
        className="py-12 sm:py-20"
      >
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
              className="text-2xl sm:text-3xl font-bold mb-3"
            >
              {t("home.pricingTitle")}
            </h2>
            <p
              style={{ fontSize: "16px", color: "#555", marginBottom: "40px" }}
            >
              {t("home.pricingSubtitle")}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Ücretsiz Plan */}
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "30px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Ücretsiz
              </h3>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                ₺0 / 30 gün
              </div>
              <ul
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                  color: "#444",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li style={{ marginBottom: "8px" }}>• 5 Analiz</li>
                <li style={{ marginBottom: "8px" }}>• 100 Mesaj</li>
                <li style={{ marginBottom: "8px" }}>• 30 Gün Geçerli</li>
                <li style={{ marginBottom: "8px" }}>• Ücretsiz Deneme</li>
              </ul>
              <a
                href="https://chat.seragpt.com/auth/signup?next=/free"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                Ücretsiz Başlat
              </a>
            </div>

            {/* Pro Plan */}
            <div
              style={{
                border: "2px solid #111",
                borderRadius: "12px",
                padding: "30px",
                backgroundColor: "#f9fafb",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Pro
              </h3>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                ₺4.900 / ay
              </div>
              <ul
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                  color: "#444",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li style={{ marginBottom: "8px" }}>• 500 Analiz</li>
                <li style={{ marginBottom: "8px" }}>• 100 Teknik Analiz</li>
                <li style={{ marginBottom: "8px" }}>• 1000 Mesaj</li>
                <li style={{ marginBottom: "8px" }}>• 30 Gün Geçerli</li>
                <li style={{ marginBottom: "8px" }}>
                  • Yıllık ödemede 2 ay ücretsiz
                </li>
              </ul>
              <a
                href="https://chat.seragpt.com/billing/checkout?plan=pro"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                Pro'ya Geç
              </a>
            </div>

            {/* Premium Plan */}
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "30px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Premium
              </h3>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                ₺49.000 / yıl
              </div>
              <ul
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                  color: "#444",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                <li style={{ marginBottom: "8px" }}>• 5000 Analiz</li>
                <li style={{ marginBottom: "8px" }}>• 500 Teknik Analiz</li>
                <li style={{ marginBottom: "8px" }}>• 250 Premium Analiz</li>
                <li style={{ marginBottom: "8px" }}>• 12.000 Mesaj</li>
                <li style={{ marginBottom: "8px" }}>• 12 Ay Geçerli</li>
              </ul>
              <a
                href="https://chat.seragpt.com/billing/checkout?plan=premium"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                Premium'a Geç
              </a>
            </div>
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
            <p>Projenizi Bugün Başlatın</p>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              marginBottom: "32px",
            }}
          >
            <p>
              Ücretsiz analiz ve tarımsal zeka kullanımı ile tarımsal
              asistanınızı bugün keşfedin.{" "}
            </p>
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
    </div>
  );
}
