import React from "react";
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';

export default function BarChart({chartData}) {
  return <Scatter data={chartData} />;
}
