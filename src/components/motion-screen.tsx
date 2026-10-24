"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { withBase } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Looping product screen: muted, inline, lazy-loaded when near the viewport, with a pause control. */
export function MotionScreen({ name, label, className, eager }: { name: string; label: string; className?: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setPlaying(false);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          if (!reduce && !video.dataset.userPaused) void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (load && video && playing) {
      video.load();
      void video.play().catch(() => {});
    }
    // only when sources first attach
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      delete video.dataset.userPaused;
      void video.play().catch(() => {});
      setPlaying(true);
    } else {
      video.dataset.userPaused = "1";
      video.pause();
      setPlaying(false);
    }
  }

  const base = withBase(`/media/${name}_composite`);
  return (
    <div className={cn("relative overflow-hidden rounded-2xl card-shadow", className)}>
      <video
        ref={ref}
        className="block aspect-video h-auto w-full bg-navy-deep object-cover"
        poster={`${base}_poster.webp`}
        muted
        loop
        playsInline
        preload={eager ? "metadata" : "none"}
        aria-label={label}
        width={1920}
        height={1080}
      >
        {load ? (
          <>
            <source src={`${base}.webm`} type="video/webm" />
            <source src={`${base}.mp4`} type="video/mp4" />
          </>
        ) : null}
      </video>
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep/70 text-white backdrop-blur hover:bg-navy-deep focus-visible:outline-2 focus-visible:outline-mint"
        aria-label={playing ? `Pause animation: ${label}` : `Play animation: ${label}`}
      >
        {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
      </button>
    </div>
  );
}
