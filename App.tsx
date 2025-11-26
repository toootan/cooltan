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
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;
    const totalSlides = SLIDES.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(prev => Math.max(prev - 1, 0));
    }, []);

    // Swipe Handlers
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

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

    return (
        <div 
            className="h-screen w-screen bg-[#020617] flex flex-col overflow-hidden text-slate-100 font-sans selection:bg-cyan-500/30"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
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

                {/* Navigation Controls - Hidden on Mobile */}
                <div className="absolute bottom-8 right-8 gap-4 z-40 items-center hidden md:flex">
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