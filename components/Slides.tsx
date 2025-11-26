import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, ShoppingBag, Search, Zap, Anchor, Users,
  ArrowRight, ShieldCheck, Clock, Layers, MapPin, DollarSign,
  BarChart3, Target, Rocket, Sparkles, Coffee, Gem, CheckCircle,
  ClipboardCheck, RefreshCw, UserCheck, AlertTriangle, Percent,
  Flame, UserPlus, Megaphone, ShieldAlert, Lock, Scale, Store, Ghost,
  Calendar, Award, Heart, Truck, Package, Repeat, Share2
} from 'lucide-react';
import { KShapeChart, CompetitiveRadar, FinancialChart } from './Charts';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- Shared Components ---

const BackgroundOrbs = () => (
    <>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-cyan-900/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
    </>
);

const BigNumber = ({ number }: { number: string }) => (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[400px] font-bold leading-none text-white/[0.03] select-none pointer-events-none -z-10 font-sans tracking-tighter">
        {number}
    </div>
);

const GradientText = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 ${className}`}>
        {children}
    </span>
);

const GlassCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <div className={`glass-card p-6 md:p-8 rounded-3xl border border-white/10 bg-[#1e293b]/40 backdrop-blur-xl ${className}`}>
        {children}
    </div>
);

// --- Slide Components ---

export const SlideCover = () => (
  <div className="h-full w-full p-4 md:p-8 flex items-center justify-center relative overflow-hidden bg-[#020617]">
    {/* Background effects */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
    
    <div className="max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 z-10">
        
        {/* Main Title Block - Top Left (Large) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-8 md:row-span-4 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
        >
            <div className="absolute top-0 right-0 p-40 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-1000"></div>
            
            <div className="flex items-center gap-3 relative z-10">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                </div>
                <div className="text-slate-400 font-mono text-xs tracking-widest uppercase border-l border-slate-700 pl-3 ml-1">Business Plan 202X</div>
            </div>

            <div className="relative z-10 mt-8 md:mt-0">
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-2 leading-[0.9]">
                    URBAN <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">VAULT.</span>
                </h1>
                <p className="text-2xl md:text-3xl text-slate-400 font-light mt-6 flex items-center gap-3">
                    城市宝库计划 <span className="text-slate-700 text-lg">|</span> <span className="text-lg text-slate-500">线下零售新物种</span>
                </p>
            </div>
            
            <div className="flex items-center gap-4 mt-8 relative z-10">
                 <div className="px-6 py-3 rounded-full bg-white text-slate-900 text-sm font-bold hover:bg-cyan-50 transition-colors cursor-pointer flex items-center gap-2 shadow-lg hover:shadow-cyan-500/25">
                    Start Presentation <ArrowRight size={16}/>
                 </div>
                 <div className="px-6 py-3 rounded-full border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
                    View Data
                 </div>
            </div>
        </motion.div>

        {/* Top Right - Status / Abstract Widget */}
        <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="md:col-span-4 md:row-span-3 bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden shadow-xl"
        >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
             {/* Animated Abstract Graph */}
             <div className="flex gap-3 items-end justify-center h-32 mb-6">
                 {[30, 60, 45, 80, 50, 95].map((h, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ height: "10%" }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + i*0.1, ease: "easeInOut" }}
                        className="w-4 bg-gradient-to-t from-purple-600 to-cyan-400 rounded-full opacity-80"
                     ></motion.div>
                 ))}
             </div>
             <div className="text-center relative z-10">
                 <div className="text-3xl font-bold text-white mb-1">Market Gap</div>
                 <div className="text-slate-400 text-sm">Targeting the 90% Unmet Demand</div>
             </div>
        </motion.div>

        {/* Middle Right - Mini Data */}
        <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="md:col-span-4 md:row-span-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-between shadow-xl"
        >
             <div>
                 <div className="text-slate-400 text-xs font-bold uppercase mb-2 tracking-widest">Growth Trend</div>
                 <div className="text-5xl font-bold text-white tracking-tight">+120%</div>
                 <div className="flex items-center gap-2 mt-2">
                    <div className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-bold">YoY</div>
                    <div className="text-slate-400 text-xs">Projected</div>
                 </div>
             </div>
             <div className="h-20 w-20 rounded-full bg-slate-900/50 border-4 border-cyan-500/20 flex items-center justify-center relative">
                 <div className="absolute inset-0 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin" style={{animationDuration: '3s'}}></div>
                 <TrendingUp size={28} className="text-cyan-400"/>
             </div>
        </motion.div>

        {/* Bottom Left - Core Concept (Liquefied Glass Design) */}
         <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="md:col-span-8 md:row-span-2 relative overflow-hidden rounded-[2.5rem] group shadow-2xl"
        >
            {/* Liquid Glass Effect Layer */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[50px] saturate-150 border border-white/20 z-0"></div>
            
            {/* Abstract Liquid Blob */}
            <div className="absolute -left-20 -bottom-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '8s'}}></div>
            <div className="absolute -right-20 -top-40 w-96 h-96 bg-gradient-to-bl from-purple-400/30 to-pink-500/30 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '10s'}}></div>

            <div className="relative z-10 h-full w-full p-10 flex flex-col justify-center">
                 <div className="flex items-center justify-between">
                    <div>
                         <div className="flex items-center gap-2 mb-3">
                             <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                             <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/80">Core Concept</span>
                         </div>
                         <div className="text-3xl md:text-5xl font-bold leading-tight text-white mix-blend-overlay opacity-90">
                             Shimamura Model
                         </div>
                         <div className="text-xl md:text-2xl font-light text-slate-200 mt-2">
                             Localized for China.
                         </div>
                    </div>
                    
                    <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                         <ArrowRight size={32} className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"/>
                    </div>
                 </div>
            </div>
        </motion.div>
    </div>
  </div>
);

