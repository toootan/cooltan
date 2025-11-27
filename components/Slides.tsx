
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, ShoppingBag, Search, Zap, Anchor, Users,
  ArrowRight, ShieldCheck, Clock, Layers, MapPin, DollarSign,
  BarChart3, Target, Rocket, Sparkles, Coffee, Gem, CheckCircle,
  ClipboardCheck, RefreshCw, UserCheck, AlertTriangle, Percent,
  Flame, UserPlus, Megaphone, ShieldAlert, Lock, Scale, Store, Ghost,
  Calendar, Award, Heart, Truck, Package, Repeat, Share2, Mail, Phone,
  Copy
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
    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[120px] md:text-[400px] font-bold leading-none text-white/[0.03] select-none pointer-events-none -z-10 font-sans tracking-tighter">
        {number}
    </div>
);

const GlassCard = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
    <div className={`glass-card p-6 md:p-8 rounded-3xl border border-white/10 bg-[#1e293b]/40 backdrop-blur-xl ${className}`}>
        {children}
    </div>
);

// --- Slide Components ---

export const SlideCover = () => (
  <div className="min-h-screen md:h-full w-full p-4 md:p-8 flex items-center justify-center relative overflow-hidden bg-[#020617]">
    {/* Background effects */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
    
    <div className="max-w-7xl w-full h-auto md:h-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 z-10 py-12 md:py-0">
        
        {/* Main Title Block - Top Left (Large) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-8 md:row-span-4 bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[400px]"
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
                <h1 className="text-5xl md:text-9xl font-bold tracking-tighter text-white mb-2 leading-[0.9]">
                    URBAN <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">VAULT.</span>
                </h1>
                <p className="text-lg md:text-3xl text-slate-400 font-light mt-6 flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                    <span>城市宝库计划</span> 
                    <span className="hidden md:inline text-slate-700 text-lg">|</span> 
                    <span className="text-base md:text-lg text-slate-500">线下零售新物种</span>
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8 relative z-10">
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
             className="md:col-span-4 md:row-span-3 bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-center relative overflow-hidden shadow-xl min-h-[200px]"
        >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
             {/* Animated Abstract Graph */}
             <div className="flex gap-3 items-end justify-center h-24 md:h-32 mb-6">
                 {[30, 60, 45, 80, 50, 95].map((h, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ height: "10%" }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + i*0.1, ease: "easeInOut" }}
                        className="w-3 md:w-4 bg-gradient-to-t from-purple-600 to-cyan-400 rounded-full opacity-80"
                     ></motion.div>
                 ))}
             </div>
             <div className="text-center relative z-10">
                 <div className="text-2xl md:text-3xl font-bold text-white mb-1">Market Gap</div>
                 <div className="text-slate-400 text-sm">Targeting the 90% Unmet Demand</div>
             </div>
        </motion.div>

        {/* Middle Right - Mini Data */}
        <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="md:col-span-4 md:row-span-3 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-8 flex items-center justify-between shadow-xl min-h-[150px]"
        >
             <div>
                 <div className="text-slate-400 text-xs font-bold uppercase mb-2 tracking-widest">Growth Trend</div>
                 <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">+120%</div>
                 <div className="flex items-center gap-2 mt-2">
                    <div className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-bold">YoY</div>
                    <div className="text-slate-400 text-xs">Projected</div>
                 </div>
             </div>
             <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-slate-900/50 border-4 border-cyan-500/20 flex items-center justify-center relative">
                 <div className="absolute inset-0 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin" style={{animationDuration: '3s'}}></div>
                 <TrendingUp size={24} className="text-cyan-400 md:w-7 md:h-7"/>
             </div>
        </motion.div>

        {/* Bottom Left - Core Concept (Liquefied Glass Design) */}
         <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="md:col-span-8 md:row-span-2 relative overflow-hidden rounded-[2.5rem] group shadow-2xl min-h-[250px]"
        >
            {/* Liquid Glass Effect Layer */}
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-[50px] saturate-150 border border-white/20 z-0"></div>
            
            {/* Abstract Liquid Blob */}
            <div className="absolute -left-20 -bottom-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '8s'}}></div>
            <div className="absolute -right-20 -top-40 w-96 h-96 bg-gradient-to-bl from-purple-400/30 to-pink-500/30 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '10s'}}></div>

            <div className="relative z-10 h-full w-full p-8 md:p-10 flex flex-col justify-center">
                 <div className="flex items-center justify-between">
                    <div>
                         <div className="flex items-center gap-2 mb-3">
                             <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                             <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200/80">Core Concept</span>
                         </div>
                         <div className="text-2xl md:text-5xl font-bold leading-tight text-white mix-blend-overlay opacity-90">
                             Shimamura Model
                         </div>
                         <div className="text-lg md:text-2xl font-light text-slate-200 mt-2">
                             Localized for China.
                         </div>
                    </div>
                    
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                         <ArrowRight size={24} className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 md:w-8 md:h-8"/>
                    </div>
                 </div>
            </div>
        </motion.div>
    </div>
  </div>
);

