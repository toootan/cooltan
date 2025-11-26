import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area, ComposedChart
} from 'recharts';

// Theme Colors
const COLORS = {
  purple: '#8b5cf6', // Violet 500
  cyan: '#06b6d4',   // Cyan 500
  pink: '#f43f5e',   // Rose 500
  grid: '#1e293b',   // Slate 800
  text: '#94a3b8',   // Slate 400
  tooltipBg: '#0f172a', // Slate 900
  tooltipBorder: '#334155' // Slate 700
};

// Slide 2: K-Shaped Recovery
export const KShapeChart = () => {
  const data = [
    { name: '2021', luxury: 100, mass: 100, middle: 100 },
    { name: '2022', luxury: 115, mass: 110, middle: 90 },
    { name: '2023', luxury: 130, mass: 125, middle: 80 },
    { name: '2024', luxury: 145, mass: 140, middle: 70 },
  ];

  return (
    <div className="h-full w-full glass-card p-6 rounded-2xl">
      <h3 className="text-lg font-semibold text-white mb-6 pl-2 border-l-4 border-cyan-500">消费分级趋势 (K-Shape)</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} vertical={false} />
          <XAxis dataKey="name" stroke={COLORS.text} axisLine={false} tickLine={false} />
          <YAxis stroke={COLORS.text} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: COLORS.tooltipBg, borderColor: COLORS.tooltipBorder, color: '#f1f5f9', borderRadius: '8px' }} 
            itemStyle={{ color: '#fff' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Line type="monotone" dataKey="luxury" name="高端消费 (奢侈品)" stroke={COLORS.purple} strokeWidth={4} dot={{ r: 4, fill: COLORS.purple }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="mass" name="高质价比 (优衣库/平替)" stroke={COLORS.cyan} strokeWidth={4} dot={{ r: 4, fill: COLORS.cyan }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="middle" name="传统溢价品牌" stroke={COLORS.pink} strokeWidth={3} strokeDasharray="5 5" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Slide 6: Competitive Landscape
export const CompetitiveRadar = () => {
  const data = [
    { subject: '价格优势', A: 100, B: 60, C: 90, fullMark: 150 }, // A: Us, B: Mall, C: 1688
    { subject: '购物体验', A: 90, B: 100, C: 30, fullMark: 150 },
    { subject: '即时性', A: 100, B: 100, C: 20, fullMark: 150 },
    { subject: '品质信任', A: 90, B: 100, C: 40, fullMark: 150 },
    { subject: 'SKU丰富度', A: 85, B: 60, C: 100, fullMark: 150 },
    { subject: '服务', A: 80, B: 90, C: 10, fullMark: 150 },
  ];

  return (
    <div className="h-full w-full glass-card p-6 rounded-2xl relative overflow-hidden">
        {/* Decorative glow */}
       <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <h3 className="text-lg font-semibold text-white mb-2 pl-2 border-l-4 border-purple-500">竞争力雷达图</h3>
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke={COLORS.tooltipBorder} />
          <PolarAngleAxis dataKey="subject" tick={{ fill: COLORS.text, fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="我们的模式" dataKey="A" stroke={COLORS.cyan} fill={COLORS.cyan} fillOpacity={0.5} />
          <Radar name="传统商场" dataKey="B" stroke={COLORS.text} fill={COLORS.text} fillOpacity={0.1} />
          <Radar name="电商/1688" dataKey="C" stroke={COLORS.pink} fill={COLORS.pink} fillOpacity={0.2} />
          <Legend />
          <Tooltip contentStyle={{ backgroundColor: COLORS.tooltipBg, borderColor: COLORS.tooltipBorder, color: '#f1f5f9', borderRadius: '8px' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Slide 9: Financial Projection
interface FinancialProps {
  dailySales: number;
}

export const FinancialChart = ({ dailySales }: FinancialProps) => {
  const months = 24;
  const margin = 0.5;
  const capex = 450000;
  const monthlyOpex = 126000;
  const monthlyRevenue = dailySales * 30;
  const monthlyProfit = (monthlyRevenue * margin) - monthlyOpex;

  const data = Array.from({ length: months }, (_, i) => {
    const month = i + 1;
    const cumulativeCashFlow = -capex + (monthlyProfit * month);
    return {
      name: `M${month}`,
      cashFlow: cumulativeCashFlow,
      profit: monthlyProfit,
      breakEven: 0
    };
  });

  return (
    <div className="h-full w-full glass-card p-6 rounded-2xl flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h3 className="text-lg font-semibold text-white pl-2 border-l-4 border-emerald-500">累计现金流预测 (ROI)</h3>
            <p className="text-xs text-slate-400 pl-3 mt-1">基于当前日均销售额</p>
        </div>
        <div className={`px-4 py-2 rounded-lg border ${monthlyProfit > 0 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-pink-500/10 border-pink-500/30 text-pink-400"}`}>
          <span className="text-xs uppercase tracking-wider block opacity-70">预计月净利</span>
          <span className="font-mono font-bold text-lg">¥{monthlyProfit.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="colorCashFlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={COLORS.cyan} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={COLORS.cyan} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grid} vertical={false} />
            <XAxis dataKey="name" stroke={COLORS.text} tick={{fontSize: 10}} interval={2} axisLine={false} tickLine={false} />
            <YAxis stroke={COLORS.text} tick={{fontSize: 10}} tickFormatter={(val) => `¥${val/10000}w`} axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(val: number) => `¥${val.toLocaleString()}`}
              contentStyle={{ backgroundColor: COLORS.tooltipBg, borderColor: COLORS.tooltipBorder, color: '#f1f5f9', borderRadius: '8px' }}
            />
            <Legend />
            <Area 
                type="monotone" 
                dataKey="cashFlow" 
                name="累计现金流" 
                fill="url(#colorCashFlow)" 
                stroke={COLORS.cyan} 
                strokeWidth={3}
            />
            <Line type="monotone" dataKey="breakEven" name="盈亏平衡线" stroke={COLORS.text} strokeDasharray="5 5" dot={false} strokeWidth={1} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};