export const SlideMacro = () => (
  <div className="h-full w-full p-8 md:p-16 relative flex items-center">
    <BackgroundOrbs />
    <BigNumber number="01" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto z-10">
        <div className="flex flex-col justify-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                <div>
                    <h2 className="text-5xl font-bold text-white mb-2">市场 <br/><span className="text-slate-500">洞察与机会.</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"></div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                    经济换挡期，消费者不再为“品牌溢价”买单，但在寻求<strong className="text-cyan-400">“质价比”</strong>。
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                    <GlassCard className="border-l-4 border-purple-500 !p-4">
                        <div className="flex items-center gap-3 mb-1">
                            <TrendingUp className="w-5 h-5 text-purple-400" />
                            <h4 className="font-bold text-white">K型消费趋势</h4>
                        </div>
                        <p className="text-sm text-slate-400">中产向下寻找平替，下沉市场追求品质升级。</p>
                    </GlassCard>

                    <GlassCard className="border-l-4 border-cyan-500 !p-4">
                        <div className="flex items-center gap-3 mb-1">
                            <ShoppingBag className="w-5 h-5 text-cyan-400" />
                            <h4 className="font-bold text-white">“口红效应”变体</h4>
                        </div>
                        <p className="text-sm text-slate-400">大宗消费停滞，小额悦己消费（服装/饰品）活跃。</p>
                    </GlassCard>
                </div>
            </motion.div>
        </div>
        
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[400px] md:h-[500px]"
        >
            <KShapeChart />
        </motion.div>
    </div>
  </div>
);

export const SlideWhyNow = () => (
    <div className="h-full w-full p-8 md:p-16 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="02" />
        
        <div className="max-w-7xl mx-auto w-full z-10">
            <div className="mb-12">
                <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase mb-2">
                    <Sparkles size={16} /> 商业论证
                </div>
                <h2 className="text-5xl font-bold text-white mb-4">时机已至 (Why Now?)</h2>
                <p className="text-slate-400 max-w-2xl text-lg">
                    市场正处于爆发的前夜。中国市场急需<span className="text-white font-semibold">“中国特色的岛村模式”</span>。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="group hover:bg-white/[0.05] transition-all border-t-4 border-cyan-500">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                        <Scale size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">供需完美匹配</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="text-xs font-bold text-slate-500 uppercase">供给端 (Supply)</span>
                            <p className="text-slate-300 text-sm mt-1">工厂产能过剩，急需<span className="text-cyan-400">“不退货+快结款”</span>的救命稻草。</p>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="group hover:bg-white/[0.05] transition-all border-t-4 border-purple-500">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                        <Store size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">线下寻宝稀缺</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="text-xs font-bold text-slate-500 uppercase">体验端 (Demand)</span>
                            <p className="text-slate-300 text-sm mt-1">线上退货繁琐、隐性成本高。用户渴望<span className="text-purple-400">“即时满足”</span>。</p>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="group hover:bg-white/[0.05] transition-all border-t-4 border-pink-500">
                    <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform">
                        <Ghost size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">竞争格局真空</h3>
                    <div className="space-y-4">
                        <div>
                            <span className="text-xs font-bold text-slate-500 uppercase">市场空白 (Gap)</span>
                            <p className="text-slate-300 text-sm mt-1">由于优衣库涨价和地摊体验差，中间存在巨大的<span className="text-pink-400">市场空白</span>。</p>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    </div>
);

