import React, { useState } from 'react';
import './App.css';
import { UserData } from './Data';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import PolarArea from './components/PolarArea';
import Scatter from './components/MultiaxisLineChart';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75, 192, 192, 1)",
        "red",
        "blue",
        "green",
        "violet",
      ],
    }],
  });
  return (
    <>
    <div className="container">
      <div className="cont">
        <BarChart 
          chartData={userData}
        />
      </div>
      <div className="cont">
        <LineChart 
          chartData={userData}
        />
      </div>
    </div>
    <div className="container2">
      <div className="cont">
        <PieChart 
          chartData={userData}
        />
      </div>
      <div className="cont">
        <PolarArea 
          chartData={userData}
        />
      </div>
    </div>
    <div className="cont">
        <Scatter 
          chartData={userData}
        />
      </div>
    </>
  );
}

export default App;
