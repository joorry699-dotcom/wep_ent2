import Image from "next/image";

const clients = [
  { name: "سديم", logo: "/logos/logo1.svg" },
  { name: "آفاق", logo: "/logos/logo2.svg" },
  { name: "مدى", logo: "/logos/logo3.svg" },
  { name: "نبض", logo: "/logos/logo4.svg" },
  { name: "أثر", logo: "/logos/logo5.svg" },
  { name: "منارة", logo: "/logos/logo6.svg" },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="hero">
        <span className="pill">جاهزون لشراكة تترك أثراً</span>
        <h1>كل قصة نجاح تبدأ بعلاقة ثقة مع عملائنا</h1>
        <p className="lede">
          نجمع بين التصميم والتقنية لنصنع تجارب رقمية تليق بتطلعات شركائنا.
          قسم "عملاؤنا" مصمم بزجاجية واضحة تُبرز شعارات العلامات التجارية
          بلمعة أنيقة وشفافة.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#clients">
            احجز استشارة سريعة
          </a>
          <a className="button ghost" href="#about">
            تعرف علينا أكثر
          </a>
        </div>
      </header>

      <section id="clients" className="clients-block">
        <div className="section-head">
          <span className="eyebrow">عملاؤنا</span>
          <div className="title-row">
            <h2>نصنع تأثيراً مع شركاء نفتخر بهم</h2>
            <p className="muted">
              خلفية زجاجية شفافة مع توهج خفيف تعطي مساحة للعلامات التجارية كي
              تتألق بوضوح دون تشويش.
            </p>
          </div>
        </div>

        <div className="glass-panel">
          <div className="glow" aria-hidden />
          <div className="logo-grid">
            {clients.map((client) => (
              <figure className="logo-tile" key={client.name}>
                <div className="logo-chip">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={80}
                    sizes="(max-width: 640px) 100vw, 200px"
                    priority
                  />
                </div>
                <figcaption>{client.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