export const SlidePainPoints = () => (
  <div className="h-full w-full p-8 md:p-16 relative flex flex-col justify-center">
    <BackgroundOrbs />
    <div className="absolute top-12 right-12 text-right z-10">
        <h2 className="text-4xl font-bold text-white">现存痛点</h2>
        <p className="text-slate-500">The Problem</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full z-10 mt-12 h-[60%]">
      {/* Left */}
      <GlassCard className="flex flex-col justify-between hover:bg-white/[0.05] transition-colors group">
        <div>
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-slate-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                <ShoppingBag size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 mb-2">线上/电商</h3>
            <p className="text-slate-500 text-sm font-mono">ONLINE RETAIL</p>
        </div>
        <ul className="space-y-3 mt-8">
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>时间成本极高</li>
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>信任成本高</li>
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>无试穿体验</li>
        </ul>
      </GlassCard>

      {/* Middle - Solution Highlight */}
      <div className="relative group">
         <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
         <div className="relative h-full bg-[#0a0a1f] border border-cyan-500/30 p-8 rounded-3xl flex flex-col items-center text-center justify-center shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">我们的机会</h3>
            <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-6">The Sweet Spot</p>
            
            <div className="space-y-4 w-full">
                {["有品质保障", "极致性价比", "即时满足"].map((txt, i) => (
                    <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/10 text-white text-sm font-medium">
                        {txt}
                    </div>
                ))}
            </div>
         </div>
      </div>

      {/* Right */}
      <GlassCard className="flex flex-col justify-between hover:bg-white/[0.05] transition-colors group">
         <div>
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-slate-400 group-hover:text-pink-400 group-hover:bg-pink-500/10 transition-colors">
                <Layers size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 mb-2">传统线下</h3>
            <p className="text-slate-500 text-sm font-mono">TRADITIONAL OFFLINE</p>
         </div>
         <ul className="space-y-3 mt-8">
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>价格虚高 (商场)</li>
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>环境恶劣 (批发)</li>
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>无售后保障</li>
        </ul>
      </GlassCard>
    </div>
  </div>
);

