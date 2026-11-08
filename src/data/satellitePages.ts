/**
 * Satellite Pages — Tier 1 (10 high-traffic SEO landing pages)
 *
 * Spec: Dr-Arefin-Spec/pages/13-satellite-pages-database.md
 *
 * Each page targets a Tier-1 keyword cluster and is rendered by
 * `src/pages/SatellitePage.tsx` using `SatellitePageTemplate`.
 *
 * Authoring rules:
 *  - title       < 60 chars (SEO <title>)
 *  - metaDesc    < 160 chars
 *  - h1          one per page, keyword-rich
 *  - sections    H2 + paragraphs; ~600–1000 words total per page
 *  - faq         3–6 Q&A pairs (rendered as FAQPage JSON-LD too)
 *  - related     internal-link grid pointing to other satellite/treatment pages
 *
 * Keep all internal links as relative paths with trailing slashes.
 */

export interface SatelliteSection {
  heading: string;
  /** HTML allowed: <p>, <strong>, <a href>, <ul>, <li>. Use trailing-slash internal links. */
  body: string;
}

export interface SatelliteFaq {
  q: string;
  a: string;
}

export interface SatelliteRelated {
  to: string;
  label: string;
  title: string; // SEO title attr
}

export interface SatellitePage {
  /** URL path WITHOUT trailing slash, e.g. "/treatment/hepatobiliary-surgery" */
  slug: string;
  /** Top kicker label */
  kicker: string;
  /** SEO <title> */
  title: string;
  /** SEO meta description */
  metaDesc: string;
  /** Page H1 */
  h1: string;
  /** Lead paragraph (HTML allowed) */
  intro: string;
  /** Hero image asset path under src/assets (we resolve via /src import map) */
  heroImage: string;
  /** Hero alt text (English + Bengali blend recommended) */
  heroAlt: string;
  sections: SatelliteSection[];
  faq: SatelliteFaq[];
  related: SatelliteRelated[];
}

/* Image mapping — all from existing gallery assets */
const IMG = {
  hepatobiliary: "/src/assets/gallery/hepatobiliary-open-surgery-best-surgeon-team-dhaka.webp",
  liverSurgeon: "/src/assets/gallery/liver-surgery-team-closeup-hepatobiliary-surgeon-dhaka.webp",
  bestSurgeon: "/src/assets/gallery/dr-murshidul-arefin-best-gallbladder-surgeon-dhaka.webp",
  laparoscopic: "/src/assets/gallery/laparoscopic-cholecystectomy-storz-screen-best-surgeon-dhaka.webp",
  gallstones: "/src/assets/gallery/gallbladder-stone-laparoscopic-removal-surgery-dhaka.webp",
  popular: "/src/assets/gallery/dr-murshidul-arefin-popular-medical-college-hospital-team-dhaka.webp",
  bileDuct: "/src/assets/gallery/liver-pancreatic-open-surgery-specialist-team-dhaka.webp",
  fatty: "/src/assets/gallery/laparoscopic-gallbladder-surgery-full-ot-team-popular-medical-dhaka.webp",
  transplant: "/src/assets/gallery/dr-murshidul-arefin-hepatobiliary-pancreatic-liver-transplant-surgeon.webp",
  spleen: "/src/assets/gallery/gallbladder-open-surgery-closeup-best-surgeon-dhaka.webp",
};

