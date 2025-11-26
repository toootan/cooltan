import { ReactNode } from 'react';

export enum SlideType {
  COVER = 'COVER',
  CONTENT_LEFT = 'CONTENT_LEFT',
  CONTENT_RIGHT = 'CONTENT_RIGHT',
  FULL_CENTER = 'FULL_CENTER',
  SPLIT_EQUAL = 'SPLIT_EQUAL',
  CHART_FOCUS = 'CHART_FOCUS'
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: ReactNode;
  visual?: ReactNode;
  section: string;
}

export interface FinancialState {
  dailySales: number;
  grossMargin: number; // 0.5 for 50%
  rent: number;
  staffCost: number;
  capex: number;
}