export const SlideBenchmark = () => (
  <div className="h-full w-full p-8 md:p-16 relative flex items-center">
    <BackgroundOrbs />
    <BigNumber number="03" />
    
    <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold tracking-wider mb-6 w-fit border border-purple-500/30">
                BENCHMARK CASE
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">岛村模式<span className="text-purple-500">.</span></h2>
            <p className="text-xl text-slate-300 mb-8 font-light">
                日本“失去的三十年”里的奇迹。<br/>
                超越优衣库的<strong className="text-white">“低价+高频”</strong>模式。
            </p>
            
            <div className="space-y-4">
                {[
                    { title: "反SPA模式", desc: "不做设计生产，只做“超级买手”" },
                    { title: "寻宝体验", desc: "多品种、极少量，激发高频进店" },
                    { title: "农村包围城市", desc: "避开核心商圈，极致成本控制" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-purple-500 transition-colors"></div>
                        <div>
                            <span className="text-white font-semibold">{item.title}</span>
                            <span className="text-slate-500 mx-2">/</span>
                            <span className="text-slate-400 text-sm">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="md:col-span-7 relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl -z-10 rounded-full transform translate-x-12 translate-y-12"></div>
            <div className="grid grid-cols-2 gap-4 h-full">
                 <div className="space-y-4 pt-12">
                     <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl object-cover h-64 w-full border border-white/10 shadow-2xl" alt="Store" />
                     <GlassCard className="!p-6 flex flex-col justify-center h-40">
                         <span className="text-4xl font-bold text-white">No.2</span>
                         <span className="text-slate-400 text-sm">Apparel Retailer in Japan</span>
                     </GlassCard>
                 </div>
                 <div className="space-y-4">
                     <GlassCard className="!p-6 flex flex-col justify-center h-40 bg-purple-600/10 border-purple-500/20">
                         <span className="text-4xl font-bold text-white">High</span>
                         <span className="text-slate-400 text-sm">库存周转率 (Inventory Turnover)</span>
                     </GlassCard>
                     <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl object-cover h-64 w-full border border-white/10 shadow-2xl" alt="Clothes" />
                 </div>
            </div>
        </div>
    </div>
  </div>
);

export const SlideSolution = () => (
  <div className="h-full w-full p-8 md:p-16 relative flex flex-col items-center justify-center">
    <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
    <BigNumber number="04" />

    <div className="text-center mb-16 z-10 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            <Rocket size={16} /> 我们的解决方案
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">社区折扣连锁</h2>
        <p className="text-xl text-slate-400">定位：家门口的“高品质奥特莱斯”</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full z-10 px-4">
        {[
            { icon: Search, title: "所见即所得", sub: "严选品质", desc: "物理过滤电商烂货，专业买手把关。" },
            { icon: Clock, title: "即时满足", sub: "拒绝等待", desc: "试穿满意，立刻穿走，无需等待物流。" },
            { icon: Users, title: "情绪价值", sub: "解压寻宝", desc: "低成本的解压与“寻宝”乐趣。" }
        ].map((item, idx) => (
            <motion.div 
                key={idx}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: idx * 0.2}}
                className="group relative"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full bg-[#0d1226] border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-colors">
                        <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs font-bold text-cyan-500 uppercase tracking-wider mb-4">{item.sub}</p>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
            </motion.div>
        ))}
    </div>

    <div className="mt-16 z-10">
        <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
            "1688的价格，优衣库的服务"
        </p>
    </div>
  </div>
);

export const SlideCoreAdvantages = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="05" />
        
        <div className="max-w-7xl mx-auto w-full z-10">
            <div className="mb-10">
                <h2 className="text-5xl font-bold text-white mb-2">核心竞争力 (Why Win?)</h2>
                <p className="text-slate-400 max-w-2xl">
                    对抗电商内卷，我们不只拼价格，我们拼“效率”与“隐性成本”。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="border-t-4 border-emerald-500 hover:bg-emerald-500/5 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col">
                            <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-1">对标拼多多 / 1688</span>
                            <h3 className="text-2xl font-bold text-white">物理层面的过滤器</h3>
                        </div>
                        <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                            <ShieldCheck size={28} />
                        </div>
                    </div>
                    <p className="text-white font-medium mb-2">“解决‘非标品’的信任成本”</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        电商是“盲盒”，我们是“严选”。消费者愿意为了<span className="text-white">“所见即所得”</span>和<span className="text-white">“零退货风险”</span>的确定性付费。
                    </p>
                </GlassCard>
                
                <GlassCard className="border-t-4 border-blue-500 hover:bg-blue-500/5 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col">
                            <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-1">对标传统商场</span>
                            <h3 className="text-2xl font-bold text-white">极高的坪效与周转</h3>
                        </div>
                        <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                            <RefreshCw size={28} />
                        </div>
                    </div>
                    <p className="text-white font-medium mb-2">“不做SPA，做超级买手”</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        无设计成本，无生产风险。只针对尾货与产能过剩进行<span className="text-white">“买断式采购”</span>，周转率是传统服装店的3倍。
                    </p>
                </GlassCard>
            </div>
        </div>
    </div>
);

export const SlideSupplyChain = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="06" />

        <div className="max-w-7xl mx-auto w-full z-10">
            <h2 className="text-5xl font-bold text-white mb-12">供应链重塑 <span className="text-slate-500 text-2xl font-light">Supply Chain</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Traditional Model */}
                <GlassCard className="opacity-50 scale-95 grayscale">
                    <h3 className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">Traditional / 传统模式</h3>
                    <div className="space-y-4 relative">
                        {['工厂', '品牌商', '各级代理', '零售终端'].map((step, i) => (
                            <div key={i} className="bg-slate-800 p-3 rounded text-center border border-slate-700 text-slate-500 text-sm">
                                {step}
                            </div>
                        ))}
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-700 -z-10"></div>
                    </div>
                    <div className="mt-4 text-center text-red-400 text-sm">
                        层层加价, 效率低下
                    </div>
                </GlassCard>

                {/* Arrow */}
                <div className="flex justify-center text-cyan-500">
                    <ArrowRight size={48} />
                </div>

                {/* Our Model */}
                <GlassCard className="border-cyan-500/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl">OUR MODEL</div>
                    <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-xs">Urban Vault / 我们的模式</h3>
                    
                    <div className="space-y-8 relative">
                        <div className="flex items-center gap-4 bg-slate-800/80 p-4 rounded-xl border border-slate-600">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400"><Store size={24} /></div>
                            <div>
                                <div className="font-bold text-white">优质代工厂</div>
                                <div className="text-xs text-slate-400">外贸尾单 / 产能过剩</div>
                            </div>
                        </div>

                        <div className="flex justify-center -my-4 relative z-10">
                            <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/30">
                                现金买断 / 不退货
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 p-4 rounded-xl border border-cyan-500/50">
                            <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400"><ShoppingBag size={24} /></div>
                            <div>
                                <div className="font-bold text-white">Urban Vault 门店</div>
                                <div className="text-xs text-slate-400">终端消费者</div>
                            </div>
                        </div>
                    </div>
                     <div className="mt-6 text-center text-emerald-400 font-bold text-lg">
                        去中间化 = 极致低价
                    </div>
                </GlassCard>
            </div>
        </div>
    </div>
);

