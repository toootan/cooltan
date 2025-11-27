import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    SlideCover, SlideMacro, SlideWhyNow, SlidePainPoints, SlideBenchmark,
    SlideSolution, SlideCoreAdvantages, SlideSupplyChain, SlideSupplyEvolution,
    SlideOperations, SlideOrgStructure, SlideMarketingLaunch,
    SlideCompetition, SlideFinancials, SlideRisk, SlideRoadmap, SlideEnd
} from './components/Slides';

const SLIDES = [
    SlideCover,
    SlideMacro,
    SlideWhyNow,
    SlidePainPoints,
    SlideBenchmark,
    SlideSolution,
    SlideCoreAdvantages,
    SlideSupplyChain,
    SlideSupplyEvolution,
    SlideOperations,
    SlideOrgStructure,
    SlideMarketingLaunch,
    SlideCompetition,
    SlideFinancials,
    SlideRisk,
    SlideRoadmap,
    SlideEnd
];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const totalSlides = SLIDES.length;

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isMobile) return;
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, isMobile]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    const CurrentSlideComponent = SLIDES[currentSlide];
    const progress = ((currentSlide + 1) / totalSlides) * 100;

    // --- Mobile View (Long Page / Vertical Scroll) ---
    if (isMobile) {
        return (
            <div className="w-full bg-[#020617] text-slate-100 selection:bg-cyan-500/30">
                {/* Mobile Header - Sticky */}
                <div className="sticky top-0 left-0 w-full z-50 px-4 py-3 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 flex items-center justify-between shadow-lg">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xs text-white shadow-lg shadow-cyan-500/20">
                            UT
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm tracking-wide text-white">城市寻宝</span>
                        </div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono border border-slate-800 px-2 py-1 rounded">
                        LONG PAGE MODE
                    </div>
                </div>

                {/* Vertical Scroll Container (No Snap, Natural Scroll with Gaps) */}
                <div className="flex flex-col w-full pb-20 gap-4 bg-[#020617]">
                    {SLIDES.map((SlideComponent, index) => (
                        <div key={index} className="w-full min-h-screen relative border-b border-white/5 last:border-0 flex flex-col">
                             <SlideComponent />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // --- Desktop View (Slideshow) ---
    return (
        <div className="h-screen w-screen bg-[#020617] flex flex-col overflow-hidden text-slate-100 font-sans selection:bg-cyan-500/30">
            {/* Header Overlay */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-start pointer-events-none">
                <div className="flex items-center gap-3 pointer-events-auto">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-xs text-white shadow-lg shadow-cyan-500/20">
                        UT
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-sm tracking-wide text-white">城市寻宝</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">商业计划书</span>
                    </div>
                </div>

                <button onClick={toggleFullscreen} className="text-slate-500 hover:text-white transition-colors pointer-events-auto">
                    {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="h-full w-full"
                    >
                        <CurrentSlideComponent />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="absolute bottom-8 right-8 gap-4 z-40 items-center flex">
                    <span className="text-slate-500 font-mono text-xs mr-4">
                        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                    </span>
                    <button 
                        onClick={prevSlide} 
                        disabled={currentSlide === 0}
                        className="p-4 rounded-full bg-slate-800/50 hover:bg-slate-700 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-md border border-white/10 hover:border-white/20"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        disabled={currentSlide === totalSlides - 1}
                        className="p-4 rounded-full bg-white text-slate-900 hover:bg-cyan-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-900">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;