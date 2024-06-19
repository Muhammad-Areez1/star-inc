// pages/statistics.js

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the SplineAreaChart component with SSR disabled
const SplineAreaChart = dynamic(() => import('../components/StatisticsChart.js'), {
  ssr: false
});

const Statistics = () => {
  return (
    <div className='w-full py-20 px-10'>
        <div className='box-shadow rounded-lg p-10'>
            <SplineAreaChart />
        </div>
    </div>
  );
};

export default Statistics;
