import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import DrArefinHomeDark from "./pages/DrArefinHomeDark";
import LiverTumourSurgeryDark from "./pages/LiverTumourSurgeryDark";
import PancreaticSurgeryDark from "./pages/PancreaticSurgeryDark";
import BiliarySurgeryDark from "./pages/BiliarySurgeryDark";
import MentorshipDark from "./pages/MentorshipDark";
import DrArefinHomeLight from "./pages/DrArefinHomeLight";
import AboutDark from "./pages/AboutDark";
import TreatmentDark from "./pages/TreatmentDark";
import LiverSurgeryDark from "./pages/LiverSurgeryDark";
import ContactDark from "./pages/ContactDark";
import SimilarWebsiteDark from "./pages/SimilarWebsiteDark";
import FirstInBangladesh from "./pages/FirstInBangladesh";
import GalleryDark from "./pages/GalleryDark";
import GalleryImageDetailDark from "./pages/GalleryImageDetailDark";
import ArticlesDark from "./pages/ArticlesDark";
import ArticleSingleDark from "./pages/ArticleSingleDark";
import HeroSectionUpdate from "./pages/HeroSectionUpdate";
import HomeMobileHeroPreview from "./pages/HomeMobileHeroPreview";
import ScrollToTop from "./components/ScrollToTop";
import SatellitePagesDashboard from "./pages/SatellitePagesDashboard";
import SatellitePage from "./pages/SatellitePage";
import FAQSinglePage from "./pages/FAQSinglePage";
import SitemapPage from "./pages/SitemapPage";

import { SATELLITE_PAGES } from "./data/satellitePages";
import { MATRIX_PAGES_PILOT, MATRIX_PAGES_MENU } from "./data/satelliteMatrix";
import { JOURNEY_TASK_PAGES } from "./data/journeyTaskPages";
import { faqRegistry } from "./data/faqRegistry";

