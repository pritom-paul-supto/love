import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Volume2, VolumeX, Sparkles, ChevronDown, Menu } from "lucide-react";
import heroImage from "./assets/home-hero.jpg";
import musicFile from "./assets/opening-theme.mp3";
import Sidebar from "./components/Sidebar";
import Albums from "./pages/Albums";
import { albums } from "./data/albums";

function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[8%] h-[20rem] w-[20rem] rounded-full bg-rose-400/10 blur-3xl" />
      <div className="absolute right-[8%] top-[18%] h-[18rem] w-[18rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />
    </div>
  );
}

function PremiumNavbar({ muted, toggleMute, setSidebarOpen }) {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10 lg:px-14">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-white shadow-[0_0_50px_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:bg-white/12"
        >
          <Menu className="h-5 w-5" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-[0_0_50px_rgba(255,255,255,0.08)] backdrop-blur-xl">
            <Heart className="h-5 w-5 text-rose-200" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Private memory space
            </p>
            <p className="text-sm font-medium text-white/85">Our Story</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        onClick={toggleMute}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/90 backdrop-blur-xl transition hover:bg-white/12"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        {muted ? "Sound off" : "Sound on"}
      </motion.button>
    </header>
  );
}

function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl"
    >
      <Sparkles className="h-4 w-4 text-amber-200" />
      A place made from moments
    </motion.div>
  );
}

function HeroActions({ started, handleEnter, setSelectedAlbum }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.28 }}
      className="mt-8 flex flex-wrap items-center gap-4"
    >
      <button
        onClick={handleEnter}
        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0a0a10] shadow-[0_18px_60px_rgba(255,255,255,0.18)] transition duration-300 hover:scale-[1.03]"
      >
        {started ? "Music Playing" : "Enter With Music"}
      </button>

      <button
        onClick={() => setSelectedAlbum(albums[0])}
        className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-xl transition hover:bg-white/12"
      >
        Explore Memories
      </button>
    </motion.div>
  );
}

function FeaturedImageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="order-1 flex items-center justify-center lg:order-2"
    >
      <div className="relative w-full max-w-[34rem]">
        <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-white/12 via-fuchsia-300/8 to-cyan-300/8 blur-2xl" />

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
        >
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <img
              src={heroImage}
              alt="Featured memory"
              className="h-[30rem] w-full object-cover object-center md:h-[38rem]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,14,0.72),transparent_35%,rgba(255,255,255,0.06))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <div className="rounded-[1.5rem] border border-white/12 bg-black/22 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.32em] text-white/55">
                  Featured memory
                </p>
                <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-white md:text-3xl">
                  Keep the feeling, not just the frame.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                  A small world made from the moments that still shine.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function IntroParagraphs({ paragraphs }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, delay: 0.34 }}
      className="mt-12 grid gap-5"
    >
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 + index * 0.1 }}
          className="max-w-3xl text-[15px] leading-8 text-white/62 md:text-base"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
}

function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.8 }}
      className="mt-6 flex items-center justify-center pb-3"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/50 backdrop-blur-xl">
        Scroll
        <ChevronDown className="h-4 w-4" />
      </div>
    </motion.div>
  );
}

export default function Home() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const paragraphs = useMemo(
    () => [
      "Some memories do not just stay inside photographs — they stay inside the way a day feels, the way a smile returns, and the quiet comfort of knowing someone has become part of your world.",
      "This little space is made to hold those moments gently: the laughter, the soft chaos, the birthdays, the long walks, the little glances, and every ordinary second that became beautiful because we lived it together.",
      "Every page here is meant to feel warm, intimate, and alive — not like a cold gallery, but like opening a carefully kept collection of moments that still breathe, still glow, and still mean everything.",
      "So this is where our story begins again: with light, with music, with memory, and with the kind of tenderness that turns simple photographs into something timeless.",
    ],
    []
  );

  useEffect(() => {
    const tryStartAudio = async () => {
      if (!audioRef.current) return;
      try {
        audioRef.current.volume = 0.35;
        await audioRef.current.play();
        setStarted(true);
      } catch {}
    };

    tryStartAudio();
  }, []);

  const handleEnter = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.muted = muted;
      audioRef.current.volume = 0.35;
      await audioRef.current.play();
      setStarted(true);
    } catch {}
  };

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#09090f] text-white selection:bg-white/20 selection:text-white">
      <audio ref={audioRef} loop preload="auto">
        <source src={musicFile} type="audio/mpeg" />
      </audio>

      <AmbientBackground />

      <Sidebar
  open={sidebarOpen}
  setOpen={setSidebarOpen}
  albums={albums}
  selectedAlbum={selectedAlbum}
  onSelectAlbum={setSelectedAlbum}
/>

      <PremiumNavbar
        muted={muted}
        toggleMute={toggleMute}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl flex-col px-6 pb-14 md:px-10 lg:px-14">
        <section className="grid flex-1 items-center gap-14 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
          <div className="order-2 lg:order-1">
            <HeroBadge />

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.08 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              A soft little world
              <span className="block bg-gradient-to-r from-white via-rose-100 to-fuchsia-200 bg-clip-text text-transparent">
                built from us.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-lg"
            >
              Not just a gallery. Not just a page. A warm, living archive of the smiles,
              days, birthdays, surprises, and quiet moments that made everything feel more beautiful.
            </motion.p>

            <HeroActions
              started={started}
              handleEnter={handleEnter}
              setSelectedAlbum={setSelectedAlbum}
            />

            <IntroParagraphs paragraphs={paragraphs} />
          </div>

          <FeaturedImageCard />
        </section>

        <ScrollHint />
        <Albums selectedAlbum={selectedAlbum} />
      </main>
    </div>
  );
}