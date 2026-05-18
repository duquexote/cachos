import { useState, useRef, useEffect } from 'react';

const videos = [
  { id: 1, src: '/cachos_video1.mp4' },
  { id: 2, src: '/cachos_video2.mp4' },
  { id: 3, src: '/cachos_video3.mp4' },
  { id: 4, src: '/cachos_video4.mp4' },
  { id: 5, src: '/cachos_video5.mp4' },
  { id: 6, src: '/cachos_video6.mp4' },
  { id: 7, src: '/cachos_video7.mp4' },
];

function SoundOnIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="#0a0a0a"/>
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4L9.91 6.09 12 8.18V4z" fill="#0a0a0a"/>
    </svg>
  );
}

export default function ExpertTestimonials() {
  const [active, setActive] = useState(3);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef({});

  // Mute all videos when active changes
  useEffect(() => {
    setMuted(true);
  }, [active]);

  // Sync muted state to the active video element
  useEffect(() => {
    const el = videoRefs.current[active];
    if (el) el.muted = muted;
  }, [muted, active]);

  const handlePlayClick = (e, idx) => {
    e.stopPropagation();
    if (idx !== active) {
      setActive(idx);
      return;
    }
    setMuted((m) => !m);
  };

  const switchTo = (idx) => {
    const prev = videoRefs.current[active];
    if (prev) prev.muted = true;
    setMuted(true);
    setActive(idx);
  };

  const prev = () => switchTo(Math.max(0, active - 1));
  const next = () => switchTo(Math.min(videos.length - 1, active + 1));

  const getStyle = (idx) => {
    const dist = idx - active;
    const absDist = Math.abs(dist);
    if (absDist > 2) return null;
    const scales = [1, 0.82, 0.68];
    const scale = scales[absDist] ?? 0.68;
    const opacity = absDist === 0 ? 1 : absDist === 1 ? 0.85 : 0.6;
    return { dist, scale, opacity };
  };

  return (
    <section className="py-10 lg:py-14 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-7">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] font-medium max-w-3xl">
            Quem entende de cachos<br />
            <span className="italic font-light">já adotou.</span>
          </h2>
          <p className="text-ink/60 max-w-md text-[15px] leading-relaxed">
            Cabeleireiras, hairstylists e especialistas em cabelos cacheados explicam por que o
            Cachos virou item fixo na bancada do salão.
          </p>
        </div>
      </div>

      <div className="relative flex items-center justify-center">

        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={active === 0}
          className="absolute left-4 lg:left-8 z-20 w-10 h-10 rounded-full bg-paper border border-ink/10 shadow flex items-center justify-center text-ink/70 hover:text-ink hover:shadow-md transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ‹
        </button>

        {/* Cards */}
        <div className="relative w-full flex items-center justify-center" style={{ height: 'clamp(430px, 66vw, 480px)' }}>
          {videos.map((video, idx) => {
            const info = getStyle(idx);
            if (!info) return null;
            const { dist, scale, opacity } = info;
            const isActive = idx === active;
            const offsetPx = `calc(${dist} * (var(--card-gap, 210px)))`;

            return (
              <div
                key={video.id}
                onClick={() => !isActive && switchTo(idx)}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${offsetPx}) scale(${scale})`,
                  opacity,
                  zIndex: 10 - Math.abs(dist),
                  '--card-gap': 'clamp(160px, 15vw, 210px)',
                  cursor: isActive ? 'default' : 'pointer',
                }}
              >
                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-[24px] bg-soft"
                  style={{
                    width: 'clamp(240px, 18vw, 260px)',
                    height: 'clamp(400px, 32vw, 440px)',
                  }}
                >
                  <video
                    ref={(el) => { videoRefs.current[idx] = el; }}
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* dark overlay for non-active */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-ink/20 rounded-[24px]" />
                  )}

                  {/* play/mute button — only on active */}
                  {isActive && (
                    <button
                      onClick={(e) => handlePlayClick(e, idx)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-14 h-14 rounded-full bg-paper/90 flex items-center justify-center shadow-lg group-hover:bg-paper transition">
                        {muted ? <SoundOffIcon /> : <SoundOnIcon />}
                      </div>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={active === videos.length - 1}
          className="absolute right-4 lg:right-8 z-20 w-10 h-10 rounded-full bg-paper border border-ink/10 shadow flex items-center justify-center text-ink/70 hover:text-ink hover:shadow-md transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => switchTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? 'w-6 h-2 bg-ink' : 'w-2 h-2 bg-ink/20'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
