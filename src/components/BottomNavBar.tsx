import { motion } from 'motion/react';
import { Home, Compass, Heart, Settings } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export default function BottomNavBar({ activeTab, onTabChange }: BottomNavBarProps) {
  const tabs = [
    { id: 'home' as ActiveTab, label: '홈', icon: Home },
    { id: 'spot' as ActiveTab, label: '스팟', icon: Compass },
    { id: 'saved' as ActiveTab, label: '저장', icon: Heart },
    { id: 'settings' as ActiveTab, label: '설정', icon: Settings },
  ];

  return (
    <nav id="bottom-nav-bar" className="fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl border-t border-black/5 dark:border-white/5 shadow-[0_-8px_20px_rgba(0,88,188,0.04)]">
      <div className="flex justify-around items-center h-20 w-full px-5 pb-safe max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`nav-btn-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className="relative flex flex-col items-center justify-center py-2 px-3 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 rounded-xl"
              aria-label={tab.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-primary/10 dark:bg-primary-fixed-dim/10 rounded-xl -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center ${
                  isActive ? 'text-primary dark:text-primary-fixed-dim font-semibold' : 'text-secondary dark:text-zinc-400'
                }`}
              >
                <Icon
                  id={`nav-icon-${tab.id}`}
                  className={`w-6 h-6 transition-transform ${isActive ? 'stroke-[2.5px]' : 'stroke-[2px]'}`}
                  fill={isActive && tab.id === 'saved' ? 'currentColor' : 'none'}
                />
                <span id={`nav-text-${tab.id}`} className="text-[11px] leading-4 mt-1 font-medium">
                  {tab.label}
                </span>
              </motion.div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
