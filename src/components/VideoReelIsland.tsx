import { useRef, useState } from "react";

type VideoReelIslandProps = {
  videoSrc?: string;
  posterSrc?: string;
};

export default function VideoReelIsland({
  videoSrc = "/media/reel-60s.mp4",
  posterSrc = "/media/reel-poster.webp"
}: VideoReelIslandProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayToggle = async () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
      return;
    }

    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-plumNoir shadow-halo">
      <video
        ref={videoRef}
        className="h-[360px] w-full object-cover md:h-[560px]"
        playsInline
        loop
        muted={isMuted}
        preload="none"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plumNoir/60 via-transparent to-plumNoir/10" />

      <button
        type="button"
        onClick={handlePlayToggle}
        className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-plumNoir/20 bg-wasabi text-plumNoir transition hover:scale-105"
        aria-label={isPlaying ? "Pause reel" : "Play reel"}
      >
        {isPlaying ? (
          <span className="text-lg font-bold uppercase">Pause</span>
        ) : (
          <svg
            aria-hidden="true"
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 2L24 15L2 28V2Z" fill="currentColor" />
          </svg>
        )}
      </button>

      <button
        type="button"
        onClick={handleMuteToggle}
        className="absolute right-5 top-5 rounded-full border border-white/35 bg-plumNoir/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur"
      >
        {isMuted ? "Muted" : "Sound On"}
      </button>
    </div>
  );
}
