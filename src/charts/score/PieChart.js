import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';


async function userPie() {
  const response = await fetch('http://localhost:3000/user/12');
  const pie = await response.json();

  console.log(pie); 
  return pie;
}

const apiData = await userPie();

const data = [
  { name: 'Group A', value: 22 },
];
const COLORS = ['red'];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {

    return (
      <ResponsiveContainer width="100%" height="100%" className="PieChart-container">
        <PieChart>
          <Pie
            data={apiData.data.todayScore}
            cx='50%'
            cy='50%'
            innerRadius={70}
            outerRadius={80}
            cornerRadius={50}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            valueKey={100}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
              <Label 
                value={apiData.data.todayScore + "%"} 
                position="center" 
                fontSize={26} 
                fontWeight={700} dy={-10}
              />
              <Label 
                value="de votre objectif" 
                position="centerTop" dy={10}  
                width={100} fill="#74798C" 
                fontSize={16}
                fontWeight={500}
              />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
    );
  }
}
