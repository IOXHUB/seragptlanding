import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";
import { useLanguage } from "../contexts/LanguageContext";

// Sample blog data - in real app this would come from CMS/API
const blogPosts = [
  {
    id: "sera-sicaklik-kontrolu",
    title: {
      tr: "Sera Sıcaklık Kontrolünde Yapay Zeka Kullanımı",
      en: "Using AI for Greenhouse Temperature Control",
      de: "KI-Einsatz für Gewächshaus-Temperaturkontrolle",
      ru: "Использование ИИ для контроля температуры в теплице"
    },
    excerpt: {
      tr: "Modern sera işletmelerinde yapay zeka destekli sıcaklık kontrol sistemleri nasıl verimliliği artırıyor?",
      en: "How AI-powered temperature control systems increase efficiency in modern greenhouse operations?",
      de: "Wie steigern KI-gestützte Temperaturkontrollsysteme die Effizienz in modernen Gewächshausbetrieben?",
      ru: "Как системы контроля температуры на базе ИИ повышают эффективность современных тепличных хозяйств?"
    },
    date: "2024-01-15",
    readTime: "5 min",
    category: {
      tr: "Teknoloji",
      en: "Technology",
      de: "Technologie",
      ru: "Технологии"
    },
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop",
    featured: true
  },
  {
    id: "akilli-sulama-sistemleri",
    title: {
      tr: "Akıllı Sulama Sistemlerinin Avantajları",
      en: "Advantages of Smart Irrigation Systems",
      de: "Vorteile intelligenter Bewässerungssysteme",
      ru: "Преимущества умных систем орошения"
    },
    excerpt: {
      tr: "Akıllı sulama sistemleri ile su tasarrufu ve verim artışı nasıl sağlanır?",
      en: "How to achieve water savings and increased efficiency with smart irrigation systems?",
      de: "Wie erreicht man Wassereinsparungen und Effizienzsteigerungen mit intelligenten Bewässerungssystemen?",
      ru: "Как достичь экономии воды и повышения эффективности с помощью умных ��истем орошения?"
    },
    date: "2024-01-10",
    readTime: "3 min",
    category: {
      tr: "Sulama",
      en: "Irrigation",
      de: "Bewässerung",
      ru: "Орошение"
    },
    image: "https://images.unsplash.com/photo-1574482620831-12d90e5d4088?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "sera-otomasyon-gelecegi",
    title: {
      tr: "Sera Otomasyonunun Geleceği",
      en: "The Future of Greenhouse Automation",
      de: "Die Zukunft der Gewächshausautomation",
      ru: "Будущее автоматизации теплиц"
    },
    excerpt: {
      tr: "2024 yılında sera otomasyonu nasıl gelişecek? IoT ve AI trendleri neler?",
      en: "How will greenhouse automation evolve in 2024? What are the IoT and AI trends?",
      de: "Wie wird sich die Gewächshausautomation 2024 entwickeln? Was sind die IoT- und KI-Trends?",
      ru: "Как будет развиваться автоматизация теплиц в 2024 году? Каковы тренды IoT и ИИ?"
    },
    date: "2024-01-05",
    readTime: "7 min",
    category: {
      tr: "Gelecek",
      en: "Future",
      de: "Zukunft",
      ru: "Будущее"
    },
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=400&fit=crop",
    featured: false
  },
  {
    id: "organik-tarim-teknolojileri",
    title: {
      tr: "Organik Tarımda Teknoloji Kullanımı",
      en: "Technology Use in Organic Farming",
      de: "Technologieeinsatz im ökologischen Landbau",
      ru: "Использование технологий в органическом земледелии"
    },
    excerpt: {
      tr: "Organik tarım ve modern teknoloji nasıl bir arada kullanılabilir?",
      en: "How can organic farming and modern technology be used together?",
      de: "Wie können ökologischer Landbau und moderne Technologie zusammen eingesetzt werden?",
      ru: "Как можно использовать органическое земледелие и современные технологии вместе?"
    },
    date: "2024-01-01",
    readTime: "4 min",
    category: {
      tr: "Organik",
      en: "Organic",
      de: "Bio",
      ru: "Органический"
    },
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&h=400&fit=crop",
    featured: false
  }
];

export default function Blog() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
              {t('pages.blog.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto px-4 sm:px-0">
              {t('pages.blog.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 sm:py-12 bg-background-muted">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-button-bg text-button-foreground">
                Öne Çıkan
              </span>
            </div>
            <Link
              to={`/${language}/blog/${featuredPost.id}`}
              className="group block"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm text-text-secondary">
                      {featuredPost.category[language as keyof typeof featuredPost.category]}
                    </span>
                    <span className="text-xs sm:text-sm text-text-secondary">•</span>
                    <span className="text-xs sm:text-sm text-text-secondary">
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4 group-hover:text-button-bg transition-colors">
                    {featuredPost.title[language as keyof typeof featuredPost.title]}
                  </h2>
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                    {featuredPost.excerpt[language as keyof typeof featuredPost.excerpt]}
                  </p>
                  <span className="inline-flex items-center text-button-bg hover:text-button-bg-hover text-sm sm:text-base font-medium">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title[language as keyof typeof featuredPost.title]}
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 sm:mb-12">
            Son Yazılar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={`/${language}/blog/${post.id}`}
                className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={post.title[language as keyof typeof post.title]}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-text-secondary">
                      {post.category[language as keyof typeof post.category]}
                    </span>
                    <span className="text-xs text-text-secondary">•</span>
                    <span className="text-xs text-text-secondary">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3 group-hover:text-button-bg transition-colors">
                    {post.title[language as keyof typeof post.title]}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {post.excerpt[language as keyof typeof post.excerpt]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
