import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { id: 1, name: "John Doe", mathMarks: 85, physicsMarks: 78 },
  { id: 2, name: "Jane Smith", mathMarks: 92, physicsMarks: 85 },
  { id: 3, name: "Mike Johnson", mathMarks: 78, physicsMarks: 75 },
  { id: 4, name: "Emily Brown", mathMarks: 88, physicsMarks: 80 },
  { id: 5, name: "Alex Davis", mathMarks: 95, physicsMarks: 92 },
  { id: 6, name: "Sarah Wilson", mathMarks: 80, physicsMarks: 70 },
  { id: 7, name: "James Miller", mathMarks: 85, physicsMarks: 85 },
  { id: 8, name: "Olivia White", mathMarks: 90, physicsMarks: 88 },
  { id: 9, name: "William Taylor", mathMarks: 83, physicsMarks: 79 },
  { id: 10, name: "Ava Martinez", mathMarks: 87, physicsMarks: 82 },
];

const MyLineChart = () => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="mathMarks"
        name="Math Marks"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="physicsMarks"
        name="Physics Marks"
        stroke="#82ca9d"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default MyLineChart;
