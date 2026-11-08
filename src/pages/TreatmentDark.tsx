import { Link } from "react-router-dom";
import { buildBreadcrumbList, buildGraph } from "@/lib/structuredData";
import { Helmet } from "react-helmet-async";
import DrArefinHeader from "@/components/arefin/DrArefinHeader";
import DrArefinFooter from "@/components/arefin/DrArefinFooter";
import darkLogo from "@/assets/dr-arefin-logo-dark.webp";
import heroBg from "@/assets/dr-arefin-ot-team-real.webp";
import { Reveal } from "@/hooks/useScrollReveal";
import HeroSection from "@/components/arefin/HeroSection";
import TestimonialsSection from "@/components/arefin/TestimonialsSection";
import ServicesGridSection from "@/components/arefin/ServicesGridSection";
import FAQAccordion from "@/components/arefin/FAQAccordion";
import GlobalCTABand from "@/components/arefin/GlobalCTABand";
import { getFaqsBySlugs } from "@/data/faqRegistry";

/* ── Real clinical images for treatment cards ── */
import imgLiverTumor from "@/assets/treat-liver-tumor.webp";
import imgLiverCyst from "@/assets/treat-liver-cyst.webp";
import imgFattyLiver from "@/assets/treat-fatty-liver.webp";
import imgTransplant from "@/assets/gallery/liver-surgery-team-closeup-hepatobiliary-surgeon-dhaka.webp";
import imgTransplantFollowup from "@/assets/dr-arefin-post-operation-real.webp";
import imgAcuteLiver from "@/assets/gallery/hepatobiliary-open-surgery-best-surgeon-team-dhaka.webp";

/**
 * Treatment — Dark version
 * Batch 2 (27 Oct 2026, liver focus): liver treatments index for murshidularifin.com. Gallbladder, pancreatic, spleen and upper-GI cards removed; do not restore them here.
 * Design system matches homepage & about page (dark mode).
 */

interface TreatmentService {
  title: string;
  description: string;
  img?: string;
  imgPosition?: string;
  to?: string;
  linkTitle?: string;
}

