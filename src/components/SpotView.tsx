import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, SlidersHorizontal, AlertCircle, Waves, ChevronRight } from 'lucide-react';
import { Beach } from '../types';

interface SpotViewProps {
  beaches: Beach[];
  onSelectBeach: (beach: Beach) => void;
}

type RegionFilter = '전체' | '강원' | '충청' | '제주' | '부산';

export default function SpotView({ beaches, onSelectBeach }: SpotViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('전체');

  const regions: RegionFilter[] = ['전체', '강원', '충청', '제주', '부산'];

  // Filter beaches based on query and selected region
  const filteredBeaches = useMemo(() => {
    return beaches.filter((beach) => {
      const matchesSearch = beach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            beach.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = activeRegion === '전체' || beach.region === activeRegion;
      return matchesSearch && matchesRegion;
    });
  }, [beaches, searchQuery, activeRegion]);

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case '서핑 좋음':
        return 'bg-blue-500/10 text-primary dark:text-blue-400 border border-blue-500/20';
      case '보통':
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700';
      case '잔잔함':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20';
      default:
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20';
    }
  };

  // Convert "1.2m" to visual progress percentage (e.g. 1.2m / 2.0m * 100)
  const getProgressPercentage = (waveHeight: string) => {
    const val = parseFloat(waveHeight.replace('m', '')) || 0.5;
    return Math.min(Math.round((val / 2.0) * 100), 100);
  };

  return (
    <div id="spot-view-container" className="pt-16 pb-28 max-w-md mx-auto px-5 space-y-6">
      {/* Top App Bar */}
      <header id="spot-top-nav" className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm">
        <div className="flex items-center justify-between px-5 h-16 w-full max-w-md mx-auto">
          <div className="flex items-center gap-2 text-primary dark:text-blue-400 active:scale-95 transition-transform cursor-pointer">
            <MapPin className="w-5 h-5 text-primary dark:text-blue-400" />
            <span className="font-bold text-[20px] tracking-tight">파도체크</span>
          </div>
          <button
            onClick={() => setSearchQuery('')}
            className="text-primary dark:text-blue-400 hover:opacity-80 transition-opacity active:scale-95 focus:outline-none"
            aria-label="Refresh list"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Search Section */}
      <section id="spot-search-section" className="pt-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-secondary dark:text-zinc-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="spot-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="해변이나 스팟을 검색해보세요"
            className="w-full h-14 pl-12 pr-12 bg-surface-container-low dark:bg-zinc-900 border-none rounded-full focus:ring-2 focus:ring-primary/20 dark:focus:ring-blue-500/20 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 text-sm font-medium transition-all shadow-inner focus:outline-none text-zinc-800 dark:text-zinc-200"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-4 flex items-center text-xs font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-white"
            >
              지우기
            </button>
          )}
        </div>
      </section>

      {/* Category Filters */}
      <section id="spot-filters-section" className="overflow-x-auto hide-scrollbar -mx-5 px-5">
        <div className="flex gap-2 pb-1">
          {regions.map((region) => {
            const isSelected = activeRegion === region;
            return (
              <button
                key={region}
                id={`filter-btn-${region}`}
                onClick={() => setActiveRegion(region)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-bold text-xs transition-all active:scale-95 focus:outline-none ${
                  isSelected
                    ? 'bg-primary dark:bg-blue-600 text-white shadow-md shadow-primary/10'
                    : 'bg-secondary-container/30 dark:bg-zinc-900/60 text-secondary dark:text-zinc-400 hover:bg-secondary-container/50'
                }`}
              >
                {region}
              </button>
            );
          })}
        </div>
      </section>

      {/* Beach List */}
      <section id="spot-beach-list" className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredBeaches.length > 0 ? (
            filteredBeaches.map((beach, idx) => (
              <motion.div
                key={beach.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.03, duration: 0.2 }}
                onClick={() => onSelectBeach(beach)}
                className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-4 shadow-[0_8px_20px_rgba(0,88,188,0.02)] border border-black/5 dark:border-white/5 hover:border-primary/10 dark:hover:border-blue-500/10 active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105 duration-500"
                      style={{ backgroundImage: `url('${beach.bgImage}')` }}
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-base text-on-surface dark:text-white">
                          {beach.name}
                        </h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${getStatusBadgeStyle(beach.statusText)}`}>
                          {beach.statusLabel}
                        </span>
                      </div>
                      <p className="text-secondary dark:text-zinc-400 text-[11px] font-medium mt-1">
                        {beach.address}
                      </p>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-zinc-400 dark:text-zinc-500 text-[10px] font-semibold">파도 높이</span>
                        <span className="text-primary dark:text-blue-400 font-bold text-xs">
                          {beach.waveHeight}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${getProgressPercentage(beach.waveHeight)}%` }}
                          transition={{ duration: 0.6 }}
                          className="h-full bg-gradient-to-r from-blue-300 to-primary dark:to-blue-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900/30 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800"
            >
              <AlertCircle className="w-10 h-10 stroke-[1.5px] text-zinc-300 mb-2" />
              <h4 className="font-bold text-sm text-zinc-600 dark:text-zinc-400">검색 결과가 없어요</h4>
              <p className="text-[11px] mt-1 text-zinc-400 dark:text-zinc-500">다른 키워드나 필터로 검색해 보세요.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
