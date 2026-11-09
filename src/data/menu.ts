/**
 * Header mega menu view-model (Treatment panel).
 *
 * Plan: .lovable/plan/mega-menu-atto-style-2026-10-21.md
 * Rules (see plan §11): this file DERIVES everything from
 * satelliteMatrix.ts (SERVICES + AREAS). Display names, area names and
 * counts are never re-typed here — the only hand-kept data is the hub
 * URL per service and one factual description line per service.
 */
import { SERVICES, AREAS, MATRIX_MENU_SERVICE_SLUGS } from "./satelliteMatrix";

export interface MegaAreaLink {
  label: string;
  path: string;
  title: string;
}

export interface MegaService {
  slug: string;
  display: string;
  /** Treatment hub (or Tier-1 satellite hub) the rail row links to. */
  hub: string;
  hubTitle: string;
  /** One factual sentence, adapted from the service's clinical copy. */
  description: string;
  /** "15 areas" — computed from AREAS, never typed. */
  areaCount: number;
  areas: MegaAreaLink[];
}

/** Hub URL per rail service — explicit mapping (plan §12 G6). */
/* 2026-11-09 (owner request): restore the full 8-service rail from plan D1.
   Batch 1 had narrowed this to 3 liver services only, which hid the
   bile-duct, pancreatic, hepatobiliary and laparoscopic hub pages from the
   menu even though the pages still exist. Every hub below is a real page
   in this repo, and every description is liver-first: the bile-duct,
   pancreatic and hepatobiliary hubs are HPB services of this liver
   surgeon, framed as part of liver & HPB care. No gallbladder hub is
   restored — the gallbladder hub was replaced by the liver tumour hub. */
const HUBS: Record<string, string> = {
  "liver-surgery": "/treatment/liver-surgery/",
  "liver-resection-surgery": "/treatment/liver-tumor-cancer-surgery-dhaka/",
  "bile-duct-surgery": "/treatment/biliary-tract-surgery/",
  "pancreatic-surgery": "/treatment/pancreatic-surgery/",
  "hepatobiliary-surgery": "/treatment/hepatobiliary-surgery/",
  "laparoscopic-surgery": "/treatment/minimally-invasive-liver-surgery-dhaka/",
  "liver-transplant-coordination": "/treatment/liver-transplant-coordination/",
  "fatty-liver-management": "/treatment/fatty-liver-management/",
};

/** One factual line per service — no claims, no statistics (plan §11 M1). */
const DESCRIPTIONS: Record<string, string> = {
  "liver-surgery":
    "Surgery for liver tumours, cysts and other liver conditions, planned around your imaging and liver function.",
  "liver-resection-surgery":
    "Liver resection (hepatectomy) removes the diseased part of the liver while preserving enough healthy liver to recover, planned around your imaging and remnant liver volume.",
  "bile-duct-surgery":
    "Bile-duct surgery for the liver's drainage system — meticulous reconstruction planned with MRCP, as part of liver and HPB care.",
  "pancreatic-surgery":
    "Pancreatic resection — Whipple, distal and total pancreatectomy — by the same high-volume HPB team that plans your liver care.",
  "hepatobiliary-surgery":
    "Hepatobiliary surgery covers the liver, bile ducts and pancreas together — one surgeon planning multi-organ procedures around your liver.",
  "laparoscopic-surgery":
    "Keyhole liver surgery — smaller incisions, less pain and faster recovery, with open surgery when a complex resection needs it.",
  "liver-transplant-coordination":
    "Assessment, referral and follow-up coordination for patients who may need a liver transplant.",
  "fatty-liver-management":
    "Assessment and management of fatty liver disease, from metabolic evaluation to surgical care when needed.",
};

export const MEGA_SERVICES: MegaService[] = MATRIX_MENU_SERVICE_SLUGS.map((slug) => {
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) throw new Error(`menu.ts: unknown matrix service "${slug}"`);
  return {
    slug,
    display: svc.display,
    hub: HUBS[slug],
    hubTitle: `${svc.display} — Dr. Arefin, Dhaka`,
    description: DESCRIPTIONS[slug],
    areaCount: AREAS.length,
    areas: AREAS.map((area) => ({
      label: `${svc.display} in ${area.display}`,
      path: `/treatment/${slug}-in-${area.slug}/`,
      title: `${svc.display} in ${area.display}, ${area.city} — Dr. Arefin`,
    })),
  };
}).filter((s) => Boolean(s.hub));

/** Default service shown when the panel opens (plan decision D4). */
export const MEGA_DEFAULT_SERVICE = "liver-surgery";

/** Footer trust line (plan decision D5). */
export const MEGA_TRUST_LINE =
  "BSMMU-trained liver surgeon · Popular Medical College Hospital, Dhanmondi";

export const MEGA_PHONE_HREF = "tel:+8801311487592";
export const MEGA_PHONE_DISPLAY = "+880 1311 487592";