const services: TreatmentService[] = [
  {
    title: "Liver Tumor & Cancer Surgery",
    to: "/treatment/liver-tumor-cancer-surgery-dhaka/",
    linkTitle: "Liver tumor & cancer surgery in Dhaka — liver surgeon Dr. Arefin",
    description:
      "Dr. Arefin provides <a href='/diagnosis-surgery-recovery/' title='Precise hepatobiliary diagnosis by Dr. Arefin in Dhaka'><strong>precise diagnosis</strong></a> and <a href='/treatment/liver-tumor-cancer-surgery-dhaka/' title='Advanced surgical treatment for benign and malignant liver tumors in Dhaka'><strong>advanced surgical treatment for both benign and malignant liver tumors</strong></a>. Using <a href='/minimally-invasive-surgery/' title='Modern resection and minimally invasive liver surgery techniques'><strong>modern resection and minimally invasive techniques</strong></a>, he ensures optimal tumor removal.",
    img: imgLiverTumor,
  },
  {
    title: "Liver Cyst Management",
    to: "/treatment/liver-cyst-surgery-dhaka/",
    linkTitle: "Liver cyst surgery in Dhaka — safe excision by liver surgeon Dr. Arefin",
    description:
      "<a href='/treatment/liver-cyst-surgery-dhaka/' title='Simple or complex liver cyst evaluation and surgery in Dhaka'><strong>Simple or complex liver cysts</strong></a> are carefully assessed using advanced imaging. When surgery is required, Dr. Arefin performs <a href='/treatment/liver-cyst-surgery-dhaka/' title='Safe liver cyst excision in Dhaka by Dr. Arefin'><strong>safe cyst excision</strong></a> to prevent recurrence, relieve discomfort, and <a href='/treatment/liver-surgery/' title='Restore normal liver function — hepatobiliary surgery in Dhaka'><strong>restore normal liver function.</strong></a>",
    img: imgLiverCyst,
  },
  {
    title: "Liver Abscess & Acute Liver Conditions",
    to: "/treatment/liver-abscess-dhaka/",
    linkTitle: "Liver abscess treatment in Dhaka — drainage and surgery by liver surgeon Dr. Arefin",
    description:
      "For <a href='/treatment/liver-abscess-dhaka/' title='Liver abscess treatment in Dhaka'><strong>liver abscess and acute liver conditions</strong></a>, Dr. Arefin provides urgent assessment, image-guided drainage and surgery where needed — with 24-hour OT and ICU support at Popular Medical College Hospital.",
    img: imgAcuteLiver,
  },
  {
    title: "Fatty Liver Surgical Intervention",
    to: "/treatment/fatty-liver-management/",
    linkTitle: "Fatty liver disease — surgical & metabolic management by Dhaka's hepatobiliary surgeon",
    description:
      "For patients with <a href='/treatment/fatty-liver-management/' title='Fatty liver disease management in Dhaka'><strong>severe or complicated fatty liver disease</strong></a>, Dr. Arefin combines <a href='/treatment/fatty-liver-management/' title='Metabolic evaluation with surgical precision for fatty liver disease'><strong>metabolic evaluation with surgical precision</strong></a> to manage liver damage, prevent further deterioration, and promote healthy regeneration.",
    img: imgFattyLiver,
  },
  {
    title: "Liver Transplant Surgery",
    to: "/treatment/liver-transplant-surgery-dhaka/",
    linkTitle: "Liver transplant surgery in Dhaka — donor coordination & advanced hepatobiliary care",
    description:
      "A cornerstone of Dr. Arefin's expertise—offering <a href='/treatment/liver-transplant-evaluation/' title='Complete liver transplant evaluation and donor coordination in Dhaka'><strong>complete evaluation, donor coordination</strong></a>, and <a href='/treatment/liver-transplant-surgery-dhaka/' title='Liver transplant surgery in Dhaka by Dr. Arefin'><strong>advanced transplant procedures</strong></a> for <a href='/treatment/liver-transplant-surgery-dhaka/' title='End-stage liver failure transplant surgery in Dhaka'><strong>end-stage liver failure</strong></a>. His approach focuses on patient safety, post-transplant recovery, and long-term liver health.",
    img: imgTransplant,
  },
  {
    title: "Liver Transplant Coordination & Follow-Up Care",
    to: "/treatment/post-transplant-follow-up/",
    linkTitle: "Liver transplant coordination & post-transplant follow-up care in Dhaka",
    description:
      "Dr. Arefin's transplant program provides <a href='/treatment/liver-transplant-coordination/' title='End-to-end liver transplant support in Dhaka'><strong>end-to-end support</strong></a>—from <a href='/treatment/liver-transplant-evaluation/' title='Donor assessment for liver transplant in Dhaka'><strong>donor assessment</strong></a> to <a href='/treatment/post-transplant-follow-up/' title='Post-transplant follow-up care in Dhaka'><strong>post-surgery rehabilitation</strong></a>—ensuring a <a href='/diagnosis-surgery-recovery/' title='Seamless diagnosis-surgery-recovery experience with Dr. Arefin'><strong>seamless experience</strong></a> and <a href='/treatment/post-transplant-follow-up/' title='Long-term post-transplant care in Dhaka'><strong>long-term care</strong></a> for transplant patients.",
    img: imgTransplantFollowup,
    imgPosition: "center 20%",
  },
];

/* Treatment-page FAQ: liver-led entries from the central registry. */
/* Batch 2: liver-led FAQ slugs only. Gallbladder, Whipple and pancreatic slugs removed. */
const TREATMENT_FAQ_SLUGS = [
  "best-hepatobiliary-surgeon-in-dhanmondi-dhaka",
  "how-much-does-liver-surgery-cost-in-dhaka",
  "where-is-liver-transplant-surgery-available-in-dhaka",
  "treatment-for-bile-duct-stricture-in-dhaka",
];
const faqs = getFaqsBySlugs(TREATMENT_FAQ_SLUGS);

const jsonLdString = buildGraph(
  buildBreadcrumbList([{ name: "Treatment", path: "/treatment/" }]),
  {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Liver Treatment Services — Dr. Murshidul Arefin",
    url: "https://drarefin.com/treatment/",
    description:
      "Liver treatments in Dhaka led by Dr. Murshidul Arefin — liver tumour and cyst surgery, fatty liver care, and liver transplant evaluation and follow-up.",
    mainEntity: { "@id": "https://drarefin.com/#physician" },
  },
);