// Expose matrix + journey-task pages to the findSatellitePage lookup (avoids circular import).
(globalThis as { __MATRIX_PAGES__?: typeof MATRIX_PAGES_PILOT }).__MATRIX_PAGES__ = [
  ...MATRIX_PAGES_PILOT,
  ...MATRIX_PAGES_MENU,
];
(globalThis as { __JOURNEY_TASK_PAGES__?: typeof JOURNEY_TASK_PAGES }).__JOURNEY_TASK_PAGES__ = JOURNEY_TASK_PAGES;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* WordPress staging build sets VITE_ROUTER_BASENAME=/staging; preview and live use "/" */}
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASENAME || undefined}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<DrArefinHomeDark />} />
            <Route path="/light" element={<DrArefinHomeLight />} />
            <Route path="/light/" element={<DrArefinHomeLight />} />
            <Route path="/about" element={<AboutDark />} />
            <Route path="/about/" element={<AboutDark />} />
            <Route path="/treatment" element={<TreatmentDark />} />
            <Route path="/treatment/" element={<TreatmentDark />} />
            <Route path="/treatment/liver-surgery" element={<LiverSurgeryDark />} />
            <Route path="/treatment/liver-surgery/" element={<LiverSurgeryDark />} />
            <Route path="/treatment/liver-tumor-cancer-surgery-dhaka" element={<LiverTumourSurgeryDark />} />
            <Route path="/treatment/liver-tumor-cancer-surgery-dhaka/" element={<LiverTumourSurgeryDark />} />
            {/* Liver-focus redirect (Batch 3): old gallbladder hub -> liver tumour hub. Full redirect block in Phase 8. */}
            <Route path="/treatment/gallbladder-surgery" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/" replace />} />
            <Route path="/treatment/gallbladder-surgery/" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/" replace />} />
            <Route path="/treatment/pancreatic-surgery" element={<PancreaticSurgeryDark />} />
            <Route path="/treatment/pancreatic-surgery/" element={<PancreaticSurgeryDark />} />
            <Route path="/treatment/biliary-tract-surgery" element={<BiliarySurgeryDark />} />
            <Route path="/treatment/biliary-tract-surgery/" element={<BiliarySurgeryDark />} />
            <Route path="/mentorship" element={<MentorshipDark />} />
            <Route path="/mentorship/" element={<MentorshipDark />} />
            <Route path="/fastest-way-to-reach-a-doctor-in-bangladesh" element={<FirstInBangladesh />} />
            <Route path="/fastest-way-to-reach-a-doctor-in-bangladesh/" element={<FirstInBangladesh />} />
            <Route path="/contact" element={<ContactDark />} />
            <Route path="/contact/" element={<ContactDark />} />
            <Route path="/similar-website" element={<SimilarWebsiteDark />} />
            <Route path="/similar-website/" element={<SimilarWebsiteDark />} />
            <Route path="/gallery" element={<GalleryDark />} />
            <Route path="/gallery/" element={<GalleryDark />} />
            <Route path="/gallery/:slug" element={<GalleryImageDetailDark />} />
            <Route path="/gallery/:slug/" element={<GalleryImageDetailDark />} />
            <Route path="/articles" element={<ArticlesDark />} />
            <Route path="/articles/" element={<ArticlesDark />} />
            <Route path="/category/:slug" element={<ArticlesDark />} />
            <Route path="/category/:slug/" element={<ArticlesDark />} />
            <Route path="/hero-section-update" element={<HeroSectionUpdate />} />
            <Route path="/hero-section-update/" element={<HeroSectionUpdate />} />
            <Route path="/home-mobile-hero-preview" element={<HomeMobileHeroPreview />} />
            <Route path="/home-mobile-hero-preview/" element={<HomeMobileHeroPreview />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/sitemap/" element={<SitemapPage />} />
            <Route path="/satellite-pages" element={<SatellitePagesDashboard />} />
            <Route path="/satellite-pages/" element={<SatellitePagesDashboard />} />
            <Route path="/faq/:slug" element={<FAQSinglePage />} />
            <Route path="/faq/:slug/" element={<FAQSinglePage />} />
            {/* Root-slug FAQ pages: /<slug>/ — registered explicitly so they win over the catch-all. */}
            {faqRegistry.flatMap((f) => [
              <Route key={"faq-root-" + f.slug} path={"/" + f.slug} element={<FAQSinglePage />} />,
              <Route key={"faq-root-" + f.slug + "/"} path={"/" + f.slug + "/"} element={<FAQSinglePage />} />,
            ])}
            {SATELLITE_PAGES.flatMap((p) => [
              <Route key={p.slug} path={p.slug} element={<SatellitePage />} />,
              <Route key={p.slug + "/"} path={p.slug + "/"} element={<SatellitePage />} />,
            ])}
            {MATRIX_PAGES_PILOT.flatMap((p) => [
              <Route key={"m" + p.slug} path={p.slug} element={<SatellitePage />} />,
              <Route key={"m" + p.slug + "/"} path={p.slug + "/"} element={<SatellitePage />} />,
            ])}
            {MATRIX_PAGES_MENU.flatMap((p) => [
              <Route key={"mm" + p.slug} path={p.slug} element={<SatellitePage />} />,
              <Route key={"mm" + p.slug + "/"} path={p.slug + "/"} element={<SatellitePage />} />,
            ])}
            {JOURNEY_TASK_PAGES.flatMap((p) => [
              <Route key={"j" + p.slug} path={p.slug} element={<SatellitePage />} />,
              <Route key={"j" + p.slug + "/"} path={p.slug + "/"} element={<SatellitePage />} />,
            ])}
            {/* ══════════ Liver-focus redirects — Batch 3, Phase 8 (2026-11-08) ══════════ */}
            {/* Every retired gallbladder URL redirects to its liver replacement (or /about/ for the deleted numeric-credential pages, /gallery/ for removed photos). */}
            {/* The old hub /treatment/gallbladder-surgery[/] redirect lives with the literal routes above. Static routes outrank /gallery/:slug, /faq/:slug and /:slug, so these win. */}
            {/* Matrix */}
            <Route path="/treatment/gallbladder-surgery-in-dhanmondi" element={<Navigate to="/treatment/liver-resection-surgery-in-dhanmondi/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-dhanmondi/" element={<Navigate to="/treatment/liver-resection-surgery-in-dhanmondi/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-gulshan" element={<Navigate to="/treatment/liver-resection-surgery-in-gulshan/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-gulshan/" element={<Navigate to="/treatment/liver-resection-surgery-in-gulshan/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-uttara" element={<Navigate to="/treatment/liver-resection-surgery-in-uttara/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-uttara/" element={<Navigate to="/treatment/liver-resection-surgery-in-uttara/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-mirpur" element={<Navigate to="/treatment/liver-resection-surgery-in-mirpur/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-mirpur/" element={<Navigate to="/treatment/liver-resection-surgery-in-mirpur/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-mohakhali" element={<Navigate to="/treatment/liver-resection-surgery-in-mohakhali/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-mohakhali/" element={<Navigate to="/treatment/liver-resection-surgery-in-mohakhali/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-banani" element={<Navigate to="/treatment/liver-resection-surgery-in-banani/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-banani/" element={<Navigate to="/treatment/liver-resection-surgery-in-banani/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-bashundhara" element={<Navigate to="/treatment/liver-resection-surgery-in-bashundhara/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-bashundhara/" element={<Navigate to="/treatment/liver-resection-surgery-in-bashundhara/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-old-dhaka" element={<Navigate to="/treatment/liver-resection-surgery-in-old-dhaka/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-old-dhaka/" element={<Navigate to="/treatment/liver-resection-surgery-in-old-dhaka/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-wari" element={<Navigate to="/treatment/liver-resection-surgery-in-wari/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-wari/" element={<Navigate to="/treatment/liver-resection-surgery-in-wari/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-tejgaon" element={<Navigate to="/treatment/liver-resection-surgery-in-tejgaon/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-tejgaon/" element={<Navigate to="/treatment/liver-resection-surgery-in-tejgaon/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-rangpur-sadar" element={<Navigate to="/treatment/liver-resection-surgery-in-rangpur-sadar/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-rangpur-sadar/" element={<Navigate to="/treatment/liver-resection-surgery-in-rangpur-sadar/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-chattogram" element={<Navigate to="/treatment/liver-resection-surgery-in-chattogram/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-chattogram/" element={<Navigate to="/treatment/liver-resection-surgery-in-chattogram/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-sylhet" element={<Navigate to="/treatment/liver-resection-surgery-in-sylhet/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-sylhet/" element={<Navigate to="/treatment/liver-resection-surgery-in-sylhet/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-khulna" element={<Navigate to="/treatment/liver-resection-surgery-in-khulna/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-khulna/" element={<Navigate to="/treatment/liver-resection-surgery-in-khulna/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-rajshahi" element={<Navigate to="/treatment/liver-resection-surgery-in-rajshahi/" replace />} />
            <Route path="/treatment/gallbladder-surgery-in-rajshahi/" element={<Navigate to="/treatment/liver-resection-surgery-in-rajshahi/" replace />} />
            <Route path="/why-gallbladder-surgery-is-required" element={<Navigate to="/why-liver-resection-surgery-is-required/" replace />} />
            <Route path="/why-gallbladder-surgery-is-required/" element={<Navigate to="/why-liver-resection-surgery-is-required/" replace />} />
            {/* Satellite */}
            <Route path="/conditions/gallstones" element={<Navigate to="/treatment/liver-cyst-surgery-dhaka/" replace />} />
            <Route path="/conditions/gallstones/" element={<Navigate to="/treatment/liver-cyst-surgery-dhaka/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/" replace />} />
            <Route path="/credentials/1500-gallbladder-surgeries-dhaka" element={<Navigate to="/about/" replace />} />
            <Route path="/credentials/1500-gallbladder-surgeries-dhaka/" element={<Navigate to="/about/" replace />} />
            <Route path="/credentials/20-years-gallbladder-surgery-experience-dhaka" element={<Navigate to="/about/" replace />} />
            <Route path="/credentials/20-years-gallbladder-surgery-experience-dhaka/" element={<Navigate to="/about/" replace />} />
            <Route path="/credentials/fcps-ms-hepatobiliary-gallbladder-surgeon-dhaka" element={<Navigate to="/credentials/fcps-ms-hepatobiliary-liver-surgeon-dhaka/" replace />} />
            <Route path="/credentials/fcps-ms-hepatobiliary-gallbladder-surgeon-dhaka/" element={<Navigate to="/credentials/fcps-ms-hepatobiliary-liver-surgeon-dhaka/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka" element={<Navigate to="/treatment/benign-liver-tumour-surgery-dhaka/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/" element={<Navigate to="/treatment/benign-liver-tumour-surgery-dhaka/" replace />} />
            <Route path="/treatment/empyema-gallbladder-dhaka" element={<Navigate to="/treatment/liver-abscess-dhaka/" replace />} />
            <Route path="/treatment/empyema-gallbladder-dhaka/" element={<Navigate to="/treatment/liver-abscess-dhaka/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka" element={<Navigate to="/treatment/liver-cancer-resection-dhaka/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/" element={<Navigate to="/treatment/liver-cancer-resection-dhaka/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka" element={<Navigate to="/treatment/acute-liver-conditions-dhaka/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/" element={<Navigate to="/treatment/acute-liver-conditions-dhaka/" replace />} />
            <Route path="/about/dr-arefin-gallbladder-specialist" element={<Navigate to="/about/dr-arefin-liver-specialist/" replace />} />
            <Route path="/about/dr-arefin-gallbladder-specialist/" element={<Navigate to="/about/dr-arefin-liver-specialist/" replace />} />
            <Route path="/laparoscopic-cholecystectomy" element={<Navigate to="/laparoscopic-liver-surgery/" replace />} />
            <Route path="/laparoscopic-cholecystectomy/" element={<Navigate to="/laparoscopic-liver-surgery/" replace />} />
            {/* FAQ */}
            <Route path="/faq/best-gallbladder-surgeon-in-dhanmondi-dhaka" element={<Navigate to="/faq/who-is-the-best-liver-surgeon-in-dhanmondi-dhaka/" replace />} />
            <Route path="/faq/best-gallbladder-surgeon-in-dhanmondi-dhaka/" element={<Navigate to="/faq/who-is-the-best-liver-surgeon-in-dhanmondi-dhaka/" replace />} />
            <Route path="/best-gallbladder-surgeon-in-dhanmondi-dhaka" element={<Navigate to="/faq/who-is-the-best-liver-surgeon-in-dhanmondi-dhaka/" replace />} />
            <Route path="/best-gallbladder-surgeon-in-dhanmondi-dhaka/" element={<Navigate to="/faq/who-is-the-best-liver-surgeon-in-dhanmondi-dhaka/" replace />} />
            <Route path="/faq/how-much-does-gallbladder-stone-surgery-cost-in-dhaka" element={<Navigate to="/faq/how-much-does-liver-surgery-cost-in-dhaka/" replace />} />
            <Route path="/faq/how-much-does-gallbladder-stone-surgery-cost-in-dhaka/" element={<Navigate to="/faq/how-much-does-liver-surgery-cost-in-dhaka/" replace />} />
            <Route path="/how-much-does-gallbladder-stone-surgery-cost-in-dhaka" element={<Navigate to="/faq/how-much-does-liver-surgery-cost-in-dhaka/" replace />} />
            <Route path="/how-much-does-gallbladder-stone-surgery-cost-in-dhaka/" element={<Navigate to="/faq/how-much-does-liver-surgery-cost-in-dhaka/" replace />} />
            <Route path="/faq/is-laparoscopic-cholecystectomy-available-in-dhanmondi" element={<Navigate to="/faq/is-laparoscopic-liver-surgery-available-in-dhanmondi/" replace />} />
            <Route path="/faq/is-laparoscopic-cholecystectomy-available-in-dhanmondi/" element={<Navigate to="/faq/is-laparoscopic-liver-surgery-available-in-dhanmondi/" replace />} />
            <Route path="/is-laparoscopic-cholecystectomy-available-in-dhanmondi" element={<Navigate to="/faq/is-laparoscopic-liver-surgery-available-in-dhanmondi/" replace />} />
            <Route path="/is-laparoscopic-cholecystectomy-available-in-dhanmondi/" element={<Navigate to="/faq/is-laparoscopic-liver-surgery-available-in-dhanmondi/" replace />} />
            <Route path="/faq/how-long-does-recovery-after-gallbladder-surgery-take-in-dhaka" element={<Navigate to="/faq/how-long-does-recovery-after-liver-resection-take-in-dhaka/" replace />} />
            <Route path="/faq/how-long-does-recovery-after-gallbladder-surgery-take-in-dhaka/" element={<Navigate to="/faq/how-long-does-recovery-after-liver-resection-take-in-dhaka/" replace />} />
            <Route path="/how-long-does-recovery-after-gallbladder-surgery-take-in-dhaka" element={<Navigate to="/faq/how-long-does-recovery-after-liver-resection-take-in-dhaka/" replace />} />
            <Route path="/how-long-does-recovery-after-gallbladder-surgery-take-in-dhaka/" element={<Navigate to="/faq/how-long-does-recovery-after-liver-resection-take-in-dhaka/" replace />} />
            <Route path="/faq/does-dr-arefin-perform-gallbladder-cancer-surgery-in-dhaka" element={<Navigate to="/faq/does-dr-arefin-treat-liver-cancer-at-popular-medical-college-hospital/" replace />} />
            <Route path="/faq/does-dr-arefin-perform-gallbladder-cancer-surgery-in-dhaka/" element={<Navigate to="/faq/does-dr-arefin-treat-liver-cancer-at-popular-medical-college-hospital/" replace />} />
            <Route path="/does-dr-arefin-perform-gallbladder-cancer-surgery-in-dhaka" element={<Navigate to="/faq/does-dr-arefin-treat-liver-cancer-at-popular-medical-college-hospital/" replace />} />
            <Route path="/does-dr-arefin-perform-gallbladder-cancer-surgery-in-dhaka/" element={<Navigate to="/faq/does-dr-arefin-treat-liver-cancer-at-popular-medical-college-hospital/" replace />} />
            <Route path="/faq/treatment-for-bile-duct-injury-after-gallbladder-surgery-in-dhaka" element={<Navigate to="/faq/treatment-for-bile-duct-injury-during-liver-surgery-in-dhaka/" replace />} />
            <Route path="/faq/treatment-for-bile-duct-injury-after-gallbladder-surgery-in-dhaka/" element={<Navigate to="/faq/treatment-for-bile-duct-injury-during-liver-surgery-in-dhaka/" replace />} />
            <Route path="/treatment-for-bile-duct-injury-after-gallbladder-surgery-in-dhaka" element={<Navigate to="/faq/treatment-for-bile-duct-injury-during-liver-surgery-in-dhaka/" replace />} />
            <Route path="/treatment-for-bile-duct-injury-after-gallbladder-surgery-in-dhaka/" element={<Navigate to="/faq/treatment-for-bile-duct-injury-during-liver-surgery-in-dhaka/" replace />} />
            <Route path="/faq/treatment-for-empyema-of-the-gallbladder-in-dhaka" element={<Navigate to="/faq/what-is-the-treatment-for-liver-abscess-in-dhaka/" replace />} />
            <Route path="/faq/treatment-for-empyema-of-the-gallbladder-in-dhaka/" element={<Navigate to="/faq/what-is-the-treatment-for-liver-abscess-in-dhaka/" replace />} />
            <Route path="/treatment-for-empyema-of-the-gallbladder-in-dhaka" element={<Navigate to="/faq/what-is-the-treatment-for-liver-abscess-in-dhaka/" replace />} />
            <Route path="/treatment-for-empyema-of-the-gallbladder-in-dhaka/" element={<Navigate to="/faq/what-is-the-treatment-for-liver-abscess-in-dhaka/" replace />} />
            <Route path="/faq/do-gallbladder-polyps-need-surgery-in-dhaka" element={<Navigate to="/faq/do-benign-liver-tumours-need-surgery-in-dhaka/" replace />} />
            <Route path="/faq/do-gallbladder-polyps-need-surgery-in-dhaka/" element={<Navigate to="/faq/do-benign-liver-tumours-need-surgery-in-dhaka/" replace />} />
            <Route path="/do-gallbladder-polyps-need-surgery-in-dhaka" element={<Navigate to="/faq/do-benign-liver-tumours-need-surgery-in-dhaka/" replace />} />
            <Route path="/do-gallbladder-polyps-need-surgery-in-dhaka/" element={<Navigate to="/faq/do-benign-liver-tumours-need-surgery-in-dhaka/" replace />} />
            <Route path="/faq/how-to-book-a-gallbladder-surgery-consultation-in-dhanmondi" element={<Navigate to="/faq/how-to-book-a-liver-surgery-consultation-in-dhanmondi/" replace />} />
            <Route path="/faq/how-to-book-a-gallbladder-surgery-consultation-in-dhanmondi/" element={<Navigate to="/faq/how-to-book-a-liver-surgery-consultation-in-dhanmondi/" replace />} />
            <Route path="/how-to-book-a-gallbladder-surgery-consultation-in-dhanmondi" element={<Navigate to="/faq/how-to-book-a-liver-surgery-consultation-in-dhanmondi/" replace />} />
            <Route path="/how-to-book-a-gallbladder-surgery-consultation-in-dhanmondi/" element={<Navigate to="/faq/how-to-book-a-liver-surgery-consultation-in-dhanmondi/" replace />} />
            {/* Journey */}
            <Route path="/treatment/cholecystitis-surgery-dhaka/symptom-evaluation" element={<Navigate to="/treatment/liver-surgeon-dhaka/medical-history-review/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/symptom-evaluation/" element={<Navigate to="/treatment/liver-surgeon-dhaka/medical-history-review/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/abdominal-ultrasound" element={<Navigate to="/treatment/liver-surgeon-dhaka/diagnostic-imaging/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/abdominal-ultrasound/" element={<Navigate to="/treatment/liver-surgeon-dhaka/diagnostic-imaging/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/mrcp-when-indicated" element={<Navigate to="/treatment/liver-surgeon-dhaka/lab-work-analysis/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/mrcp-when-indicated/" element={<Navigate to="/treatment/liver-surgeon-dhaka/lab-work-analysis/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/liver-function-tests" element={<Navigate to="/treatment/liver-surgeon-dhaka/risk-assessment/" replace />} />
            <Route path="/treatment/cholecystitis-surgery-dhaka/liver-function-tests/" element={<Navigate to="/treatment/liver-surgeon-dhaka/risk-assessment/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/laparoscopic-vs-open-decision" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/multidisciplinary-review/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/laparoscopic-vs-open-decision/" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/multidisciplinary-review/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/anaesthetic-clearance" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/surgical-approach-selection/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/anaesthetic-clearance/" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/surgical-approach-selection/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/pre-op-optimisation" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/pre-op-preparation/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/pre-op-optimisation/" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/pre-op-preparation/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/patient-counselling" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/patient-counselling/" replace />} />
            <Route path="/treatment/gallbladder-cancer-resection-dhaka/patient-counselling/" element={<Navigate to="/treatment/liver-tumor-cancer-surgery-dhaka/patient-counselling/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/keyhole-incisions" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/advanced-surgical-techniques/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/keyhole-incisions/" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/advanced-surgical-techniques/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/critical-view-of-safety" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/minimally-invasive-options/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/critical-view-of-safety/" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/minimally-invasive-options/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/stone-and-specimen-retrieval" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/intraoperative-monitoring/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/stone-and-specimen-retrieval/" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/intraoperative-monitoring/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/drain-placement-if-needed" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/expert-surgical-team/" replace />} />
            <Route path="/treatment/laparoscopic-cholecystectomy-dhaka/drain-placement-if-needed/" element={<Navigate to="/treatment/minimally-invasive-liver-surgery-dhaka/expert-surgical-team/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/same-next-day-discharge" element={<Navigate to="/treatment/liver-surgery-recovery/recovery-protocol/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/same-next-day-discharge/" element={<Navigate to="/treatment/liver-surgery-recovery/recovery-protocol/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/diet-and-wound-guidance" element={<Navigate to="/treatment/liver-surgery-recovery/follow-up-consultations/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/diet-and-wound-guidance/" element={<Navigate to="/treatment/liver-surgery-recovery/follow-up-consultations/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/2-week-review" element={<Navigate to="/treatment/liver-surgery-recovery/rehabilitation-guidance/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/2-week-review/" element={<Navigate to="/treatment/liver-surgery-recovery/rehabilitation-guidance/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/long-term-support" element={<Navigate to="/treatment/liver-surgery-recovery/lifetime-support/" replace />} />
            <Route path="/treatment/gallstone-removal-dhaka/long-term-support/" element={<Navigate to="/treatment/liver-surgery-recovery/lifetime-support/" replace />} />
            {/* Gallery */}
            <Route path="/gallery/best-gallbladder-surgery-team-in-operation-theater-dhaka" element={<Navigate to="/gallery/hepatobiliary-surgery-specialist-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/best-gallbladder-surgery-team-in-operation-theater-dhaka/" element={<Navigate to="/gallery/hepatobiliary-surgery-specialist-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/best-liver-surgery-team-in-operation-theater-dhaka" element={<Navigate to="/gallery/hepatobiliary-surgery-specialist-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/best-liver-surgery-team-in-operation-theater-dhaka/" element={<Navigate to="/gallery/hepatobiliary-surgery-specialist-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-performing-gallbladder-surgery-in-dhaka" element={<Navigate to="/gallery/dr-murshidul-arefin-performing-liver-surgery-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-performing-gallbladder-surgery-in-dhaka/" element={<Navigate to="/gallery/dr-murshidul-arefin-performing-liver-surgery-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-performing-liver-surgery-in-dhaka" element={<Navigate to="/gallery/dr-murshidul-arefin-performing-liver-surgery-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-performing-liver-surgery-in-dhaka/" element={<Navigate to="/gallery/dr-murshidul-arefin-performing-liver-surgery-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/gallbladder-surgery-team-at-popular-medical-college-hospital" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-at-popular-medical-college-hospital/" replace />} />
            <Route path="/gallery/gallbladder-surgery-team-at-popular-medical-college-hospital/" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-at-popular-medical-college-hospital/" replace />} />
            <Route path="/gallery/liver-surgery-team-at-popular-medical-college-hospital" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-at-popular-medical-college-hospital/" replace />} />
            <Route path="/gallery/liver-surgery-team-at-popular-medical-college-hospital/" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-at-popular-medical-college-hospital/" replace />} />
            <Route path="/gallery/laparoscopic-gallbladder-surgery-full-ot-team-at-popular-medical" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/laparoscopic-gallbladder-surgery-full-ot-team-at-popular-medical/" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/laparoscopic-liver-surgery-full-ot-team-at-popular-medical" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/laparoscopic-liver-surgery-full-ot-team-at-popular-medical/" element={<Navigate to="/gallery/liver-surgery-team-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/three-surgeons-performing-gallbladder-operation-at-popular-medical" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-surgeon-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/three-surgeons-performing-gallbladder-operation-at-popular-medical/" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-surgeon-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/three-surgeons-performing-liver-operation-at-popular-medical" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-surgeon-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/three-surgeons-performing-liver-operation-at-popular-medical/" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-surgeon-in-operation-theater-dhaka/" replace />} />
            <Route path="/gallery/empyema-gallbladder-laparoscopic-surgery-specialist-dhaka" element={<Navigate to="/gallery/dr-murshidul-arefin-in-surgical-scrubs-dhaka/" replace />} />
            <Route path="/gallery/empyema-gallbladder-laparoscopic-surgery-specialist-dhaka/" element={<Navigate to="/gallery/dr-murshidul-arefin-in-surgical-scrubs-dhaka/" replace />} />
            <Route path="/gallery/liver-surgery-specialist-in-operation-theater-dhaka" element={<Navigate to="/gallery/dr-murshidul-arefin-in-surgical-scrubs-dhaka/" replace />} />
            <Route path="/gallery/liver-surgery-specialist-in-operation-theater-dhaka/" element={<Navigate to="/gallery/dr-murshidul-arefin-in-surgical-scrubs-dhaka/" replace />} />
            <Route path="/gallery/gallbladder-stone-laparoscopic-removal-surgery-in-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/gallbladder-stone-laparoscopic-removal-surgery-in-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/laparoscopic-liver-surgery-in-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/laparoscopic-liver-surgery-in-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-surgical-team-gallbladder-operation-at-popular-medical" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-surgical-team-gallbladder-operation-at-popular-medical/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-surgical-team-liver-operation-at-popular-medical" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-surgical-team-liver-operation-at-popular-medical/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/gallbladder-operation-surgical-team-at-popular-medical-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/gallbladder-operation-surgical-team-at-popular-medical-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/liver-operation-surgical-team-at-popular-medical-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/liver-operation-surgical-team-at-popular-medical-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-best-gallbladder-surgeon-in-dhaka" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-doctor-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-best-gallbladder-surgeon-in-dhaka/" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-doctor-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-best-liver-surgeon-in-dhaka" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-doctor-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-best-liver-surgeon-in-dhaka/" element={<Navigate to="/gallery/dr-murshidul-arefin-liver-doctor-dhaka/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-appointment-gallbladder-and-liver-surgeon-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-appointment-gallbladder-and-liver-surgeon-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-appointment-liver-surgeon-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-appointment-liver-surgeon-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-successful-gallbladder-stone-operation-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-successful-gallbladder-stone-operation-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-successful-liver-operation-dhaka" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/dr-murshidul-arefin-successful-liver-operation-dhaka/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/patient-recovery-after-gallbladder-surgery-by-dr-murshidul-arefin" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/patient-recovery-after-gallbladder-surgery-by-dr-murshidul-arefin/" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/patient-recovery-after-liver-surgery-by-dr-murshidul-arefin" element={<Navigate to="/gallery/" replace />} />
            <Route path="/gallery/patient-recovery-after-liver-surgery-by-dr-murshidul-arefin/" element={<Navigate to="/gallery/" replace />} />
            {/* Any other one-segment address is a WordPress blog post (/<post-slug>/). */}
            <Route path="/:slug" element={<ArticleSingleDark />} />
            <Route path="/:slug/" element={<ArticleSingleDark />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
