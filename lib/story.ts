/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  Featured AI-generated story (used by <FormatSwitcher />).
 *
 *  ⚠️  TRANSCRIPT PENDING:
 *  The text below is a placeholder ~30-word news item. Replace `summaryEn` and
 *  `summaryHi` with the actual transcript of /public/story/unbiasly-story.mp4
 *  when you have it. Everything else (video, audio, poster) is already wired
 *  to the real asset.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const FEATURED_STORY = {
  source: "UnbiaslyAI Desk",
  language: "HI",
  publishedAgo: "Today · 09:42 IST",
  category: "Technology",

  // 60-word summary, English
  summaryEn:
    "India's largest news platforms are racing to ship AI-driven verification tools, with at least four major outlets piloting source-attribution layers this quarter. Industry analysts say the move follows mounting reader pressure for transparency on what was reported, who reported it, and how the framing was chosen. Regulators are watching closely, with draft guidelines expected by next year.",

  // Hindi summary — REPLACE with real transcript
  summaryHi:
    "देश के बड़े समाचार प्लेटफ़ॉर्म तेज़ी से एआई-आधारित सत्यापन टूल लाने की दौड़ में हैं। इस तिमाही में कम से कम चार बड़े संस्थान स्रोत-संदर्भ देने वाली परतों का परीक्षण कर रहे हैं। पाठकों के बढ़ते दबाव के बीच यह कदम महत्वपूर्ण माना जा रहा है। नियामक भी इस पर नज़र रखे हुए हैं।",

  // Media assets (already in /public/story/)
  video: {
    mp4: "/story/unbiasly-story.mp4",
    webm: "/story/unbiasly-story.webm",
    poster: "/story/unbiasly-story-poster.jpg",
    durationSec: 15,
  },
  audio: {
    mp3: "/story/unbiasly-story.mp3",
    durationSec: 15,
  },

  // Provenance / flags surfaced by the pipeline
  flags: [
    { label: "Source attributed", tone: "verified" as const },
    { label: "AI-generated anchor", tone: "neutral" as const },
    { label: "Hindi · native processed", tone: "verified" as const },
  ],
};

export type FeaturedStory = typeof FEATURED_STORY;