const TreatmentDark = () => {
  return (
    <div className="arefin dark min-h-screen bg-background text-foreground font-arefin">
      <Helmet>
        <title>Liver Treatments in Dhaka | Dr. Murshidul Arefin</title>
        <meta name="description" content="Liver treatments in Dhaka by Dr. Murshidul Arefin — liver tumour and cyst surgery, fatty liver care, and liver transplant evaluation and follow-up in Dhanmondi." />
        <link rel="canonical" href="https://drarefin.com/treatment/" />
        <link rel="preload" as="image" href={heroBg} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Liver Treatments in Dhaka | Dr. Murshidul Arefin" />
        <meta property="og:description" content="Liver treatments in Dhaka by Dr. Murshidul Arefin — liver tumour and cyst surgery, fatty liver care, and liver transplant evaluation and follow-up in Dhanmondi." />
        <meta property="og:url" content="https://drarefin.com/treatment/" />
        <meta property="og:site_name" content="Dr. Murshidul Arefin" />
        <meta property="og:locale" content="en_BD" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />

      <DrArefinHeader logoSrc={darkLogo} transparent />

      {/* ============== HERO — shared HeroSection (homepage parity) ============== */}
      <HeroSection
        imageSrc={heroBg}
        imageAlt="Dr. Arefin's liver surgical team in the operating theatre"
        breadcrumb="Treatment"
        kicker="Our Treatments"
        h1="Liver Treatments in Dhaka"
        h1Href="/treatment/"
        h1Title="Liver treatments in Dhaka by Dr. Murshidul Arefin"
        introHtml={`<strong>Liver treatments in Dhaka</strong> led by <a href="/about/" title="About Dr. Murshidul Arefin"><strong>Dr. Murshidul Arefin</strong></a> — liver tumours, cysts, fatty liver disease, and liver transplant evaluation and follow-up, planned around your imaging and liver function at Popular Medical College Hospital, Dhanmondi.`}
        trust={[
          "Liver surgery in Dhaka",
          "Reply within 24 hours",
          "Call +880 1311-487592",
        ]}
      />

      {/* ============== SERVICES SECTION HEADING ============== */}
      <ServicesGridSection
        kicker="Our Services"
        heading="Liver Treatments in Dhaka"
        introHtml="<strong>Liver conditions first</strong> — each liver service below has its own page with symptoms, diagnosis, treatment options, recovery, and FAQs, led by <a href='/about/' title='About Dr. Murshidul Arefin — fellowship-trained hepatobiliary surgeon'><strong>Dr. Murshidul Arefin</strong></a>, a BSMMU-trained hepatobiliary and liver transplant surgeon in Dhanmondi, Dhaka."
        items={services}
        ariaLabel="Treatment services list"
        lightBand
      />

      {/* ============== TESTIMONIALS ============== */}
      <TestimonialsSection />

      {/* ============== FINAL CTA — shared GlobalCTABand (homepage parity) ============== */}
      <GlobalCTABand
        headingLead="Ready for "
        headingAccent="Expert Consultation?"
        body={
          <>
            <Link to="/contact/" title="Connect with Dr. Arefin — book a liver consultation in Dhaka"><strong>Connect with Dr. Arefin</strong></Link> for a{" "}
            <Link to="/diagnosis-surgery-recovery/" title="Detailed hepatobiliary diagnosis by Dr. Arefin"><strong>detailed diagnosis</strong></Link>,{" "}
            <Link to="/about/proven-surgical-excellence/" title="Expert hepatobiliary advice — proven surgical excellence"><strong>expert advice</strong></Link>, and a{" "}
            <Link to="/diagnosis-surgery-recovery/" title="Path to recovery — diagnosis, surgery, and recovery pathway"><strong>path to recovery</strong></Link>.
          </>
        }
      />

      {/* ============== FAQ — homepage parity (FAQAccordion + mint band) ============== */}
      <div className="home-faq-band arefin-mint-band">
        <Reveal>
          <FAQAccordion
            kicker="FAQ"
            heading="Frequently Asked Questions"
            items={faqs}
          />
        </Reveal>
        <style>{`
          .arefin.dark .home-faq-band .satellite-faq { background: #E2F8E7; }
          .arefin.dark .home-faq-band .satellite-section-kicker { color: hsl(142 71% 32%); }
          .arefin.dark .home-faq-band .satellite-faq .satellite-h2 { color: hsl(0 0% 8%); }
          .arefin.dark .home-faq-band .satellite-faq-item {
            background: hsl(0 0% 12%);
            color: hsl(0 0% 96%);
            border-color: hsl(0 0% 22%);
            border-left-color: hsl(0 0% 22%);
          }
          .arefin.dark .home-faq-band .satellite-faq-item[open],
          .arefin.dark .home-faq-band .satellite-faq-item:hover,
          .arefin.dark .home-faq-band .satellite-faq-item:focus-within {
            border-left-color: hsl(131 87% 41%);
          }
          .arefin.dark .home-faq-band .satellite-faq-item summary { color: hsl(0 0% 96%); }
          .arefin.dark .home-faq-band .satellite-faq-item .faq-chev { color: hsl(131 87% 45%); }
          .arefin.dark .home-faq-band .satellite-faq-answer { color: hsl(0 0% 96% / 0.78); }
        `}</style>
      </div>

      <DrArefinFooter />
    </div>
  );
};

export default TreatmentDark;
