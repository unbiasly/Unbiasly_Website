"use client";

import AppStores from "@/components/custom/app-stores";
import { Switch } from "@/components/ui/switch";
import { cn, timeElapsed } from "@/lib/utils";
import { Language, NewsArticlesResponse } from "@/service/api.interface";
import { handleResponse } from "@/service/fetchClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { dateFiltersData, useFilter } from "./hooks";
import MobileFilter from "./mobile-filter";

type NewsCardProps = {
  image?: string;
  title: string;
  description: string;
  date: string;
  publisher?: string;
  publisherUrl?: string;
  index: number;
  language: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  date,
  image,
  publisher,
  publisherUrl,
  index,
  language,
}) => {
  const safeUrl = publisherUrl && publisherUrl.startsWith("http") ? publisherUrl : "#";

  return (
    <Link
      href={safeUrl}
      target={safeUrl === "#" ? undefined : "_blank"}
      rel={safeUrl === "#" ? undefined : "noreferrer"}
      className="group block border-b border-white/[0.08] pb-10 last:border-b-0"
    >
      <div className="flex items-baseline gap-4 mb-4 flex-wrap">
        <span className="mono text-[10px] tracking-[0.2em] uppercase text-white/40">
          № {String(index + 1).padStart(3, "0")}
        </span>

        <span className="mono text-[10px] tracking-[0.2em] uppercase text-accent">
          {timeElapsed(date, language)}
        </span>

        {publisher && (
          <span className="mono text-[10px] tracking-[0.15em] uppercase text-white/45 truncate">
            · {publisher}
          </span>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
        {image && image.startsWith("http") && (
          <div className="lg:col-span-4 relative w-full aspect-[16/10] lg:aspect-[4/3] bg-white/[0.04] overflow-hidden rounded-xl">
            <Image
              alt={title}
              src={image}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              quality={100}
              unoptimized
            />
          </div>
        )}

        <div
          className={cn(
            "flex flex-col justify-between",
            image && image.startsWith("http")
              ? "lg:col-span-8"
              : "lg:col-span-12"
          )}
        >
          <div>
            <h3 className="display text-2xl md:text-3xl lg:text-[36px] leading-[1.1] tracking-tight text-balance text-white group-hover:text-accent transition-colors">
              {title}
            </h3>

            <p className="mt-4 text-[15px] lg:text-[16px] leading-[1.55] text-white/65 text-pretty max-w-[68ch]">
              {description}
            </p>
          </div>

          <div className="mt-5 flex items-center gap-2 mono text-[11px] tracking-wider uppercase text-white/45 group-hover:text-accent transition-colors">
            <span>
              Read at{" "}
              {publisher
                ? publisher.charAt(0).toUpperCase() + publisher.slice(1)
                : "source"}
            </span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const getMonthYearValue = (selectedMonth: unknown): string | undefined => {
  if (!selectedMonth) return undefined;

  if (typeof selectedMonth === "string") {
    return selectedMonth;
  }

  if (typeof selectedMonth === "object") {
    const month = selectedMonth as {
      value?: string;
      monthYear?: string;
      label?: string;
    };

    return month.value || month.monthYear || undefined;
  }

  return undefined;
};

const useArticles = (language: Language, monthYear?: string) =>
  useInfiniteQuery({
    queryKey: ["articles", language, monthYear],

    queryFn: ({ pageParam }) => {
      return fetch("/live-news/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          page: pageParam,
          monthYear,
        }),
      }).then<NewsArticlesResponse>(handleResponse);
    },

    initialPageParam: 1,

    getNextPageParam: (
      lastPage: NewsArticlesResponse,
      _,
      lastPageParam
    ) => {
      if (!lastPage?.articles || lastPage.articles.length === 0) {
        return undefined;
      }

      return lastPageParam + 1;
    },
  });

export default function LiveNews() {
  const {
    isHindiSelected,
    selectedMonth,
    onLanguageCheckChanged,
    onChangeSelectedMonth,
  } = useFilter(false, dateFiltersData[0]);

  const language = isHindiSelected ? Language.HINDI : Language.ENGLISH;
  const languageString = isHindiSelected ? "hindi" : "english";
  const selectedMonthYear = getMonthYearValue(selectedMonth);

  const {
    data: newsArticlesData,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage,
  } = useArticles(language, selectedMonthYear);

  const handleOnViewportEnter = (entry: IntersectionObserverEntry | null) => {
    if (!entry?.isIntersecting) return;
    if (isLoading || isFetchingNextPage || isError) return;

    fetchNextPage();
  };

  const handleOnApplyFilter = (
    isHindi: boolean,
    month: typeof selectedMonth
  ) => {
    onLanguageCheckChanged(isHindi);
    onChangeSelectedMonth(month);
  };

  const totalArticles =
    newsArticlesData?.pages.reduce(
      (acc, page) => acc + (page?.articles?.length || 0),
      0
    ) ?? 0;

  let runningIndex = 0;

  return (
    <>
      <section className="border-b border-white/[0.06] mesh-glow pt-32 lg:pt-40 pb-14">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="flex items-center justify-between mb-6 mono text-[10px] tracking-[0.25em] uppercase text-white/50">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              <span>Live · Continuously updated</span>
            </div>

            <span className="hidden md:block">
              {isHindiSelected ? "हिंदी" : "English"} Edition
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-4">The Live Feed</div>

              <h1 className="display text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tightest">
                Live News.
              </h1>

              <p className="mt-6 text-[15px] lg:text-[17px] leading-relaxed text-white/60 max-w-2xl">
                Every story verified, summarised, and source-attributed. Switch
                between English and Hindi, and scroll for more.
              </p>
            </div>

            <div className="hidden lg:flex lg:col-span-4 lg:justify-end items-center gap-4 pb-3">
              <span
                className={cn(
                  "mono text-[11px] tracking-[0.2em] uppercase transition-colors",
                  !isHindiSelected ? "text-white" : "text-white/40"
                )}
              >
                English
              </span>

              <Switch
                checked={isHindiSelected}
                onCheckedChange={onLanguageCheckChanged}
              />

              <span
                className={cn(
                  "mono text-[11px] tracking-[0.2em] uppercase transition-colors",
                  isHindiSelected ? "text-white" : "text-white/40"
                )}
              >
                Hindi
              </span>
            </div>

            <div className="lg:hidden">
              <MobileFilter
                isHindiSelectedInitial={isHindiSelected}
                selectedMonthInitial={selectedMonth}
                onApplyFilter={handleOnApplyFilter}
              />
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
            <div>
              <div className="mono text-[10px] tracking-widest uppercase text-white/40">
                Loaded
              </div>
              <div className="display text-3xl mt-1">{totalArticles}</div>
            </div>

            <div>
              <div className="mono text-[10px] tracking-widest uppercase text-white/40">
                Language
              </div>
              <div className="display text-3xl mt-1">
                {isHindiSelected ? "HI" : "EN"}
              </div>
            </div>

            <div>
              <div className="mono text-[10px] tracking-widest uppercase text-white/40">
                Source
              </div>
              <div className="display text-3xl mt-1 text-accent">Verified</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-14 lg:py-20">
          {isLoading && (
            <div className="py-32 flex items-center justify-center">
              <div className="mono text-[11px] tracking-[0.25em] uppercase text-white/50 pulse-dot">
                Loading the feed…
              </div>
            </div>
          )}

          {isError && (
            <div className="py-20 text-center">
              <div className="display text-2xl text-white/50">
                Couldn&apos;t load the feed. Please try again.
              </div>
            </div>
          )}

          {!isLoading && !isError && totalArticles === 0 && (
            <div className="py-20 text-center">
              <div className="display text-2xl text-white/50">
                No articles found.
              </div>
            </div>
          )}

          <div className="flex flex-col gap-10 lg:gap-12">
            {newsArticlesData?.pages.map((page) =>
              page.articles.map((article) => {
                const card = (
                  <NewsCard
                    key={article._id}
                    image={article.thumbnail_url}
                    title={article.title}
                    description={article.body_short}
                    date={article.date}
                    publisher={article?.source?.source_id}
                    publisherUrl={article?.link}
                    index={runningIndex}
                    language={languageString}
                  />
                );

                runningIndex++;

                return card;
              })
            )}

            <motion.div
              initial="hidden"
              whileInView="visible"
              onViewportEnter={handleOnViewportEnter}
              className="flex justify-center py-6"
            >
              <span className="mono text-[10px] tracking-[0.25em] uppercase text-white/45">
                {isError
                  ? "Failed to load more"
                  : totalArticles > 0
                  ? isFetchingNextPage
                    ? "Loading more…"
                    : "Scroll for more"
                  : ""}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <AppStores />
    </>
  );
}