export const SlideSupplyEvolution = () => (
    <div className="h-full w-full p-8 md:p-16 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <div className="max-w-7xl mx-auto w-full z-10">
             <div className="flex items-end gap-4 mb-12">
                <h2 className="text-5xl font-bold text-white">供应链进化论</h2>
                <div className="h-1 flex-1 bg-slate-800 mb-4 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlassCard className="relative overflow-hidden group">
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors"></div>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl font-bold text-slate-700">01</div>
                        <h3 className="text-2xl font-bold text-white">初期：尾货猎人</h3>
                     </div>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-purple-500 shrink-0 mt-1" size={18} />
                            <div>
                                <span className="block text-white font-medium">切入点：库存积压</span>
                                <span className="text-slate-400 text-sm">瞄准外贸工厂取消的订单（库存布料、成衣），以成本价2-3折吃进。</span>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="text-purple-500 shrink-0 mt-1" size={18} />
                            <div>
                                <span className="block text-white font-medium">优势</span>
                                <span className="text-slate-400 text-sm">极其低廉的进货成本，保证初期毛利。</span>
                            </div>
                        </li>
                     </ul>
                </GlassCard>

                <GlassCard className="relative overflow-hidden group border-cyan-500/30">
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors"></div>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl font-bold text-cyan-900/50">02</div>
                        <h3 className="text-2xl font-bold text-white">长期：产能合伙人</h3>
                     </div>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-cyan-500 shrink-0 mt-1" size={18} />
                            <div>
                                <span className="block text-white font-medium">切入点：闲置产能 (ODM)</span>
                                <span className="text-slate-400 text-sm">利用工厂淡季产能，进行“双品牌”或自有品牌生产。</span>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="text-cyan-500 shrink-0 mt-1" size={18} />
                            <div>
                                <span className="block text-white font-medium">优势</span>
                                <span className="text-slate-400 text-sm">货源更稳定，尺码更齐全，逐步建立品牌壁垒。</span>
                            </div>
                        </li>
                     </ul>
                </GlassCard>
            </div>
        </div>
    </div>
);

