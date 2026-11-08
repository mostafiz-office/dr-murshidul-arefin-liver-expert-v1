import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/hooks/useScrollReveal";
import { useYouTubeUploads } from "@/hooks/useYouTubeUploads";

/* Fallback images — used when no matching video is found */
import imgOtDoing from "@/assets/dr-arefin-doing-ot-real.webp";
import imgOtTeam from "@/assets/dr-arefin-ot-team-real.webp";
import imgStaff from "@/assets/dr-arefin-popular-medical-staff-real.webp";
import imgBiliary from "@/assets/transformation-biliary-surgery-real.webp";
import imgTransplant from "@/assets/transformation-liver-transplant-real.webp";

/**
 * Sticky stacking service cards — JS scroll-driven.
 * Right side: YouTube video with animated play button + inline embed on click.
 * Falls back to static image when no matching video is found.
 */

interface ServiceCard {
  category: string;
  title: string;
  desc: string;
  stats: { label: string; value: string }[];
  fallbackImage: string;
  imageAlt: string;
  slug: string;
  keywords: string[];
  /** Hard-coded YouTube video ID — skips keyword matching when set */
  videoId?: string;
}

const cards: ServiceCard[] = [
  {
    category: "Hepatobiliary",
    title: "Advanced Liver Surgery",
    desc: "Expert surgical treatment for **liver tumors, cysts, and complex hepatic conditions** using the latest **minimally invasive and open techniques** for faster recovery and reduced complications.",
    stats: [{ value: "Imaging-led", label: "PLANNING" }, { value: "Open & laparoscopic", label: "TECHNIQUES" }],
    fallbackImage: imgOtDoing,
    imageAlt: "Dr. Arefin performing liver surgery in the operating theatre",
    slug: "liver-surgery",
    keywords: ["liver surgery", "liver tumor", "hepatic", "liver resection", "liver cancer", "লিভার", "liver", "#liver"],
  },
  {
    category: "Liver",
    title: "Liver Cyst Management",
    desc: "Careful assessment of **simple or complex liver cysts** using advanced imaging, with **safe excision** where surgery is needed to prevent recurrence and relieve discomfort.",
    stats: [{ value: "Imaging-led", label: "ASSESSMENT" }, { value: "Safe excision", label: "WHEN NEEDED" }],
    fallbackImage: imgOtTeam,
    imageAlt: "Dr. Arefin with the surgical team during a liver procedure",
    slug: "liver-cyst",
    keywords: ["liver cyst", "cyst excision", "liver", "লিভার"],
  },
  {
    category: "Liver",
    title: "Fatty Liver Management",
    desc: "Comprehensive management for **fatty liver, hepatitis, and chronic liver disease** with evidence-based protocols for lifestyle modification, monitoring, and **early intervention** to prevent progression.",
    stats: [{ value: "Non-surgical", label: "FIRST APPROACH" }, { value: "Monitoring", label: "LONG-TERM CARE" }],
    fallbackImage: imgStaff,
    imageAlt: "Dr. Arefin and medical staff reviewing patient liver health data",
    slug: "fatty-liver",
    keywords: ["fatty liver", "hepatitis", "cirrhosis", "liver disease", "nafld", "nash"],
  },
  {
    category: "Biliary Tract",
    title: "Bile Duct & Hepatic Surgery",
    desc: "Precision surgery for **bile duct injuries, strictures, and choledochal cysts**, restoring normal biliary drainage and preventing long-term liver damage through **expert reconstruction techniques**.",
    stats: [{ value: "Imaging-led", label: "PLANNING" }, { value: "Reconstruction", label: "WHEN NEEDED" }],
    fallbackImage: imgBiliary,
    imageAlt: "Biliary surgery transformation — before and after results",
    slug: "bile-duct-surgery",
    keywords: ["bile duct", "choledochal", "biliary stricture", "bile injury", "hepaticojejunostomy", "জন্ডিস", "jaundice"],
  },
  {
    category: "Transplant",
    title: "Liver Transplant Coordination",
    desc: "Personalized **pre- and post-transplant care** to guide patients through every stage of their **liver health journey** with compassion, expert supervision, and seamless coordination with transplant centers.",
    stats: [{ value: "Evaluation", label: "FIRST STEP" }, { value: "Lifetime", label: "FOLLOW-UP CARE" }],
    fallbackImage: imgTransplant,
    imageAlt: "Liver transplant patient recovery — Dr. Arefin's guidance",
    slug: "liver-transplant",
    keywords: ["transplant", "liver transplant", "donor", "living donor", "পুনর্জন্ম", "নতুন করে গড়ে"],
  },
];

const linkTo = (slug: string) =>
  slug ? `/treatment/#${slug}` : "/treatment/";

