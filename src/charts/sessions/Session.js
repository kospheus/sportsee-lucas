
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CTSession } from '../sessions/CTSession'

const data = [
  {
    name: 'L',
    min: 4000,
  },
  {
    name: 'M',
    min: 3000,
  },
  {
    name: 'M',
    min: 2000,
  },
  {
    name: 'J',
    min: 2780,
  },
  {
    name: 'V',
    min: 1890,
  },
  {
    name: 'S',
    min: 2390,
  },
  {
    name: 'D',
    min: 3490,
  },
];

export default class Example extends LineChart {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 80,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} mirror={true} stroke='white'/>
          <Tooltip content={<CTSession />}/>
          <Line type="monotone" dataKey="min" stroke="white" dot=''/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