export const SlideOperations = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="07" />
        
        <div className="max-w-7xl mx-auto w-full z-10">
            <h2 className="text-5xl font-bold text-white mb-12">单店运营模型 <span className="text-sm font-normal text-slate-500 tracking-wider uppercase ml-4">Lean Operations</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">选址策略</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        <span className="text-blue-400 font-bold">避开核心商圈</span><br/>
                        选择社区底商、次级商圈或地下商业街。<br/>
                        <span className="text-xs mt-2 block opacity-70">目标：极低租金，服务周边3km居民。</span>
                    </p>
                </GlassCard>

                <GlassCard className="flex flex-col items-center text-center border-cyan-500/40 bg-cyan-900/10">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <Package size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">陈列与SKU</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-400 font-bold">仓储式陈列</span><br/>
                        无需精致装修，按品类/尺码密集排布。<br/>
                        <span className="text-xs mt-2 block opacity-70">高密度SKU展示，营造“寻宝”氛围。</span>
                    </p>
                </GlassCard>

                <GlassCard className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                        <UserCheck size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">人员配置</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        <span className="text-purple-400 font-bold">极简服务</span><br/>
                        不推销、不跟随。仅负责理货与收银。<br/>
                        <span className="text-xs mt-2 block opacity-70">降低人力成本，提升顾客自在感。</span>
                    </p>
                </GlassCard>
            </div>
        </div>
    </div>
);

export const SlideOrgStructure = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex flex-col justify-center">
         <BackgroundOrbs />
         <BigNumber number="08" />
         
         <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white mb-16">组织架构 <span className="text-slate-500 font-light">Organization</span></h2>

            <div className="flex flex-col items-center w-full max-w-4xl">
                {/* Founder */}
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl mb-8">
                     <div className="bg-[#0f172a] px-8 py-4 rounded-xl flex flex-col items-center">
                         <span className="text-white font-bold text-lg">创始人 / CEO</span>
                         <span className="text-slate-400 text-sm">战略规划 & 资源整合</span>
                     </div>
                </div>
                
                <div className="h-8 w-0.5 bg-slate-600 mb-8"></div>
                <div className="w-full border-t border-slate-600 relative mb-8">
                    <div className="absolute -top-2 left-1/4 w-0.5 h-4 bg-slate-600"></div>
                    <div className="absolute -top-2 left-1/2 w-0.5 h-4 bg-slate-600"></div>
                    <div className="absolute -top-2 left-3/4 w-0.5 h-4 bg-slate-600"></div>
                </div>

                <div className="grid grid-cols-3 gap-8 w-full">
                    {/* Dept 1 */}
                     <GlassCard className="flex flex-col items-center !p-4 border-t-4 border-purple-500">
                        <div className="bg-purple-500/20 p-2 rounded-full mb-3"><ShoppingBag size={20} className="text-purple-400"/></div>
                        <h4 className="font-bold text-white">供应链中心</h4>
                        <div className="mt-2 text-xs text-slate-400 text-center space-y-1">
                            <p>选品买手</p>
                            <p>供应商管理</p>
                            <p>库存调拨</p>
                        </div>
                     </GlassCard>

                     {/* Dept 2 */}
                     <GlassCard className="flex flex-col items-center !p-4 border-t-4 border-cyan-500 bg-cyan-900/20">
                        <div className="bg-cyan-500/20 p-2 rounded-full mb-3"><Store size={20} className="text-cyan-400"/></div>
                        <h4 className="font-bold text-white">运营中心</h4>
                        <div className="mt-2 text-xs text-slate-400 text-center space-y-1">
                            <p>门店标准化</p>
                            <p>店长培训</p>
                            <p>数据监控</p>
                        </div>
                     </GlassCard>

                     {/* Dept 3 */}
                     <GlassCard className="flex flex-col items-center !p-4 border-t-4 border-pink-500">
                        <div className="bg-pink-500/20 p-2 rounded-full mb-3"><Megaphone size={20} className="text-pink-400"/></div>
                        <h4 className="font-bold text-white">品牌与增长</h4>
                        <div className="mt-2 text-xs text-slate-400 text-center space-y-1">
                            <p>社群运营 (私域)</p>
                            <p>内容营销 (小红书)</p>
                            <p>视觉设计</p>
                        </div>
                     </GlassCard>
                </div>
            </div>
         </div>
    </div>
);