export const SlideMacro = () => (
  <div className="min-h-screen md:h-full w-full p-6 md:p-16 relative flex items-center">
    <BackgroundOrbs />
    <BigNumber number="01" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-7xl mx-auto z-10 py-12 md:py-0">
        <div className="flex flex-col justify-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">市场 <br/><span className="text-slate-500">洞察与机会.</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"></div>
                </div>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
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
            className="h-[300px] md:h-[500px] w-full"
        >
            <KShapeChart />
        </motion.div>
    </div>
  </div>
);

export const SlideWhyNow = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-16 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="02" />
        
        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
            <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase mb-2">
                    <Sparkles size={16} /> 商业论证
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">时机已至 (Why Now?)</h2>
                <p className="text-slate-400 max-w-2xl text-base md:text-lg">
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
  <div className="min-h-screen md:h-full w-full p-6 md:p-16 relative flex flex-col justify-center">
    <BackgroundOrbs />
    <div className="relative md:absolute md:top-12 md:right-12 text-left md:text-right z-10 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-white">现存痛点</h2>
        <p className="text-slate-500">The Problem</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full z-10 md:mt-12 md:h-[60%]">
      {/* Left */}
      <GlassCard className="flex flex-col justify-between hover:bg-white/[0.05] transition-colors group">
        <div>
            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 text-slate-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                <ShoppingBag size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-200 mb-2">线上/电商</h3>
            <p className="text-slate-500 text-sm font-mono">ONLINE RETAIL</p>
        </div>
        <ul className="space-y-3 mt-8">
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>时间成本极高</li>
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>信任成本高</li>
            <li className="flex items-center gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>无试穿体验</li>
        </ul>
      </GlassCard>

      {/* Middle - Solution Highlight */}
      <div className="relative group min-h-[300px] md:min-h-0">
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
            <h3 className="text-xl md:text-2xl font-bold text-slate-200 mb-2">传统线下</h3>
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
  <div className="min-h-screen md:h-full w-full p-6 md:p-16 relative flex items-center">
    <BackgroundOrbs />
    <BigNumber number="03" />
    
    <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-0">
        <div className="md:col-span-5 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold tracking-wider mb-6 w-fit border border-purple-500/30">
                BENCHMARK CASE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">岛村模式<span className="text-purple-500">.</span></h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 font-light">
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
                            <span className="hidden md:inline text-slate-500 mx-2">/</span>
                            <span className="block md:inline text-slate-400 text-sm">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="md:col-span-7 relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl -z-10 rounded-full transform translate-x-12 translate-y-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                 <div className="space-y-4 md:pt-12">
                     <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl object-cover h-48 md:h-64 w-full border border-white/10 shadow-2xl" alt="Store" />
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
                     <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl object-cover h-48 md:h-64 w-full border border-white/10 shadow-2xl" alt="Clothes" />
                 </div>
            </div>
        </div>
    </div>
  </div>
);

export const SlideSolution = () => (
  <div className="min-h-screen md:h-full w-full p-6 md:p-16 relative flex flex-col items-center justify-center">
    <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
    <BigNumber number="04" />

    <div className="text-center mb-10 md:mb-16 z-10 relative mt-12 md:mt-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            <Rocket size={16} /> 我们的解决方案
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">社区折扣连锁</h2>
        <p className="text-lg md:text-xl text-slate-400">定位：家门口的“高品质奥特莱斯”</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl w-full z-10 px-0 md:px-4">
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
                <div className="relative h-full bg-[#0d1226] border border-white/10 p-6 md:p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
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

    <div className="mt-12 md:mt-16 z-10 text-center">
        <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
            "1688的价格，优衣库的服务"
        </p>
    </div>
  </div>
);

