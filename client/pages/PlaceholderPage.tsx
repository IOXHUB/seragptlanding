import { useTranslation } from "../hooks/useTranslation";

interface PlaceholderPageProps {
  pageKey: "blog" | "support" | "consulting" | "turnkey";
}

export function PlaceholderPage({ pageKey }: PlaceholderPageProps) {
  const { t } = useTranslation();

  const title = t(`pages.${pageKey}.title`);
  const description = t(`pages.${pageKey}.description`);

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-6">{title}</h1>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="bg-background-muted border border-border rounded-lg p-8 card-shadow">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-xl font-semibold text-text-primary mb-3">
            Sayfa Geliştiriliyor
          </h2>
          <p className="text-text-secondary">
            Bu sayfa henüz tamamlanmamıştır. İçerik eklemek için lütfen yeni
            talepler gönderin.
          </p>
        </div>
      </div>
    </div>
  );
}
