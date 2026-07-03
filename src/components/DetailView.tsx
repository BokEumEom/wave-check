import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Heart, Droplet, Waves, Wind, Sun, Navigation, Map, ShieldAlert, Sparkles, AlertCircle, Compass, Timer, ChevronRight } from 'lucide-react';
import { Beach } from '../types';

interface DetailViewProps {
  beach: Beach;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export default function DetailView({
  beach,
  onBack,
  isSaved,
  onToggleSave,
}: DetailViewProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Guide Steps Simulation
  const guideSteps = [
    { title: '서울 출발 (고속도로 진입)', desc: '올림픽대로를 거쳐 서울양양고속도로에 진입하세요.' },
    { title: '내린천 휴게소 추천', desc: '출발 후 약 1시간 지점. 맛있는 간식과 화장실이 구비되어 있습니다.' },
    { title: '하조대 IC 진출', desc: '동해고속도로 삼척방면 진행 후 하조대 IC에서 우회전하세요.' },
    { title: '동해대로 따라 직진', desc: '남애방면 동해대로를 따라 약 8km 주행하세요.' },
    { title: '죽도해변 삼거리 좌회전', desc: '인구중앙길 방향으로 좌회전 후 300m 진행 시 목적지 도착!' }
  ];

  return (
    <div id="detail-view-container" className="pt-16 pb-28 max-w-md mx-auto px-5 space-y-6">
      {/* Top AppBar */}
      <header id="detail-top-nav" className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm">
        <div className="flex items-center justify-between px-5 h-16 w-full max-w-md mx-auto">
          <button
            id="detail-back-button"
            onClick={onBack}
            className="flex items-center justify-center w-10 h-10 active:scale-95 transition-transform hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-primary focus:outline-none"
            aria-label="Back"
          >
            <ArrowLeft className="w-6 h-6 text-primary dark:text-blue-400" />
          </button>
          <h1 className="font-bold text-[18px] text-primary dark:text-blue-400">
            {beach.name}
          </h1>
          <button
            id="detail-heart-toggle"
            onClick={onToggleSave}
            className="w-10 h-10 rounded-full flex items-center justify-center active:scale-95 transition-transform hover:bg-black/5 dark:hover:bg-white/5 text-primary focus:outline-none"
            aria-label="Save Beach"
          >
            <Heart
              className={`w-6 h-6 transition-colors ${isSaved ? 'text-rose-500 fill-rose-500' : 'text-primary dark:text-blue-400'}`}
            />
          </button>
        </div>
      </header>

      {/* Hero Condition Card */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-4"
      >
        <div className="relative w-full h-52 rounded-3xl overflow-hidden shadow-md group border border-black/5 dark:border-white/5">
          <div
            className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url('${beach.detailHeroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-1.5 text-blue-200">
              <Droplet className="w-4 h-4 fill-current text-blue-300 animate-pulse" />
              <span className="font-semibold text-xs tracking-wide">현재 수온 {beach.waterTemp}</span>
            </div>
            <p className="text-[22px] font-bold mt-1 tracking-tight text-white drop-shadow-sm">
              서핑하기 아주 좋은 날
            </p>
          </div>
        </div>
      </motion.section>

      {/* Recommendation Panel */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="glass-panel p-4 rounded-2xl flex items-start gap-3 border border-black/5 dark:border-white/5 bg-white/70 dark:bg-zinc-900/70"
      >
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
          <Sparkles className="w-5 h-5 text-primary dark:text-blue-400" />
        </div>
        <div className="space-y-1">
          <p className="text-sm text-on-surface dark:text-zinc-200 leading-relaxed font-medium">
            {beach.recommendation}
          </p>
          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-sans block">Wave Check AI Recommendation</span>
        </div>
      </motion.section>

      {/* Wave Chart Section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <h2 className="font-bold text-xs text-secondary dark:text-zinc-400 px-1 flex justify-between items-end">
          <span>오늘의 파도 변화</span>
          <span className="text-[10px] opacity-60 font-sans font-semibold">단위: m</span>
        </h2>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-sm relative overflow-hidden h-52 border border-black/5 dark:border-white/5">
          <svg className="absolute inset-x-0 bottom-0 w-full h-32" preserveAspectRatio="none" viewBox="0 0 400 120">
            <defs>
              <linearGradient id="waveGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0058bc', stopOpacity: 0.2 }}></stop>
                <stop offset="100%" style={{ stopColor: '#0058bc', stopOpacity: 0 }}></stop>
              </linearGradient>
            </defs>
            <path d="M0 80 Q 50 100 100 60 T 200 40 T 300 90 T 400 50 V 120 H 0 Z" fill="url(#waveGradient)"></path>
            <path d="M0 80 Q 50 100 100 60 T 200 40 T 300 90 T 400 50" fill="none" stroke="#0058bc" strokeLinecap="round" strokeWidth="3.5"></path>
            {/* Points */}
            <circle cx="200" cy="40" fill="#0058bc" r="5" className="animate-pulse"></circle>
          </svg>
          <div className="relative z-10 flex justify-between h-full items-end pb-2 text-xs font-semibold text-zinc-400 dark:text-zinc-500 font-sans">
            <span>06:00</span>
            <span className="font-bold text-primary dark:text-blue-400">15:00</span>
            <span>21:00</span>
          </div>
          {/* Indicator Tooltip */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary dark:bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
            <Waves className="w-3.5 h-3.5 fill-current" />
            최고 1.2m
          </div>
        </div>
      </motion.section>

      {/* Hourly Forecast */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="space-y-2"
      >
        <h2 className="font-bold text-xs text-secondary dark:text-zinc-400 px-1">시간별 상세 예보</h2>
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto hide-scrollbar pb-1 cursor-grab active:cursor-grabbing snap-x"
        >
          {beach.hourlyForecast.map((block, idx) => {
            const isActive = block.active;
            return (
              <div
                key={idx}
                className={`flex-shrink-0 w-24 snap-center p-3 rounded-2xl flex flex-col items-center gap-2 border transition-all ${
                  isActive
                    ? 'bg-primary dark:bg-blue-600 text-white shadow-md border-transparent scale-102'
                    : 'bg-white dark:bg-zinc-900 border-black/5 dark:border-white/5 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                <span className={`text-[11px] font-medium ${isActive ? 'opacity-90' : 'text-zinc-400 dark:text-zinc-500'}`}>
                  {block.time}
                </span>
                {block.iconType === 'tsunami' ? (
                  <Waves className={`w-7 h-7 stroke-[2.2px] ${isActive ? 'text-white' : 'text-primary dark:text-blue-400'}`} />
                ) : (
                  <Waves className="w-7 h-7 text-zinc-400 dark:text-zinc-500 opacity-80" />
                )}
                <span className="font-bold text-sm tracking-tight">{block.waveHeight}</span>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Detailed Metrics Grid */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        <h2 className="font-bold text-xs text-secondary dark:text-zinc-400 px-1">상세 해양 정보</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Tide Level */}
          <div className="bg-secondary-container/40 dark:bg-zinc-900/40 p-4 rounded-2xl flex flex-col gap-1 border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500">
              <Timer className="w-4 h-4" />
              <span className="text-xs font-semibold">물때 (만조)</span>
            </div>
            <span className="text-lg font-bold text-on-surface dark:text-white mt-1">
              {beach.tideTime}
            </span>
            <span className="text-xs text-secondary/70 dark:text-zinc-500 font-medium">
              {beach.tideHeight}
            </span>
          </div>

          {/* Wind */}
          <div className="bg-secondary-container/40 dark:bg-zinc-900/40 p-4 rounded-2xl flex flex-col gap-1 border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500">
              <Wind className="w-4 h-4" />
              <span className="text-xs font-semibold">바람</span>
            </div>
            <span className="text-lg font-bold text-on-surface dark:text-white mt-1">
              {beach.windDirection}
            </span>
            <span className="text-xs text-secondary/70 dark:text-zinc-500 font-medium">
              풍속 {beach.windSpeed}
            </span>
          </div>

          {/* Sunrise/Sunset */}
          <div className="bg-secondary-container/40 dark:bg-zinc-900/40 p-4 rounded-2xl col-span-2 flex items-center justify-between border border-black/5 dark:border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold">일출</span>
                <span className="font-bold text-on-surface dark:text-white text-sm mt-0.5">{beach.sunrise}</span>
              </div>
              <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="flex flex-col">
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-semibold">일몰</span>
                <span className="font-bold text-on-surface dark:text-white text-sm mt-0.5">{beach.sunset}</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full">
              <Sun className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold">{beach.weatherStatus}</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Action */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsNavigating(true)}
        className="w-full h-14 bg-primary dark:bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-primary/10 flex items-center justify-center gap-2 active:scale-95 transition-transform focus:outline-none"
      >
        <Navigation className="w-5 h-5 fill-current" />
        길찾기 시작
      </motion.button>

      {/* Simulated Navigation Modal */}
      <AnimatePresence>
        {isNavigating && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavigating(false)}
              className="fixed inset-0 z-50 bg-black"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white dark:bg-zinc-900 border-t border-black/5 dark:border-white/5 max-w-md mx-auto overflow-hidden shadow-2xl"
            >
              <div className="p-5 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-primary/5 dark:bg-blue-500/5">
                <div className="flex items-center gap-2 text-primary dark:text-blue-400">
                  <Map className="w-5 h-5" />
                  <h3 className="text-lg font-bold">길찾기 경로 안내</h3>
                </div>
                <button
                  onClick={() => setIsNavigating(false)}
                  className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-white focus:outline-none"
                >
                  <ArrowLeft className="w-4 h-4 rotate-270" />
                </button>
              </div>
              <div className="p-5 max-h-[60dvh] overflow-y-auto space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/30 p-3 rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-relaxed font-medium">
                    본 가이드는 서울 출발(양양 죽도) 기준 추천 경로입니다. 해변 주차장이 협소하므로 조기 출발을 권장해 드립니다.
                  </p>
                </div>

                <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-100 dark:before:bg-zinc-800">
                  {guideSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 relative">
                      <div className="w-7.5 h-7.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 flex items-center justify-center font-bold text-xs border-2 border-white dark:border-zinc-900 flex-shrink-0 shadow-sm">
                        {idx + 1}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-sm text-on-surface dark:text-white">{step.title}</h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsNavigating(false)}
                  className="w-full h-12 bg-primary dark:bg-blue-600 text-white rounded-full font-bold text-sm shadow-md mt-4 focus:outline-none"
                >
                  확인 완료
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