export const SlideCoreAdvantages = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="05" />
        
        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
            <div className="mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">核心竞争力 (Why Win?)</h2>
                <p className="text-slate-400 max-w-2xl text-base md:text-lg">
                    对抗电商内卷，我们不只拼价格，我们拼“效率”与“隐性成本”。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="border-t-4 border-emerald-500 hover:bg-emerald-500/5 transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col">
                            <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-1">对标拼多多 / 1688</span>
                            <h3 className="text-xl md:text-2xl font-bold text-white">物理层面的过滤器</h3>
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
                            <h3 className="text-xl md:text-2xl font-bold text-white">极高的坪效与周转</h3>
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
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="06" />

        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12">供应链重塑 <span className="text-slate-500 text-xl md:text-2xl font-light block md:inline">Supply Chain</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">
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
                <div className="flex justify-center text-cyan-500 rotate-90 md:rotate-0 my-4 md:my-0">
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
    <div className="min-h-screen md:h-full w-full p-6 md:p-16 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
             <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white">供应链进化论</h2>
                <div className="h-1 w-full md:flex-1 bg-slate-800 mb-0 md:mb-4 md:ml-4"></div>
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
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="07" />
        
        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 md:mb-12">单店运营模型 <span className="block md:inline text-sm font-normal text-slate-500 tracking-wider uppercase md:ml-4 mt-2 md:mt-0">Lean Operations</span></h2>

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
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
         <BackgroundOrbs />
         <BigNumber number="08" />
         
         <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center py-12 md:py-0">
            <h2 className="text-4xl font-bold text-white mb-10 md:mb-16">组织架构 <span className="text-slate-500 font-light block md:inline text-2xl md:text-4xl">Organization</span></h2>

            <div className="flex flex-col items-center w-full max-w-4xl">
                {/* Founder */}
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl mb-8 w-full md:w-auto">
                     <div className="bg-[#0f172a] px-8 py-4 rounded-xl flex flex-col items-center text-center">
                         <span className="text-white font-bold text-lg">创始人 / CEO</span>
                         <span className="text-slate-400 text-sm">战略规划 & 资源整合</span>
                     </div>
                </div>
                
                <div className="h-8 w-0.5 bg-slate-600 mb-8"></div>
                <div className="w-full border-t border-slate-600 relative mb-8 hidden md:block">
                    <div className="absolute -top-2 left-1/4 w-0.5 h-4 bg-slate-600"></div>
                    <div className="absolute -top-2 left-1/2 w-0.5 h-4 bg-slate-600"></div>
                    <div className="absolute -top-2 left-3/4 w-0.5 h-4 bg-slate-600"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
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
                     <GlassCard className="flex flex-col items-center !p-4 border-t-4 border-cyan-500">
                        <div className="bg-cyan-500/20 p-2 rounded-full mb-3"><Store size={20} className="text-cyan-400"/></div>
                        <h4 className="font-bold text-white">营运中心</h4>
                        <div className="mt-2 text-xs text-slate-400 text-center space-y-1">
                            <p>店长管理</p>
                            <p>陈列标准</p>
                            <p>销售数据分析</p>
                        </div>
                     </GlassCard>

                     {/* Dept 3 */}
                     <GlassCard className="flex flex-col items-center !p-4 border-t-4 border-blue-500">
                        <div className="bg-blue-500/20 p-2 rounded-full mb-3"><Megaphone size={20} className="text-blue-400"/></div>
                        <h4 className="font-bold text-white">市场拓展</h4>
                        <div className="mt-2 text-xs text-slate-400 text-center space-y-1">
                            <p>选址开发</p>
                            <p>私域社群</p>
                            <p>品牌合作</p>
                        </div>
                     </GlassCard>
                </div>
            </div>
         </div>
    </div>
);

