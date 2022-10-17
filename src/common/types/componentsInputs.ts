import { FC } from 'react';
import { Cluster, Item, MetaData, Phrase } from './modals';
import { ItemsDisplayComponentProps } from './configurations';
import { CounterType } from './CustomizeBarTypes';

export interface DataNode {
  id: string;
  amount: number;
  text?: string;
  metadata: MetaData;
  type: string;
}

export interface TreemapProps {
  dataNodes: DataNode[];
  width: number;
  height: number;
  nodeClicked: (node: DataNode) => void;
  bigColor?: string;
  smallColor?: string;
  countFontSize?: number;
  fontFamily?: string;
  textColor?: string;
  borderWidth?: number;
  borderColor?: string;
  labels: string[];
  counters: CounterType[];
}

export interface BarChartProps {
  dataNodes: DataNode[];
  width: number;
  height: number;
  nodeClicked: (node: DataNode) => void;
  fontFamily?: string;
  textColor?: string;
}

export type NodeType = 'Cluster' | 'Phrase' | 'Item';
export interface OneAIDataNode {
  type: NodeType;
  data: Cluster | Phrase | Item;
}

export interface OneAiAnalyticsProps {
  dataNodes: OneAIDataNode[];
  currentNode?: OneAIDataNode;
  totalPagesAmount?: number;
  currentPage?: number;
  nodeClicked?: (node: Omit<OneAIDataNode & { id: string }, 'data'>) => void;
  goBackClicked?: (skip: number) => void;
  nextPageClicked?: () => void;
  prevPageClicked?: () => void;
  background?: string;
  treemapBigColor?: string;
  treemapSmallColor?: string;
  treemapCountFontSize?: number;
  treemapFontFamily?: string;
  treemapTextColor?: string;
  treemapBorderWidth?: number;
  treemapBorderColor?: string;
  navbarColor?: string;
  itemsDisplay?: FC<ItemsDisplayComponentProps>;
  loading?: boolean;
  nodesPath?: string[];
}

export type OneAIAnalyticsStaticDataWrapperProps = Omit<
  OneAiAnalyticsProps & { exampleNodes: ExampleNode[]; collection?: string },
  'dataNodes' | 'totalPagesAmount' | 'currentPage'
>;

export type OneAIAnalyticsApiWrapperProps = Omit<
  OneAiAnalyticsProps & {
    domain?: string;
    apiKey?: string;
    collection?: string;
    refreshToken?: string;
  },
  'dataNodes' | 'totalPagesAmount' | 'currentPage'
>;

export interface ExampleNode {
  type: NodeType;
  id: string;
  text: string;
  items_count: number;
  items?: string[];
  children?: ExampleNode[];
}