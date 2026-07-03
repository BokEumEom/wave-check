import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, History, Compass, Droplet, Airplay, Waves, Compass as CompassIcon, AlertCircle } from 'lucide-react';
import { Beach, ActiveTab } from '../types';

interface SavedViewProps {
  savedBeaches: Beach[];
  onToggleSave: (beach: Beach) => void;
  onSelectBeach: (beach: Beach) => void;
  onTabChange: (tab: ActiveTab) => void;
}

export default function SavedView({
  savedBeaches,
  onToggleSave,
  onSelectBeach,
  onTabChange,
}: SavedViewProps) {
  // Hardcoded saved spot images/meta as shown in mockup
  const getCardImage = (id: string) => {
    if (id === 'jukdo') {
      return 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdrXB4NmiVeA6vZP2Ez-wm_brwHXON6BoPl2YJ6riJTjvVdquA7zGWg8vg5de_t9BqegdvVa6fWFPM6KIiUIXAgpQGOv7F1RW2J3Ji-AmRrEp7eb7ljrmUeKJnwDFsQejc4VKNIavCwkbFovZWOqkEYzZ3jUqzbZ66Wll2AMdIiAiVCgVUj4TdFul0n4efpxsjh84aemNmeANWQNQRbhEryp4erVHvvlY3SGNw_6XxXKBZJbBq14WX-ZjTV4klP88qaTSDNom2Ilg';
    }
    return 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgG4za1nfkK1zN1d2SzFhijmFs59uLfZKsWDXmBd76JBWLQ_eB_wy3sj-epahPj74wzUuVxoMSv5SLMlHm3NiYrYsDne8TGKmsA2U4Umr8uj-vROzwwBpBYH20k8S3VWbaqlmlW2LVmAzM9NoVQ9XPfep7oV6EW1ShkjrKcsh-Peldp5B2i6j_67a77IUZ7E4xsZ_Z7_Uplp0nPUlc9V_BqdOXl8fF2LMfQSzbYUHLmz0hZ4wOe4QEhOUgXbqKaYrshMdWBJ9b674';
  };

  const getCardTag = (id: string) => {
    if (id === 'jukdo' || id === 'gyeongpo') {
      return (
        <span className="glass-panel px-3 py-1 rounded-full font-bold text-[10px] text-primary dark:text-blue-400 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-current" />
          베스트 스팟
        </span>
      );
    }
    return (
      <span className="glass-panel px-3 py-1 rounded-full font-bold text-[10px] text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
        <History className="w-3.5 h-3.5" />
        최근 방문
      </span>
    );
  };

  const getCardIndicators = (beach: Beach) => {
    if (beach.id === 'jukdo') {
      return (
        <>
          <div className="flex items-center gap-1 text-secondary dark:text-zinc-400">
            <Droplet className="w-4 h-4 text-blue-500 fill-current" />
            <span className="text-[11px] font-semibold">수온 22°</span>
          </div>
          <div className="flex items-center gap-1 text-secondary dark:text-zinc-400">
            <Airplay className="w-4 h-4 text-zinc-500" />
            <span className="text-[11px] font-semibold">서풍 3m/s</span>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="flex items-center gap-1 text-secondary dark:text-zinc-400">
          <Droplet className="w-4 h-4 text-blue-500 fill-current" />
          <span className="text-[11px] font-semibold">수온 25°</span>
        </div>
        <div className="flex items-center gap-1 text-secondary dark:text-zinc-400">
          <Waves className="w-4 h-4 text-blue-500" />
          <span className="text-[11px] font-semibold">파고 1.5m</span>
        </div>
      </>
    );
  };

  return (
    <div id="saved-view-container" className="pt-16 pb-28 max-w-md mx-auto px-5 space-y-6">
      {/* Top Navigation Bar */}
      <header id="saved-top-nav" className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm">
        <div className="flex items-center justify-between px-5 h-16 w-full max-w-md mx-auto">
          <button className="p-2 active:scale-95 transition-transform text-primary dark:text-blue-400 focus:outline-none">
            <CompassIcon className="w-5 h-5 text-primary dark:text-blue-400" />
          </button>
          <h1 className="font-bold text-[20px] text-primary dark:text-blue-400 tracking-tight">파도체크</h1>
          <button className="p-2 active:scale-95 transition-transform text-primary dark:text-blue-400 focus:outline-none" onClick={() => onTabChange('spot')}>
            <CompassIcon className="w-5 h-5 rotate-45 text-primary dark:text-blue-400" />
          </button>
        </div>
      </header>

      {/* Header Section */}
      <div className="pt-6">
        <h2 className="text-2xl font-extrabold text-on-surface dark:text-white mb-1.5">내가 찜한 스팟</h2>
        <p className="text-xs text-secondary dark:text-zinc-400 leading-relaxed font-medium">
          자주 방문하는 스팟의 파도 정보를 한눈에 확인하세요.
        </p>
      </div>

      {/* Saved Locations Feed */}
      <section id="saved-feed" className="space-y-6">
        <AnimatePresence mode="popLayout">
          {savedBeaches.length > 0 ? (
            savedBeaches.map((beach) => (
              <motion.div
                key={beach.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative group overflow-hidden rounded-3xl shadow-[0_8px_20px_rgba(0,88,188,0.02)] border border-black/5 dark:border-white/5 active:scale-[0.99] transition-transform duration-300 h-64 cursor-pointer"
                onClick={() => onSelectBeach(beach)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${getCardImage(beach.id)}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                {/* Glass Overlay Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    {getCardTag(beach.id)}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(beach);
                      }}
                      className="glass-panel w-10 h-10 rounded-full flex items-center justify-center text-rose-500 focus:outline-none hover:scale-105 transition-transform"
                      aria-label="Remove from bookmarks"
                    >
                      <Heart className="w-5 h-5 fill-current text-rose-500" />
                    </button>
                  </div>

                  <div className="glass-panel p-4 rounded-2xl flex justify-between items-center bg-white/70 dark:bg-zinc-900/70">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-on-surface dark:text-white leading-none">
                        {beach.name}
                      </h3>
                      <div className="flex items-center gap-3 pt-1">
                        {getCardIndicators(beach)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary dark:text-blue-400 font-extrabold text-2xl leading-none">
                        {beach.score}
                      </div>
                      <div className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold mt-1 uppercase tracking-wider">
                        {beach.statusLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              id="saved-empty-state"
              className="py-16 flex flex-col items-center justify-center text-center px-4"
            >
              <div className="w-24 h-24 bg-surface-container-low dark:bg-zinc-900 rounded-full flex items-center justify-center mb-6 shadow-inner animate-bounce">
                <Compass className="w-10 h-10 text-primary dark:text-blue-400 stroke-[1.5px]" />
              </div>
              <h4 className="text-lg font-bold text-on-surface dark:text-white mb-2">아직 저장한 스팟이 없어요.</h4>
              <p className="text-xs text-secondary dark:text-zinc-400 leading-relaxed mb-6">
                지도의 하트 아이콘을 눌러<br />나만의 서핑 스팟을 만들어보세요!
              </p>
              <button
                id="empty-spot-explorer-btn"
                onClick={() => onTabChange('spot')}
                className="bg-primary dark:bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-xs active:scale-95 transition-transform shadow-lg shadow-primary/10 hover:opacity-95 focus:outline-none"
              >
                스팟 찾아보기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
