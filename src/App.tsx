/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ActiveTab, Beach, INITIAL_BEACHES } from './types';
import HomeView from './components/HomeView';
import DetailView from './components/DetailView';
import SpotView from './components/SpotView';
import SavedView from './components/SavedView';
import SettingsView from './components/SettingsView';
import BottomNavBar from './components/BottomNavBar';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [beaches, setBeaches] = useState<Beach[]>(INITIAL_BEACHES);
  
  // Set default home beach to "양양 죽도해변" (jukdo)
  const [selectedHomeBeach, setSelectedHomeBeach] = useState<Beach>(
    INITIAL_BEACHES.find((b) => b.id === 'jukdo') || INITIAL_BEACHES[0]
  );
  
  // Track saved bookmarks (pre-populate with Jukdo and Jungmun as shown in mockup)
  const [savedBeachIds, setSavedBeachIds] = useState<string[]>(['jukdo', 'jungmun']);
  
  // Track beach detail view overlay
  const [activeDetailBeach, setActiveDetailBeach] = useState<Beach | null>(null);

  const savedBeaches = beaches.filter((b) => savedBeachIds.includes(b.id));

  const handleToggleSave = (beach: Beach) => {
    if (savedBeachIds.includes(beach.id)) {
      setSavedBeachIds(savedBeachIds.filter((id) => id !== beach.id));
    } else {
      setSavedBeachIds([...savedBeachIds, beach.id]);
    }
  };

  const handleSelectBeachFromHome = (beach: Beach) => {
    setSelectedHomeBeach(beach);
  };

  const handleSelectBeachForDetail = (beach: Beach) => {
    setActiveDetailBeach(beach);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            beach={selectedHomeBeach}
            allBeaches={beaches}
            onSelectBeach={handleSelectBeachFromHome}
            onTabChange={setActiveTab}
            onViewDetails={() => handleSelectBeachForDetail(selectedHomeBeach)}
          />
        );
      case 'spot':
        return (
          <SpotView
            beaches={beaches}
            onSelectBeach={handleSelectBeachForDetail}
          />
        );
      case 'saved':
        return (
          <SavedView
            savedBeaches={savedBeaches}
            onToggleSave={handleToggleSave}
            onSelectBeach={handleSelectBeachForDetail}
            onTabChange={setActiveTab}
          />
        );
      case 'settings':
        return <SettingsView userEmail="bokmail83@gmail.com" />;
      default:
        return null;
    }
  };

  return (
    <div id="app-frame" className="min-h-screen bg-[#fafaf5] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Mobile Frame Wrapper on desktop, normal mobile on screen */}
      <div id="mobile-viewport" className="relative max-w-md mx-auto bg-[#fafaf5] dark:bg-zinc-950 min-h-screen shadow-2xl shadow-black/5 dark:shadow-none border-x border-black/5 dark:border-white/5">
        
        {/* Detail view overlays normal page if open */}
        <AnimatePresence mode="wait">
          {activeDetailBeach ? (
            <motion.div
              key="detail-view"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="absolute inset-0 z-50 bg-[#fafaf5] dark:bg-zinc-950 overflow-y-auto"
            >
              <DetailView
                beach={activeDetailBeach}
                onBack={() => setActiveDetailBeach(null)}
                isSaved={savedBeachIds.includes(activeDetailBeach.id)}
                onToggleSave={() => handleToggleSave(activeDetailBeach)}
              />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              {renderActiveView()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bottom Navigation Bar */}
        <BottomNavBar
          activeTab={activeTab}
          onTabChange={(tab) => {
            // Close detail view on tab change
            setActiveDetailBeach(null);
            setActiveTab(tab);
          }}
        />
      </div>
    </div>
  );
}