export const SlideMarketingLaunch = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="09" />
        
        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
             <div className="mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">冷启动策略 <span className="text-slate-500 font-light block md:inline text-2xl">Go-To-Market</span></h2>
                <p className="text-slate-400">零广告预算，依靠“口碑”与“私域”引爆社区。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <GlassCard className="flex gap-4 items-start">
                        <div className="bg-purple-600/20 p-3 rounded-xl text-purple-400 font-bold text-xl">01</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">钩子产品引流</h3>
                            <p className="text-slate-400 text-sm">
                                每周推出一款<span className="text-purple-400 font-bold">“破坏性低价”</span>单品（如：9.9元纯棉T恤），仅限社群粉丝购买，迅速拉满周边3km流量。
                            </p>
                        </div>
                    </GlassCard>

                     <GlassCard className="flex gap-4 items-start">
                        <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400 font-bold text-xl">02</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">私域社群寻宝</h3>
                            <p className="text-slate-400 text-sm">
                                建立“XX小区寻宝群”，每日发布<span className="text-blue-400 font-bold">“孤品预告”</span>。利用稀缺性（每款仅1-2件）激发群内抢购氛围，到店自提。
                            </p>
                        </div>
                    </GlassCard>
                </div>

                <div className="relative h-full min-h-[200px] md:min-h-0">
                     <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                     <div className="relative h-full bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                        <Share2 size={48} className="text-white mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">病毒式传播</h3>
                        <p className="text-slate-300">
                            "你敢信这件风衣才50块？"<br/>
                            <span className="text-sm text-slate-500 mt-2 block">
                                极致性价比带来的惊讶感，是最好的社交货币。消费者会自发在小红书/朋友圈分享“战利品”。
                            </span>
                        </p>
                     </div>
                </div>
            </div>
        </div>
    </div>
);

export const SlideCompetition = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="10" />
        
        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-0">
             <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">竞争壁垒</h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    我们不在存量市场里卷，我们开辟新战场。<br/>
                    比电商<span className="text-cyan-400 font-bold">快</span>，比商场<span className="text-purple-400 font-bold">便宜</span>，比地摊<span className="text-white font-bold">好</span>。
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                        <span className="text-slate-300"><strong>我们 (Urban Vault)</strong>: 极致性价比 + 即时体验</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 opacity-60">
                         <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                        <span className="text-slate-400">传统商场: 体验好，但价格太高</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 opacity-60">
                         <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                        <span className="text-slate-400">电商/直播: 价格低，但体验差/等待久</span>
                    </div>
                </div>
             </div>

             <div className="h-[300px] md:h-[500px] w-full">
                 <CompetitiveRadar />
             </div>
        </div>
    </div>
);

export const SlideFinancials = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="11" />
        
        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
             <div className="flex justify-between items-end mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">财务测算 <span className="text-slate-500 text-2xl font-light block md:inline">Financials</span></h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
                 {/* Left: Input / Key Metrics */}
                 <div className="md:col-span-4 flex flex-col gap-4">
                     <GlassCard className="flex-1 flex flex-col justify-center">
                         <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">单店启动资金 (CAPEX)</div>
                         <div className="text-4xl font-bold text-white mb-1">¥450,000</div>
                         <div className="text-xs text-slate-500">含租金押金、首批货款、简易装修</div>
                     </GlassCard>
                     
                     <GlassCard className="flex-1 flex flex-col justify-center bg-cyan-900/10 border-cyan-500/30">
                         <div className="text-cyan-400 text-xs uppercase tracking-widest font-bold mb-2">预计回本周期 (Payback)</div>
                         <div className="text-4xl font-bold text-white mb-1">8-10 Months</div>
                         <div className="text-xs text-slate-500">基于日销 ¥1.5w 测算</div>
                     </GlassCard>

                     <div className="grid grid-cols-2 gap-4">
                        <GlassCard className="!p-4">
                             <div className="text-slate-400 text-[10px] uppercase">综合毛利率</div>
                             <div className="text-2xl font-bold text-white">45-50%</div>
                        </GlassCard>
                        <GlassCard className="!p-4">
                             <div className="text-slate-400 text-[10px] uppercase">月运营成本</div>
                             <div className="text-2xl font-bold text-white">¥12.6w</div>
                        </GlassCard>
                     </div>
                 </div>

                 {/* Right: Chart */}
                 <div className="md:col-span-8 h-[300px] md:h-full">
                     <FinancialChart dailySales={15000} />
                 </div>
             </div>
        </div>
    </div>
);

