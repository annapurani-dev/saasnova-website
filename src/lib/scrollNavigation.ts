"use client";

import { useEffect } from "react";

const HASH_ALIAS_MAP: Record<string, string> = {
  "ignite-details": "ignite",
  "supernova-details": "supernova",
  "novax-details": "novax",
  "pdmaas-details": "pdmaas",
  "pmmaas-details": "pmmaas",
  "palaas-details": "palaas",
  "prmaas-details": "prmaas",
  "pcmaas-details": "pcmaas",
  "sfaas-details": "sfaas",
};

export function normalizeSectionHash(rawHash: string): string {
  const cleaned = rawHash.replace(/^#/, "").trim().toLowerCase();
  return HASH_ALIAS_MAP[cleaned] || cleaned;
}

export function scrollToSectionId(
  rawId: string,
  options?: {
    topIfFirst?: boolean;
    firstSectionId?: string;
    behavior?: ScrollBehavior;
    updateHash?: boolean;
    notifySelection?: boolean;
  }
): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  const id = normalizeSectionHash(rawId);
  const {
    topIfFirst = false,
    firstSectionId,
    behavior = "smooth",
    updateHash = false,
    notifySelection = true,
  } = options || {};

  if (notifySelection) {
    window.dispatchEvent(
      new CustomEvent("solution-section-change", { detail: { id } })
    );
  }

  if (updateHash && id) {
    const nextHash = `#${id}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }

  if (topIfFirst && firstSectionId && id === firstSectionId) {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const sectionEl =
    document.getElementById(id) || document.getElementById(rawId.replace(/^#/, ""));
  if (!sectionEl) return false;

  const headerEl = document.querySelector("header");
  const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 110;
  const currentScrollY =
    window.pageYOffset || document.documentElement.scrollTop || 0;
  const sectionPaddingTop =
    parseFloat(window.getComputedStyle(sectionEl).paddingTop) || 0;
  const targetRect = sectionEl.getBoundingClientRect();
  const targetY = Math.max(
    0,
    Math.round(targetRect.top + currentScrollY + sectionPaddingTop - headerHeight - 18)
  );

  window.scrollTo({ top: targetY, behavior });
  return true;
}

export function useSolutionHashNavigation<T extends string>(
  validIds: readonly T[],
  setActiveId: (id: T) => void
) {
  useEffect(() => {
    const validSet = new Set<string>(validIds);

    const navigateFromHash = (rawHash: string, delay = 120) => {
      const id = normalizeSectionHash(rawHash);
      if (!validSet.has(id)) return;

      setActiveId(id as T);

      let attempts = 0;
      const attemptScroll = () => {
        const scrolled = scrollToSectionId(id, {
          behavior: "smooth",
          updateHash: false,
          notifySelection: false,
        });
        if (!scrolled && attempts < 5) {
          attempts += 1;
          window.setTimeout(attemptScroll, 80);
        }
      };

      window.setTimeout(() => {
        window.requestAnimationFrame(attemptScroll);
      }, delay);
    };

    if (window.location.hash) {
      navigateFromHash(window.location.hash, 140);
    }

    const onHashOrPop = () => {
      if (window.location.hash) {
        navigateFromHash(window.location.hash, 40);
      }
    };

    const onSectionEvent = (e: Event) => {
      const detailId = (e as CustomEvent<{ id?: string }>).detail?.id;
      if (detailId && validSet.has(detailId)) {
        setActiveId(detailId as T);
      }
    };

    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hrefAttr = anchor.getAttribute("href") || "";
      if (!hrefAttr.includes("#")) return;

      try {
        const url = new URL(anchor.href, window.location.origin);
        if (url.pathname === window.location.pathname && url.hash) {
          const id = normalizeSectionHash(url.hash);
          if (validSet.has(id)) {
            window.setTimeout(() => navigateFromHash(url.hash, 30), 10);
          }
        }
      } catch {
        // ignore invalid URLs
      }
    };

    window.addEventListener("hashchange", onHashOrPop);
    window.addEventListener("popstate", onHashOrPop);
    window.addEventListener("solution-section-change", onSectionEvent);
    document.addEventListener("click", onDocumentClick, true);

    return () => {
      window.removeEventListener("hashchange", onHashOrPop);
      window.removeEventListener("popstate", onHashOrPop);
      window.removeEventListener("solution-section-change", onSectionEvent);
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, [validIds, setActiveId]);
}