export const SlideMarketingLaunch = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="09" />
        
        <div className="max-w-7xl mx-auto w-full z-10">
            <h2 className="text-5xl font-bold text-white mb-10">市场启动与增长</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <GlassCard className="flex flex-col justify-center gap-6">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                        冷启动策略 (0-1)
                    </h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 text-red-400 font-bold">
                                XHS
                            </div>
                            <div>
                                <h4 className="text-white font-bold">小红书“自来水”</h4>
                                <p className="text-slate-400 text-sm">打造“XX城市宝藏店”、“xx元拿下OOTD”话题。利用高颜值的陈列（哪怕是仓库风）和极致价格反差制造传播。</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                             <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0 text-green-400 font-bold">
                                LBS
                            </div>
                            <div>
                                <h4 className="text-white font-bold">LBS 本地生活</h4>
                                <p className="text-slate-400 text-sm">抖音团购券引流，精准覆盖门店周边5公里人群。</p>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="flex flex-col justify-center gap-6 border-l-4 border-cyan-500">
                    <h3 className="text-2xl font-bold text-cyan-400">
                        用户留存 (1-10)
                    </h3>
                    <div className="space-y-6">
                         <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">私域社群</h4>
                                <p className="text-slate-400 text-sm">“新货预告群”。每次上新（孤品）优先在群内发布，培养用户“抢购”习惯，提高复购率。</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                                <Repeat size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">高频上新</h4>
                                <p className="text-slate-400 text-sm">保持每周2次上新频率，让顾客每次来都有新鲜感。</p>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    </div>
);

export const SlideCompetition = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex items-center">
        <BackgroundOrbs />
        <BigNumber number="10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto w-full z-10 items-center">
            <div>
                 <h2 className="text-5xl font-bold text-white mb-6">竞争壁垒</h2>
                 <p className="text-lg text-slate-300 mb-8">
                     与 <span className="text-pink-400">电商(1688)</span> 和 <span className="text-slate-400">传统商场</span> 的差异化生存之道。
                 </p>
                 
                 <div className="space-y-4">
                     <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                         <h4 className="font-bold text-cyan-400 mb-1">VS 电商</h4>
                         <p className="text-sm text-slate-400">胜在<span className="text-white">“试错成本为0”</span>。电商退货率高达50%以上，我们提供即时的确定性。</p>
                     </div>
                     <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                         <h4 className="font-bold text-purple-400 mb-1">VS 传统商场</h4>
                         <p className="text-sm text-slate-400">胜在<span className="text-white">“价格屠夫”</span>。去除了品牌溢价和高昂的商场扣点。</p>
                     </div>
                 </div>
            </div>

            <div className="h-[400px] w-full">
                <CompetitiveRadar />
            </div>
        </div>
    </div>
);

export const SlideFinancials = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex items-center">
         <BackgroundOrbs />
         <BigNumber number="11" />
         
         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto w-full z-10 h-[80%]">
             <div className="md:col-span-4 flex flex-col justify-center">
                 <h2 className="text-4xl font-bold text-white mb-6">财务预测 <span className="text-emerald-500 block text-2xl mt-2">Financials</span></h2>
                 
                 <div className="space-y-6">
                     <div>
                         <div className="text-sm text-slate-500 uppercase tracking-wider mb-1">单店预估日销</div>
                         <div className="text-3xl font-bold text-white">¥6,000</div>
                         <div className="text-xs text-emerald-400">+ 保守估计</div>
                     </div>
                     <div>
                         <div className="text-sm text-slate-500 uppercase tracking-wider mb-1">毛利率 (Gross Margin)</div>
                         <div className="text-3xl font-bold text-white">50%</div>
                         <div className="text-xs text-slate-400">进货3折，售卖6折</div>
                     </div>
                     <div>
                         <div className="text-sm text-slate-500 uppercase tracking-wider mb-1">回本周期 (ROI)</div>
                         <div className="text-3xl font-bold text-cyan-400">6-8 Months</div>
                     </div>
                 </div>
             </div>
             
             <div className="md:col-span-8 h-full">
                 <FinancialChart dailySales={6000} />
             </div>
         </div>
    </div>
);

