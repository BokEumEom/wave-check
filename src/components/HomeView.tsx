import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Search, Waves, Timer, Airplay, Compass, History, Info, ChevronRight, X, Sparkles } from 'lucide-react';
import { Beach, ActiveTab } from '../types';

interface HomeViewProps {
  beach: Beach;
  allBeaches: Beach[];
  onSelectBeach: (beach: Beach) => void;
  onTabChange: (tab: ActiveTab) => void;
  onViewDetails: () => void;
}

export default function HomeView({
  beach,
  allBeaches,
  onSelectBeach,
  onTabChange,
  onViewDetails,
}: HomeViewProps) {
  const [isBeachSelectorOpen, setIsBeachSelectorOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Status-specific styles
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case '서핑 좋음':
        return 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(0,88,188,0.2)]';
      case '보통':
        return 'bg-secondary-container text-on-secondary-container';
      case '잔잔함':
        return 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20';
      default:
        return 'bg-amber-500/10 text-amber-600 border border-amber-500/20';
    }
  };

  return (
    <div id="home-view-container" className="pt-16 pb-28 max-w-md mx-auto px-5 space-y-6">
      {/* TopAppBar */}
      <nav id="home-top-nav" className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm">
        <div className="flex items-center justify-between px-5 h-16 w-full max-w-md mx-auto">
          <button
            id="home-beach-selector-trigger"
            onClick={() => setIsBeachSelectorOpen(true)}
            className="flex items-center gap-2 active:scale-95 transition-transform text-primary dark:text-primary-fixed cursor-pointer focus:outline-none"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-bold text-[20px] tracking-tight text-primary dark:text-blue-400">
              {beach.name}
            </span>
            <ChevronRight className="w-4 h-4 opacity-50 rotate-90" />
          </button>
          <button
            id="home-search-trigger"
            onClick={() => onTabChange('spot')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-secondary dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 transition-transform focus:outline-none"
            aria-label="Search spot"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Welcome Title */}
      <header id="home-header" className="pt-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-extrabold text-on-surface dark:text-white tracking-tight"
        >
          오늘 파도 어때요?
        </motion.h1>
      </header>

      {/* Hero Card */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        id="home-hero-card"
        onClick={onViewDetails}
        className="relative overflow-hidden bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-[0_8px_20px_rgba(0,88,188,0.03)] border border-black/5 dark:border-white/5 cursor-pointer hover:shadow-lg transition-shadow group"
      >
        {/* Animated Decorative Element */}
        <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-container/5 dark:bg-blue-500/5 rounded-full blur-3xl transition-transform group-hover:scale-110 duration-700" />
        
        <div className="relative z-10 flex flex-col items-center py-4">
          <span
            id="hero-status-badge"
            className={`px-5 py-1.5 rounded-full text-sm font-semibold mb-4 transition-all ${getStatusBadgeStyle(beach.statusText)}`}
          >
            {beach.statusText}
          </span>
          <div className="flex items-baseline gap-1 mt-2">
            <span id="hero-score-value" className="text-[64px] font-extrabold text-primary dark:text-blue-400 leading-none tracking-tighter">
              {beach.score}
            </span>
            <span className="text-xl font-bold text-primary/60 dark:text-blue-400/60">점</span>
          </div>
          <p className="text-sm font-medium text-secondary dark:text-zinc-400 mt-2">오늘의 파도 점수</p>

          <div className="w-full h-12 mt-6 bg-surface-container-low dark:bg-zinc-800 rounded-full relative overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${beach.score}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute top-0 left-0 h-full ocean-gradient rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold tracking-wider drop-shadow-sm">
              Intensity {beach.score}%
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-4 text-[12px] text-primary dark:text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
            <Sparkles className="w-3.5 h-3.5" />
            <span>탭하여 시간별 예보 및 물때 상세 정보 보기</span>
          </div>
        </div>
      </motion.section>

      {/* Metrics Grid */}
      <section id="home-metrics-grid" className="grid grid-cols-2 gap-4">
        {/* Metric 1: Wave Height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="bg-secondary-container/20 dark:bg-zinc-900/40 p-4 rounded-2xl flex flex-col gap-2 border border-black/5 dark:border-white/5 hover:bg-secondary-container/30 transition-colors"
        >
          <div className="flex items-center gap-2 text-secondary dark:text-zinc-400">
            <Waves className="w-5 h-5 text-primary dark:text-blue-400" />
            <span className="text-xs font-semibold">파고</span>
          </div>
          <div className="mt-2">
            <span id="metric-wave-height" className="text-xl font-extrabold text-on-surface dark:text-white">
              {beach.waveHeight}
            </span>
            <p className="text-[10px] text-secondary/70 dark:text-zinc-500 font-medium mt-0.5">Moderate Swell</p>
          </div>
        </motion.div>

        {/* Metric 2: Period */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-secondary-container/20 dark:bg-zinc-900/40 p-4 rounded-2xl flex flex-col gap-2 border border-black/5 dark:border-white/5 hover:bg-secondary-container/30 transition-colors"
        >
          <div className="flex items-center gap-2 text-secondary dark:text-zinc-400">
            <Timer className="w-5 h-5 text-primary dark:text-blue-400" />
            <span className="text-xs font-semibold">파주기</span>
          </div>
          <div className="mt-2">
            <span id="metric-wave-period" className="text-xl font-extrabold text-on-surface dark:text-white">
              {beach.wavePeriod}
            </span>
            <p className="text-[10px] text-secondary/70 dark:text-zinc-500 font-medium mt-0.5 font-sans">Clean Intervals</p>
          </div>
        </motion.div>

        {/* Metric 3: Wind */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-secondary-container/20 dark:bg-zinc-900/40 p-4 rounded-2xl flex flex-col gap-2 border border-black/5 dark:border-white/5 hover:bg-secondary-container/30 transition-colors"
        >
          <div className="flex items-center gap-2 text-secondary dark:text-zinc-400">
            <Airplay className="w-5 h-5 text-primary dark:text-blue-400" />
            <span className="text-xs font-semibold">바람</span>
          </div>
          <div className="mt-2">
            <span id="metric-wind-speed" className="text-xl font-extrabold text-on-surface dark:text-white">
              {beach.windSpeed}
            </span>
            <p className="text-[10px] text-secondary/70 dark:text-zinc-500 font-medium mt-0.5">{beach.windDirection}</p>
          </div>
        </motion.div>

        {/* Metric 4: Swell Direction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-secondary-container/20 dark:bg-zinc-900/40 p-4 rounded-2xl flex flex-col gap-2 border border-black/5 dark:border-white/5 hover:bg-secondary-container/30 transition-colors"
        >
          <div className="flex items-center gap-2 text-secondary dark:text-zinc-400">
            <Compass className="w-5 h-5 text-primary dark:text-blue-400" />
            <span className="text-xs font-semibold">스웰 방향</span>
          </div>
          <div className="mt-2">
            <span id="metric-swell-direction" className="text-xl font-extrabold text-on-surface dark:text-white">
              {beach.swellDirection}
            </span>
            <p className="text-[10px] text-secondary/70 dark:text-zinc-500 font-medium mt-0.5">{beach.swellAngle}</p>
          </div>
        </motion.div>
      </section>

      {/* Beach View Action */}
      <section id="home-actions" className="space-y-3 pt-2 text-center">
        <button
          id="home-action-other-beaches"
          onClick={() => onTabChange('spot')}
          className="w-full ocean-gradient text-white py-4 rounded-full font-bold shadow-[0_8px_16px_rgba(0,88,188,0.15)] active:scale-95 transition-all focus:outline-none hover:opacity-95"
        >
          다른 해변 보기
        </button>
        <div className="flex items-center justify-center gap-2 text-secondary dark:text-zinc-400 pt-1">
          <History className="w-4 h-4 text-zinc-400" />
          <span className="text-[12px] font-medium text-secondary/85 dark:text-zinc-400/85">
            업데이트 12분 전 · 데이터 정상
          </span>
        </div>
      </section>

      {/* Bento Secondary Info */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        id="home-bento-section"
        className="bg-surface-container-low dark:bg-zinc-900 p-4 rounded-3xl border border-black/5 dark:border-white/5"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-on-surface dark:text-white">해변 상태 요약</h3>
          <Info className="w-4 h-4 text-secondary dark:text-zinc-400" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {beach.summaryImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveImageIndex(idx)}
              className="bg-cover bg-center h-20 rounded-xl cursor-pointer shadow-sm relative overflow-hidden group"
              style={{ backgroundImage: `url('${img}')` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={beach.summaryImages[activeImageIndex]}
              alt="Beach Status Detail"
              className="max-w-full max-h-[75dvh] rounded-2xl shadow-2xl object-cover"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-12 left-0 right-0 text-center text-white/70 text-xs px-6">
              {beach.name} 실시간 전경 요약 이미지
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Beach Selector Drawer */}
      <AnimatePresence>
        {isBeachSelectorOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBeachSelectorOpen(false)}
              className="fixed inset-0 z-50 bg-black"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white dark:bg-zinc-900 border-t border-black/5 dark:border-white/5 max-w-md mx-auto overflow-hidden shadow-2xl"
            >
              <div className="p-5 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-on-surface dark:text-white">해변 변경하기</h3>
                <button
                  onClick={() => setIsBeachSelectorOpen(false)}
                  className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-white focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 max-h-[50dvh] overflow-y-auto space-y-2">
                {allBeaches.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onSelectBeach(b);
                      setIsBeachSelectorOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-colors focus:outline-none ${
                      b.id === beach.id
                        ? 'bg-primary/5 dark:bg-blue-500/10 text-primary dark:text-blue-400 font-semibold border border-primary/20 dark:border-blue-500/20'
                        : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={b.bgImage} alt={b.name} className="w-10 h-10 rounded-xl object-cover" />
                      <div className="text-left">
                        <div className="font-bold">{b.name}</div>
                        <div className="text-xs text-secondary dark:text-zinc-400 mt-0.5">{b.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full text-zinc-500 dark:text-zinc-400 font-semibold">
                        {b.waveHeight}
                      </span>
                      {b.id === beach.id && (
                        <div className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