export const SATELLITE_PAGES: SatellitePage[] = [
  /* ───────────── 1. Hepatobiliary Surgery ───────────── */
  {
    slug: "/treatment/hepatobiliary-surgery",
    kicker: "Specialty Overview",
    title: "Hepatobiliary Surgery in Dhaka — Dr. Arefin",
    metaDesc:
      "Dr. Murshidul Arefin performs advanced hepatobiliary surgery in Dhaka — liver, gallbladder, and bile duct procedures with laparoscopic and open techniques.",
    h1: "Hepatobiliary Surgery in Dhaka by Dr. Murshidul Arefin",
    intro:
      "<p>Hepatobiliary surgery is one of the most demanding subspecialties in modern medicine. It treats diseases of the <strong>liver, gallbladder, and bile ducts</strong> — organs that share a complex shared blood supply and must be operated on with extreme precision. <a href='/about/' title='About Dr. Murshidul Arefin — credentials and training'>Dr. Murshidul Arefin's profile</a> is a fellowship-trained hepatobiliary surgeon practicing at <a href='/popular-medical-college-hospital/' title='Dr. Arefin chamber at Popular Medical College Hospital, Dhanmondi'>Popular Medical College Hospital, Dhanmondi</a>, where he performs the full spectrum of hepatobiliary procedures.</p>",
    heroImage: IMG.hepatobiliary,
    heroAlt:
      "Hepatobiliary open surgery by best surgeon team in Dhaka — হেপাটোবিলিয়ারি ওপেন সার্জারি",
    sections: [
      {
        heading: "What hepatobiliary surgery covers",
        body:
          "<p>The hepatobiliary system includes the liver, gallbladder, and the network of bile ducts that drain bile into the small intestine. Surgical management is required when these structures are affected by tumors, stones, infection, or structural anomalies.</p><p>Dr. Arefin's hepatobiliary practice covers <a href='/treatment/liver-surgery/' title='Advanced liver surgery — tumors, cysts, resection'>liver tumor and cyst surgery</a>, <a href='/treatment/liver-tumor-cancer-surgery-dhaka/' title='Laparoscopic gallbladder surgery in Dhaka'>laparoscopic and open gallbladder surgery</a>, <a href='/treatment/bile-duct-surgery/' title='Bile duct and biliary reconstruction surgery'>bile duct reconstruction</a>, and <a href='/treatment/liver-transplant-coordination/' title='Liver transplant pre and post-operative coordination'>liver transplant coordination</a>.</p>",
      },
      {
        heading: "Conditions treated",
        body:
          "<ul><li>Benign and malignant <strong>liver tumors</strong>, including hepatocellular carcinoma</li><li><strong>Liver cysts</strong> — simple, hydatid, and polycystic disease</li><li>Symptomatic <a href='/treatment/liver-cyst-surgery-dhaka/' title='Gallstone removal surgery in Dhaka'>gallstones</a> and gallbladder polyps</li><li>Bile duct strictures, injuries, and choledochal cysts</li><li>Pancreatic head and periampullary tumors (Whipple)</li><li>Portal hypertension and end-stage liver disease workup</li></ul>",
      },
      {
        heading: "Surgical approach",
        body:
          "<p>Whenever clinically appropriate, Dr. Arefin uses <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic minimally invasive surgery in Dhaka'>laparoscopic minimally invasive techniques</a> to reduce blood loss, scarring, and recovery time. Complex resections — extended hepatectomies, vascular reconstructions, and tumors involving major vessels — are performed open with full intraoperative imaging support.</p><p>Each case is planned individually using triphasic CT, MRCP, and multidisciplinary review.</p>",
      },
      {
        heading: "Why patients choose Dr. Arefin",
        body:
          "<p>Hepatobiliary surgery has one of the steepest learning curves in surgery; outcomes depend heavily on surgeon volume. Dr. Arefin combines fellowship training in hepatobiliary surgery with a high annual case volume at a tertiary referral hospital. His practice is built on conservative indications, rigorous preoperative planning, and structured follow-up.</p>",
      },
    ],
    faq: [
      {
        q: "What is the difference between hepatobiliary and general surgery?",
        a: "General surgery covers a broad range of abdominal procedures, while hepatobiliary surgery is a subspecialty focused exclusively on the liver, gallbladder, bile ducts, and pancreas. These organs require advanced training because of their shared anatomy and the high complication rate of imprecise surgery.",
      },
      {
        q: "Where does Dr. Arefin perform hepatobiliary surgery?",
        a: "Dr. Arefin's primary surgical practice is at Popular Medical College Hospital in Dhanmondi, Dhaka. Outpatient consultation is available at the same chamber.",
      },
      {
        q: "Is laparoscopic hepatobiliary surgery available in Bangladesh?",
        a: "Yes. Dr. Arefin routinely performs laparoscopic gallbladder, bile duct, and selected liver procedures using modern Storz equipment.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Liver tumor, cyst, and resection surgery by Dr. Arefin" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/treatment/bile-duct-surgery/", label: "Bile Duct & Hepatic Surgery", title: "Bile duct reconstruction and stricture repair" },
      { to: "/treatment/liver-transplant-coordination/", label: "Liver Transplant Coordination", title: "Pre and post liver transplant care by Dr. Arefin" },
    ],
  },

  /* ───────────── 2. Liver Surgeon Dhaka ───────────── */
  {
    slug: "/treatment/liver-surgeon-dhaka",
    kicker: "Geo-targeted Specialty",
    title: "Best Liver Surgeon in Dhaka — Dr. Murshidul Arefin",
    metaDesc:
      "Looking for the best liver surgeon in Dhaka? Dr. Murshidul Arefin is a fellowship-trained hepatobiliary specialist at Popular Medical College Hospital, Dhanmondi.",
    h1: "Best Liver Surgeon in Dhaka — Dr. Murshidul Arefin",
    intro:
      "<p>Choosing a liver surgeon in Dhaka is a decision that affects long-term health and recovery. <strong>Dr. Murshidul Arefin</strong> is a fellowship-trained hepatobiliary surgeon practicing at <a href='/popular-medical-college-hospital/' title='Dr. Arefin at Popular Medical College Hospital, Dhanmondi'>Popular Medical College Hospital</a> in <strong>Dhanmondi, Dhaka</strong>. Patients across Bangladesh travel to his chamber for tumor resections, cyst management, and second opinions on complex liver disease.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Best liver surgeon in Dhaka — Dr. Arefin liver surgery team closeup",
    sections: [
      {
        heading: "What makes a great liver surgeon",
        body:
          "<p>Liver surgery has one of the highest complication rates of any operation when performed by low-volume surgeons. Outcomes improve dramatically with subspecialty training and case volume. Look for: fellowship training in hepatobiliary surgery, an active hospital appointment, and the ability to handle both <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery in Dhaka'>laparoscopic</a> and open approaches.</p>",
      },
      {
        heading: "Dr. Arefin's credentials",
        body:
          "<p>MBBS from the University of Dhaka, MS in Hepatobiliary Surgery from BSMMU, and fellowship training in liver transplantation. Dr. Arefin is on the consultant staff at Popular Medical College Hospital and contributes to academic training of junior surgeons. See his full <a href='/about/' title='About Dr. Arefin — credentials, training, philosophy'>profile and credentials</a>.</p>",
      },
      {
        heading: "Conditions Dr. Arefin treats",
        body:
          "<p>His liver surgery practice covers tumors (HCC, metastases, benign masses), cysts, abscesses, hydatid disease, fatty liver workup, and pre-transplant evaluation. For patients needing transplantation, see <a href='/treatment/liver-transplant-coordination/' title='Liver transplant coordination by Dr. Arefin'>liver transplant coordination</a>.</p>",
      },
      {
        heading: "Booking a consultation",
        body:
          "<p>Patients can book directly via the <a href='/contact/' title='Contact Dr. Arefin and book appointment'>contact page</a> or call the chamber. Bring all prior imaging (CT, MRI, ultrasound) and recent blood reports including liver function tests.</p>",
      },
    ],
    faq: [
      {
        q: "Where is Dr. Arefin's chamber in Dhaka?",
        a: "Dr. Arefin's chamber is at Popular Medical College Hospital in Dhanmondi, Dhaka. Direction and visiting hours are listed on the contact page.",
      },
      {
        q: "Does Dr. Arefin perform liver transplant surgery?",
        a: "Dr. Arefin coordinates pre-transplant workup, donor evaluation, and post-transplant surgical care. Transplant procedures themselves are performed at partner centres with which he collaborates.",
      },
      {
        q: "Which reports should I bring to the first visit?",
        a: "Bring recent ultrasound or CT/MRI of the abdomen, liver function tests, viral markers (HBsAg, anti-HCV), and any prior surgical or biopsy reports.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Liver tumor and resection surgery by Dr. Arefin" },
      { to: "/best-hepatobiliary-surgeon-dhaka/", label: "Best Hepatobiliary Surgeon", title: "Best hepatobiliary surgeon in Dhaka — credentials" },
      { to: "/treatment/fatty-liver-management/", label: "Fatty Liver Management", title: "Fatty liver disease management and treatment" },
      { to: "/popular-medical-college-hospital/", label: "Chamber & Hospital", title: "Dr. Arefin chamber at Popular Medical College Hospital" },
    ],
  },

  /* ───────────── 3. Best Hepatobiliary Surgeon Dhaka ───────────── */
  {
    slug: "/best-hepatobiliary-surgeon-dhaka",
    kicker: "Authority Page",
    title: "Best Hepatobiliary Surgeon in Dhaka — Dr. Arefin",
    metaDesc:
      "Dr. Murshidul Arefin is among the best hepatobiliary surgeons in Dhaka — fellowship trained, BSMMU MS, hundreds of laparoscopic and open cases each year.",
    h1: "Best Hepatobiliary Surgeon in Dhaka",
    intro:
      "<p>If you are searching for the <strong>best hepatobiliary surgeon in Dhaka</strong>, three things matter: subspecialty training, surgical volume, and patient outcomes. <a href='/about/' title='Dr. Arefin fellowship training and case volume'>Dr. Murshidul Arefin</a> meets all three with fellowship training, an active high-volume practice, and a track record of conservative, evidence-based decisions.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Dr. Murshidul Arefin — Best Hepatobiliary Surgeon in Dhaka",
    sections: [
      {
        heading: "Training and credentials",
        body:
          "<p>MBBS, University of Dhaka. MS in Hepatobiliary Surgery, BSMMU. Fellowship training in liver transplantation and advanced laparoscopic hepatobiliary surgery. Active consultant at Popular Medical College Hospital, Dhanmondi.</p>",
      },
      {
        heading: "Case volume and scope",
        body:
          "<p>Dr. Arefin performs the full range of hepatobiliary procedures: liver resections, complex <a href='/treatment/bile-duct-surgery/' title='Bile duct surgery and reconstruction'>bile duct reconstructions</a>, Whipple procedures, and high-volume <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery in Dhaka'>laparoscopic gallbladder and bile duct surgery</a>. He also manages <a href='/treatment/spleen-surgery/' title='Spleen surgery and splenectomy'>splenic conditions</a> when they overlap with hepatobiliary disease.</p>",
      },
      {
        heading: "Patient-first philosophy",
        body:
          "<p>Not every patient needs surgery. Dr. Arefin is known for honest second opinions — including telling patients when watchful waiting is the better choice. When surgery is required, he discusses alternatives, expected outcomes, and recovery in plain language.</p>",
      },
      {
        heading: "How to book",
        body:
          "<p>Visit the <a href='/contact/' title='Contact and book appointment'>contact page</a> to book online or call the chamber directly. Out-of-Dhaka patients can request a tele-consultation review of imaging before travelling.</p>",
      },
    ],
    faq: [
      {
        q: "What qualifications should a hepatobiliary surgeon have?",
        a: "MBBS, MS in General Surgery or Hepatobiliary Surgery, plus fellowship or advanced training specifically in hepatobiliary and pancreatic surgery. Active hospital appointment and ongoing CME are essential.",
      },
      {
        q: "How do I judge surgical outcomes?",
        a: "Ask about case volume per year, complication rates, and the surgeon's approach to second opinions. A surgeon willing to discuss outcomes openly is generally a good sign.",
      },
      {
        q: "Is hepatobiliary surgery cost in Dhaka affordable?",
        a: "Costs depend on the procedure, hospital tier, and length of stay. Dr. Arefin's chamber provides transparent estimates after initial assessment.",
      },
    ],
    related: [
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery Overview", title: "Hepatobiliary surgery overview by Dr. Arefin" },
      { to: "/treatment/liver-surgeon-dhaka/", label: "Liver Surgeon in Dhaka", title: "Best liver surgeon in Dhaka — Dr. Arefin" },
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Laparoscopic minimally invasive surgery" },
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin — credentials and philosophy" },
    ],
  },

  /* ───────────── 4. Laparoscopic Surgery ───────────── */
  {
    slug: "/treatment/laparoscopic-surgery",
    kicker: "Surgical Technique",
    title: "Laparoscopic Surgery in Dhaka — Dr. Arefin",
    metaDesc:
      "Laparoscopic (keyhole) surgery in Dhaka by Dr. Arefin — gallbladder, bile duct, liver, and selected pancreatic procedures with faster recovery and smaller scars.",
    h1: "Laparoscopic (Keyhole) Surgery in Dhaka",
    intro:
      "<p>Laparoscopic surgery — also called <strong>keyhole</strong> or <strong>minimally invasive surgery</strong> — uses small incisions, a camera, and specialised instruments to operate inside the abdomen. Recovery is faster, scars are smaller, and the risk of wound complications is significantly lower than open surgery. <a href='/about/' title='Dr. Arefin laparoscopic surgery experience'>Dr. Arefin</a> performs hundreds of laparoscopic hepatobiliary procedures each year at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital chamber'>Popular Medical College Hospital</a>.</p>",
    heroImage: IMG.laparoscopic,
    heroAlt:
      "Laparoscopic cholecystectomy on Storz monitor — Best Surgeon in Dhaka — ল্যাপারোস্কপিক কোলেসিস্টেকটমি",
    sections: [
      {
        heading: "Procedures Dr. Arefin performs laparoscopically",
        body:
          "<ul><li><a href='/treatment/liver-tumor-cancer-surgery-dhaka/' title='Laparoscopic gallbladder surgery'>Laparoscopic cholecystectomy</a> for gallstones and polyps</li><li>Common bile duct exploration and stone removal</li><li>Hernia repair and adhesiolysis</li><li>Selected liver wedge resections and cyst fenestrations</li><li>Diagnostic laparoscopy for staging and biopsy</li></ul>",
      },
      {
        heading: "Benefits of the laparoscopic approach",
        body:
          "<p>Compared with open surgery, laparoscopic procedures typically offer 30–50% shorter hospital stay, dramatically less postoperative pain, smaller scars, and a faster return to work. Wound infection and incisional hernia rates are also lower.</p>",
      },
      {
        heading: "When open surgery is the better choice",
        body:
          "<p>Some situations still favour open surgery: large or central liver tumors, dense adhesions from prior surgery, severe acute inflammation, and complex bile duct reconstructions. Dr. Arefin individualises the approach based on imaging and intraoperative findings.</p>",
      },
      {
        heading: "Equipment and OT setup",
        body:
          "<p>Procedures use modern Karl Storz HD laparoscopic systems with energy devices and intraoperative ultrasound when needed. The OT team is trained specifically in hepatobiliary laparoscopy.</p>",
      },
    ],
    faq: [
      {
        q: "How long is recovery after laparoscopic gallbladder surgery?",
        a: "Most patients are discharged within 24 hours and return to office work within 5–7 days. Heavy lifting is restricted for 2–3 weeks.",
      },
      {
        q: "Is laparoscopic surgery safer than open surgery?",
        a: "When performed by an experienced surgeon for the right indication, yes — wound complications and hospital stay are lower. Complex cases may still require open conversion for safety.",
      },
      {
        q: "How many incisions are made?",
        a: "Typically 3–4 small incisions of 5–10 mm each. Single-incision approaches are available for selected cases.",
      },
    ],
    related: [
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/treatment/liver-cyst-surgery-dhaka/", label: "Liver Cyst Surgery", title: "Liver cyst surgery in Dhaka" },
      { to: "/treatment/bile-duct-surgery/", label: "Bile Duct Surgery", title: "Bile duct surgery and CBD exploration" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
    ],
  },

  /* ───────────── 5. Liver Cysts (was Gallstones — merged, entry removed) ───────────── */

  /* ───────────── 6. Popular Medical College Hospital ───────────── */
  {
    slug: "/popular-medical-college-hospital",
    kicker: "Chamber & Hospital",
    title: "Dr. Arefin at Popular Medical College Hospital",
    metaDesc:
      "Dr. Murshidul Arefin's chamber at Popular Medical College Hospital, Dhanmondi, Dhaka. Visiting hours, location, and how to book a hepatobiliary consultation.",
    h1: "Dr. Arefin at Popular Medical College Hospital, Dhanmondi",
    intro:
      "<p><strong>Popular Medical College Hospital</strong> in <strong>Dhanmondi, Dhaka</strong> is one of Bangladesh's largest tertiary-care private hospitals and the primary practice base for <a href='/about/' title='Meet Dr. Arefin — hepatobiliary surgeon at Popular Medical'>Dr. Murshidul Arefin</a>. The hospital provides modern operating theatres, ICU, and full diagnostic support — everything required for safe hepatobiliary and liver transplant care.</p>",
    heroImage: IMG.popular,
    heroAlt:
      "Dr. Arefin with medical staff at Popular Medical College Hospital Dhaka — পপুলার মেডিকেল কলেজ হাসপাতাল টিম",
    sections: [
      {
        heading: "Location and directions",
        body:
          "<p>Popular Medical College Hospital is located in Dhanmondi, central Dhaka, with easy access from Mirpur Road and the Dhanmondi Lake area. Use the <a href='/contact/' title='Contact page with map and directions'>contact page</a> for a full map embed and directions.</p>",
      },
      {
        heading: "Chamber facilities",
        body:
          "<p>Dr. Arefin's outpatient chamber is air-conditioned with separate consultation and examination areas. The hospital has on-site radiology (ultrasound, CT, MRI), pathology, blood bank, and 24/7 emergency support.</p>",
      },
      {
        heading: "Procedures performed here",
        body:
          "<p>The hospital's modular OT complex supports the full hepatobiliary spectrum: <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery'>laparoscopic</a> and open <a href='/treatment/liver-tumor-cancer-surgery-dhaka/' title='Gallbladder surgery'>gallbladder surgery</a>, <a href='/treatment/liver-surgery/' title='Liver surgery'>liver resection</a>, <a href='/treatment/bile-duct-surgery/' title='Bile duct surgery'>bile duct reconstruction</a>, and Whipple procedures.</p>",
      },
      {
        heading: "How to book a consultation",
        body:
          "<p>Online booking is available via the <a href='/contact/' title='Contact and appointment booking'>contact page</a>. Walk-in patients are accommodated based on availability. International patients can request a tele-consult before travelling to Dhaka.</p>",
      },
    ],
    faq: [
      {
        q: "Where exactly is Popular Medical College Hospital?",
        a: "Dhanmondi, Dhaka — central location with parking and easy public-transport access. The contact page has a full map.",
      },
      {
        q: "What are Dr. Arefin's chamber hours?",
        a: "Outpatient timings are listed on the contact page and may vary on surgery days. Calling ahead is recommended.",
      },
      {
        q: "Are international patients welcome?",
        a: "Yes. The chamber supports international patients with tele-consultation, imaging review before travel, and support during their stay in Dhaka.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgeon-dhaka/", label: "Liver Surgeon in Dhaka", title: "Best liver surgeon in Dhaka" },
      { to: "/best-hepatobiliary-surgeon-dhaka/", label: "Best Hepatobiliary Surgeon", title: "Best hepatobiliary surgeon in Dhaka" },
      { to: "/contact/", label: "Book Appointment", title: "Contact and book appointment with Dr. Arefin" },
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Arefin" },
    ],
  },

  /* ───────────── 7. Bile Duct Surgery ───────────── */
  {
    slug: "/treatment/bile-duct-surgery",
    kicker: "Subspecialty Procedure",
    title: "Bile Duct & Hepatic Surgery — Dr. Arefin",
    metaDesc:
      "Bile duct surgery in Dhaka by Dr. Arefin — CBD exploration, stricture repair, choledochal cyst excision, and biliary reconstruction.",
    h1: "Bile Duct & Hepatic Surgery in Dhaka",
    intro:
      "<p>Bile duct surgery is one of the most technically demanding areas within <a href='/treatment/hepatobiliary-surgery/' title='Hepatobiliary surgery overview'>hepatobiliary surgery</a>. Conditions ranging from stones in the common bile duct to congenital cysts and post-surgical injuries all require precise, individualised management. <a href='/about/' title='Dr. Arefin — bile duct and biliary reconstruction expertise'>Dr. Arefin</a> performs the full range of biliary procedures with a focus on long-term ductal patency.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Liver and bile duct open surgery specialist team in Dhaka",
    sections: [
      {
        heading: "Conditions treated",
        body:
          "<ul><li>Common bile duct (CBD) stones — laparoscopic exploration or ERCP-assisted</li><li>Benign biliary strictures from prior surgery or inflammation</li><li>Choledochal cysts — Type I to V, Roux-en-Y reconstruction</li><li>Bile duct injuries — referral repair for complex cases</li><li>Cholangiocarcinoma — staging and resection where curative</li></ul>",
      },
      {
        heading: "Surgical techniques",
        body:
          "<p>Procedures range from laparoscopic CBD exploration for stones to open Roux-en-Y hepaticojejunostomy for strictures and reconstructions. The choice depends on imaging (MRCP, CT), liver function, and the level of the duct involved.</p>",
      },
      {
        heading: "Why expertise matters",
        body:
          "<p>Bile duct injury and stricture have a high recurrence rate when repaired by inexperienced surgeons. Long-term outcomes depend on tension-free anastomosis, healthy duct margins, and structured follow-up — all areas where Dr. Arefin's hepatobiliary fellowship training matters.</p>",
      },
    ],
    faq: [
      {
        q: "Can bile duct stones be removed without surgery?",
        a: "Many CBD stones can be cleared by ERCP. Surgery is reserved for stones that cannot be removed endoscopically, or when the gallbladder also requires removal.",
      },
      {
        q: "What is a choledochal cyst?",
        a: "A congenital dilation of the bile duct that carries a long-term cancer risk. Treatment is surgical excision and Roux-en-Y reconstruction.",
      },
      {
        q: "How long is recovery after bile duct surgery?",
        a: "Hospital stay is typically 5–10 days for open reconstructions and shorter for laparoscopic CBD exploration. Full recovery takes 4–6 weeks.",
      },
    ],
    related: [
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/treatment/liver-cyst-surgery-dhaka/", label: "Liver Cyst Surgery", title: "Liver cyst surgery in Dhaka" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Laparoscopic surgery in Dhaka" },
    ],
  },

  /* ───────────── 8. Fatty Liver Management ───────────── */
  {
    slug: "/treatment/fatty-liver-management",
    kicker: "Disease Management",
    title: "Fatty Liver & Disease Management — Dr. Arefin",
    metaDesc:
      "Fatty liver disease (NAFLD/NASH) management in Dhaka by Dr. Arefin — non-surgical first approach, lifestyle plans, monitoring, and surgery when truly needed.",
    h1: "Fatty Liver Disease Management in Dhaka",
    intro:
      "<p><strong>Fatty liver disease</strong> (NAFLD and NASH) is now one of the most common liver conditions in Bangladesh. Most cases are <em>not</em> surgical — they need lifestyle change, treatment of associated conditions, and structured monitoring. <a href='/about/' title='Dr. Arefin — conservative liver disease management approach'>Dr. Arefin</a> emphasises a non-surgical first approach and reserves surgery for the small subset of patients who develop complications.</p>",
    heroImage: IMG.fatty,
    heroAlt: "Laparoscopic gallbladder surgery full OT team — Dr. Arefin Dhaka",
    sections: [
      {
        heading: "What is fatty liver disease",
        body:
          "<p>Fat accumulation in liver cells, usually associated with obesity, type-2 diabetes, high cholesterol, or alcohol. Most patients have no symptoms; the diagnosis is often incidental on ultrasound. A subset progresses to NASH (inflammation), fibrosis, and eventually cirrhosis.</p>",
      },
      {
        heading: "Non-surgical management — the first line",
        body:
          "<ul><li>Weight loss of 5–10% of body weight reverses most early disease</li><li>Tight control of diabetes and lipids</li><li>Regular physical activity — 150 minutes per week</li><li>Avoidance of alcohol and unnecessary hepatotoxic medication</li><li>Ultrasound and FibroScan monitoring at intervals decided by liver-fibrosis stage</li></ul>",
      },
      {
        heading: "When surgery becomes necessary",
        body:
          "<p>Surgery is needed only when fatty liver progresses to advanced complications — large hepatocellular carcinoma needing resection, decompensated cirrhosis needing transplant, or coexisting <a href='/treatment/liver-cyst-surgery-dhaka/' title='Gallstones in fatty liver patients'>symptomatic gallstones</a>. Dr. Arefin coordinates surgical care with hepatologist follow-up.</p>",
      },
    ],
    faq: [
      {
        q: "Can fatty liver be reversed?",
        a: "Yes — early-stage fatty liver is reversible with weight loss and metabolic control. Advanced fibrosis may not fully reverse but can be stabilised.",
      },
      {
        q: "Do I need to stop alcohol completely?",
        a: "Yes. Even moderate alcohol accelerates progression in fatty liver and should be avoided.",
      },
      {
        q: "Is fatty liver dangerous?",
        a: "By itself, simple fatty liver is mild. The danger lies in progression to NASH, fibrosis, and cirrhosis — which is why monitoring matters.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Liver surgery for complications" },
      { to: "/treatment/liver-transplant-coordination/", label: "Liver Transplant", title: "Liver transplant coordination by Dr. Arefin" },
      { to: "/treatment/liver-surgeon-dhaka/", label: "Liver Surgeon in Dhaka", title: "Best liver surgeon in Dhaka" },
      { to: "/articles/", label: "Liver Health Articles", title: "Articles on liver health and disease" },
    ],
  },

  /* ───────────── 9. Liver Transplant Coordination ───────────── */
  {
    slug: "/treatment/liver-transplant-coordination",
    kicker: "Transplant Care",
    title: "Liver Transplant Coordination — Dr. Arefin",
    metaDesc:
      "Liver transplant pre and post-operative coordination by Dr. Arefin in Dhaka. Donor evaluation, recipient workup, partner-centre referral, and follow-up care.",
    h1: "Liver Transplant Coordination in Dhaka",
    intro:
      "<p>Liver transplantation is a life-saving option for patients with end-stage liver disease, acute liver failure, and selected liver tumors. <a href='/about/' title='Dr. Arefin — liver transplant coordination experience'>Dr. Arefin</a> coordinates the full transplant pathway — from initial workup and donor evaluation in Dhaka to partner-centre surgery and lifelong follow-up.</p>",
    heroImage: IMG.transplant,
    heroAlt:
      "Dr. Murshidul Arefin — Hepatobiliary, Pancreatic & Liver Transplant Surgeon",
    sections: [
      {
        heading: "Who needs a liver transplant",
        body:
          "<ul><li>Decompensated cirrhosis from any cause (viral, NASH, autoimmune)</li><li>Acute liver failure</li><li>Hepatocellular carcinoma within Milan criteria</li><li>Selected metabolic liver diseases</li></ul>",
      },
      {
        heading: "Pre-transplant evaluation",
        body:
          "<p>A full workup includes detailed hepatology assessment, cardiac and pulmonary clearance, viral screening, imaging, and donor evaluation for living-donor candidates. Dr. Arefin coordinates this multidisciplinary workup at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital</a>.</p>",
      },
      {
        heading: "Surgery and partner centres",
        body:
          "<p>The transplant procedure itself is performed at established centres with which Dr. Arefin's team has long-standing referral relationships. Patients are accompanied through the surgery and brought back to Dhaka for follow-up.</p>",
      },
      {
        heading: "Post-transplant follow-up",
        body:
          "<p>Lifelong follow-up includes immunosuppression monitoring, liver function tests, infection surveillance, and management of long-term complications. Dr. Arefin coordinates this with the transplant centre.</p>",
      },
    ],
    faq: [
      {
        q: "Are liver transplants performed in Bangladesh?",
        a: "Living-donor transplant programmes are emerging in Bangladesh, while many patients still travel to India or other regional centres. Dr. Arefin's team coordinates either pathway.",
      },
      {
        q: "How long does pre-transplant workup take?",
        a: "A focused workup can be completed in 2–4 weeks if the patient is stable. Urgent cases are expedited.",
      },
      {
        q: "Who can be a living donor?",
        a: "Healthy adult relatives with compatible blood group and liver anatomy. A full medical, psychological, and ethical evaluation is required.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver tumor and resection surgery" },
      { to: "/treatment/fatty-liver-management/", label: "Fatty Liver Management", title: "Fatty liver disease management" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Arefin — credentials" },
    ],
  },

  /* ───────────── 10. Spleen Surgery ───────────── */
  {
    slug: "/treatment/spleen-surgery",
    kicker: "Subspecialty Procedure",
    title: "Spleen Surgery & Splenectomy in Dhaka",
    metaDesc:
      "Splenectomy and spleen surgery in Dhaka by Dr. Arefin — laparoscopic and open techniques for splenic enlargement, trauma, cysts, and haematological disease.",
    h1: "Spleen Surgery & Splenectomy in Dhaka",
    intro:
      "<p>Surgery of the spleen — splenectomy — is performed for haematological diseases, trauma, cysts, tumors, and severe enlargement. <a href='/about/' title='Dr. Arefin — splenectomy and laparoscopic spleen surgery'>Dr. Arefin</a> performs both laparoscopic and open splenectomy at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital</a> with a focus on safe vascular control and pre/post-operative vaccination.</p>",
    heroImage: IMG.spleen,
    heroAlt: "Open spleen surgery closeup by best surgeon in Dhaka",
    sections: [
      {
        heading: "When splenectomy is indicated",
        body:
          "<ul><li>Immune thrombocytopenic purpura (ITP) failing medical therapy</li><li>Hereditary spherocytosis and selected haemolytic anaemias</li><li>Splenic trauma with haemodynamic instability</li><li>Splenic cysts, abscesses, and tumors</li><li>Massive splenomegaly causing pain or pressure symptoms</li></ul>",
      },
      {
        heading: "Surgical approach",
        body:
          "<p>Most elective splenectomies for normal-to-moderately-enlarged spleens are performed <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery'>laparoscopically</a>. Massive splenomegaly and trauma usually require open surgery for safe vascular control.</p>",
      },
      {
        heading: "Pre and post-operative care",
        body:
          "<p>Vaccination against pneumococcus, meningococcus, and Hib is given 2 weeks before elective surgery (or as soon as possible after emergency cases). Patients receive lifelong advice on infection awareness and may require prophylactic antibiotics in selected groups.</p>",
      },
    ],
    faq: [
      {
        q: "Can I live a normal life without a spleen?",
        a: "Yes. The main long-term concern is increased risk of certain bacterial infections, which is reduced by vaccination and prompt treatment of fevers.",
      },
      {
        q: "Is laparoscopic splenectomy safe?",
        a: "Yes — it is the standard approach for normal-sized and moderately enlarged spleens, with shorter hospital stay than open surgery.",
      },
      {
        q: "How long is hospital stay after splenectomy?",
        a: "Typically 2–4 days for laparoscopic and 5–7 days for open procedures.",
      },
    ],
    related: [
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Laparoscopic surgery in Dhaka" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/treatment/liver-surgeon-dhaka/", label: "Liver Surgeon in Dhaka", title: "Best liver surgeon in Dhaka" },
      { to: "/popular-medical-college-hospital/", label: "Chamber & Hospital", title: "Dr. Arefin chamber" },
    ],
  },
  /* ───────── Homepage value-proposition pillars (T01) ───────── */
  {
    slug: "/surgical-excellence",
    kicker: "Why choose Dr. Arefin",
    title: "Surgical Excellence in Hepatobiliary Surgery — Dr. Arefin",
    metaDesc:
      "Surgical excellence in hepatobiliary, liver, and gallbladder surgery in Dhaka — precision, innovation, and 7+ years of operative experience by Dr. Murshidul Arefin.",
    h1: "Surgical Excellence — Hepatobiliary, Liver & Gallbladder Surgery",
    intro:
      "<p>Surgical excellence is the foundation of <a href='/about/' title='About Dr. Murshidul Arefin'>Dr. Murshidul Arefin's</a> practice — over 7 years of focused experience in <a href='/treatment/hepatobiliary-surgery/' title='Hepatobiliary surgery in Dhaka'>hepatobiliary, liver, and gallbladder surgery</a> with a relentless commitment to safe, precise, and outcome-driven care.</p>",
    heroImage: IMG.hepatobiliary,
    heroAlt: "Surgical excellence — hepatobiliary surgery team in Dhaka",
    sections: [
      {
        heading: "What surgical excellence means here",
        body: "<p>Excellence is measured in patient outcomes, not adjectives. Dr. Arefin's practice is built on conservative indications, meticulous preoperative imaging, and structured postoperative follow-up to deliver consistent results in complex hepatobiliary surgery.</p>",
      },
      {
        heading: "Procedures performed",
        body: "<p>Liver resections, complex <a href='/treatment/liver-tumor-cancer-surgery-dhaka/' title='Gallbladder surgery'>gallbladder surgery</a>, <a href='/treatment/bile-duct-surgery/' title='Bile duct surgery'>bile duct reconstruction</a>, pancreatic surgery, and selected emergency hepatobiliary cases.</p>",
      },
    ],
    faq: [
      { q: "How many years of experience does Dr. Arefin have?", a: "Over 7 years of focused hepatobiliary, liver, and gallbladder surgical experience at tertiary referral centers in Dhaka." },
      { q: "Where does Dr. Arefin operate?", a: "Primary surgical practice is at Popular Medical College Hospital, Dhanmondi, Dhaka." },
    ],
    related: [
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Advanced liver surgery" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
    ],
  },
  {
    slug: "/advanced-hepatobiliary-treatment",
    kicker: "Treatment philosophy",
    title: "Advanced Hepatobiliary Treatment in Dhaka — Dr. Arefin",
    metaDesc:
      "Advanced treatment for liver, pancreas, and biliary tract disease in Dhaka — laparoscopic and open surgical techniques with safe recovery and long-term outcomes.",
    h1: "Advanced Treatment — Liver, Pancreas & Biliary Tract",
    intro:
      "<p>Comprehensive care for diseases of the <a href='/treatment/liver-surgery/' title='Liver surgery'>liver</a>, <a href='/treatment/pancreatic-surgery/' title='Pancreatic surgery'>pancreas</a>, and <a href='/treatment/bile-duct-surgery/' title='Biliary tract surgery'>biliary tract</a> using both laparoscopic and open surgical techniques.</p>",
    heroImage: IMG.laparoscopic,
    heroAlt: "Advanced laparoscopic hepatobiliary treatment in Dhaka",
    sections: [
      {
        heading: "Laparoscopic and open techniques",
        body: "<p>Whenever clinically appropriate, <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery'>laparoscopic minimally invasive surgery</a> is preferred — smaller incisions, faster recovery, and less pain. Complex resections are performed open with full intraoperative support.</p>",
      },
      {
        heading: "Conditions treated",
        body: "<ul><li>Liver tumors, cysts, and abscesses</li><li>Gallstones and gallbladder polyps</li><li>Pancreatic tumors and pseudocysts</li><li>Bile duct strictures and injuries</li></ul>",
      },
    ],
    faq: [
      { q: "Is laparoscopic hepatobiliary surgery available in Bangladesh?", a: "Yes — Dr. Arefin performs laparoscopic gallbladder, bile duct, and selected liver procedures using modern equipment." },
    ],
    related: [
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Minimally invasive surgery" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/treatment/pancreatic-surgery/", label: "Pancreatic Surgery", title: "Pancreatic surgery" },
    ],
  },
  {
    slug: "/compassionate-patient-care",
    kicker: "Patient-first philosophy",
    title: "Compassionate Patient Care — Dr. Murshidul Arefin",
    metaDesc:
      "A patient-first philosophy — personalized guidance, transparent communication, and respectful treatment through diagnosis, surgery, and recovery in Dhaka.",
    h1: "Compassionate Patient Care",
    intro:
      "<p>Surgery is more than a procedure — it is a journey. <a href='/about/' title='About Dr. Arefin'>Dr. Arefin's</a> practice is built on a patient-first philosophy: clear explanations, transparent options, and respectful care from first consultation through long-term follow-up.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Compassionate hepatobiliary patient care by Dr. Arefin in Dhaka",
    sections: [
      {
        heading: "What you can expect",
        body: "<p>Honest answers about your condition, written treatment options with risks and alternatives, and a structured plan for surgery and recovery.</p>",
      },
      {
        heading: "Through every stage",
        body: "<p>From <a href='/treatment/' title='Treatment overview'>diagnosis</a> through surgery and recovery, you have direct communication with the surgical team and structured postoperative follow-up.</p>",
      },
    ],
    faq: [
      { q: "Can I bring a family member to consultation?", a: "Yes — we encourage family involvement in surgical decision-making." },
    ],
    related: [
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
      { to: "/contact/", label: "Contact", title: "Contact Dr. Arefin" },
      { to: "/treatment/", label: "Treatment Overview", title: "Treatment overview" },
    ],
  },
  /* ───────── About block — surgeon name (T04) ───────── */
  {
    slug: "/dr-murshidul-arefin",
    kicker: "Surgeon profile",
    title: "Dr. Murshidul Arefin — Hepatobiliary & Liver Surgeon, Dhaka",
    metaDesc: "Dr. Murshidul Arefin — Dhaka's leading hepatobiliary, liver, gallbladder, and pancreatic surgeon at Popular Medical College Hospital, Dhanmondi.",
    h1: "Dr. Murshidul Arefin — Hepatobiliary & Liver Surgeon",
    intro: "<p>Dr. Murshidul Arefin is a fellowship-trained hepatobiliary, liver, and pancreatic surgeon practicing at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital, Dhanmondi'>Popular Medical College Hospital, Dhanmondi</a>, Dhaka.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Dr. Murshidul Arefin — best hepatobiliary surgeon in Dhaka",
    sections: [
      { heading: "Training and credentials", body: "<p>MBBS (University of Dhaka), MS in Hepatobiliary Surgery (BSMMU). Consultant in General, Laparoscopic, and Liver Transplant Surgery.</p>" },
      { heading: "Practice focus", body: "<p>Liver, gallbladder, bile duct, and pancreatic surgery — both <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery'>laparoscopic</a> and open techniques.</p>" },
    ],
    faq: [{ q: "Where does Dr. Arefin practice?", a: "Popular Medical College Hospital, Dhanmondi, Dhaka." }],
    related: [
      { to: "/about/", label: "Full Biography", title: "About Dr. Murshidul Arefin" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery" },
      { to: "/contact/", label: "Contact", title: "Contact Dr. Arefin" },
    ],
  },
  /* ───────── Initiatives card titles (T06) ───────── */
  {
    slug: "/surgery-assistance-program",
    kicker: "Patient initiative",
    title: "Surgery Assistance Program — Dr. Arefin",
    metaDesc: "Surgery assistance for patients needing complex liver, gallbladder, and pancreatic surgery in Dhaka — guidance, eligibility review, and financial aid pathways.",
    h1: "Surgery Assistance Program",
    intro: "<p>Guidance and case-by-case financial aid for patients needing complex hepatobiliary surgery in Dhaka. Eligibility is reviewed during initial consultation; documentation stays confidential.</p>",
    heroImage: IMG.popular,
    heroAlt: "Surgery assistance program — Dr. Arefin",
    sections: [{ heading: "Who qualifies", body: "<p>Patients with genuine financial need facing complex liver, gallbladder, or pancreatic surgery.</p>" }],
    faq: [{ q: "How do I apply?", a: "Raise it during your consultation — there is no formal application form." }],
    related: [
      { to: "/contact/", label: "Contact", title: "Contact Dr. Arefin" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery" },
    ],
  },
  {
    slug: "/liver-health-education",
    kicker: "Community programs",
    title: "Liver Health Education in Bangladesh — Dr. Arefin",
    metaDesc: "Liver health awareness, early-detection seminars, and prevention education across Bangladesh — led by Dr. Arefin's team.",
    h1: "Liver Health Education",
    intro: "<p>Awareness programs and seminars on early detection, lifestyle management, and prevention of liver disease in Bangladesh.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Liver health education seminar in Bangladesh",
    sections: [{ heading: "Topics covered", body: "<ul><li>Hepatitis B/C prevention</li><li>Fatty liver and lifestyle</li><li>When to see a hepatobiliary surgeon</li></ul>" }],
    faq: [{ q: "Are seminars free?", a: "Yes — community seminars are free to attend." }],
    related: [
      { to: "/treatment/fatty-liver-management/", label: "Fatty Liver", title: "Fatty liver management" },
      { to: "/about/", label: "About", title: "About Dr. Arefin" },
    ],
  },
  {
    slug: "/patient-support-groups",
    kicker: "Community",
    title: "Patient Support Groups — Hepatobiliary & Liver Transplant",
    metaDesc: "Support groups for patients and families undergoing hepatobiliary or liver transplant treatment — emotional support and recovery community.",
    h1: "Patient Support Groups",
    intro: "<p>A patient network connecting individuals and families through hepatobiliary or liver transplant journeys — a safe space for emotional support and recovery.</p>",
    heroImage: IMG.popular,
    heroAlt: "Patient support groups — liver and hepatobiliary",
    sections: [{ heading: "How it works", body: "<p>Peer-to-peer connections, structured monthly meetups, and online community.</p>" }],
    faq: [{ q: "Can family members join?", a: "Yes — caregiver support is part of the group's mission." }],
    related: [
      { to: "/treatment/liver-transplant-coordination/", label: "Liver Transplant Coordination", title: "Liver transplant coordination" },
      { to: "/contact/", label: "Contact", title: "Contact us" },
    ],
  },
  {
    slug: "/hepatobiliary-pancreatic-surgery-specialist",
    kicker: "Subspecialty",
    title: "Hepatobiliary & Pancreatic Surgery Specialist in Dhaka",
    metaDesc: "Hepatobiliary and pancreatic surgery specialist in Dhaka — Dr. Murshidul Arefin treats complex liver, gallbladder, bile duct, and pancreas disease.",
    h1: "Hepatobiliary & Pancreatic Surgery Specialist",
    intro: "<p>A hepatobiliary and pancreatic surgery specialist is trained beyond general surgery to operate on the liver, biliary tree, and pancreas — organs with shared anatomy and high complication rates if mishandled.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Hepatobiliary and pancreatic surgery specialist in Dhaka",
    sections: [{ heading: "Why a specialist matters", body: "<p>Outcomes correlate directly with surgeon volume in this subspecialty.</p>" }],
    faq: [{ q: "Is hepatobiliary the same as general surgery?", a: "No — it is a subspecialty focused on liver, gallbladder, bile ducts, and pancreas." }],
    related: [
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Arefin" },
    ],
  },
  {
    slug: "/mbbs-university-of-dhaka",
    kicker: "Credentials",
    title: "MBBS, University of Dhaka — Dr. Murshidul Arefin",
    metaDesc: "Dr. Arefin's MBBS qualification from the University of Dhaka — Bangladesh's premier medical training institution.",
    h1: "MBBS — University of Dhaka",
    intro: "<p>Dr. Arefin completed his MBBS at the University of Dhaka, the foundation of his surgical training in Bangladesh.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "MBBS from University of Dhaka — Dr. Arefin",
    sections: [{ heading: "Foundation training", body: "<p>Five-and-a-half year medical degree followed by internship at a tertiary teaching hospital.</p>" }],
    faq: [{ q: "Is University of Dhaka medical degree recognized internationally?", a: "Yes — it is recognized by major international medical councils." }],
    related: [
      { to: "/dr-murshidul-arefin/", label: "Surgeon Profile", title: "Dr. Arefin profile" },
      { to: "/about/", label: "About", title: "About Dr. Arefin" },
    ],
  },
  {
    slug: "/ms-hepatobiliary-surgery-bsmmu",
    kicker: "Credentials",
    title: "MS in Hepatobiliary Surgery, BSMMU — Dr. Arefin",
    metaDesc: "Dr. Arefin holds an MS in Hepatobiliary Surgery from BSMMU — Bangladesh's leading postgraduate medical university.",
    h1: "MS in Hepatobiliary Surgery — BSMMU",
    intro: "<p>Dr. Arefin's postgraduate Master of Surgery in Hepatobiliary Surgery at <em>Bangabandhu Sheikh Mujib Medical University</em> (BSMMU) — the country's leading postgraduate medical institution.</p>",
    heroImage: IMG.popular,
    heroAlt: "MS in Hepatobiliary Surgery from BSMMU",
    sections: [{ heading: "Subspecialty training", body: "<p>Structured operative and academic training in liver, gallbladder, bile duct, and pancreatic surgery.</p>" }],
    faq: [{ q: "What is BSMMU?", a: "Bangabandhu Sheikh Mujib Medical University — Bangladesh's apex postgraduate medical university in Dhaka." }],
    related: [
      { to: "/dr-murshidul-arefin/", label: "Surgeon Profile", title: "Dr. Arefin profile" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery" },
    ],
  },
  {
    slug: "/general-laparoscopic-liver-transplant-surgery",
    kicker: "Consultant role",
    title: "General, Laparoscopic & Liver Transplant Surgery — Dr. Arefin",
    metaDesc: "Consultant in General, Laparoscopic, and Liver Transplant Surgery at Popular Medical College Hospital, Dhanmondi, Dhaka.",
    h1: "General, Laparoscopic & Liver Transplant Surgery",
    intro: "<p>Dr. Arefin serves as a Consultant in General, Laparoscopic, and Liver Transplant Surgery at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.transplant,
    heroAlt: "General, laparoscopic, and liver transplant surgery in Dhaka",
    sections: [{ heading: "Scope of practice", body: "<p>From routine laparoscopic gallbladder surgery to liver transplant pre/post-operative coordination.</p>" }],
    faq: [{ q: "Does Dr. Arefin perform liver transplants?", a: "He coordinates pre and post-operative liver transplant care alongside transplant teams." }],
    related: [
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Laparoscopic surgery" },
      { to: "/treatment/liver-transplant-coordination/", label: "Liver Transplant Coordination", title: "Liver transplant coordination" },
    ],
  },
  {
    slug: "/minimally-invasive-surgery",
    kicker: "Surgical approach",
    title: "Minimally Invasive Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Minimally invasive (laparoscopic) hepatobiliary surgery in Dhaka — smaller incisions, faster recovery, less pain.",
    h1: "Minimally Invasive Surgery",
    intro: "<p>Minimally invasive techniques use small incisions and a camera to perform major hepatobiliary surgery with reduced pain, scarring, and hospital stay.</p>",
    heroImage: IMG.laparoscopic,
    heroAlt: "Minimally invasive laparoscopic surgery in Dhaka",
    sections: [{ heading: "Benefits", body: "<ul><li>Smaller incisions</li><li>Less pain</li><li>Faster recovery</li><li>Lower wound infection rate</li></ul>" }],
    faq: [{ q: "Is every surgery suitable for minimally invasive approach?", a: "No — case selection depends on disease, anatomy, and prior surgery." }],
    related: [
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Laparoscopic surgery" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery" },
    ],
  },
  {
    slug: "/years-of-experience",
    kicker: "Surgical experience",
    title: "7+ Years of Hepatobiliary Surgical Experience — Dr. Arefin",
    metaDesc: "Over 7 years of focused operative experience in hepatobiliary, liver, and gallbladder surgery in Dhaka.",
    h1: "7+ Years of Hepatobiliary Surgical Experience",
    intro: "<p>Dr. Murshidul Arefin has accumulated over 7 years of hands-on operative experience in <a href='/treatment/hepatobiliary-surgery/' title='Hepatobiliary surgery'>hepatobiliary, liver, and gallbladder surgery</a> at tertiary referral centers in Dhaka.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Dr. Arefin — 7+ years hepatobiliary surgical experience",
    sections: [
      { heading: "Operative volume", body: "<p>High annual case volume across laparoscopic and open hepatobiliary procedures.</p>" },
    ],
    faq: [{ q: "How is surgical experience measured?", a: "By case volume, complication rate, and outcome follow-up — not just years." }],
    related: [
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery" },
    ],
  },
  {
    slug: "/liver-pancreas-biliary-tract",
    kicker: "Disease scope",
    title: "Liver, Pancreas & Biliary Tract Surgery — Dr. Arefin",
    metaDesc: "Comprehensive surgical care for liver, pancreas, and biliary tract diseases in Dhaka — laparoscopic and open techniques.",
    h1: "Liver, Pancreas & Biliary Tract Surgery",
    intro: "<p>The hepatopancreatobiliary system shares a complex anatomy. Dr. Arefin treats diseases of the <a href='/treatment/liver-surgery/' title='Liver surgery'>liver</a>, <a href='/treatment/pancreatic-surgery/' title='Pancreatic surgery'>pancreas</a>, and <a href='/treatment/bile-duct-surgery/' title='Biliary tract surgery'>biliary tract</a> as a unified surgical practice.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Liver, pancreas, and biliary tract surgery in Dhaka",
    sections: [
      { heading: "Why these organs are treated together", body: "<p>Shared blood supply and ductal anatomy require subspecialty hepatobiliary training.</p>" },
    ],
    faq: [{ q: "Are these surgeries performed laparoscopically?", a: "Whenever clinically appropriate — selected liver, gallbladder, and bile duct cases are performed laparoscopically." }],
    related: [
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Laparoscopic surgery" },
    ],
  },
  {
    slug: "/open-surgical-techniques",
    kicker: "Surgical approach",
    title: "Open Surgical Techniques in Hepatobiliary Surgery — Dr. Arefin",
    metaDesc: "Open hepatobiliary surgery in Dhaka for complex liver, pancreas, and bile duct cases requiring full operative exposure.",
    h1: "Open Surgical Techniques",
    intro: "<p>Open surgery remains the standard for complex hepatobiliary resections, vascular reconstructions, and tumors involving major vessels.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Open hepatobiliary surgery in Dhaka",
    sections: [
      { heading: "When open surgery is preferred", body: "<p>Major liver resections, Whipple procedures, and complex bile duct reconstructions.</p>" },
    ],
    faq: [{ q: "Is recovery longer after open surgery?", a: "Typically yes — but for complex disease, the safer exposure outweighs a longer hospital stay." }],
    related: [
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Laparoscopic alternative" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
    ],
  },
  {
    slug: "/patient-first-philosophy",
    kicker: "Care philosophy",
    title: "Patient-First Philosophy — Dr. Murshidul Arefin",
    metaDesc: "A patient-first surgical philosophy: honest counsel, transparent options, and respectful care from first consult to long-term follow-up.",
    h1: "A Patient-First Philosophy",
    intro: "<p>Surgery is a partnership. Dr. Arefin's practice prioritizes informed consent, transparent options, and continuity of care over volume.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Patient-first hepatobiliary surgical care in Dhaka",
    sections: [
      { heading: "What this means in practice", body: "<p>Written surgical plans, second-opinion friendly, and direct surgeon access for postoperative concerns.</p>" },
    ],
    faq: [{ q: "Will I see Dr. Arefin himself or a junior?", a: "Dr. Arefin personally leads consultation, surgery, and key follow-ups." }],
    related: [
      { to: "/compassionate-patient-care/", label: "Compassionate Care", title: "Compassionate patient care" },
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Arefin" },
    ],
  },
  {
    slug: "/diagnosis-surgery-recovery",
    kicker: "Care pathway",
    title: "Diagnosis, Surgery & Recovery Pathway — Dr. Arefin",
    metaDesc: "End-to-end hepatobiliary care pathway in Dhaka: diagnosis, surgical planning, operation, and structured recovery.",
    h1: "Diagnosis, Surgery & Recovery",
    intro: "<p>Every patient follows a structured pathway: imaging-led diagnosis, multidisciplinary planning, the operation, and a defined recovery and follow-up schedule.</p>",
    heroImage: IMG.popular,
    heroAlt: "Diagnosis, surgery, and recovery pathway in Dhaka",
    sections: [
      { heading: "Three stages of care", body: "<ol><li>Diagnosis — imaging and bloods</li><li>Surgery — laparoscopic or open</li><li>Recovery — ward, discharge, follow-up</li></ol>" },
    ],
    faq: [{ q: "How long is follow-up?", a: "Typically scheduled at 1 week, 1 month, and 3 months — extended for oncology cases." }],
    related: [
      { to: "/treatment/", label: "Treatment Overview", title: "Treatment overview" },
      { to: "/contact/", label: "Contact", title: "Contact Dr. Arefin" },
    ],
  },
  /* ───────── Initiative card body keywords (T07) ───────── */
  {
    slug: "/complex-liver-gallbladder-pancreatic-surgery",
    kicker: "Subspecialty",
    title: "Complex Liver & HPB Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Complex liver and HPB surgery in Dhaka — high-acuity liver resections and hepatobiliary procedures performed by Dr. Murshidul Arefin.",
    h1: "Complex Liver & HPB Surgery in Dhaka",
    intro: "<p>High-acuity <strong>liver operations</strong> — large liver resections, re-do hepatobiliary surgery, and cases with prior failed intervention — performed by a dedicated liver subspecialist in Dhaka. The liver leads every case here; bile-duct and pancreatic work is supporting hepatobiliary care, not the focus of this page.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Complex liver surgery in Dhaka — Dr. Murshidul Arefin",
    sections: [{ heading: "What counts as complex", body: "<p>Re-do biliary surgery, large liver resections, and any case with prior failed intervention. Each case is planned with triphasic CT or MRI, liver function testing and multidisciplinary review.</p>" }],
    faq: [{ q: "Are these surgeries done laparoscopically?", a: "Many are — case selection drives the approach, and liver function and remnant liver volume decide whether a minimally invasive or open resection is safer." }],
    related: [
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery" },
      { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Arefin" },
    ],
  },
  {
    slug: "/surgery-financial-assistance",
    kicker: "Patient support",
    title: "Surgery Financial Assistance — Timely Treatment in Dhaka",
    metaDesc: "Financial assistance pathways for hepatobiliary surgery in Dhaka — helping patients access timely treatment without delay.",
    h1: "Financial Assistance for Timely Treatment",
    intro: "<p>Case-by-case financial aid pathways so patients facing complex hepatobiliary surgery do not delay treatment due to cost.</p>",
    heroImage: IMG.popular,
    heroAlt: "Financial assistance for surgery in Dhaka",
    sections: [{ heading: "How aid is reviewed", body: "<p>Eligibility is reviewed during consultation; documentation stays confidential.</p>" }],
    faq: [{ q: "Is the assistance a loan?", a: "No — it is direct case-based aid, not a loan." }],
    related: [
      { to: "/surgery-assistance-program/", label: "Surgery Assistance Program", title: "Surgery assistance program" },
      { to: "/contact/", label: "Contact", title: "Contact Dr. Arefin" },
    ],
  },
  {
    slug: "/liver-disease-prevention-education",
    kicker: "Awareness",
    title: "Liver Disease Prevention & Early Detection Education",
    metaDesc: "Community education on early detection, lifestyle management, and prevention of liver disease in Bangladesh.",
    h1: "Early Detection, Lifestyle & Prevention",
    intro: "<p>Educational programs covering early warning signs, lifestyle factors, and prevention strategies for liver disease — for patients and families across Bangladesh.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Liver disease prevention education in Bangladesh",
    sections: [{ heading: "What we teach", body: "<ul><li>Early warning signs</li><li>Lifestyle and diet</li><li>Hepatitis prevention</li></ul>" }],
    faq: [{ q: "Who runs the sessions?", a: "Dr. Arefin's clinical team and community volunteers." }],
    related: [
      { to: "/liver-health-education/", label: "Liver Health Education", title: "Liver health education" },
      { to: "/treatment/fatty-liver-management/", label: "Fatty Liver", title: "Fatty liver management" },
    ],
  },
  {
    slug: "/hepatobiliary-liver-transplant-treatment",
    kicker: "Care pathway",
    title: "Hepatobiliary & Liver Transplant Treatment in Dhaka",
    metaDesc: "Hepatobiliary and liver transplant treatment in Dhaka — coordinated surgical, peri-operative, and recovery care for patients and families.",
    h1: "Hepatobiliary & Liver Transplant Treatment",
    intro: "<p>End-to-end care for patients undergoing hepatobiliary surgery or liver transplant — from work-up through recovery.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Hepatobiliary and liver transplant treatment in Dhaka",
    sections: [{ heading: "Continuity of care", body: "<p>Single point of clinical contact across pre-op, surgery, and follow-up.</p>" }],
    faq: [{ q: "Is liver transplant performed in Bangladesh?", a: "Coordination spans local and international transplant centres as appropriate." }],
    related: [
      { to: "/treatment/liver-transplant-coordination/", label: "Liver Transplant Coordination", title: "Liver transplant coordination" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery" },
    ],
  },
  {
    slug: "/patient-emotional-support-recovery",
    kicker: "Support",
    title: "Emotional Support & Recovery for Surgery Patients",
    metaDesc: "A safe space for emotional support and recovery — peer community for hepatobiliary and liver transplant patients in Dhaka.",
    h1: "Emotional Support & Recovery",
    intro: "<p>Recovery is more than physical. We provide a peer community where patients and families share their experiences after major hepatobiliary surgery.</p>",
    heroImage: IMG.popular,
    heroAlt: "Emotional support and recovery community for surgery patients",
    sections: [{ heading: "What members get", body: "<p>Monthly meetups, an online group, and peer mentors who have been through similar surgery.</p>" }],
    faq: [{ q: "Is there a fee?", a: "No — community participation is free." }],
    related: [
      { to: "/patient-support-groups/", label: "Patient Support Groups", title: "Patient support groups" },
      { to: "/contact/", label: "Contact", title: "Contact us" },
    ],
  },
  /* ───────── Metric numbers (T08) ───────── */
  {
    slug: "/successful-surgeries",
    kicker: "Clinical volume",
    title: "800+ Successful Hepatobiliary Surgeries in Dhaka",
    metaDesc: "More than 800 successful hepatobiliary, liver, gallbladder, and pancreatic surgeries performed by Dr. Murshidul Arefin in Dhaka.",
    h1: "800+ Successful Surgeries",
    intro: "<p>A surgical volume of more than eight hundred completed hepatobiliary procedures — the kind of caseload that builds genuine subspecialty competence.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "800+ successful hepatobiliary surgeries — Dr. Arefin",
    sections: [{ heading: "Why volume matters", body: "<p>Outcomes in hepatobiliary surgery correlate directly with surgeon volume — high-volume operators have lower complication rates.</p>" }],
    faq: [{ q: "Are these all major surgeries?", a: "Mix of major resections, biliary reconstructions, and laparoscopic procedures." }],
    related: [
      { to: "/years-of-experience/", label: "8+ Years", title: "8+ years of experience" },
      { to: "/patients-treated-count/", label: "10,000+ Patients", title: "10,000+ patients treated" },
    ],
  },
  {
    slug: "/patients-treated-count",
    kicker: "Patient reach",
    title: "10,000+ Patients Treated — Hepatobiliary & Liver Care",
    metaDesc: "Over 10,000 patients consulted, evaluated, and treated by Dr. Murshidul Arefin's hepatobiliary and liver care practice in Dhaka.",
    h1: "10,000+ Patients Treated",
    intro: "<p>Across consultation, evaluation, and surgical care — more than ten thousand patients have come through Dr. Arefin's hepatobiliary practice.</p>",
    heroImage: IMG.popular,
    heroAlt: "10,000+ patients treated — Dr. Arefin's practice",
    sections: [{ heading: "Reach and continuity", body: "<p>Long-term follow-up forms a substantial part of the patient base, not just one-off surgical encounters.</p>" }],
    faq: [{ q: "Are non-surgical patients counted?", a: "Yes — consultation and medical management patients are included." }],
    related: [
      { to: "/successful-surgeries/", label: "800+ Surgeries", title: "800+ successful surgeries" },
      { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Arefin" },
    ],
  },
  {
    slug: "/conferences-presented",
    kicker: "Academic engagement",
    title: "80+ Surgical Conferences — Academic Engagement",
    metaDesc: "More than 80 national and international surgical conferences attended or presented at by Dr. Murshidul Arefin — active academic engagement.",
    h1: "80+ Conferences",
    intro: "<p>Active participation in more than eighty national and international hepatobiliary and surgical conferences — a marker of continuous learning and peer engagement.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "80+ surgical conferences — Dr. Arefin's academic engagement",
    sections: [{ heading: "Why this matters", body: "<p>Active conference participation keeps surgical practice aligned with evolving evidence and international standards.</p>" }],
    faq: [{ q: "Domestic or international?", a: "Both — including major regional hepatobiliary meetings." }],
    related: [
      { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Arefin" },
      { to: "/years-of-experience/", label: "8+ Years", title: "8+ years of experience" },
    ],
  },
  /* ───────── Metric labels (T09) ───────── */
  {
    slug: "/surgical-excellence-experience",
    kicker: "Experience",
    title: "Years of Surgical Excellence — Dr. Arefin",
    metaDesc:
      "Years of dedicated surgical excellence in hepatobiliary, liver, gallbladder, and pancreatic surgery — Dr. Murshidul Arefin's practice in Dhaka.",
    h1: "Years of Surgical Excellence",
    intro:
      "<p>Dr. Murshidul Arefin has built a practice defined by surgical excellence across hepatobiliary, liver, gallbladder, and pancreatic procedures in Dhaka.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Years of surgical excellence — Dr. Arefin",
    sections: [{ heading: "What surgical excellence means", body: "<p>Consistent, reproducible outcomes across a high-volume hepatobiliary surgical practice — the result of dedicated subspecialty focus.</p>" }],
    faq: [{ q: "How is surgical excellence measured?", a: "Through outcomes, case volume, complication rates, and patient-reported recovery metrics." }],
    related: [
      { to: "/years-of-experience/", label: "8+ Years", title: "8+ years of hepatobiliary surgical experience" },
      { to: "/successful-surgeries/", label: "800+ Surgeries", title: "800+ successful surgeries" },
    ],
  },
  {
    slug: "/successful-hepatobiliary-surgeries",
    kicker: "Outcomes",
    title: "Successful Hepatobiliary Surgeries — Clinical Outcomes",
    metaDesc:
      "Successful hepatobiliary surgeries performed by Dr. Murshidul Arefin — clinical outcomes in liver, gallbladder, and pancreatic procedures in Dhaka.",
    h1: "Successful Hepatobiliary Surgeries",
    intro:
      "<p>A record of successful hepatobiliary surgeries spanning liver, gallbladder, bile duct, and pancreatic procedures at Popular Medical College Hospital, Dhaka.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Successful hepatobiliary surgeries — clinical outcomes",
    sections: [{ heading: "Defining success", body: "<p>Surgical success means not just completing the operation, but achieving the intended clinical outcome with minimal complications and a clear recovery path.</p>" }],
    faq: [{ q: "What types of surgeries are included?", a: "Liver resections, gallbladder removals, bile duct reconstructions, Whipple procedures, and laparoscopic hepatobiliary cases." }],
    related: [
      { to: "/successful-surgeries/", label: "800+ Surgeries", title: "800+ successful surgeries" },
      { to: "/patients-treated-count/", label: "10,000+ Patients", title: "10,000+ patients treated" },
    ],
  },
  {
    slug: "/patients-treated-care",
    kicker: "Patient reach",
    title: "Patients Treated — Hepatobiliary Patient Care",
    metaDesc:
      "Thousands of patients treated by Dr. Murshidul Arefin's hepatobiliary and liver care practice in Dhaka — consultation, surgery, and long-term follow-up.",
    h1: "Patients Treated",
    intro:
      "<p>From initial consultation through surgery and follow-up, Dr. Arefin's hepatobiliary practice has served thousands of patients across Bangladesh.</p>",
    heroImage: IMG.popular,
    heroAlt: "Patients treated — hepatobiliary patient care",
    sections: [{ heading: "Continuity of care", body: "<p>Patient treatment extends beyond the operating room to include pre-operative preparation, surgical care, and structured post-operative follow-up.</p>" }],
    faq: [{ q: "Are non-surgical patients included?", a: "Yes — the count includes consultations, evaluations, medical management, and surgical patients." }],
    related: [
      { to: "/patients-treated-count/", label: "10,000+ Patients", title: "10,000+ patients treated" },
      { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
    ],
  },
  {
    slug: "/surgical-conferences-academic",
    kicker: "Academic",
    title: "Surgical Conferences — Academic Engagement",
    metaDesc:
      "Dr. Murshidul Arefin's academic engagement through national and international surgical conferences — continuous learning and peer collaboration.",
    h1: "Surgical Conferences & Academic Engagement",
    intro:
      "<p>Active participation in surgical conferences keeps clinical practice aligned with evolving evidence and international standards in hepatobiliary surgery.</p>",
    heroImage: IMG.bestSurgeon,
    heroAlt: "Surgical conferences — academic engagement",
    sections: [{ heading: "Why conferences matter", body: "<p>Conference attendance and presentation ensure that surgical techniques and patient management remain current with global best practices.</p>" }],
    faq: [{ q: "Does Dr. Arefin present at conferences?", a: "Yes — he has presented at more than 80 national and international surgical conferences." }],
    related: [
      { to: "/conferences-presented/", label: "80+ Conferences", title: "80+ surgical conferences" },
      { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Arefin" },
    ],
  },
  /* ───────── Liver Treatment Satellites (upgraded) ───────── */
  {
    slug: "/treatment/complex-hepatic-resection",
    kicker: "Advanced Liver Surgery",
    title: "Complex Hepatic Resection in Dhaka — Dr. Murshidul Arefin",
    metaDesc: "Complex hepatic resection in Dhaka — extended hepatectomy and major liver resection by Dr. Murshidul Arefin, fellowship-trained hepatobiliary surgeon.",
    h1: "Complex Hepatic Resection in Dhaka",
    intro: "<p><strong>Complex hepatic resection</strong> is the surgical removal of part or all of the liver to treat tumors, cysts, and other serious liver conditions. Dr. Murshidul Arefin, a fellowship-trained hepatobiliary surgeon at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, performs extended hepatectomies and major liver resections with precision — giving patients in Dhaka access to world-class surgical care.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Complex hepatic resection surgery by Dr. Murshidul Arefin in Dhaka — extended hepatectomy and liver resection",
    sections: [
      {
        heading: "What is complex hepatic resection",
        body: "<p>Complex hepatic resection involves removing a portion of the liver affected by disease while preserving enough healthy tissue to maintain vital functions. The liver's unique ability to regenerate makes resection a powerful treatment option for both benign and malignant conditions.</p><p>Dr. Arefin performs <strong>extended hepatectomies</strong>, <strong>segmental resections</strong>, and <strong>wedge resections</strong> depending on the tumor location, size, and the patient's overall liver function. Each case is planned using triphasic CT and MRI to map vascular anatomy and determine safe resection margins.</p>",
      },
      {
        heading: "Conditions requiring major liver resection",
        body: "<ul><li><strong>Hepatocellular carcinoma (HCC)</strong> — primary liver cancer requiring tumour removal with clear margins</li><li><strong>Metastatic liver tumours</strong> — colorectal and other cancers that have spread to the liver</li><li><strong>Large benign tumours</strong> — adenomas, focal nodular hyperplasia, and haemangiomas causing symptoms</li><li><strong>Complex liver cysts</strong> — hydatid cysts and polycystic disease requiring partial liver removal</li><li><strong>Bile duct cancers</strong> — hilar cholangiocarcinoma (Klatskin tumour) combined with liver resection</li></ul>",
      },
      {
        heading: "Surgical approach and techniques",
        body: "<p>Dr. Arefin uses both <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery in Dhaka'>laparoscopic (keyhole)</a> and open techniques for hepatic resection. Minimally invasive approaches are preferred for smaller, peripherally located tumours, while central tumours and major vascular involvement require open surgery with meticulous vascular control.</p><p>Intraoperative ultrasound guides precise tumour localisation and confirms adequate margins. For major resections, Dr. Arefin employs low central venous pressure techniques and intermittent Pringle manoeuvre to minimise blood loss — critical factors that improve outcomes.</p>",
      },
      {
        heading: "Why choose Dr. Arefin for liver resection",
        body: "<p>Liver resection is one of the most technically demanding operations in surgery. Outcomes are directly linked to surgeon experience and hospital infrastructure. Dr. Arefin combines fellowship training in hepatobiliary surgery with high-volume practice at a tertiary referral centre equipped with modern imaging, operative equipment, and intensive care support.</p><p>His conservative yet decisive approach ensures that patients who need surgery receive it promptly, while those who may benefit from alternative treatments are directed accordingly. <a href='/contact/' title='Contact Dr. Arefin'>Contact his chamber</a> for a surgical evaluation.</p>",
      },
    ],
    faq: [
      {
        q: "How much of the liver can be safely removed",
        a: "Up to 70–75% of the liver can be removed in healthy patients, provided the remaining liver has adequate function. For patients with cirrhosis or fatty liver, the safe limit is lower. Dr. Arefin calculates future liver remnant volume preoperatively to ensure safety.",
      },
      {
        q: "How long is recovery after complex hepatic resection",
        a: "Hospital stay is typically 5–10 days after major resection, with full recovery over 6–12 weeks. Laparoscopic procedures may allow earlier discharge. Patients receive structured follow-up including liver function monitoring and imaging surveillance.",
      },
      {
        q: "What are the risks of liver resection surgery",
        a: "Risks include bleeding, bile leak, liver failure, and infection. These risks are significantly lower when the surgery is performed by a high-volume hepatobiliary surgeon like Dr. Arefin, in a well-equipped tertiary hospital with dedicated ICU support.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Liver tumour, cyst, and resection surgery by Dr. Arefin" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumor Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/treatment/liver-transplant-evaluation/", label: "Transplant Evaluation", title: "Liver transplant evaluation and assessment" },
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Minimally invasive laparoscopic surgery in Dhaka" },
    ],
  },

  {
    slug: "/treatment/liver-transplant-evaluation",
    kicker: "Transplant Preparation",
    title: "Liver Transplant Evaluation in Dhaka — Dr. Murshidul Arefin",
    metaDesc: "Liver transplant evaluation in Dhaka — donor-recipient assessment, imaging review, and surgical decision-making by Dr. Murshidul Arefin.",
    h1: "Liver Transplant Evaluation in Dhaka",
    intro: "<p><strong>Liver transplant evaluation</strong> is the comprehensive process of assessing whether a patient with end-stage liver disease is a suitable candidate for transplantation. Dr. Murshidul Arefin coordinates thorough donor-recipient evaluations at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, ensuring every aspect of patient health is considered before this life-saving procedure.</p>",
    heroImage: IMG.transplant,
    heroAlt: "Liver transplant evaluation — Dr. Murshidul Arefin assessing donor and recipient compatibility in Dhaka",
    sections: [
      {
        heading: "What transplant evaluation covers",
        body: "<p>The evaluation process determines whether a patient will benefit from liver transplantation and whether they can safely undergo the procedure. It includes a complete medical history, physical examination, laboratory tests, imaging studies, and specialist consultations.</p><p>Dr. Arefin's evaluation protocol assesses liver disease severity, comorbid conditions, nutritional status, psychosocial factors, and patient understanding of lifelong immunosuppression requirements.</p>",
      },
      {
        heading: "Donor and recipient assessment",
        body: "<p>For living donor transplants, both donor and recipient undergo simultaneous evaluation. Donor assessment includes blood group compatibility, liver volume measurement, vascular anatomy mapping, and fitness for major surgery. Recipient assessment focuses on MELD score, portal hypertension complications, and extrahepatic disease exclusion.</p><p>Dr. Arefin ensures that living donors are fully informed, medically suitable, and psychologically prepared — with no undue pressure to donate.</p>",
      },
      {
        heading: "Imaging and laboratory workup",
        body: "<p>Comprehensive imaging includes triphasic CT or MRI of the liver, MRCP for biliary anatomy, Doppler ultrasound for vascular assessment, and echocardiography for cardiac clearance. Laboratory workup covers liver function tests, viral markers, coagulation profile, renal function, and tumour markers.</p><p>For patients with hepatocellular carcinoma, Dr. Arefin ensures tumours meet transplant criteria (Milan criteria) through careful imaging review and, when needed, multidisciplinary tumour board discussion.</p>",
      },
      {
        heading: "When is liver transplant indicated",
        body: "<p>Transplantation is indicated for irreversible liver failure from cirrhosis, acute liver failure, selected metabolic liver diseases, and early hepatocellular carcinoma. Common indications in Bangladesh include chronic hepatitis B and C, alcoholic liver disease, and non-alcoholic steatohepatitis (NASH).</p><p>Dr. Arefin evaluates each patient individually, considering not just medical suitability but also social support, financial capacity for lifelong medication, and geographic access for follow-up care.</p>",
      },
    ],
    faq: [
      {
        q: "How long does transplant evaluation take",
        a: "The evaluation typically takes 2–4 weeks, depending on test scheduling and the complexity of the patient's condition. Urgent cases may be expedited.",
      },
      {
        q: "Who can be a living liver donor",
        a: "A living donor must be a healthy adult (typically 18–55 years), blood group compatible or compatible, have adequate liver volume (typically &gt;30% of recipient's standard liver volume), and have no significant medical or psychiatric conditions. The decision must be completely voluntary.",
      },
      {
        q: "What tests are required before liver transplant",
        a: "Required tests include complete blood count, liver and kidney function tests, coagulation profile, viral markers (HBsAg, anti-HCV, HIV), blood group and tissue typing, chest X-ray, ECG, echocardiography, abdominal CT/MRI, and sometimes coronary angiography for older patients.",
      },
    ],
    related: [
      { to: "/treatment/liver-transplant-surgery-dhaka/", label: "Liver Transplant Surgery", title: "Liver transplant surgery procedure and care" },
      { to: "/treatment/post-transplant-follow-up/", label: "Post-Transplant Follow-up", title: "Structured follow-up after liver transplant" },
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Liver surgery options by Dr. Arefin" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
    ],
  },

  {
    slug: "/treatment/post-transplant-follow-up",
    kicker: "Transplant Care",
    title: "Post-Transplant Follow-up in Dhaka — Dr. Murshidul Arefin",
    metaDesc: "Structured post-transplant follow-up care in Dhaka — surveillance, immunosuppression review, and surgical complications managed by Dr. Murshidul Arefin.",
    h1: "Post-Transplant Follow-up Care in Dhaka",
    intro: "<p><strong>Post-transplant follow-up</strong> is essential for long-term graft survival and patient wellbeing after liver transplantation. Dr. Murshidul Arefin provides structured surveillance, immunosuppression management, and surgical complication care at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, supporting patients through every stage of recovery.</p>",
    heroImage: IMG.popular,
    heroAlt: "Post-transplant follow-up care — Dr. Murshidul Arefin monitoring liver transplant patient recovery in Dhaka",
    sections: [
      {
        heading: "Why follow-up matters after liver transplant",
        body: "<p>The first year after liver transplantation is critical. During this period, the risk of acute rejection, infection, and surgical complications is highest. Regular follow-up allows early detection and prompt treatment of problems before they threaten graft function.</p><p>Beyond the first year, long-term follow-up focuses on managing chronic rejection, immunosuppression side effects (diabetes, kidney disease, hypertension), and cancer surveillance — ensuring the transplant continues to provide a good quality of life.</p>",
      },
      {
        heading: "Surveillance schedule and protocols",
        body: "<p>Dr. Arefin's follow-up protocol includes frequent visits in the first month (weekly to fortnightly), monthly visits for months 2–6, and quarterly visits thereafter. Each visit includes liver function tests, immunosuppression drug levels, and clinical assessment.</p><p>Imaging surveillance with ultrasound and, when indicated, CT or MRI helps detect vascular complications, biliary strictures, and tumour recurrence early. Endoscopic retrograde cholangiopancreatography (ERCP) is available when biliary issues are suspected.</p>",
      },
      {
        heading: "Immunosuppression management",
        body: "<p>Lifelong immunosuppression is required to prevent rejection, but these medications have significant side effects. Dr. Arefin monitors drug levels, adjusts doses based on liver function and side effect profile, and works with transplant physicians to optimise the balance between rejection prevention and infection risk.</p><p>Common immunosuppressants include tacrolimus, mycophenolate mofetil, and prednisolone. Over time, Dr. Arefin aims to minimise steroid exposure and reduce calcineurin inhibitor doses to protect kidney function.</p>",
      },
      {
        heading: "Surgical complications and their management",
        body: "<p>Surgical complications after liver transplant include hepatic artery thrombosis, portal vein stenosis, biliary strictures, and bile leaks. Early detection through Doppler ultrasound and clinical vigilance is essential.</p><p>Dr. Arefin manages these complications through a combination of interventional radiology, endoscopic techniques (ERCP/stenting), and when necessary, reoperation. His surgical expertise in hepatobiliary anatomy makes him well-equipped to handle the technical challenges of transplant complication surgery.</p>",
      },
    ],
    faq: [
      {
        q: "How often are follow-up visits needed after liver transplant",
        a: "Weekly to fortnightly in the first month, monthly for months 2–6, then every 3 months for the first year. After the first year, visits may space to every 6 months if the graft is stable.",
      },
      {
        q: "What are warning signs of transplant rejection",
        a: "Warning signs include fever, jaundice (yellow eyes/skin), dark urine, pale stools, abdominal pain, and fatigue. Any of these symptoms require urgent contact with the transplant team. Early intervention can reverse most rejection episodes.",
      },
      {
        q: "Can liver transplant patients live a normal life",
        a: "Yes — with proper follow-up and medication adherence, most liver transplant patients return to normal activities, work, and exercise within 6–12 months. Long-term survival rates are excellent, with many patients living 15–20 years or more after transplant.",
      },
    ],
    related: [
      { to: "/treatment/liver-transplant-surgery-dhaka/", label: "Liver Transplant Surgery", title: "Liver transplant surgery procedure and care" },
      { to: "/treatment/liver-transplant-evaluation/", label: "Transplant Evaluation", title: "Liver transplant evaluation and assessment" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/contact/", label: "Book Follow-up", title: "Contact Dr. Arefin for post-transplant care" },
    ],
  },


  {
    slug: "/treatment/liver-cyst-surgery-dhaka",
    kicker: "Liver Cyst Treatment",
    title: "Liver Cyst Surgery in Dhaka — Dr. Murshidul Arefin",
    metaDesc: "Liver cyst surgery in Dhaka — safe cyst excision, fenestration, and removal for simple and complex liver cysts by Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi.",
    h1: "Liver Cyst Surgery in Dhaka",
    intro: "<p><strong>Liver cysts</strong> are fluid-filled sacs that develop in the liver. While most simple cysts are harmless, some cause pain, infection, or compression of nearby organs and require surgical treatment. Dr. Murshidul Arefin performs safe <strong>cyst excision</strong>, <strong>fenestration</strong>, and <strong>removal</strong> for simple and complex liver cysts at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Liver cyst surgery — Dr. Murshidul Arefin performing cyst excision and fenestration in Dhaka",
    sections: [
      {
        heading: "Types of liver cysts",
        body: "<p>Liver cysts vary in cause and behaviour:</p><ul><li><strong>Simple cysts</strong> — benign fluid-filled sacs, often asymptomatic and discovered incidentally</li><li><strong>Polycystic liver disease</strong> — multiple cysts, usually associated with polycystic kidney disease</li><li><strong>Hydatid cysts</strong> — caused by Echinococcus parasite, requiring complete removal to prevent recurrence</li><li><strong>Cystadenomas</strong> — premalignant cystic tumours that require surgical excision</li><li><strong>Abscesses</strong> — pus-filled cavities from bacterial or amoebic infection, sometimes requiring drainage</li></ul>",
      },
      {
        heading: "When liver cyst surgery is needed",
        body: "<p>Not all liver cysts require surgery. Treatment is indicated when cysts cause symptoms (pain, fullness, early satiety), grow rapidly, become infected, compress adjacent organs, or show suspicious features on imaging.</p><p>Dr. Arefin evaluates each cyst with ultrasound, CT, or MRI to determine the most appropriate treatment. Hydatid cysts and cystadenomas are nearly always treated surgically due to their risk of recurrence or malignant transformation.</p>",
      },
      {
        heading: "Laparoscopic versus open cyst surgery",
        body: "<p>Dr. Arefin prefers <a href='/treatment/laparoscopic-surgery/' title='Laparoscopic surgery in Dhaka'>laparoscopic (keyhole) surgery</a> for accessible superficial cysts. Laparoscopic cyst fenestration — where the cyst roof is removed and the wall is treated — offers rapid recovery with minimal scarring.</p><p>For deep cysts, hydatid disease with biliary communication, or large polycystic livers, open surgery may be necessary. Dr. Arefin ensures complete cyst removal or sterilisation while preserving healthy liver tissue.</p>",
      },
      {
        heading: "Recovery and recurrence prevention",
        body: "<p>Recovery after laparoscopic cyst surgery is typically 2–4 days in hospital, with return to normal activities within 2 weeks. Open surgery may require 5–7 days in hospital and 4–6 weeks for full recovery.</p><p>To prevent recurrence, Dr. Arefin removes the cyst wall completely or treats it with omentoplasty (covering the cyst bed with omentum). For hydatid cysts, he follows WHO guidelines for perioperative albendazole therapy and careful spillage prevention.</p>",
      },
    ],
    faq: [
      {
        q: "Are liver cysts dangerous",
        a: "Most simple liver cysts are benign and harmless. However, hydatid cysts can rupture and spread, while cystadenomas can become cancerous if left untreated. Any cyst with solid components, septations, or growth should be evaluated by a specialist.",
      },
      {
        q: "Will liver cysts come back after surgery",
        a: "Simple cysts treated with complete excision rarely recur. Fenestration has a low recurrence rate. Hydatid cysts require complete removal with spillage prevention; recurrence is uncommon when surgery is performed by an experienced hepatobiliary surgeon.",
      },
      {
        q: "Is laparoscopic cyst removal possible",
        a: "Yes — superficial simple cysts and selected hydatid cysts can be treated laparoscopically. Dr. Arefin assesses cyst location, size, and relationship to major vessels to determine if laparoscopic surgery is appropriate.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Comprehensive liver surgery by Dr. Arefin" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumor Surgery", title: "Liver tumour and cancer resection" },
      { to: "/treatment/minimally-invasive-liver-surgery-dhaka/", label: "Minimally Invasive Liver Surgery", title: "Laparoscopic liver surgery techniques" },
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Minimally invasive surgery in Dhaka" },
    ],
  },

  {
    slug: "/treatment/liver-transplant-surgery-dhaka",
    kicker: "Transplant Surgery",
    title: "Liver Transplant Surgery in Dhaka — Dr. Murshidul Arefin",
    metaDesc: "Liver transplant surgery in Dhaka — donor-recipient evaluation, transplant procedure, and post-operative care by Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi.",
    h1: "Liver Transplant Surgery in Dhaka",
    intro: "<p><strong>Liver transplantation</strong> is the definitive treatment for end-stage liver disease, offering patients a chance at renewed health and long-term survival. Dr. Murshidul Arefin coordinates every phase of <strong>liver transplant surgery in Dhaka</strong> — from donor-recipient evaluation through the transplant procedure and post-operative care — at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.transplant,
    heroAlt: "Liver transplant surgery — Dr. Murshidul Arefin coordinating donor-recipient transplant procedure in Dhaka",
    sections: [
      {
        heading: "What liver transplant surgery involves",
        body: "<p>Liver transplantation replaces a diseased or failing liver with a healthy liver from a donor. The procedure involves removing the recipient's native liver (hepatectomy), implanting the donor liver, and reconnecting the hepatic artery, portal vein, bile duct, and inferior vena cava with microsurgical precision.</p><p>Dr. Arefin's fellowship training in liver transplantation includes expertise in both deceased donor and living donor liver transplant (LDLT) techniques. He ensures that every anastomosis is performed with meticulous attention to detail, minimising the risk of vascular and biliary complications.</p>",
      },
      {
        heading: "Living donor versus deceased donor transplant",
        body: "<p>In Bangladesh, living donor liver transplantation is the predominant option due to limited deceased donor organ availability. A healthy adult donates a portion of their liver (typically the right lobe, 60–70% of liver volume), which regenerates in both donor and recipient over 6–12 weeks.</p><p>Deceased donor transplantation uses a whole liver from a brain-dead donor. Dr. Arefin evaluates donor organ quality, cold ischaemia time, and recipient urgency to optimise outcomes. He advocates for ethical organ donation practices and transparent recipient selection.</p>",
      },
      {
        heading: "The surgical procedure",
        body: "<p>The transplant operation typically lasts 8–12 hours. It begins with the recipient hepatectomy — often challenging due to portal hypertension, collateral vessels, and previous surgery. The donor liver is then implanted with sequential vascular and biliary reconstruction.</p><p>Dr. Arefin uses modern techniques including piggyback caval reconstruction, duct-to-duct biliary anastomosis (when anatomy permits), and Roux-en-Y hepaticojejunostomy for complex cases. Intraoperative Doppler ultrasound confirms vascular patency before closure.</p>",
      },
      {
        heading: "Post-operative care and outcomes",
        body: "<p>After surgery, patients are monitored in the intensive care unit for 3–5 days. Immunosuppression begins immediately, with protocols tailored to each patient's risk profile. Dr. Arefin manages early complications including primary graft non-function, hepatic artery thrombosis, and bile leaks with prompt intervention.</p><p>One-year survival rates for living donor liver transplant exceed 85–90% at experienced centres. Dr. Arefin's structured <a href='/treatment/post-transplant-follow-up/' title='Post-transplant follow-up'>follow-up programme</a> ensures long-term graft and patient survival.</p>",
      },
    ],
    faq: [
      {
        q: "How long does liver transplant surgery take",
        a: "The transplant operation typically takes 8–12 hours for the recipient and 6–8 hours for a living donor hepatectomy. Complex cases or re-transplants may take longer. Dr. Arefin and his team work with precision to ensure the best possible outcome.",
      },
      {
        q: "What is the success rate of liver transplant in Bangladesh",
        a: "At experienced centres, one-year patient survival exceeds 85–90% for living donor liver transplant. Outcomes depend on donor quality, recipient condition, and post-operative care. Dr. Arefin's structured protocols and high-volume practice contribute to excellent results.",
      },
      {
        q: "How long is the hospital stay after liver transplant",
        a: "ICU stay is typically 3–5 days, followed by 7–14 days in a transplant ward. Most patients are discharged within 2–3 weeks. Living donors usually stay 5–7 days. Full recovery takes 3–6 months.",
      },
    ],
    related: [
      { to: "/treatment/liver-transplant-evaluation/", label: "Transplant Evaluation", title: "Liver transplant evaluation and assessment" },
      { to: "/treatment/post-transplant-follow-up/", label: "Post-Transplant Follow-up", title: "Structured follow-up after liver transplant" },
      { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Liver surgery options by Dr. Arefin" },
    ],
  },

  {
    slug: "/treatment/minimally-invasive-liver-surgery-dhaka",
    kicker: "Keyhole Liver Surgery",
    title: "Minimally Invasive Liver Surgery in Dhaka — Dr. Murshidul Arefin",
    metaDesc: "Minimally invasive liver surgery in Dhaka — laparoscopic and keyhole techniques for liver tumor, cyst, and selected resection by Dr. Murshidul Arefin.",
    h1: "Minimally Invasive Liver Surgery in Dhaka",
    intro: "<p><strong>Minimally invasive liver surgery</strong> — also called laparoscopic or keyhole liver surgery — uses small incisions, a camera, and specialised instruments to operate on the liver without the large incision required in open surgery. Dr. Murshidul Arefin performs <strong>minimally invasive liver surgery in Dhaka</strong> at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, offering patients faster recovery, less pain, and smaller scars.</p>",
    heroImage: IMG.laparoscopic,
    heroAlt: "Minimally invasive liver surgery — laparoscopic liver resection by Dr. Murshidul Arefin in Dhaka",
    sections: [
      {
        heading: "What is minimally invasive liver surgery",
        body: "<p>Minimally invasive liver surgery uses 3–5 small incisions (5–12 mm) instead of a single large incision. A high-definition camera and long, specialised instruments allow the surgeon to perform resections, cyst fenestrations, and biopsies with the same precision as open surgery.</p><p>Dr. Arefin uses modern Storz laparoscopic equipment with HD imaging and energy devices (harmonic scalpel, LigaSure) to achieve secure haemostasis — the critical challenge in liver surgery. For selected cases, he also employs hand-assisted and hybrid techniques.</p>",
      },
      {
        heading: "Procedures Dr. Arefin performs laparoscopically",
        body: "<ul><li><strong>Laparoscopic liver wedge resection</strong> — removing small peripheral tumours</li><li><strong>Laparoscopic left lateral sectionectomy</strong> — removal of segments II and III</li><li><strong>Laparoscopic cyst fenestration</strong> — treating simple and polycystic liver disease</li><li><strong>Laparoscopic liver biopsy</strong> — diagnostic sampling of diffuse liver disease</li><li><strong>Diagnostic laparoscopy</strong> — staging and assessment of peritoneal disease</li></ul>",
      },
      {
        heading: "Benefits over open liver surgery",
        body: "<p>Compared to open surgery, minimally invasive liver surgery offers:</p><ul><li><strong>Smaller incisions</strong> — cosmetically superior, less wound pain</li><li><strong>Reduced blood loss</strong> — pneumoperitoneum pressure and magnified vision improve control</li><li><strong>Shorter hospital stay</strong> — typically 2–4 days versus 7–10 days for open surgery</li><li><strong>Faster recovery</strong> — return to normal activities in 2–3 weeks versus 6–8 weeks</li><li><strong>Lower wound complication rates</strong> — reduced infection and hernia risk</li></ul>",
      },
      {
        heading: "When open surgery is still preferred",
        body: "<p>Not all liver procedures can be performed laparoscopically. Open surgery remains the gold standard for:</p><ul><li>Large or centrally located tumours near major vessels</li><li>Extended hepatectomies (removal of &gt;3 segments)</li><li>Tumours requiring major vascular reconstruction</li><li>Previous upper abdominal surgery with extensive adhesions</li><li>Emergency trauma surgery</li></ul><p>Dr. Arefin recommends the approach that offers the best balance of safety and recovery for each individual patient. <a href='/contact/' title='Contact Dr. Arefin'>Contact his chamber</a> to discuss whether laparoscopic liver surgery is suitable for your condition.</p>",
      },
    ],
    faq: [
      {
        q: "Is all liver surgery possible laparoscopically",
        a: "No — approximately 20–30% of liver resections are suitable for a purely laparoscopic approach. The decision depends on tumour location, size, liver function, and the surgeon's experience. Dr. Arefin will recommend the safest approach for your specific case.",
      },
      {
        q: "What are the limitations of laparoscopic liver surgery",
        a: "Limitations include difficulty with large tumours, central lesions near the hilum or vena cava, and cases requiring complex vascular reconstruction. Conversion to open surgery is not a failure — it is a prudent decision when patient safety requires it.",
      },
      {
        q: "How much faster is recovery after laparoscopic liver surgery",
        a: "Most patients stay 2–4 days in hospital and return to normal activities within 2–3 weeks. Open surgery typically requires 7–10 days in hospital and 6–8 weeks for full recovery. The difference is most noticeable in the first month.",
      },

  {
    slug: "/treatment/liver-surgery-recovery",
    kicker: "Liver Surgery",
    title: "Liver Surgery Recovery in Dhaka — Dr. Arefin",
    metaDesc: "Liver surgery recovery in Dhaka — what to expect after liver resection, follow-up, rehabilitation and long-term liver care with Dr. Murshidul Arefin.",
    h1: "Liver Surgery Recovery & Follow-Up in Dhaka",
    intro: "<p>Recovery after <strong>liver surgery</strong> is a planned process, not just rest. The liver regenerates, but liver function, wound healing and nutrition all need monitoring in the first weeks. <a href='/about/' title='Dr. Murshidul Arefin'>Dr. Murshidul Arefin</a> and his team at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, follow every patient through discharge, review and long-term liver care.</p>",
    heroImage: IMG.liverSurgeon,
    heroAlt: "Liver surgery recovery and follow-up — Dr. Murshidul Arefin, Dhaka",
    sections: [
      { heading: "The first days after liver surgery", body: "<p>Most patients spend the first days in a monitored bed with liver function, clotting and drain output checked daily. Walking starts the day after surgery, and a light diet resumes as the bowel recovers. Pain is controlled with oral medicines once drains are out.</p>" },
      { heading: "Discharge and the first two weeks", body: "<p>Discharge is usually within a week for uncomplicated resection, with clear instructions on wound care, diet and activity. The first review is at about two weeks, when the wound, blood tests and histology report are checked together.</p>" },
      { heading: "Rehabilitation and diet", body: "<p>Rehabilitation is gradual: light activity first, then normal activity over 4–6 weeks. A high-protein diet supports liver regeneration, and alcohol is avoided while the liver heals. Patients with fatty liver or diabetes receive metabolic follow-up alongside surgical review.</p>" },
      { heading: "Long-term follow-up", body: "<p>Long-term follow-up depends on why surgery was done — imaging and blood tests for tumour patients, liver function monitoring for others. The liver regenerates over weeks to months, and most patients return to full activity. <a href='/contact/' title='Book a follow-up consultation'>Book a follow-up consultation</a> if you have questions after surgery.</p>" },
    ],
    faq: [
      { q: "How long does recovery after liver resection take?", a: "Most patients leave hospital within a week and return to light activity in 2–3 weeks. Full recovery takes 4–6 weeks, and the liver continues to regenerate over the following months." },
      { q: "What diet should I follow after liver surgery?", a: "A high-protein, balanced diet supports liver regeneration. Alcohol should be avoided while the liver heals, and fatty meals are introduced gradually." },
      { q: "How often do I need follow-up after liver surgery?", a: "A first review at about two weeks, then reviews at intervals set by the reason for surgery — more frequent imaging for tumour patients, routine liver function checks for others." },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery overview" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/treatment/minimally-invasive-liver-surgery-dhaka/", label: "Minimally Invasive Liver Surgery", title: "Minimally invasive liver surgery in Dhaka" },
      { to: "/contact/", label: "Book Consultation", title: "Book a consultation with Dr. Arefin" },
    ],
  },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Comprehensive liver surgery by Dr. Arefin" },
      { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Minimally invasive surgery overview" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumor Surgery", title: "Laparoscopic liver tumour resection" },
      { to: "/treatment/liver-cyst-surgery-dhaka/", label: "Liver Cyst Surgery", title: "Laparoscopic cyst fenestration" },
    ],
  },

  /* ───────────── Liver cluster (was Gallbladder) — hand-authored ───────────── */

  {
    slug: "/treatment/benign-liver-tumour-surgery-dhaka",
    kicker: "Liver Surgery",
    title: "Benign Liver Tumour Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Benign liver tumour surgery in Dhaka — haemangioma, adenoma and FNH assessed and resected by liver surgeon Dr. Murshidul Arefin at Popular Medical College Hospital.",
    h1: "Benign Liver Tumour Surgery in Dhaka",
    intro: "<p><strong>Benign liver tumours</strong> — haemangioma, hepatic adenoma and focal nodular hyperplasia (FNH) — are non-cancerous growths in the liver. Most are found by chance on imaging and need no surgery, but some cause pain, grow, or carry a risk of bleeding and need expert assessment. <a href='/about/' title='Dr. Murshidul Arefin'>Dr. Murshidul Arefin</a>, a liver surgeon at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, assesses each tumour on its imaging, size and symptoms before recommending surgery or surveillance.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Liver tumour surgery — Dr. Murshidul Arefin, liver surgeon in Dhaka",
    sections: [
      { heading: "Which benign liver tumours need surgery", body: "<ul><li>Haemangioma causing pain, pressure or rapid growth</li><li>Hepatic adenoma — especially large adenomas or adenomas in women planning pregnancy, because of bleeding and rupture risk</li><li>Focal nodular hyperplasia (FNH) that is symptomatic or uncertain on imaging</li><li>Any liver lesion where imaging cannot exclude cancer — tissue diagnosis and resection may be needed</li></ul>" },
      { heading: "How benign liver tumours are diagnosed", body: "<p>Diagnosis starts with <strong>triphasic CT or MRI of the liver</strong>, which shows the blood-flow pattern of the lesion, plus liver function tests and tumour markers. A biopsy is avoided for haemangioma because of bleeding risk. Dr. Arefin reviews the imaging with radiology before deciding between surveillance, further imaging, or surgery.</p>" },
      { heading: "Surgical approach", body: "<p>When surgery is needed, the operation is a <strong>liver resection (hepatectomy)</strong> — removing the tumour with a margin of healthy liver — performed open or minimally invasively depending on tumour size and position. Small, well-placed tumours may be removed laparoscopically; larger or centrally placed tumours need open surgery. The amount of liver removed is planned around remnant liver volume, so enough healthy liver remains to recover.</p>" },
      { heading: "Recovery and follow-up", body: "<p>Hospital stay is typically a few days after resection, with liver function monitored closely in the first week. Most patients return to light activity within 2–3 weeks and to full activity within 6 weeks. Follow-up imaging confirms the remaining liver has regenerated and no new lesion has appeared. <a href='/contact/' title='Book consultation'>Book a consultation</a> to discuss your imaging.</p>" },
    ],
    faq: [
      { q: "Do benign liver tumours need surgery?", a: "Not always. Many haemangiomas and FNH lesions are watched with regular imaging. Surgery is recommended when a tumour causes pain, grows, risks bleeding, or cannot be distinguished from cancer on imaging." },
      { q: "Can a benign liver tumour turn cancerous?", a: "Haemangioma and FNH almost never turn cancerous. Some hepatic adenomas carry a small risk of malignant change, which is one reason large adenomas are usually resected." },
      { q: "Is liver resection safe for a benign tumour?", a: "Liver resection is major surgery, so it is only recommended when the benefit outweighs the risk. Planning around imaging, liver function and remnant liver volume is what makes it safe — this is the core of hepatobiliary surgical planning." },
    ],
    related: [
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/treatment/liver-cyst-surgery-dhaka/", label: "Liver Cyst Surgery", title: "Liver cyst surgery in Dhaka" },
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery overview" },
      { to: "/treatment/minimally-invasive-liver-surgery-dhaka/", label: "Minimally Invasive Liver Surgery", title: "Minimally invasive liver surgery in Dhaka" },
    ],
  },

  {
    slug: "/treatment/liver-abscess-dhaka",
    kicker: "Liver Surgery",
    title: "Liver Abscess Treatment in Dhaka — Dr. Arefin",
    metaDesc: "Liver abscess treatment in Dhaka — drainage and surgery for pyogenic and amoebic liver abscess by liver surgeon Dr. Murshidul Arefin at Popular Medical College Hospital.",
    h1: "Liver Abscess Treatment in Dhaka",
    intro: "<p>A <strong>liver abscess</strong> is a pus-filled cavity in the liver, usually caused by bacterial infection or amoebic infection. It causes fever, right-upper-abdominal pain and a feeling of being seriously unwell, and it needs urgent treatment. <a href='/about/' title='Dr. Murshidul Arefin'>Dr. Murshidul Arefin</a>, a liver surgeon at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, treats liver abscess with antibiotics, image-guided drainage and, when needed, surgery.</p>",
    heroImage: IMG.hepatobiliary,
    heroAlt: "Liver abscess treatment — Dr. Murshidul Arefin, liver surgeon in Dhaka",
    sections: [
      { heading: "What a liver abscess is", body: "<p>A liver abscess forms when infection reaches the liver through the bloodstream, the bile ducts, or from a nearby infection. <strong>Pyogenic abscess</strong> is bacterial; <strong>amoebic abscess</strong> follows amoebic dysentery and is common in Bangladesh. Without treatment an abscess can rupture into the chest or abdomen — a surgical emergency.</p>" },
      { heading: "Symptoms and diagnosis", body: "<ul><li>Fever with chills and rigors, often for days</li><li>Right-upper-abdominal pain and tenderness</li><li>Loss of appetite and weight loss</li><li>Jaundice in some cases</li><li>Ultrasound and CT show a cavity in the liver; blood tests show raised white-cell count and liver enzymes</li></ul>" },
      { heading: "Treatment — drainage and surgery", body: "<p>Most liver abscesses are treated with <strong>antibiotics plus image-guided percutaneous drainage</strong> — a needle or drain placed through the skin under ultrasound or CT guidance. Surgery is needed when drainage fails, the abscess is large or multi-loculated, it has ruptured, or the diagnosis is uncertain. Dr. Arefin performs open or laparoscopic drainage and, rarely, resection of the affected liver segment.</p>" },
      { heading: "Recovery", body: "<p>Antibiotics continue for several weeks after drainage. Hospital stay is typically a few days, with repeat imaging to confirm the cavity is shrinking. Most patients recover fully, though large abscesses need longer follow-up. <a href='/contact/' title='Contact the chamber urgently'>Contact the chamber urgently</a> if fever and right-upper pain suggest a liver abscess.</p>" },
    ],
    faq: [
      { q: "What is the treatment for liver abscess in Dhaka?", a: "Antibiotics plus image-guided drainage is the standard treatment. Surgery is needed when drainage fails, the abscess is large or ruptured, or the diagnosis is uncertain." },
      { q: "Is a liver abscess dangerous?", a: "Yes — an untreated liver abscess can rupture and cause life-threatening infection in the chest or abdomen. Early antibiotics and drainage are life-saving." },
      { q: "Can a liver abscess come back?", a: "Recurrence is uncommon if the abscess is fully drained and the full antibiotic course is completed. Follow-up imaging checks that the cavity has resolved." },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery overview" },
      { to: "/treatment/liver-cyst-surgery-dhaka/", label: "Liver Cyst Surgery", title: "Liver cyst surgery in Dhaka" },
      { to: "/treatment/benign-liver-tumour-surgery-dhaka/", label: "Benign Liver Tumour Surgery", title: "Benign liver tumour surgery in Dhaka" },
      { to: "/contact/", label: "Emergency Contact", title: "Contact Dr. Arefin's clinic urgently" },
    ],
  },

  {
    slug: "/treatment/liver-cancer-resection-dhaka",
    kicker: "Liver Surgery",
    title: "Liver Cancer Resection in Dhaka — Dr. Arefin",
    metaDesc: "Liver cancer resection in Dhaka — hepatectomy for hepatocellular carcinoma and liver metastases by liver surgeon Dr. Murshidul Arefin at Popular Medical College Hospital.",
    h1: "Liver Cancer Resection (Hepatectomy) in Dhaka",
    intro: "<p><strong>Liver cancer</strong> — hepatocellular carcinoma (HCC) and cancer that has spread to the liver from elsewhere — is treated by surgical resection when the tumour can be removed with enough healthy liver left behind. <a href='/about/' title='Dr. Arefin — hepatobiliary cancer surgeon'>Dr. Murshidul Arefin</a> performs liver resection, from wedge resection to formal hepatectomy, at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Liver cancer resection surgery — Dr. Murshidul Arefin, liver surgeon in Dhaka",
    sections: [
      { heading: "Who needs liver cancer resection", body: "<ul><li>Hepatocellular carcinoma (HCC) confined to the liver with adequate remnant liver</li><li>Liver metastases, most commonly from colorectal cancer, that can be removed completely</li><li>Selected bile-duct cancers involving the liver</li><li>Tumours found incidentally on imaging that need tissue diagnosis and resection</li></ul>" },
      { heading: "Surgical procedures", body: "<p>The extent of surgery depends on tumour size, number and position, and on liver function and remnant liver volume. Options range from <strong>wedge resection</strong> of a small peripheral tumour to <strong>segmentectomy, sectionectomy, or formal right or left hepatectomy</strong>. Every case is planned with triphasic CT or MRI, liver function testing and, where needed, assessment of portal hypertension. Selected cases are discussed in a multidisciplinary tumour board with radiology, oncology and pathology.</p>" },
      { heading: "Multidisciplinary care", body: "<p>Liver cancer is rarely treated by surgery alone. Depending on the case, treatment may combine resection with ablation, transarterial chemoembolisation (TACE), targeted therapy or immunotherapy, coordinated with oncology. This integrated pathway gives the best long-term outcomes.</p>" },
      { heading: "Outcomes and follow-up", body: "<p>Outcomes depend on tumour stage, liver function and whether the resection is complete (R0). Structured follow-up includes regular imaging and tumour-marker review, with early detection of recurrence the goal. <a href='/contact/' title='Book oncology consultation'>Book a consultation</a> for a second opinion or surgical planning.</p>" },
    ],
    faq: [
      { q: "Can liver cancer be cured by surgery?", a: "When a liver cancer is confined to the liver and can be removed completely with enough healthy liver remaining, resection offers the best chance of cure. Outcomes depend on tumour stage and liver function." },
      { q: "What if the tumour is too large to remove?", a: "Large tumours may first be treated with ablation, TACE or systemic therapy to shrink them, after which resection may become possible. A multidisciplinary review decides the sequence." },
      { q: "Is liver transplant ever an option for liver cancer?", a: "Liver transplantation is an option for selected patients with HCC within defined criteria and end-stage liver disease. Dr. Arefin coordinates transplant evaluation and referral — see the liver transplant pages for details." },
    ],
    related: [
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery overview" },
      { to: "/treatment/minimally-invasive-liver-surgery-dhaka/", label: "Minimally Invasive Liver Surgery", title: "Minimally invasive liver surgery in Dhaka" },
      { to: "/second-opinion/", label: "Second Opinion", title: "Independent surgical review" },
    ],
  },

  {
    slug: "/treatment/acute-liver-conditions-dhaka",
    kicker: "Liver Surgery",
    title: "Acute Liver Conditions in Dhaka — Dr. Arefin",
    metaDesc: "Acute liver conditions in Dhaka — urgent assessment of acute liver failure, liver abscess and liver trauma by liver surgeon Dr. Murshidul Arefin at Popular Medical College Hospital.",
    h1: "Acute Liver Conditions & Emergency Liver Surgery in Dhaka",
    intro: "<p>Some liver conditions need <strong>urgent assessment</strong> — sudden liver failure, a ruptured liver abscess or cyst, bleeding liver tumours, and liver injury after trauma. <a href='/about/' title='Dr. Arefin — liver surgeon'>Dr. Murshidul Arefin</a>, a liver surgeon at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, provides urgent hepatobiliary assessment with 24-hour OT and ICU support, and operates when surgery is the safest option.</p>",
    heroImage: IMG.hepatobiliary,
    heroAlt: "Emergency liver surgery — Dr. Murshidul Arefin, liver surgeon in Dhaka",
    sections: [
      { heading: "Acute liver conditions that need urgent care", body: "<ul><li>Acute liver failure — sudden loss of liver function, with jaundice, confusion and clotting problems</li><li>Ruptured liver abscess or ruptured liver cyst</li><li>Bleeding liver tumour (haemangioma or adenoma rupture)</li><li>Liver injury after road traffic accident or fall</li><li>Severe infection of the liver or bile ducts with sepsis</li></ul>" },
      { heading: "Diagnosis and timing", body: "<p>Urgent assessment starts with blood tests (liver function, clotting, lactate), ultrasound and CT of the liver. The decision — operate now, drain first, or stabilise and plan — is made on imaging, liver function and how unwell the patient is. Early hepatobiliary review matters: delay turns a drainage procedure into a major emergency operation.</p>" },
      { heading: "Surgical approach", body: "<p>Emergency liver surgery ranges from drainage of an abscess or cyst, to control of bleeding, to resection of a damaged or ruptured liver segment. In unstable patients Dr. Arefin uses damage-control principles — stop the bleeding, drain the infection, and return for definitive surgery when the patient is stable. This judgement is the core of emergency hepatobiliary surgery.</p>" },
      { heading: "Recovery", body: "<p>Recovery after emergency liver surgery needs close monitoring of liver function, clotting and infection, usually in ICU for the first days. Follow-up imaging confirms the liver is healing. <a href='/contact/' title='Contact the chamber urgently'>Contact the chamber urgently</a> if symptoms suggest an acute liver condition.</p>" },
    ],
    faq: [
      { q: "When is liver surgery an emergency?", a: "When there is bleeding, rupture, or rapidly worsening liver failure. Fever with severe right-upper pain, jaundice with confusion, or abdominal injury with bleeding all need urgent hepatobiliary review." },
      { q: "Can acute liver failure be treated with surgery?", a: "Surgery is not the treatment for most acute liver failure — intensive care and, in selected cases, liver transplant evaluation are. Surgery is needed when there is a surgical cause: rupture, bleeding, abscess or obstruction." },
      { q: "What should I do if I suspect an acute liver problem?", a: "Seek urgent care the same day. Bring all recent blood tests and imaging — the hepatobiliary team will assess liver function and imaging before deciding on drainage, surgery or referral." },
    ],
    related: [
      { to: "/treatment/liver-abscess-dhaka/", label: "Liver Abscess Treatment", title: "Liver abscess treatment in Dhaka" },
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery overview" },
      { to: "/treatment/liver-cancer-resection-dhaka/", label: "Liver Cancer Resection", title: "Liver cancer resection in Dhaka" },
      { to: "/contact/", label: "Emergency Contact", title: "Contact Dr. Arefin's clinic urgently" },
    ],
  },

  /* ───────────── Biliary cluster — hand-authored ───────────── */
  {
    slug: "/treatment/bile-duct-obstruction-surgery-dhaka",
    kicker: "Biliary Surgery",
    title: "Bile Duct Obstruction Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Bile duct obstruction surgery in Dhaka — stricture repair, hepaticojejunostomy, and bile duct reconstruction by Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi.",
    h1: "Bile Duct Obstruction Surgery Dhaka",
    intro: "<p><strong>Bile duct obstruction</strong> blocks the flow of bile from the liver to the intestine, causing jaundice, itching, dark urine, and pale stools. <a href='/about/' title='Dr. Murshidul Arefin — biliary surgeon'>Dr. Murshidul Arefin</a> performs the full range of bile-duct reconstructions — stricture repair, hepaticojejunostomy, and complex re-do biliary surgery — at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Hepaticojejunostomy bile-duct reconstruction — Dr. Arefin's OT in Dhaka",
    sections: [
      { heading: "Causes of bile duct obstruction", body: "<ul><li><strong>Benign strictures</strong> — usually post-cholecystectomy bile-duct injuries (most common in Bangladesh)</li><li><strong>Bile-duct stones</strong> (choledocholithiasis) — managed by ERCP or open exploration</li><li><strong>Cholangiocarcinoma</strong> — see <a href='/treatment/cholangiocarcinoma-surgery-dhaka/' title='Cholangiocarcinoma surgery'>bile-duct cancer surgery</a></li><li><strong>Pancreatic head tumours</strong> — managed by <a href='/treatment/whipple-procedure-dhaka/' title='Whipple procedure'>Whipple procedure</a></li><li><strong>Choledochal cysts</strong> and primary sclerosing cholangitis</li></ul>" },
      { heading: "Diagnosis and pre-operative planning", body: "<p>Patients present with painless jaundice, itching, and weight loss. Workup includes liver-function tests, tumour markers (CA 19-9, CEA), and high-quality cross-sectional imaging — <strong>MRCP</strong> for the biliary tree and <strong>contrast CT</strong> for vascular planning. ERCP is reserved for therapeutic decompression. Dr. Arefin reviews every imaging study personally and discusses complex cases in multidisciplinary meetings before surgery.</p>" },
      { heading: "Surgical reconstruction techniques", body: "<p>The standard reconstruction for benign strictures and post-cholecystectomy injuries is <strong>Roux-en-Y hepaticojejunostomy</strong> — a tension-free, mucosa-to-mucosa anastomosis between healthy bile duct above the stricture and a defunctionalised loop of jejunum. For high (Bismuth type III–IV) strictures, separate left and right hepatic duct anastomoses are constructed. Dr. Arefin uses fine 5/0 PDS sutures, optical magnification, and meticulous technique to achieve patency rates &gt;90% at 5 years.</p>" },
      { heading: "Recovery and long-term outcomes", body: "<p>Hospital stay is typically 7–10 days. Drains are removed once bile leak is excluded (usually day 5–7). Patients return to normal activities in 4–6 weeks. Long-term follow-up with liver function tests every 6 months is essential — recurrent stricture or cholangitis can occur in 5–10% and is managed with percutaneous balloon dilatation or revision surgery. <a href='/contact/' title='Book consultation'>Book a consultation</a> to discuss your imaging.</p>" },
    ],
    faq: [
      { q: "Can a bile-duct stricture be treated without surgery?", a: "Short, low strictures can sometimes be managed by ERCP with stent placement. However, post-injury and high strictures usually require surgical reconstruction for durable results — long-term stenting alone has a high failure rate." },
      { q: "What is the success rate of hepaticojejunostomy?", a: "When performed by an experienced biliary surgeon on a well-prepared patient, hepaticojejunostomy has 5-year patency rates of 85–95%. Outcomes are best when surgery is done at a specialist centre and the patient is free of active infection at the time of repair." },
      { q: "Will I need lifelong medication?", a: "Most patients do not need lifelong medication after successful reconstruction. Periodic ursodeoxycholic acid is sometimes prescribed, and prompt antibiotics are needed if cholangitis develops. Lifelong follow-up is recommended." },
    ],
    related: [
      { to: "/treatment/cholangiocarcinoma-surgery-dhaka/", label: "Cholangiocarcinoma Surgery", title: "Bile-duct cancer surgery" },
      { to: "/treatment/cholangitis-surgery-dhaka/", label: "Cholangitis Surgery", title: "Acute cholangitis surgery" },
      { to: "/treatment/biliary-tract-surgery/", label: "Biliary Tract Surgery", title: "Biliary tract surgery overview" },
      { to: "/treatment/whipple-procedure-dhaka/", label: "Whipple Procedure", title: "Surgery for pancreatic-head tumours" },
    ],
  },

  {
    slug: "/treatment/cholangiocarcinoma-surgery-dhaka",
    kicker: "Biliary Surgery",
    title: "Cholangiocarcinoma Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Cholangiocarcinoma surgery in Dhaka — radical bile duct cancer resection including Klatskin tumor by Dr. Murshidul Arefin, fellowship-trained hepatobiliary surgeon.",
    h1: "Cholangiocarcinoma Surgery Dhaka",
    intro: "<p><strong>Cholangiocarcinoma</strong> (bile-duct cancer) is one of the most challenging hepatobiliary cancers — but with modern surgery and proper patient selection, long-term cure is achievable. <a href='/about/' title='Dr. Murshidul Arefin — HPB surgeon'>Dr. Murshidul Arefin</a> performs radical resections including hilar (Klatskin) tumour resection with hepatectomy and bile-duct reconstruction at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Hilar cholangiocarcinoma (Klatskin) resection planning — Dr. Arefin in Dhaka",
    sections: [
      { heading: "Types of cholangiocarcinoma", body: "<ul><li><strong>Intrahepatic cholangiocarcinoma (iCCA)</strong> — within the liver; managed by <a href='/treatment/complex-hepatic-resection/' title='Hepatic resection'>hepatectomy</a> with regional lymphadenectomy</li><li><strong>Hilar (perihilar) cholangiocarcinoma</strong> — Klatskin tumour at the bile-duct confluence; the most common and most complex</li><li><strong>Distal cholangiocarcinoma</strong> — lower bile duct; managed by <a href='/treatment/whipple-procedure-dhaka/' title='Whipple procedure'>Whipple procedure</a></li></ul>" },
      { heading: "Pre-operative workup", body: "<p>Workup includes high-resolution MRCP, triple-phase CT for vascular involvement, CA 19-9, and (when needed) endoscopic ultrasound with biopsy. For Klatskin tumours, the Bismuth–Corlette classification guides the resection plan. <strong>Pre-operative biliary drainage</strong> (PTBD or ERCP stenting) is selectively used to lower bilirubin before major hepatectomy. <strong>Portal vein embolisation</strong> may be needed to grow a small future liver remnant.</p>" },
      { heading: "Surgical resection", body: "<p>Curative surgery for hilar cholangiocarcinoma typically involves <strong>extended right or left hepatectomy with caudate lobectomy, en-bloc bile-duct resection, regional lymphadenectomy, and Roux-en-Y hepaticojejunostomy</strong>. Vascular reconstruction (portal vein resection) is occasionally required. The operation typically takes 6–10 hours. Dr. Arefin's team includes specialist anaesthetists and an experienced ICU — essential for safe major hepatectomy.</p>" },
      { heading: "Outcomes and adjuvant therapy", body: "<p>5-year survival after R0 resection is 25–40% for Klatskin tumours and up to 50% for distal lesions. Adjuvant capecitabine chemotherapy is now the global standard after resection (BILCAP trial) and is coordinated with medical oncology. Lifelong surveillance with imaging and CA 19-9 every 3–6 months is essential. <a href='/contact/' title='Book consultation'>Book a consultation</a> for a personalised plan.</p>" },
    ],
    faq: [
      { q: "Is cholangiocarcinoma always fatal?", a: "No — when caught early and resected with clear margins (R0), long-term cure is achievable. Around 30–40% of patients with Klatskin tumours and 50% with distal tumours are alive at 5 years after radical surgery." },
      { q: "Why is hilar cholangiocarcinoma surgery so complex?", a: "It requires removing the bile-duct confluence en bloc with adjacent liver (extended hepatectomy) and the caudate lobe, often with vascular reconstruction. Few centres in Bangladesh perform this surgery — Dr. Arefin trained specifically in this technique during his HPB fellowship." },
      { q: "Can chemotherapy alone treat cholangiocarcinoma?", a: "Chemotherapy alone is palliative for unresectable disease — it controls but does not cure. Surgical resection remains the only chance of cure, which is why early referral to an experienced HPB surgeon is critical." },
    ],
    related: [
      { to: "/treatment/bile-duct-obstruction-surgery-dhaka/", label: "Bile Duct Obstruction Surgery", title: "Stricture repair and reconstruction" },
      { to: "/treatment/complex-hepatic-resection/", label: "Complex Hepatic Resection", title: "Major liver resection for cancer" },
      { to: "/treatment/whipple-procedure-dhaka/", label: "Whipple Procedure", title: "Surgery for distal bile-duct cancer" },
      { to: "/treatment/biliary-tract-surgery/", label: "Biliary Tract Surgery", title: "Biliary tract surgery overview" },
    ],
  },

  {
    slug: "/treatment/cholangitis-surgery-dhaka",
    kicker: "Biliary Surgery",
    title: "Cholangitis Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Cholangitis surgery in Dhaka — emergency biliary decompression and surgical management of acute cholangitis by Dr. Murshidul Arefin.",
    h1: "Cholangitis Surgery Dhaka",
    intro: "<p><strong>Acute cholangitis</strong> is a life-threatening infection of the bile ducts caused by obstruction (most commonly bile-duct stones or strictures). It presents with Charcot's triad — right-upper-quadrant pain, fever, and jaundice — and can progress within hours to septic shock. <a href='/about/' title='Dr. Murshidul Arefin'>Dr. Murshidul Arefin</a> manages acute cholangitis as an emergency at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>, with rapid biliary decompression and definitive surgery once the patient is stable.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Emergency biliary decompression for acute cholangitis — Dr. Arefin in Dhaka",
    sections: [
      { heading: "Severity grading and initial management", body: "<p>Severity is graded by the <strong>Tokyo Guidelines</strong>: Grade I (mild), Grade II (moderate), Grade III (severe with organ failure). Initial management for all grades includes IV fluids, broad-spectrum antibiotics covering Gram-negative and anaerobic organisms (piperacillin-tazobactam or carbapenem), and prompt biliary drainage. Severe cases need ICU support.</p>" },
      { heading: "Biliary decompression — first-line treatment", body: "<p><strong>Urgent biliary drainage within 24 hours</strong> is the cornerstone of treatment. Options:</p><ul><li><strong>ERCP with sphincterotomy and stone extraction</strong> — first choice for stone-related cholangitis</li><li><strong>Percutaneous transhepatic biliary drainage (PTBD)</strong> — when ERCP fails or is anatomically impossible</li><li><strong>Emergency surgical decompression</strong> — reserved for failed ERCP/PTBD or where these are unavailable</li></ul>" },
      { heading: "Definitive surgery after recovery", body: "<p>Once the infection is controlled, definitive surgery addresses the underlying cause: <a href='/treatment/minimally-invasive-liver-surgery-dhaka/' title='Laparoscopic cholecystectomy'>laparoscopic cholecystectomy</a> for stones (within 4–6 weeks), <a href='/treatment/bile-duct-obstruction-surgery-dhaka/' title='Bile duct reconstruction'>bile-duct reconstruction</a> for strictures, or resection for tumours. Skipping definitive surgery leads to recurrent attacks and progressive liver damage.</p>" },
      { heading: "Outcomes and prevention", body: "<p>With prompt drainage, mortality from acute cholangitis has fallen from &gt;50% to under 10%. Severe (Grade III) cholangitis still carries 10–20% mortality — early referral matters. Patients with recurrent cholangitis from intrahepatic stones or strictures need long-term surveillance. <a href='/contact/' title='Book consultation'>Book a consultation</a> if you have had even one episode of cholangitis.</p>" },
    ],
    faq: [
      { q: "Is cholangitis a medical emergency?", a: "Yes — acute cholangitis can progress to septic shock and multi-organ failure within hours. Any patient with fever, right-upper-quadrant pain, and jaundice should be evaluated immediately at a hospital with ERCP and surgical capability." },
      { q: "Can cholangitis be treated with antibiotics alone?", a: "Antibiotics alone are inadequate for moderate or severe cholangitis — biliary drainage is essential because antibiotics cannot effectively penetrate obstructed bile. Mild cases sometimes resolve with antibiotics, but the underlying cause must still be treated." },
      { q: "Will I need surgery after the infection settles?", a: "Almost always, yes. The acute episode is controlled by drainage, but the underlying cause (stones, stricture, tumour) must be definitively treated to prevent recurrent life-threatening attacks." },
    ],
    related: [
      { to: "/treatment/bile-duct-obstruction-surgery-dhaka/", label: "Bile Duct Obstruction Surgery", title: "Reconstruction for biliary stricture" },
      { to: "/treatment/minimally-invasive-liver-surgery-dhaka/", label: "Laparoscopic Cholecystectomy", title: "Definitive treatment for stone disease" },
      { to: "/treatment/cholangiocarcinoma-surgery-dhaka/", label: "Cholangiocarcinoma Surgery", title: "Surgery for bile-duct cancer" },
      { to: "/treatment/biliary-tract-surgery/", label: "Biliary Tract Surgery", title: "Biliary tract surgery overview" },
    ],
  },

  {
    slug: "/treatment/choledochal-cyst-surgery-dhaka",
    kicker: "Biliary Surgery",
    title: "Choledochal Cyst Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Choledochal cyst surgery in Dhaka — complete cyst excision with Roux-en-Y hepaticojejunostomy by Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi.",
    h1: "Choledochal Cyst Surgery Dhaka",
    intro: "<p><strong>Choledochal cysts</strong> are congenital dilatations of the bile-duct system that carry a lifetime risk of malignant transformation (cholangiocarcinoma) of up to 30% if left untreated. The standard treatment is <strong>complete cyst excision with Roux-en-Y hepaticojejunostomy</strong> — a procedure <a href='/about/' title='Dr. Murshidul Arefin'>Dr. Murshidul Arefin</a> performs at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Choledochal cyst excision with hepaticojejunostomy — Dr. Arefin in Dhaka",
    sections: [
      { heading: "Todani classification", body: "<ul><li><strong>Type I</strong> (most common, ~80%) — fusiform dilatation of the extrahepatic bile duct</li><li><strong>Type II</strong> — supraduodenal diverticulum</li><li><strong>Type III (choledochocele)</strong> — intra-duodenal cyst</li><li><strong>Type IV</strong> — multiple intra- and extrahepatic cysts</li><li><strong>Type V (Caroli disease)</strong> — intrahepatic only; may require liver resection or transplant</li></ul>" },
      { heading: "Why surgery is recommended for all symptomatic cysts", body: "<p>Untreated choledochal cysts cause recurrent abdominal pain, jaundice, pancreatitis, cholangitis, and (most importantly) carry a <strong>15–30% lifetime risk of cholangiocarcinoma</strong>. The risk increases with age. Even asymptomatic cysts in adults should be excised because internal drainage procedures (cyst-jejunostomy alone) do not eliminate cancer risk and are now considered obsolete.</p>" },
      { heading: "Surgical technique", body: "<p>The standard operation is <strong>complete cyst excision with Roux-en-Y hepaticojejunostomy</strong>. The cyst is dissected away from the portal vein and hepatic artery, and the entire dilated segment is removed up to healthy bile duct above and to the pancreatic duct junction below. A 50–60 cm Roux loop of jejunum is brought up and anastomosed to the healthy bile duct. The operation takes 4–6 hours. Laparoscopic and robotic approaches are available for selected paediatric and slim adult patients.</p>" },
      { heading: "Recovery and long-term follow-up", body: "<p>Hospital stay is typically 7–10 days. Patients resume normal diet within a week and return to work in 4–6 weeks. Long-term follow-up with liver function tests and ultrasound every 1–2 years is essential because a small residual cancer risk persists in any retained intrahepatic ducts. <a href='/contact/' title='Book consultation'>Book a consultation</a> to plan timing of surgery.</p>" },
    ],
    faq: [
      { q: "Why can't the cyst just be drained instead of removed?", a: "Cyst-jejunostomy (internal drainage without excision) was used historically but has been abandoned because it does not remove the abnormal epithelium that becomes cancerous. Complete excision is the only operation that eliminates the long-term cancer risk." },
      { q: "Are choledochal cysts only found in children?", a: "No — although classically a paediatric diagnosis, around 20% of choledochal cysts present in adulthood, often during workup for vague abdominal pain, pancreatitis, or jaundice. Adult cases carry a higher cancer risk and should be operated promptly." },
      { q: "Can the surgery be done laparoscopically?", a: "Yes, for selected slim patients with type I cysts and favourable anatomy. Open surgery is preferred for large cysts, type IV disease, or when malignancy is suspected. Dr. Arefin will recommend the safest approach after reviewing your imaging." },
    ],
    related: [
      { to: "/treatment/bile-duct-obstruction-surgery-dhaka/", label: "Bile Duct Obstruction Surgery", title: "Bile-duct reconstruction techniques" },
      { to: "/treatment/cholangiocarcinoma-surgery-dhaka/", label: "Cholangiocarcinoma Surgery", title: "Surgery for bile-duct cancer" },
      { to: "/treatment/biliary-tract-surgery/", label: "Biliary Tract Surgery", title: "Biliary tract surgery overview" },
      { to: "/treatment/cholangitis-surgery-dhaka/", label: "Cholangitis Surgery", title: "Acute cholangitis management" },
    ],
  },

  /* ───────────── Pancreatic cluster — hand-authored ───────────── */
  {
    slug: "/treatment/pancreatic-cancer-surgery-dhaka",
    kicker: "Pancreatic Surgery",
    title: "Pancreatic Cancer Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Pancreatic cancer surgery in Dhaka — distal pancreatectomy, total pancreatectomy, and Whipple procedure for pancreatic malignancies by Dr. Murshidul Arefin, fellowship-trained hepatobiliary surgeon.",
    h1: "Pancreatic Cancer Surgery Dhaka",
    intro: "<p><strong>Pancreatic cancer</strong> is one of the most aggressive abdominal malignancies, but surgery remains the only chance of long-term cure. <a href='/about/' title='Dr. Murshidul Arefin — pancreatic surgeon'>Dr. Murshidul Arefin</a> performs the full spectrum of pancreatic resections — Whipple procedure, distal pancreatectomy, and total pancreatectomy — at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Pancreatic cancer resection — Dr. Arefin's OT in Dhaka",
    sections: [
      { heading: "Tumour location guides the operation", body: "<ul><li><strong>Head of pancreas / periampullary</strong> — <a href='/treatment/whipple-procedure-dhaka/' title='Whipple procedure'>Whipple procedure (pancreaticoduodenectomy)</a></li><li><strong>Body and tail</strong> — <a href='/treatment/distal-pancreatectomy-dhaka/' title='Distal pancreatectomy'>distal pancreatectomy with splenectomy</a></li><li><strong>Diffuse / multifocal disease</strong> — total pancreatectomy (rare; results in lifelong diabetes and pancreatic-enzyme replacement)</li><li><strong>Locally advanced</strong> — neoadjuvant chemotherapy followed by re-staging and possible resection</li></ul>" },
      { heading: "Pre-operative workup", body: "<p>Workup includes triple-phase pancreatic-protocol CT, MRI/MRCP, CA 19-9, endoscopic ultrasound (EUS) with FNA biopsy, and (where indicated) staging laparoscopy to exclude peritoneal metastases. Resectability is classified as <strong>resectable, borderline resectable, locally advanced, or metastatic</strong> — based on tumour contact with the superior mesenteric artery, coeliac axis, portal vein, and SMV. Borderline cases benefit from neoadjuvant FOLFIRINOX before surgery.</p>" },
      { heading: "Surgical technique", body: "<p>Pancreatic surgery is technically demanding because the pancreas sits behind the stomach and is intimately related to the major mesenteric vessels. Dr. Arefin uses careful arterial-first dissection, en-bloc removal with adequate margins (R0), and standard regional lymphadenectomy. Where the tumour abuts the portal vein/SMV, segmental venous resection and reconstruction is performed. Operative time is typically 6–8 hours.</p>" },
      { heading: "Outcomes and adjuvant therapy", body: "<p>5-year survival after R0 resection is 20–25% for ductal adenocarcinoma and 50–70% for ampullary and well-differentiated neuroendocrine tumours. <strong>Adjuvant FOLFIRINOX or gemcitabine-capecitabine</strong> is the global standard after recovery (started within 8–12 weeks of surgery) and is coordinated with medical oncology. <a href='/contact/' title='Book consultation'>Book a consultation</a> for a personalised resectability assessment.</p>" },
    ],
    faq: [
      { q: "Is pancreatic cancer always inoperable?", a: "No — around 15–20% of pancreatic cancers are resectable at diagnosis, and another 10–15% become resectable after neoadjuvant chemotherapy. Early referral to a specialist HPB surgeon is critical because resectability assessment is highly nuanced." },
      { q: "How long is recovery after pancreatic cancer surgery?", a: "Hospital stay is typically 10–14 days. Most patients return to normal activities in 6–8 weeks. Adjuvant chemotherapy starts 8–12 weeks after surgery and continues for 6 months." },
      { q: "What happens if surgery is not possible?", a: "Locally advanced disease is treated with chemotherapy ± radiotherapy with palliative biliary stenting. Metastatic disease is treated with palliative chemotherapy. Even unresectable patients benefit from a coordinated MDT plan — Dr. Arefin can advise on the best pathway." },
    ],
    related: [
      { to: "/treatment/whipple-procedure-dhaka/", label: "Whipple Procedure", title: "Surgery for pancreatic head cancer" },
      { to: "/treatment/distal-pancreatectomy-dhaka/", label: "Distal Pancreatectomy", title: "Surgery for body/tail tumours" },
      { to: "/treatment/pancreatitis-surgery-dhaka/", label: "Pancreatitis Surgery", title: "Acute and chronic pancreatitis surgery" },
      { to: "/treatment/pancreatic-surgery/", label: "Pancreatic Surgery", title: "Pancreatic surgery overview" },
    ],
  },

  {
    slug: "/treatment/pancreatitis-surgery-dhaka",
    kicker: "Pancreatic Surgery",
    title: "Pancreatitis Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Pancreatitis surgery in Dhaka — necrosectomy, drainage, and Frey/Puestow procedures for acute and chronic pancreatitis by Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi.",
    h1: "Pancreatitis Surgery Dhaka",
    intro: "<p>Most patients with <strong>acute pancreatitis</strong> recover with conservative care — but a small subset develops infected pancreatic necrosis, walled-off collections, or chronic ductal obstruction that requires surgery. <a href='/about/' title='Dr. Murshidul Arefin — pancreatic surgeon'>Dr. Murshidul Arefin</a> performs minimally-invasive step-up necrosectomy, drainage procedures, and Frey/Puestow operations for chronic pancreatitis at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Pancreatic necrosectomy and Frey procedure — Dr. Arefin in Dhaka",
    sections: [
      { heading: "When acute pancreatitis needs surgery", body: "<p>Surgery is reserved for <strong>infected pancreatic necrosis</strong> (typically &gt;4 weeks after onset, when collections are walled-off) or sterile necrosis with persistent organ failure. Modern management follows a <strong>step-up approach</strong>: percutaneous drainage first, then minimally-invasive video-assisted retroperitoneal debridement (VARD), then open necrosectomy only if needed. This approach has halved mortality compared to early open surgery.</p>" },
      { heading: "Acute complications managed surgically", body: "<ul><li><strong>Infected walled-off necrosis</strong> — step-up drainage and necrosectomy</li><li><strong>Pseudocyst</strong> &gt;6 cm or symptomatic — endoscopic or surgical cystogastrostomy</li><li><strong>Disconnected pancreatic duct syndrome</strong> — distal pancreatectomy or internal drainage</li><li><strong>Haemorrhage from pseudoaneurysm</strong> — angiographic embolisation, with surgery as backup</li><li><strong>Bowel perforation or ischaemia</strong> — emergency laparotomy</li></ul>" },
      { heading: "Surgery for chronic pancreatitis", body: "<p>Chronic pancreatitis causes intractable pain, ductal obstruction, and progressive endocrine/exocrine failure. Surgery is offered when medical and endoscopic therapy fail. The choice depends on duct anatomy:</p><ul><li><strong>Frey procedure</strong> (head coring + lateral pancreaticojejunostomy) — for head-dominant disease with dilated duct</li><li><strong>Puestow (lateral pancreaticojejunostomy)</strong> — for diffusely dilated duct without inflammatory mass</li><li><strong>Beger / Berne procedure</strong> — duodenum-preserving head resection</li><li><strong>Distal pancreatectomy</strong> — for tail-predominant disease</li></ul>" },
      { heading: "Outcomes", body: "<p>Step-up necrosectomy reduces mortality from infected necrosis to 10–20% (versus 40–50% with early open surgery). For chronic pancreatitis, the Frey procedure provides durable pain relief in 80–85% of patients at 5 years while preserving pancreatic function. <a href='/contact/' title='Book consultation'>Book a consultation</a> if you have ongoing pancreatic pain or recurrent attacks.</p>" },
    ],
    faq: [
      { q: "Is surgery always needed for pancreatitis?", a: "No — around 80% of acute pancreatitis cases resolve with supportive care alone. Surgery is reserved for complications (infected necrosis, bleeding) or for chronic pancreatitis with intractable pain." },
      { q: "Can chronic pancreatitis pain be cured?", a: "Surgery (Frey, Puestow, or duodenum-preserving head resection) provides durable pain relief in 80–85% of well-selected patients at 5 years. It does not reverse the disease but stops the obstructive component driving pain." },
      { q: "Will I become diabetic after pancreatitis surgery?", a: "Drainage operations (Frey, Puestow) preserve almost all pancreatic tissue and rarely cause new diabetes. Resection operations (distal pancreatectomy, Beger) cause new-onset diabetes in 10–30% of patients depending on the volume removed." },
    ],
    related: [
      { to: "/treatment/pancreatic-cyst-surgery-dhaka/", label: "Pancreatic Cyst Surgery", title: "Cystogastrostomy and pseudocyst drainage" },
      { to: "/treatment/distal-pancreatectomy-dhaka/", label: "Distal Pancreatectomy", title: "Tail-predominant pancreatic surgery" },
      { to: "/treatment/whipple-procedure-dhaka/", label: "Whipple Procedure", title: "Pancreaticoduodenectomy" },
      { to: "/treatment/pancreatic-surgery/", label: "Pancreatic Surgery", title: "Pancreatic surgery overview" },
    ],
  },

  {
    slug: "/treatment/pancreatic-cyst-surgery-dhaka",
    kicker: "Pancreatic Surgery",
    title: "Pancreatic Cyst Surgery in Dhaka — Dr. Arefin",
    metaDesc: "Pancreatic cyst and pseudocyst surgery in Dhaka — cystogastrostomy, drainage, and resection for benign and premalignant pancreatic cysts by Dr. Murshidul Arefin.",
    h1: "Pancreatic Cyst Surgery Dhaka",
    intro: "<p><strong>Pancreatic cysts</strong> range from harmless inflammatory pseudocysts to premalignant mucinous lesions that can progress to cancer. Accurate classification is critical — overtreatment exposes patients to unnecessary surgery, while undertreatment risks missing curable cancer. <a href='/about/' title='Dr. Murshidul Arefin'>Dr. Murshidul Arefin</a> evaluates and operates on pancreatic cysts at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a>.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Pancreatic cystogastrostomy and IPMN resection — Dr. Arefin in Dhaka",
    sections: [
      { heading: "Cyst types and malignant potential", body: "<ul><li><strong>Pseudocyst</strong> — inflammatory, post-pancreatitis; no cancer risk; treat only if symptomatic</li><li><strong>Serous cystadenoma (SCA)</strong> — benign; observe unless very large or symptomatic</li><li><strong>Mucinous cystic neoplasm (MCN)</strong> — premalignant (in women, body/tail); resect</li><li><strong>Intraductal papillary mucinous neoplasm (IPMN)</strong> — premalignant; main-duct and mixed-type require resection, branch-duct surveilled or resected based on worrisome features</li><li><strong>Solid pseudopapillary neoplasm (SPN)</strong> — low-grade malignant; resect</li></ul>" },
      { heading: "Workup", body: "<p>MRI/MRCP is the gold-standard initial test. <strong>Endoscopic ultrasound with fine-needle aspiration</strong> samples cyst fluid for CEA, amylase, glucose, and cytology. High CEA (&gt;192) suggests mucinous, low glucose strongly favours mucinous, and amylase identifies pseudocysts. International (Fukuoka/Kyoto) guidelines guide resect-vs-surveil decisions for IPMNs based on size, mural nodules, main-duct dilatation, and symptoms.</p>" },
      { heading: "Surgical procedures", body: "<ul><li><strong>Symptomatic pseudocyst</strong> — endoscopic or surgical <strong>cystogastrostomy</strong> (internal drainage into stomach), or distal pancreatectomy if disconnected</li><li><strong>Body/tail mucinous cyst or IPMN</strong> — <a href='/treatment/distal-pancreatectomy-dhaka/' title='Distal pancreatectomy'>distal pancreatectomy</a> (with or without splenic preservation)</li><li><strong>Head IPMN or mucinous lesion</strong> — <a href='/treatment/whipple-procedure-dhaka/' title='Whipple procedure'>Whipple procedure</a></li><li><strong>Diffuse main-duct IPMN</strong> — total pancreatectomy (rare)</li></ul>" },
      { heading: "Surveillance for low-risk cysts", body: "<p>Branch-duct IPMNs without worrisome features and small SCAs can be safely surveilled with annual MRI. Dr. Arefin reviews surveillance imaging personally and operates only when malignant transformation features develop. <a href='/contact/' title='Book consultation'>Book a consultation</a> with your imaging for a tailored plan.</p>" },
    ],
    faq: [
      { q: "Is every pancreatic cyst dangerous?", a: "No — many pancreatic cysts (pseudocysts, serous cystadenomas, small branch-duct IPMNs) are benign or have very low malignant potential and can be safely observed. Accurate classification is the most important step." },
      { q: "Can pancreatic cysts be drained without surgery?", a: "Pseudocysts can often be drained endoscopically (EUS-guided cystogastrostomy). Premalignant mucinous cysts (MCN, IPMN with worrisome features) must be surgically resected — drainage alone leaves the cancer-prone epithelium in place." },
      { q: "How often is surveillance imaging needed?", a: "For low-risk branch-duct IPMNs and small SCAs, annual MRI is typical. Frequency increases if the cyst grows, develops mural nodules, or causes symptoms — at which point surgery is usually offered." },
    ],
    related: [
      { to: "/treatment/distal-pancreatectomy-dhaka/", label: "Distal Pancreatectomy", title: "Body/tail pancreatic resection" },
      { to: "/treatment/whipple-procedure-dhaka/", label: "Whipple Procedure", title: "Surgery for head-of-pancreas lesions" },
      { to: "/treatment/pancreatitis-surgery-dhaka/", label: "Pancreatitis Surgery", title: "Pseudocyst and pancreatitis surgery" },
      { to: "/treatment/pancreatic-surgery/", label: "Pancreatic Surgery", title: "Pancreatic surgery overview" },
    ],
  },

  {
    slug: "/treatment/distal-pancreatectomy-dhaka",
    kicker: "Pancreatic Surgery",
    title: "Distal Pancreatectomy in Dhaka — Dr. Arefin",
    metaDesc: "Distal pancreatectomy in Dhaka — surgical removal of the pancreatic tail and body for tumors and cysts by Dr. Murshidul Arefin, fellowship-trained hepatobiliary surgeon.",
    h1: "Distal Pancreatectomy Dhaka",
    intro: "<p><strong>Distal pancreatectomy</strong> is removal of the body and/or tail of the pancreas, often with the spleen, for tumours and premalignant cysts in the left pancreas. <a href='/about/' title='Dr. Murshidul Arefin — pancreatic surgeon'>Dr. Murshidul Arefin</a> performs both open and laparoscopic distal pancreatectomy at <a href='/popular-medical-college-hospital/' title='Popular Medical College Hospital'>Popular Medical College Hospital, Dhanmondi</a> — including spleen-preserving variants for benign disease.</p>",
    heroImage: IMG.bileDuct,
    heroAlt: "Laparoscopic distal pancreatectomy — Dr. Arefin in Dhaka",
    sections: [
      { heading: "When distal pancreatectomy is indicated", body: "<ul><li><strong>Body/tail pancreatic ductal adenocarcinoma</strong> — with regional lymphadenectomy and splenectomy (RAMPS technique for posterior tumours)</li><li><strong>Mucinous cystic neoplasm (MCN)</strong> and tail <a href='/treatment/pancreatic-cyst-surgery-dhaka/' title='Pancreatic cysts'>IPMN</a></li><li><strong>Solid pseudopapillary neoplasm</strong> and pancreatic neuroendocrine tumours (PNETs)</li><li><strong>Tail-predominant chronic pancreatitis</strong></li><li><strong>Disconnected pancreatic duct syndrome</strong> following severe pancreatitis</li></ul>" },
      { heading: "Open versus laparoscopic approach", body: "<p>Laparoscopic distal pancreatectomy is the preferred approach for benign and small low-grade malignant tumours — it offers shorter hospital stay (5–7 days versus 8–10), less wound pain, and faster return to work. Open surgery is preferred for large tumours, cancers requiring extended resection, or after multiple previous abdominal operations. Dr. Arefin selects the approach individually based on tumour biology and patient factors.</p>" },
      { heading: "Spleen preservation", body: "<p>For benign and premalignant disease, the spleen is preserved when technically safe — either with vessel preservation (Kimura technique) or with division of splenic vessels relying on short gastric collaterals (Warshaw technique). For ductal adenocarcinoma, the spleen and splenic vessels are removed en bloc with regional lymph nodes for oncological completeness. Patients undergoing splenectomy receive vaccination against encapsulated organisms before discharge.</p>" },
      { heading: "Recovery and complications", body: "<p>Hospital stay is 5–10 days. The main specific complication is <strong>pancreatic fistula</strong> (clinically relevant grade B/C in 15–20% of cases) — managed with continued drain placement and, rarely, re-intervention. Most fistulas close spontaneously within 4–6 weeks. New-onset diabetes occurs in 10–25% depending on resection volume. <a href='/contact/' title='Book consultation'>Book a consultation</a> to discuss your imaging.</p>" },
    ],
    faq: [
      { q: "Will I become diabetic after distal pancreatectomy?", a: "About 10–25% of patients develop new diabetes, depending on how much pancreas is removed and pre-existing glucose tolerance. Patients with normal pre-operative glucose and small resections rarely become diabetic." },
      { q: "Why is the spleen sometimes removed?", a: "The splenic artery and vein run along the upper border of the pancreas. For cancer, en-bloc splenectomy is part of standard oncological resection. For benign disease, Dr. Arefin attempts spleen preservation whenever it is technically safe." },
      { q: "Is laparoscopic surgery safe for pancreatic cancer?", a: "Yes — for selected smaller, well-staged tumours, laparoscopic distal pancreatectomy gives oncological outcomes equivalent to open surgery with faster recovery. Larger or locally advanced tumours are still better managed open." },
    ],
    related: [
      { to: "/treatment/pancreatic-cancer-surgery-dhaka/", label: "Pancreatic Cancer Surgery", title: "Pancreatic cancer surgery overview" },
      { to: "/treatment/pancreatic-cyst-surgery-dhaka/", label: "Pancreatic Cyst Surgery", title: "Cyst and IPMN surgery" },
      { to: "/treatment/whipple-procedure-dhaka/", label: "Whipple Procedure", title: "Head-of-pancreas surgery" },
      { to: "/treatment/pancreatic-surgery/", label: "Pancreatic Surgery", title: "Pancreatic surgery overview" },
    ],
  },

  ...([
    ["/liver-transplant-triumph", "Liver Transplant Triumph", "Patient recovery story after liver transplant under Dr. Murshidul Arefin's hepatobiliary surgical care in Dhaka."],
    ["/biliary-surgery-breakthrough", "Biliary Surgery Breakthrough", "Minimally invasive bile duct procedure success story by Dr. Murshidul Arefin in Dhaka."],
    ["/end-stage-liver-disease", "End-Stage Liver Disease", "End-stage liver disease — diagnosis, evaluation, and surgical management options in Dhaka."],
    ["/expert-surgical-care", "Expert Surgical Care", "Expert hepatobiliary surgical care under Dr. Murshidul Arefin's team in Dhaka."],
    ["/healthy-active-life-after-surgery", "Healthy Active Life After Surgery", "Healthy, active life after liver and hepatobiliary surgery — patient recovery outcomes."],
    ["/precision-hepatobiliary-surgery", "Precision Hepatobiliary Surgery", "Precision hepatobiliary surgery — meticulous technique for liver and biliary procedures."],
    ["/compassionate-follow-up-care", "Compassionate Follow-up Care", "Compassionate post-operative follow-up care for hepatobiliary surgery patients in Dhaka."],
    ["/chronic-bile-duct-obstruction", "Chronic Bile Duct Obstruction", "Chronic bile duct obstruction — causes, diagnosis, and surgical treatment in Dhaka."],
    ["/complex-minimally-invasive-procedure", "Complex Minimally Invasive Procedure", "Complex minimally invasive bile duct surgery — laparoscopic hepatobiliary procedures."],
    ["/restored-liver-function", "Restored Liver Function", "Restored liver function after biliary surgery — measurable patient recovery outcomes."],
    ["/new-lease-on-life", "New Lease on Life", "New lease on life after hepatobiliary surgery — patient transformation stories."],
    ["/hepatobiliary-pancreatic-surgery", "Hepatobiliary & Pancreatic Surgery", "Hepatobiliary and pancreatic surgery — liver, gallbladder, bile duct, and pancreas surgical care in Dhaka."],
    ["/hepatobiliary-surgery", "Hepatobiliary Surgery", "Hepatobiliary surgery — liver, gallbladder, and bile duct surgical care by Dr. Murshidul Arefin in Dhaka."],
    ["/critical-liver-surgery", "Critical Liver Surgery", "Critical liver and hepatobiliary surgeries by Dr. Murshidul Arefin — complex hepatic procedures in Dhaka."],
    ["/patients-who-need-hope", "Patients Who Need Hope", "Hepatobiliary care for patients who need hope the most — Dr. Murshidul Arefin's mission in Dhaka."],
    ["/financial-assistance", "Surgery Financial Assistance", "Patient financial assistance programme for liver, gallbladder, and hepatobiliary surgeries — Dr. Arefin's clinic in Dhaka."],
    ["/laparoscopic-liver-surgery", "Laparoscopic Liver Surgery", "Laparoscopic liver surgery — keyhole liver resection by Dr. Murshidul Arefin in Dhaka."],
    ["/second-opinion", "Surgical Second Opinion", "Independent surgical second opinion for liver, gallbladder, and hepatobiliary cases by Dr. Murshidul Arefin in Dhaka."],
    ["/mentorship/hpb-fellowship-training-dhaka", "HPB Fellowship Training Dhaka", "Hepatobiliary and pancreatic (HPB) fellowship-style training in Dhaka — structured surgical training tracks, operative exposure, and academic mentorship under Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi."],
    ["/mentorship/surgical-mentorship-bangladesh", "Surgical Mentorship Bangladesh", "Surgical mentorship in Bangladesh — Dr. Murshidul Arefin's structured mentorship programme for general and hepatobiliary surgeons, covering case planning, operative judgement, and long-term career development."],
    ["/mentorship/young-surgeon-training-program", "Young Surgeon Training Program", "Young surgeon training program in Dhaka — preparing the next generation of hepatobiliary surgeons through structured education, live OT exposure, and career mentorship under Dr. Murshidul Arefin."],
    ["/mentorship/operative-skills-workshop", "Operative Skills Workshop", "Operative skills workshop in Dhaka — hands-on practical training in advanced laparoscopic and keyhole surgeries under Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi."],
    ["/treatment/whipple-procedure-dhaka", "Whipple Procedure Dhaka", "Whipple procedure (pancreaticoduodenectomy) in Dhaka — advanced surgery for pancreatic cancer and periampullary tumors by Dr. Murshidul Arefin, fellowship-trained hepatobiliary surgeon."],
    ["/treatment/biliary-obstruction-cancer-dhaka", "Biliary Obstruction & Cancer Surgery Dhaka", "Biliary obstruction and bile duct cancer surgery in Dhaka — microsurgical treatment for blocked bile ducts and cholangiocarcinoma by Dr. Murshidul Arefin at Popular Medical College Hospital, Dhanmondi."],
    
  ] as const).map(([slug, label, desc]) => {
    const isLiver = slug.includes("liver");
    const isGallbladder = slug.includes("gallbladder") || slug.includes("cholecystectomy") || slug.includes("gallstone");
    const isBiliary = slug.includes("biliary") || slug.includes("bile-duct") || slug.includes("cholangio") || slug.includes("cholangitis") || slug.includes("choledochal");
    const isPancreatic = slug.includes("pancreatic") || slug.includes("whipple") || slug.includes("pancreatitis") || slug.includes("distal-pancreatectomy");
    const isMentorship = slug.includes("mentorship");
    const isTreatment = slug.startsWith("/treatment/");

    const kicker = isTreatment
      ? isLiver ? "Liver Surgery" : isGallbladder ? "Gallbladder Surgery" : isBiliary ? "Biliary Surgery" : isPancreatic ? "Pancreatic Surgery" : "Treatment"
      : isMentorship ? "Mentorship" : "Patient Story";

    const heroImage = isLiver ? IMG.liverSurgeon
      : isGallbladder ? IMG.gallstones
      : isBiliary ? IMG.bileDuct
      : isPancreatic ? IMG.bileDuct
      : isMentorship ? IMG.popular
      : IMG.liverSurgeon;

    const intro = isTreatment
      ? `<p><strong>${label}</strong> is a specialised procedure performed by Dr. Murshidul Arefin, a fellowship-trained hepatobiliary surgeon at <a href="/popular-medical-college-hospital/" title="Popular Medical College Hospital">Popular Medical College Hospital, Dhanmondi</a>. ${desc}</p>`
      : `<p>${desc}</p>`;

    const sections = isTreatment
      ? [
          {
            heading: `What ${label.toLowerCase()} involves`,
            body: `<p>${desc} This procedure is tailored to each patient's anatomy and disease stage, ensuring the best possible outcome with minimal complications.</p><p>Dr. Arefin evaluates every case with advanced imaging including CT, MRI, and ultrasound to plan the safest surgical approach.</p>`,
          },
          {
            heading: "When this procedure is needed",
            body: isLiver
              ? `<ul><li>Benign and malignant <strong>liver tumours</strong></li><li><strong>Liver cysts</strong> and polycystic disease</li><li>Traumatic liver injuries requiring surgical repair</li><li>Metastatic liver disease from colorectal cancer</li></ul>`
              : isGallbladder
              ? `<ul><li><strong>Gallstones</strong> causing pain, infection, or blockage</li><li><strong>Acute and chronic cholecystitis</strong></li><li><strong>Gallbladder polyps</strong> and cancer</li><li><strong>Empyema</strong> and gangrenous gallbladder</li></ul>`
              : isBiliary
              ? `<ul><li><strong>Bile duct stones</strong> and strictures</li><li><strong>Bile duct cancer</strong> including Klatskin tumours</li><li><strong>Cholangitis</strong> and recurrent biliary infections</li><li><strong>Choledochal cysts</strong> and congenital anomalies</li></ul>`
              : isPancreatic
              ? `<ul><li><strong>Pancreatic cancer</strong> and periampullary tumours</li><li><strong>Chronic pancreatitis</strong> with duct obstruction</li><li><strong>Pancreatic cysts</strong> and pseudocysts</li><li><strong>Necrotizing pancreatitis</strong> requiring debridement</li></ul>`
              : `<ul><li>Conditions requiring specialist hepatobiliary surgery</li><li>Complex cases referred from other centres</li><li>Second opinions for surgical decisions</li></ul>`,
          },
          {
            heading: "Surgical approach and techniques",
            body: `<p>Dr. Arefin employs both <a href="/treatment/laparoscopic-surgery/" title="Laparoscopic surgery in Dhaka">minimally invasive (laparoscopic)</a> and open surgical techniques depending on the complexity of the case and patient factors.</p><p>Keyhole surgery offers faster recovery, less pain, and smaller scars when appropriate. For advanced cases, open surgery provides the exposure needed for safe completion.</p>`,
          },
          {
            heading: "Recovery and follow-up",
            body: `<p>Recovery times vary based on the procedure and patient health. Most patients stay in hospital for 2–7 days and return to normal activities within 2–6 weeks.</p><p>Dr. Arefin provides structured follow-up with regular assessments, imaging surveillance when needed, and clear guidance on diet, activity, and medication. <a href="/contact/" title="Contact Dr. Arefin">Contact his chamber</a> to discuss your personalised recovery plan.</p>`,
          },
        ]
      : [
          { heading: "Overview", body: `<p>${desc}</p>` },
        ];

    const faq = isTreatment
      ? [
          {
            q: `Is ${label.toLowerCase()} safe?`,
            a: `When performed by an experienced hepatobiliary surgeon like Dr. Arefin in a well-equipped tertiary hospital, ${label.toLowerCase()} has excellent safety outcomes. Risks are discussed individually during consultation.`,
          },
          {
            q: "How long is recovery after this procedure?",
            a: "Most patients stay 2–7 days in hospital and resume normal activities within 2–6 weeks. Laparoscopic procedures generally allow faster recovery than open surgery.",
          },
          {
            q: "Where does Dr. Arefin perform this surgery?",
            a: "Dr. Arefin performs these procedures at Popular Medical College Hospital, Dhanmondi, Dhaka — a tertiary centre with modern operating theatres, ICU support, and experienced anaesthesia and nursing teams.",
          },
        ]
      : [{ q: "Where can I learn more?", a: "Contact Dr. Arefin's chamber at Popular Medical College Hospital, Dhanmondi." }];

    const related = isTreatment
      ? isLiver
        ? [
            { to: "/treatment/liver-surgery/", label: "Advanced Liver Surgery", title: "Comprehensive liver surgery by Dr. Arefin" },
            { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
            { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Minimally invasive surgery in Dhaka" },
            { to: "/contact/", label: "Book Consultation", title: "Contact Dr. Arefin's clinic" },
          ]
        : isGallbladder
        ? [
            { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
            { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
            { to: "/treatment/laparoscopic-surgery/", label: "Laparoscopic Surgery", title: "Minimally invasive surgery in Dhaka" },
            { to: "/contact/", label: "Book Consultation", title: "Contact Dr. Arefin's clinic" },
          ]
        : isBiliary
        ? [
            { to: "/treatment/biliary-tract-surgery/", label: "Biliary Tract Surgery", title: "Comprehensive biliary surgery by Dr. Arefin" },
            { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
            { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Advanced liver surgery in Dhaka" },
            { to: "/contact/", label: "Book Consultation", title: "Contact Dr. Arefin's clinic" },
          ]
        : isPancreatic
        ? [
            { to: "/treatment/pancreatic-surgery/", label: "Pancreatic Surgery", title: "Comprehensive pancreatic surgery by Dr. Arefin" },
            { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
            { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Advanced liver surgery in Dhaka" },
            { to: "/contact/", label: "Book Consultation", title: "Contact Dr. Arefin's clinic" },
          ]
        : [
            { to: "/treatment/hepatobiliary-surgery/", label: "Hepatobiliary Surgery", title: "Hepatobiliary surgery overview" },
            { to: "/contact/", label: "Contact", title: "Book an appointment" },
          ]
      : [
          { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
          { to: "/contact/", label: "Contact", title: "Book an appointment" },
        ];

    return {
      slug,
      kicker,
      title: `${label} — Dr. Murshidul Arefin`,
      metaDesc: desc,
      h1: label,
      intro,
      heroImage,
      heroAlt: `${label} — Dr. Murshidul Arefin's hepatobiliary practice in Dhaka`,
      sections,
      faq,
      related,
    };
  }),
  /* ───────── Legal / Policy pages (footer links) ───────── */
  ...([
    [
      "/privacy-statement-eu",
      "Privacy Statement (EU)",
      "Privacy Policy",
      "How Dr. Murshidul Arefin's clinic collects, uses, and protects personal and medical information of patients and website visitors under EU GDPR and Bangladesh privacy law.",
    ],
    [
      "/cookie-policy-eu",
      "Cookie Policy (EU)",
      "Cookie Policy",
      "Information about the cookies and tracking technologies used by drarefin.com, your choices, and how to manage them under the EU ePrivacy Directive and GDPR.",
    ],
    [
      "/disclaimer",
      "Medical Disclaimer",
      "Disclaimer",
      "Medical and editorial disclaimer for drarefin.com — content published by Dr. Murshidul Arefin is for informational purposes only and does not replace personalised medical consultation.",
    ],
  ] as const).map(([slug, title, h1, desc]) => ({
    slug,
    kicker: "Legal",
    title: `${title} — Dr. Murshidul Arefin`,
    metaDesc: desc,
    h1,
    intro: `<p>${desc}</p>`,
    heroImage: IMG.liverSurgeon,
    heroAlt: `${title} — Dr. Murshidul Arefin's hepatobiliary practice`,
    sections: [
      {
        heading: "Overview",
        body: `<p>${desc}</p><p>For specific questions, please contact Dr. Arefin's chamber at Popular Medical College Hospital, Dhanmondi, Dhaka.</p>`,
      },
    ],
    faq: [
      {
        q: "Who do I contact about this policy?",
        a: "Email <strong>info@drarefin.com</strong> or call <strong>+880 1311 487 592</strong> to reach Dr. Arefin's clinic team.",
      },
    ],
    related: [
      { to: "/contact/", label: "Contact", title: "Contact Dr. Arefin's clinic" },
      { to: "/dr-murshidul-arefin/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
    ],
  })),

  /* ───────────── CREDENTIAL TRUST PAGES — liverr-focused ───────────── */
  /* These are linked from every satellite hero's trust-chip strip. They give
     each chip a real SEO landing page and concentrate gallbladder keyword
     authority on three high-intent angles: credentials, volume, experience. */
  {
    slug: "/credentials/fcps-ms-hepatobiliary-liver-surgeon-dhaka",
    kicker: "Verified Credentials",
    title: "FCPS · MS Hepatobiliary Liver Surgeon, Dhaka",
    metaDesc:
      "Dr. Murshidul Arefin holds FCPS & MS in Hepatobiliary Surgery — a board-certified liver surgeon in Dhanmondi, Dhaka. Credentials verifiable in clinic.",
    h1: "FCPS · MS Hepatobiliary — Verified Liver Surgeon in Dhaka",
    intro: `<p><strong>Dr. Murshidul Arefin</strong> is an <strong>FCPS-certified, MS (Hepatobiliary Surgery) trained liver surgeon</strong> practising in <strong>Dhanmondi, Dhaka</strong>. Every credential — <a href="/about/" title="About Dr. Arefin">FCPS, MS, fellowship training</a> — is verifiable in clinic before booking surgery.</p>`,
    heroImage: IMG.liverSurgeon,
    heroAlt:
      "Dr. Murshidul Arefin — FCPS & MS Hepatobiliary certified liver surgeon, Dhaka",
    sections: [
      {
        heading: "What FCPS and MS Hepatobiliary actually mean",
        body: `<p><strong>FCPS (Surgery)</strong> from the Bangladesh College of Physicians & Surgeons is the country's highest surgical board certification. <strong>MS in Hepatobiliary Surgery</strong> from <strong>BSMMU</strong> is a dedicated postgraduate sub-specialty covering liver, bile-duct, and pancreatic disease. Together they certify that your <a href="/treatment/liver-surgery/" title="Liver surgery overview">liver surgery</a> — most commonly a <a href="/treatment/minimally-invasive-liver-surgery-dhaka/" title="Minimally invasive liver surgery in Dhaka">minimally invasive liver resection</a> — is performed by a sub-specialist, not a general surgeon.</p>`,
      },
      {
        heading: "Why credentials matter for liver surgery",
        body: `<p>Most liver operations are complex; however, <strong>complication rates fall sharply</strong> when the operating surgeon has hepatobiliary sub-specialty training. Therefore, choosing an <strong>FCPS-MS hepatobiliary surgeon</strong> reduces the risk of the complications that turn a planned resection into a prolonged recovery. Moreover, complex cases — liver tumours, cysts, and bile-duct disease — are handled in the same chamber rather than referred elsewhere.</p>`,
      },
      {
        heading: "Verification & second-opinion policy",
        body: `<p>Original FCPS and MS certificates are available in chamber on request. Furthermore, an independent <a href="/second-opinion/" title="Second-opinion review">second-opinion review</a> on outside imaging or reports is welcomed before any liver surgery is booked. Consequently, you make the decision with full transparency on credentials, technique, and cost.</p>`,
      },
    ],
    faq: [
      {
        q: "Is Dr. Arefin FCPS-certified for liver surgery?",
        a: "Yes — Dr. Arefin holds <strong>FCPS (Surgery)</strong> and <strong>MS in Hepatobiliary Surgery (BSMMU)</strong>. Both certificates are verifiable in clinic before booking liver surgery.",
      },
      {
        q: "Does MS Hepatobiliary cover liver resection?",
        a: "Yes. MS Hepatobiliary explicitly covers liver, bile-duct, and pancreatic surgery — including liver resection for tumours and cysts.",
      },
      {
        q: "How do I verify a Dhaka liver surgeon's credentials?",
        a: "Ask for FCPS and MS certificates. Reputable hepatobiliary specialists — including Dr. Arefin — share these on request and welcome a second-opinion review.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery in Dhaka — Dr. Arefin" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/about/dr-arefin-liver-specialist/", label: "About Dr. Arefin — Liver Specialist", title: "About Dr. Murshidul Arefin, liver specialist" },
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
    ],
  },
  /* ───────────── About — Liver Specialist ───────────── */
  {
    slug: "/about/dr-arefin-liver-specialist",
    kicker: "About the Surgeon",
    title: "About Dr. Murshidul Arefin — Liver Specialist, Dhaka",
    metaDesc:
      "Patient guide to choosing a liver surgeon in Dhaka. Common questions answered — then meet Dr. Murshidul Arefin, focused hepatobiliary and liver specialist.",
    h1: "About Dr. Murshidul Arefin — Liver Specialist in Dhaka",
    intro: `<p>Choosing a <strong>liver surgeon in Dhaka</strong> is a high-stakes decision. This page answers the questions patients ask most about <a href="/treatment/liver-surgery/" title="Liver surgery in Dhaka">liver surgery</a>, liver tumours, and recovery — and then introduces <a href="/about/" title="About Dr. Murshidul Arefin">Dr. Murshidul Arefin</a>, a focused hepatobiliary and liver specialist.</p>`,
    heroImage: IMG.liverSurgeon,
    heroAlt:
      "Dr. Murshidul Arefin — liver specialist surgeon in Dhaka, Bangladesh",
    sections: [
      {
        heading: "What does a liver specialist actually do?",
        body: `<p>A <strong>liver specialist</strong> is a hepatobiliary surgeon who focuses on the liver and bile ducts — not a general surgeon who occasionally operates on the liver. Consequently, decisions around <a href="/treatment/liver-tumor-cancer-surgery-dhaka/" title="Liver tumour surgery in Dhaka">liver tumour resection</a>, liver cysts, and <a href="/treatment/liver-transplant-coordination/" title="Liver transplant coordination">liver transplant coordination</a> are made by a surgeon who sees these cases every week.</p>`,
      },
      {
        heading: "When should you see a liver surgeon?",
        body: `<p>See a surgeon if you have <strong>recurrent right-upper-abdominal pain</strong>, jaundice, unexplained weight loss, an abnormal liver function test, or imaging showing a liver tumour, cyst or abscess. Moreover, urgent review is needed if pain is severe, persistent, or paired with fever — these can indicate an acute liver condition.</p>`,
      },
      {
        heading: "What questions should you ask before surgery?",
        body: `<p>Ask any surgeon: <strong>how many liver operations do you perform, and what is your experience with my condition?</strong> Ask about the planned operation, the expected hospital stay, and the follow-up. Furthermore, ask for a <a href="/second-opinion/" title="Second-opinion review on liver surgery">second-opinion review</a> if outside reports leave you unsure.</p>`,
      },
      {
        heading: "Meet Dr. Murshidul Arefin",
        body: `<p>Once those questions are answered, the choice becomes simple. <strong>Dr. Murshidul Arefin</strong> is a <a href="/about/" title="Profile of Dr. Murshidul Arefin">hepatobiliary and liver surgeon</a> consulting at <a href="/popular-medical-college-hospital/" title="Popular Medical College Hospital, Dhanmondi">Popular Medical College Hospital, Dhanmondi</a>. His practice is focused on the liver and the hepatobiliary system, with <a href="/credentials/fcps-ms-hepatobiliary-liver-surgeon-dhaka/" title="FCPS · MS Hepatobiliary liver surgeon credentials">FCPS and MS (Hepatobiliary Surgery)</a> training behind it.</p>`,
      },
    ],
    faq: [
      {
        q: "Is liver surgery a major surgery?",
        a: "Liver resection is a <strong>major operation</strong> that needs careful planning around imaging and liver function. Minimally invasive techniques, where suitable, reduce pain and hospital stay — your surgeon will explain which approach fits your case.",
      },
      {
        q: "Can you live a normal life after liver surgery?",
        a: "Yes. The liver regenerates, and most patients return to normal activity within weeks. Follow-up imaging and blood tests check that the remaining liver has recovered.",
      },
      {
        q: "How do I know if I need liver surgery?",
        a: "Liver tumours, cysts, abscesses and other liver conditions are assessed with imaging and liver function tests. A surgical review confirms whether surgery, drainage, or surveillance is the right step.",
      },
      {
        q: "Why see Dr. Arefin specifically?",
        a: "Because the liver is the <strong>core of his weekly caseload</strong> — not an occasional operation. The same surgeon you meet in chamber performs your operation in theatre.",
      },
    ],
    related: [
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery in Dhaka" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/credentials/fcps-ms-hepatobiliary-liver-surgeon-dhaka/", label: "FCPS · MS Credentials", title: "FCPS & MS Hepatobiliary credentials" },
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
      { to: "/contact/", label: "Book Consultation", title: "Book a consultation with Dr. Arefin" },
    ],
  },
  /* ───────────── About — Patient-Centered Care pillar ───────────── */
  {
    slug: "/about/patient-centered-care",
    kicker: "Care Philosophy",
    title: "Patient-Centered Liver Care — Dr. Arefin, Dhaka",
    metaDesc:
      "What patient-centered care means for liver surgery in Dhaka — clear consent, same-surgeon continuity, and honest second opinions from Dr. Arefin.",
    h1: "Patient-Centered Liver Care in Dhaka",
    intro: `<p>For patients facing <a href="/treatment/liver-tumor-cancer-surgery-dhaka/" title="Liver tumour surgery in Dhaka">liver surgery</a>, the surgeon's communication style matters as much as their technique. This page explains what <strong>patient-centered care</strong> actually looks like at <a href="/about/" title="About Dr. Murshidul Arefin">Dr. Murshidul Arefin's</a> Dhanmondi chamber — and how to recognise it in any hepatobiliary practice.</p>`,
    heroImage: IMG.bestSurgeon,
    heroAlt:
      "Patient-centered liver consultation with Dr. Murshidul Arefin, Dhaka",
    sections: [
      {
        heading: "What patients should expect from a liver consultation",
        body: `<p>A patient-centered consultation begins with <strong>listening</strong>: symptom history, prior liver episodes, and the patient's own concerns. Consequently, imaging is reviewed together on screen — not summarised after the fact. Moreover, every recommendation is paired with its alternative, so the patient understands why <a href="/treatment/minimally-invasive-liver-surgery-dhaka/" title="Minimally invasive liver surgery in Dhaka">minimally invasive liver surgery</a> is being suggested over watchful waiting.</p>`,
      },
      {
        heading: "Same-surgeon continuity",
        body: `<p>The surgeon you meet in chamber should be the surgeon who operates. At Dr. Arefin's practice, <strong>there is no handover to a junior team</strong> for the liver surgery itself — and follow-up reviews are with the same surgeon, not a rotating resident. Therefore, decisions about pain, discharge, and recovery are made by someone who already knows the case.</p>`,
      },
      {
        heading: "Honest second opinions",
        body: `<p>Patient-centered means <a href="/second-opinion/" title="Second-opinion review on liver surgery">second opinions</a> are welcomed, not discouraged. Furthermore, when outside reports recommend surgery that may not be needed, the honest answer is given — even if it means no operation is booked. <a href="/about/" title="About Dr. Murshidul Arefin">Dr. Murshidul Arefin</a> has spent his career focused on the liver and bile duct, and the confidence to say "wait" comes from that depth.</p>`,
      },
    ],
    faq: [
      {
        q: "How long is a first liver consultation?",
        a: "Plan for <strong>30–45 minutes</strong> for a first consultation — enough time to review imaging together, discuss alternatives, and answer questions without rushing.",
      },
      {
        q: "Will the same surgeon perform my operation?",
        a: "Yes. Dr. Arefin personally performs the liver surgery — there is no handover to a junior team for the operation itself.",
      },
      {
        q: "Is a second opinion welcomed?",
        a: "Yes — outside imaging and reports can be reviewed before any surgical decision is made.",
      },
    ],
    related: [
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
      { to: "/about/proven-surgical-excellence/", label: "Surgical Excellence", title: "Proven surgical excellence in liver & hepatobiliary surgery" },
      { to: "/treatment/liver-tumor-cancer-surgery-dhaka/", label: "Liver Tumour & Cancer Surgery", title: "Liver tumour and cancer surgery in Dhaka" },
      { to: "/second-opinion/", label: "Second Opinion", title: "Second-opinion review" },
      { to: "/contact/", label: "Book Consultation", title: "Book a consultation with Dr. Arefin" },
    ],
  },
  /* ───────────── About — Proven Surgical Excellence pillar ───────────── */
  {
    slug: "/about/proven-surgical-excellence",
    kicker: "Surgical Excellence",
    title: "Proven Surgical Excellence — Liver Surgeon, Dhaka",
    metaDesc:
      "What proven surgical excellence means in liver & hepatobiliary care — technique, planning, and outcomes from Dr. Murshidul Arefin's Dhaka practice.",
    h1: "Proven Surgical Excellence in Liver & Hepatobiliary Care",
    intro: `<p>"Surgical excellence" is a claim every surgeon makes. This page sets out the <strong>measurable signals</strong> a gallbladder patient should look for — and how <a href="/about/" title="About Dr. Murshidul Arefin">Dr. Murshidul Arefin's</a> practice meets each of them after a career focused on hepatobiliary and liver surgery.</p>`,
    heroImage: IMG.hepatobiliary,
    heroAlt:
      "Dr. Murshidul Arefin's surgical team performing hepatobiliary surgery in Dhaka",
    sections: [
      {
        heading: "Signal 1 — Sub-specialty focus",
        body: `<p>Excellence in <a href="/treatment/liver-tumor-cancer-surgery-dhaka/" title="Liver tumour surgery in Dhaka">liver surgery</a> tracks with <strong>focused sub-specialty practice</strong>. A surgeon who plans and performs liver resections every week builds pattern recognition that a general surgeon doing occasional cases cannot match. Consequently, ask any surgeon how often they perform liver surgery — the answer is the most honest indicator available.</p>`,
      },
      {
        heading: "Signal 2 — Technique discipline",
        body: `<p>Critical-view-of-safety dissection, low <strong>bile-duct injury rates</strong>, and disciplined conversion thresholds separate routine practice from excellence. Moreover, complex work — <a href="/treatment/bile-duct-surgery/" title="Bile duct surgery in Dhaka">bile-duct injuries</a>, re-do biliary surgery, intra-operative discoveries — is handled in the same theatre rather than referred out.</p>`,
      },
      {
        heading: "Signal 3 — Documented outcomes",
        body: `<p>Operative work that can be seen — in the <a href="/gallery/" title="Surgical gallery">surgical gallery</a>, in <a href="/articles/" title="Articles on hepatobiliary surgery">written articles</a>, and in <a href="/mentorship/" title="Mentorship and teaching">teaching</a> — is operative work that can be trusted. Therefore, transparency itself is a marker of surgical excellence.</p>`,
      },
    ],
    faq: [
      {
        q: "How do I judge surgical excellence as a patient?",
        a: "Ask how often the surgeon performs liver surgery, what their approach to planning and remnant liver volume is, and whether the same surgeon performs the operation. Specific answers signal genuine focus.",
      },
      {
        q: "Are complex liver cases handled here?",
        a: "Yes — complex liver tumours, liver cysts, bile-duct disease, and re-do hepatobiliary surgery are part of the weekly caseload.",
      },
      {
        q: "Can I see examples of previous surgical work?",
        a: "Yes. The surgical gallery and the articles section document operative work, recovery, and technique openly.",
      },
    ],
    related: [
      { to: "/about/", label: "About Dr. Arefin", title: "About Dr. Murshidul Arefin" },
      { to: "/about/patient-centered-care/", label: "Patient-Centered Care", title: "Patient-centered liver care in Dhaka" },
      { to: "/treatment/liver-surgery/", label: "Liver Surgery", title: "Liver surgery in Dhaka" },
      { to: "/credentials/fcps-ms-hepatobiliary-liver-surgeon-dhaka/", label: "FCPS · MS Credentials", title: "FCPS & MS Hepatobiliary credentials" },
      { to: "/gallery/", label: "Surgical Gallery", title: "Surgical gallery" },
    ],
  },
];

/** Look up a satellite page by full path with or without trailing slash.
 *  Searches both the hand-authored Tier-1 pages AND the generated matrix pages. */
export function findSatellitePage(pathname: string): SatellitePage | undefined {
  const normalised = pathname.replace(/\/$/, "");
  const direct = SATELLITE_PAGES.find((p) => p.slug === normalised);
  if (direct) return direct;
  // Dynamic globals to avoid eager circular dependency at init.
  const matrix = (globalThis as { __MATRIX_PAGES__?: SatellitePage[] }).__MATRIX_PAGES__;
  const fromMatrix = matrix?.find((p) => p.slug === normalised);
  if (fromMatrix) return fromMatrix;
  const tasks = (globalThis as { __JOURNEY_TASK_PAGES__?: SatellitePage[] }).__JOURNEY_TASK_PAGES__;
  return tasks?.find((p) => p.slug === normalised);
}


