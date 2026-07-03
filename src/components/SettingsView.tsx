import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Shield, Info, Sun, Moon, Bell, HelpCircle, Eye, RefreshCw, Smartphone, ChevronRight } from 'lucide-react';

interface SettingsViewProps {
  userEmail: string;
}

export default function SettingsView({ userEmail }: SettingsViewProps) {
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [windUnit, setWindUnit] = useState<'ms' | 'knots' | 'kmh'>('ms');
  const [notifications, setNotifications] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from document class
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  return (
    <div id="settings-view-container" className="pt-16 pb-28 max-w-md mx-auto px-5 space-y-6">
      {/* Top App Bar */}
      <header id="settings-top-nav" className="fixed top-0 left-0 right-0 z-40 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm">
        <div className="flex items-center justify-between px-5 h-16 w-full max-w-md mx-auto">
          <div className="w-10" />
          <h1 className="font-bold text-[18px] text-primary dark:text-blue-400">설정</h1>
          <div className="w-10" />
        </div>
      </header>

      {/* User Profile Block */}
      <section id="settings-profile" className="pt-6">
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 shadow-[0_8px_20px_rgba(0,88,188,0.02)] border border-black/5 dark:border-white/5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow-md shadow-blue-500/10">
            {userEmail ? userEmail.substring(0, 2).toUpperCase() : 'ME'}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-extrabold text-base text-on-surface dark:text-white truncate">
              {userEmail ? userEmail.split('@')[0] : '서퍼 아이다'}
            </h3>
            <p className="text-xs text-secondary dark:text-zinc-400 mt-0.5 truncate">{userEmail || 'bokmail83@gmail.com'}</p>
          </div>
          <span className="bg-primary/10 dark:bg-blue-500/10 text-primary dark:text-blue-400 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm">
            프리미엄 서퍼
          </span>
        </div>
      </section>

      {/* Units Configuration Settings Group */}
      <section id="settings-units" className="space-y-3">
        <h3 className="text-xs font-bold text-secondary dark:text-zinc-400 px-1">단위 설정</h3>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4 space-y-4 border border-black/5 dark:border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
          {/* Temperature unit switcher */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">온도 단위</span>
            <div className="bg-zinc-100 dark:bg-zinc-850 p-1 rounded-full flex gap-1">
              <button
                onClick={() => setTempUnit('C')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
                  tempUnit === 'C'
                    ? 'bg-white dark:bg-zinc-800 text-primary dark:text-blue-400 shadow-sm'
                    : 'text-zinc-400'
                }`}
              >
                °C
              </button>
              <button
                onClick={() => setTempUnit('F')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
                  tempUnit === 'F'
                    ? 'bg-white dark:bg-zinc-800 text-primary dark:text-blue-400 shadow-sm'
                    : 'text-zinc-400'
                }`}
              >
                °F
              </button>
            </div>
          </div>

          <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

          {/* Wind unit switcher */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">풍속 단위</span>
            <div className="bg-zinc-100 dark:bg-zinc-850 p-1 rounded-full flex gap-1">
              <button
                onClick={() => setWindUnit('ms')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
                  windUnit === 'ms'
                    ? 'bg-white dark:bg-zinc-800 text-primary dark:text-blue-400 shadow-sm'
                    : 'text-zinc-400'
                }`}
              >
                m/s
              </button>
              <button
                onClick={() => setWindUnit('knots')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
                  windUnit === 'knots'
                    ? 'bg-white dark:bg-zinc-800 text-primary dark:text-blue-400 shadow-sm'
                    : 'text-zinc-400'
                }`}
              >
                Knots
              </button>
              <button
                onClick={() => setWindUnit('kmh')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all focus:outline-none ${
                  windUnit === 'kmh'
                    ? 'bg-white dark:bg-zinc-800 text-primary dark:text-blue-400 shadow-sm'
                    : 'text-zinc-400'
                }`}
              >
                km/h
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* App Preferences */}
      <section id="settings-preferences" className="space-y-3">
        <h3 className="text-xs font-bold text-secondary dark:text-zinc-400 px-1">앱 설정</h3>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4 space-y-4 border border-black/5 dark:border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
          {/* Notifications Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                <Bell className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">실시간 파도 경보</span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                notifications ? 'bg-primary dark:bg-blue-600' : 'bg-zinc-200 dark:bg-zinc-700'
              }`}
            >
              <motion.div
                layout
                className="w-5 h-5 bg-white rounded-full absolute top-0.5"
                animate={{ left: notifications ? '26px' : '2px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>

          <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

          {/* Theme switcher */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">다크 모드</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                isDarkMode ? 'bg-primary dark:bg-blue-600' : 'bg-zinc-200 dark:bg-zinc-700'
              }`}
            >
              <motion.div
                layout
                className="w-5 h-5 bg-white rounded-full absolute top-0.5"
                animate={{ left: isDarkMode ? '26px' : '2px' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Info settings block */}
      <section id="settings-info" className="space-y-3">
        <h3 className="text-xs font-bold text-secondary dark:text-zinc-400 px-1">정보</h3>
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4 space-y-4 border border-black/5 dark:border-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">앱 버전</span>
            </div>
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-bold font-sans">v1.2.0 (Official)</span>
          </div>

          <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

          <div className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-primary transition-colors">개인정보 처리방침</span>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </div>

          <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

          <div className="flex items-center justify-between cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                <Info className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-primary transition-colors">이용 약관</span>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </section>

      {/* Footer copyright */}
      <footer className="text-center pt-2 pb-6 space-y-1">
        <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-sans">
          © 2026 Wave Check Inc. All rights reserved.
        </p>
        <p className="text-[9px] text-zinc-400/80 dark:text-zinc-500/80">
          대한민국 동남서 전 해안 실시간 서핑 예보 전용 어플리케이션
        </p>
      </footer>
    </div>
  );
}