/** Render description: turn **bold** segments into inline keyword links. */
const renderDescNodes = (s: string, href: string, title: string) => {
  const parts = s.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return (
        <Link
          key={i}
          to={href}
          title={`${m[1]} — ${title}`}
          className="sss-desc-link"
        >
          <strong>{m[1]}</strong>
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const CARD_OFFSET = 20;
const FIRST_STICKY_TOP = 90;

/* ── Flip-card video: image-front, video-back ──
   Front face: poster image + animated pulsing play badge.
   Hover (or tap on touch): card flips Y, iframe mounts on back & autoplays.
   Hover-out: card flips back, iframe unmounts after the flip to stop audio. */
const VideoCard = ({
  videoId,
  fallbackImage,
  imageAlt,
}: {
  videoId: string | null;
  fallbackImage: string;
  imageAlt: string;
}) => {
  const [flipped, setFlipped] = useState(false);
  const [mountIframe, setMountIframe] = useState(false);
  const [muted, setMuted] = useState(true);
  const hoverTimerRef = useRef<number | null>(null);
  const leaveTimerRef = useRef<number | null>(null);
  const unmountTimerRef = useRef<number | null>(null);

  const isCoarsePointer =
    typeof window !== "undefined" &&
    window.matchMedia?.("(hover: none), (pointer: coarse)").matches;

  const flipToBack = (withSound: boolean) => {
    if (unmountTimerRef.current) {
      window.clearTimeout(unmountTimerRef.current);
      unmountTimerRef.current = null;
    }
    setMuted(!withSound);
    setMountIframe(true);
    setFlipped(true);
  };

  const flipToFront = () => {
    setFlipped(false);
    if (unmountTimerRef.current) window.clearTimeout(unmountTimerRef.current);
    /* Unmount iframe after flip completes (700ms) so audio stops cleanly. */
    unmountTimerRef.current = window.setTimeout(() => {
      setMountIframe(false);
    }, 700);
  };

  const handleMouseEnter = () => {
    if (isCoarsePointer || !videoId) return;
    if (leaveTimerRef.current) {
      window.clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    hoverTimerRef.current = window.setTimeout(() => flipToBack(false), 160);
  };

  const handleMouseLeave = () => {
    if (isCoarsePointer || !videoId) return;
    if (hoverTimerRef.current) {
      window.clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    leaveTimerRef.current = window.setTimeout(() => flipToFront(), 120);
  };

  const handleClick = () => {
    if (!videoId) return;
    /* Touch / explicit click — second tap on back face flips back. */
    if (flipped) flipToFront();
    else flipToBack(true);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
      if (leaveTimerRef.current) window.clearTimeout(leaveTimerRef.current);
      if (unmountTimerRef.current) window.clearTimeout(unmountTimerRef.current);
    };
  }, []);

  if (!videoId) {
    return (
      <img
        src={fallbackImage}
        alt={imageAlt}
        className="sss-card-img"
        loading="lazy"
        width="560"
        height="400"
      />
    );
  }

  return (
    <div
      className="sss-flip"
      data-flipped={flipped ? "true" : "false"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sss-flip-inner">
        {/* Front — image + animated play badge */}
        <button
          type="button"
          className="sss-flip-face sss-flip-front sss-video-thumb"
          onClick={handleClick}
          aria-label={`Play video: ${imageAlt}`}
          tabIndex={flipped ? -1 : 0}
        >
          <img
            src={fallbackImage}
            alt={imageAlt}
            className="sss-card-img"
            loading="lazy"
            width="560"
            height="400"
          />
          <span className="sss-play-btn sss-play-btn--pulse" aria-hidden="true">
            <svg viewBox="0 0 68 48" width="68" height="48">
              <path className="sss-play-bg" d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="hsl(0,0%,100%)" fillOpacity=".92"/>
              <path d="M45 24L27 14v20" fill="hsl(var(--primary-bright))"/>
            </svg>
          </span>
        </button>

        {/* Back — iframe (mounted only while flipped) */}
        <div
          className="sss-flip-face sss-flip-back"
          aria-hidden={!flipped}
          onClick={handleClick}
        >
          {mountIframe ? (
            <iframe
              className="sss-card-iframe"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&enablejsapi=1&mute=${muted ? 1 : 0}&playsinline=1`}
              title={imageAlt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="sss-iframe-loader" aria-hidden>
              <svg className="sss-spinner" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2a10 10 0 0 1 10 10" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Keyword matching with round-robin fallback ── */
function buildVideoMap(
  allCards: ServiceCard[],
  videos: { videoId: string; title: string }[]
): (string | null)[] {
  const usedIds = new Set<string>();
  const result: (string | null)[] = new Array(allCards.length).fill(null);

  // Pass 0: apply hard-coded videoId overrides first
  for (let ci = 0; ci < allCards.length; ci++) {
    if (allCards[ci].videoId) {
      result[ci] = allCards[ci].videoId!;
      usedIds.add(allCards[ci].videoId!);
    }
  }

  if (!videos.length) return result;

  const normalizedVideos = videos.map((v) => ({
    id: v.videoId,
    title: v.title.toLowerCase(),
    tokens: v.title.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean),
  }));

  /**
   * Scoring: each card scores every video.
   * - Exact substring match of a multi-word keyword → 10 points
   * - Single-word keyword found as a token → 5 points
   * - Any keyword token partially contained in any video token → 2 points
   * Highest-scoring unused video wins.
   */
  function scoreVideo(
    keywords: string[],
    video: typeof normalizedVideos[0]
  ): number {
    let score = 0;
    for (const kw of keywords) {
      const kwLower = kw.toLowerCase();
      /* Exact substring in full title */
      if (video.title.includes(kwLower)) {
        score += 10;
        continue;
      }
      /* Token-level matching */
      const kwTokens = kwLower.split(/\s+/);
      for (const kt of kwTokens) {
        if (video.tokens.includes(kt)) {
          score += 5;
        } else if (video.tokens.some((vt) => vt.includes(kt) || kt.includes(vt))) {
          score += 2;
        }
      }
    }
    return score;
  }

  // Pass 1: score-based best match (greedy, highest score first across all cards)
  const cardScores: { ci: number; vi: number; score: number }[] = [];
  for (let ci = 0; ci < allCards.length; ci++) {
    if (result[ci]) continue; // skip overridden cards
    for (let vi = 0; vi < normalizedVideos.length; vi++) {
      const s = scoreVideo(allCards[ci].keywords, normalizedVideos[vi]);
      if (s > 0) cardScores.push({ ci, vi, score: s });
    }
  }
  // Sort descending by score
  cardScores.sort((a, b) => b.score - a.score);

  const assignedCards = new Set<number>();
  for (const { ci, vi } of cardScores) {
    if (assignedCards.has(ci) || usedIds.has(normalizedVideos[vi].id)) continue;
    result[ci] = normalizedVideos[vi].id;
    usedIds.add(normalizedVideos[vi].id);
    assignedCards.add(ci);
    if (assignedCards.size === allCards.length) break;
  }

  // Pass 2: fill unmatched cards with remaining videos (round-robin)
  const remaining = normalizedVideos.filter((v) => !usedIds.has(v.id));
  let ri = 0;
  for (let ci = 0; ci < result.length; ci++) {
    if (!result[ci] && remaining.length) {
      result[ci] = remaining[ri % remaining.length].id;
      ri++;
    }
  }

  return result;
}

const StickyStackServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { videos } = useYouTubeUploads(15);

  /* Map each card index → videoId (keyword match + fallback) */
  const cardVideoIds = buildVideoMap(cards, videos);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ancestors: { el: HTMLElement; prev: string }[] = [];
    let parent = section.parentElement;
    while (parent) {
      const cs = getComputedStyle(parent);
      if (cs.overflow !== "visible" || cs.overflowX !== "visible" || cs.overflowY !== "visible") {
        ancestors.push({ el: parent, prev: parent.style.overflow });
        parent.style.overflow = "visible";
      }
      parent = parent.parentElement;
    }
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOF = html.style.overflowX;
    const prevBodyOF = body.style.overflowX;
    html.style.overflowX = "clip";
    body.style.overflowX = "clip";

    return () => {
      ancestors.forEach(({ el, prev }) => { el.style.overflow = prev; });
      html.style.overflowX = prevHtmlOF;
      body.style.overflowX = prevBodyOF;
    };
  }, []);

  return (
    <section
      className="sss-section arefin"
      id="expertise"
      aria-label="Our liver care services"
      ref={sectionRef}
    >
      <div className="container max-w-[1248px] mx-auto px-6 py-14 md:py-20 lg:py-28">
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "hsl(var(--primary-deep))" }}>
              Our Expertise
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="sss-heading font-arefin-heading text-fluid-h2 lg:text-[44px] leading-tight">
              Liver Care Services
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="sss-intro mt-5 text-base leading-relaxed">
              From <strong>liver tumours and cysts</strong> to{" "}
              <strong>liver transplant evaluation</strong> — explore our liver
              service areas, planned around imaging and liver function.
            </p>
          </Reveal>
        </div>

        <div className="sss-stack">
          {cards.map((card, i) => (
            <div
              key={card.slug + i}
              className="sss-sticky-wrapper"
              style={{
                ["--sss-top" as string]: `${FIRST_STICKY_TOP + i * CARD_OFFSET}px`,
                zIndex: i + 1,
              }}
            >
              <article className="sss-card" data-step={i + 1}>
                <div className="sss-card-content">
                  <Link to={linkTo(card.slug)} className="sss-category-link">
                    <span className="sss-category">{card.category}</span>
                  </Link>
                  <h3 className="sss-card-title">
                    <Link to={linkTo(card.slug)} className="sss-card-title-link">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="sss-card-desc">
                    {renderDescNodes(card.desc, linkTo(card.slug), card.title)}
                  </p>
                  <div className="sss-stats">
                    {card.stats.map((s) => (
                      <div key={s.label} className="sss-stat">
                        <span className="sss-stat-value">{s.value}</span>
                        <span className="sss-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={linkTo(card.slug)}
                    className="sss-cta no-underline inline-flex items-center gap-2"
                  >
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="sss-card-visual">
                  <VideoCard
                    videoId={cardVideoIds[i]}
                    fallbackImage={card.fallbackImage}
                    imageAlt={card.imageAlt}
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyStackServices;