export const SlideRisk = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
         <BackgroundOrbs />
         <BigNumber number="12" />
         
         <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
            <h2 className="text-4xl font-bold text-white mb-10 md:mb-16">风险与对策 <span className="text-slate-500 font-light block md:inline text-2xl md:text-4xl">Risk Management</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <GlassCard className="border-t-4 border-red-500">
                     <div className="flex items-center gap-3 mb-4">
                         <AlertTriangle className="text-red-500" />
                         <h3 className="text-xl font-bold text-white">库存积压风险</h3>
                     </div>
                     <p className="text-slate-400 text-sm mb-4">如果选品失误，导致货物滞销，资金链断裂。</p>
                     <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                         <span className="text-xs text-cyan-400 font-bold uppercase block mb-1">对策:</span>
                         <p className="text-slate-300 text-xs">小单快反测试；建立特卖区定期出清；尾货流转至下级市场或按斤处理。</p>
                     </div>
                 </GlassCard>

                 <GlassCard className="border-t-4 border-orange-500">
                     <div className="flex items-center gap-3 mb-4">
                         <Copy className="text-orange-500" />
                         <h3 className="text-xl font-bold text-white">模式复制困难</h3>
                     </div>
                     <p className="text-slate-400 text-sm mb-4">非标品管理难度大，过度依赖买手个人能力。</p>
                     <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                         <span className="text-xs text-cyan-400 font-bold uppercase block mb-1">对策:</span>
                         <p className="text-slate-300 text-xs">建立数字化选品库；买手团队师徒制培养；沉淀选品SOP。</p>
                     </div>
                 </GlassCard>

                 <GlassCard className="border-t-4 border-yellow-500">
                     <div className="flex items-center gap-3 mb-4">
                         <Store className="text-yellow-500" />
                         <h3 className="text-xl font-bold text-white">选址失败</h3>
                     </div>
                     <p className="text-slate-400 text-sm mb-4">人流不足导致自然进店率低。</p>
                     <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                         <span className="text-xs text-cyan-400 font-bold uppercase block mb-1">对策:</span>
                         <p className="text-slate-300 text-xs">严格的测流模型（分时段蹲点）；签订灵活租约；强化线上私域引流能力弥补线下流量。</p>
                     </div>
                 </GlassCard>
            </div>
         </div>
    </div>
);

export const SlideRoadmap = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex flex-col justify-center">
        <BackgroundOrbs />
        <BigNumber number="13" />
        
        <div className="max-w-7xl mx-auto w-full z-10 py-12 md:py-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">发展规划 <span className="text-slate-500 text-2xl font-light">Roadmap</span></h2>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600 hidden md:block"></div>

                <div className="space-y-8 md:space-y-12">
                    {[
                        { year: "Phase 1", title: "样板验证 (0-6个月)", desc: "开设1-3家直营店，跑通单店模型，打磨供应链渠道。", color: "text-cyan-400", border: "border-cyan-500" },
                        { year: "Phase 2", title: "区域复制 (6-18个月)", desc: "拓展至10-20家门店，覆盖核心城区。建立区域仓储中心。", color: "text-blue-400", border: "border-blue-500" },
                        { year: "Phase 3", title: "品牌升级 (18个月+)", desc: "切入自有品牌 (Private Label)，启动加盟连锁，数字化赋能。", color: "text-purple-400", border: "border-purple-500" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 md:items-center relative">
                            <div className={`hidden md:flex w-16 h-16 rounded-full bg-[#0f172a] border-4 ${item.border} items-center justify-center z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                                <div className={`w-4 h-4 rounded-full bg-white`}></div>
                            </div>
                            <GlassCard className="flex-1 ml-0 md:ml-8 hover:translate-x-2 transition-transform duration-300">
                                <span className={`text-xs font-bold uppercase tracking-widest ${item.color} mb-1 block`}>{item.year}</span>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const SlideEnd = () => (
    <div className="min-h-screen md:h-full w-full p-6 md:p-12 relative flex items-center justify-center text-center">
        <BackgroundOrbs />
        
        <div className="max-w-4xl mx-auto z-10">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
                    Let's Build<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">The Next Giant.</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-400 mb-12 font-light">
                    寻找志同道合的合作伙伴与投资人
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                     <GlassCard className="flex items-center gap-4 !py-4 !px-8 hover:bg-white/5 transition-colors cursor-pointer group">
                        <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                            <span className="block text-xs text-slate-500 uppercase font-bold">Email Us</span>
                            <span className="text-white font-mono">contact@urbanvault.cn</span>
                        </div>
                     </GlassCard>

                     <GlassCard className="flex items-center gap-4 !py-4 !px-8 hover:bg-white/5 transition-colors cursor-pointer group">
                        <Phone className="text-purple-400 group-hover:scale-110 transition-transform" />
                        <div className="text-left">
                            <span className="block text-xs text-slate-500 uppercase font-bold">Call Us</span>
                            <span className="text-white font-mono">+86 188-8888-8888</span>
                        </div>
                     </GlassCard>
                </div>
                
                <div className="mt-16 text-slate-600 text-sm">
                    © 202X Urban Vault Project. All Rights Reserved.
                </div>
            </motion.div>
        </div>
    </div>
);