export const SlideRisk = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex flex-col justify-center">
         <BackgroundOrbs />
         <BigNumber number="12" />
         <div className="max-w-7xl mx-auto w-full z-10">
            <h2 className="text-4xl font-bold text-white mb-12">风险与应对</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <GlassCard className="border-t-4 border-yellow-500">
                     <div className="mb-4 text-yellow-500"><AlertTriangle size={32}/></div>
                     <h3 className="text-xl font-bold text-white mb-2">库存积压风险</h3>
                     <p className="text-slate-400 text-sm mb-4">如果是买断制，卖不掉怎么办？</p>
                     <div className="bg-yellow-500/10 p-3 rounded-lg text-yellow-200 text-sm">
                        <strong>应对：</strong> 阶梯式降价机制。30天未售出打8折，60天打5折，90天按斤处理或捐赠，确保现金流快速回笼。
                     </div>
                 </GlassCard>

                 <GlassCard className="border-t-4 border-red-500">
                     <div className="mb-4 text-red-500"><ShieldAlert size={32}/></div>
                     <h3 className="text-xl font-bold text-white mb-2">货源不稳定性</h3>
                     <p className="text-slate-400 text-sm mb-4">好货被抢光，或者工厂断供。</p>
                     <div className="bg-red-500/10 p-3 rounded-lg text-red-200 text-sm">
                        <strong>应对：</strong> 建立广泛的供应商网络（100+家工厂），不依赖单一信源。长期合作建立信任壁垒。
                     </div>
                 </GlassCard>

                 <GlassCard className="border-t-4 border-blue-500">
                     <div className="mb-4 text-blue-500"><Share2 size={32}/></div>
                     <h3 className="text-xl font-bold text-white mb-2">品牌认知度低</h3>
                     <p className="text-slate-400 text-sm mb-4">消费者觉得是“杂牌店”。</p>
                     <div className="bg-blue-500/10 p-3 rounded-lg text-blue-200 text-sm">
                        <strong>应对：</strong> 强化“买手店”心智而非“杂牌店”。强调性价比和寻宝体验，用产品品质说话。
                     </div>
                 </GlassCard>
            </div>
         </div>
    </div>
);

export const SlideRoadmap = () => (
    <div className="h-full w-full p-8 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="13" />
        <div className="max-w-7xl mx-auto w-full z-10">
            <h2 className="text-5xl font-bold text-white mb-16">发展路线图</h2>
            
            <div className="relative">
                {/* Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-900 to-purple-900 -z-10 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { time: "Q1-Q2 202X", title: "模型验证", desc: "开设首家实验店，跑通单店盈利模型 (UE)。", color: "cyan" },
                        { time: "Q3-Q4 202X", title: "区域复制", desc: "在同城拓展至3-5家店，验证管理半径与供应链承压能力。", color: "blue" },
                        { time: "Year 2", title: "快速扩张", desc: "开放联营/加盟，以“农村包围城市”策略覆盖周边城市。", color: "purple" },
                        { time: "Year 3+", title: "品牌化", desc: "涉足自有品牌 (PB) 生产，从渠道品牌转型为产品品牌。", color: "pink" }
                    ].map((step, i) => (
                        <div key={i} className="relative group">
                             <div className={`w-8 h-8 rounded-full bg-${step.color}-500 mx-auto mb-6 border-4 border-[#020617] relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]`}></div>
                             <GlassCard className="text-center hover:-translate-y-2 transition-transform duration-300 h-64 flex flex-col justify-center items-center relative overflow-hidden">
                                <div className={`absolute top-0 w-full h-1 bg-${step.color}-500`}></div>
                                <div className={`text-${step.color}-400 font-bold mb-2`}>{step.time}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                             </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const SlideEnd = () => (
  <div className="h-full w-full p-8 md:p-16 flex items-center justify-center relative bg-[#020617] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-transparent to-transparent"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="text-center z-10 max-w-3xl">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
        >
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 tracking-tighter">
                JOIN US.
            </h1>
            <p className="text-2xl md:text-3xl text-slate-400 font-light">
                共建下一个百亿级零售独角兽
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
             <GlassCard className="flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
                 <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                     <Sparkles size={32} />
                 </div>
                 <div>
                     <h3 className="text-white font-bold text-lg">投资洽谈</h3>
                     <p className="text-slate-400">invest@urbanvault.com</p>
                 </div>
             </GlassCard>

             <GlassCard className="flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
                 <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                     <Store size={32} />
                 </div>
                 <div>
                     <h3 className="text-white font-bold text-lg">加盟合作</h3>
                     <p className="text-slate-400">partner@urbanvault.com</p>
                 </div>
             </GlassCard>
        </div>
        
        <div className="mt-16 text-slate-600 text-sm">
            © 202X Urban Vault Project. Confidential.
        </div>
    </div>
  </div>
);
