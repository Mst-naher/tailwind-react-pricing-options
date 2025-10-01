
import React from 'react';
import { LineChart, Line } from "recharts";

const resultData = [
  [
  { "id": 1, "name": "Student 1", "physics": 78, "chemistry": 82, "math": 90 },
  { "id": 2, "name": "Student 2", "physics": 65, "chemistry": 70, "math": 72 },
  { "id": 3, "name": "Student 3", "physics": 88, "chemistry": 79, "math": 85 },
  { "id": 4, "name": "Student 4", "physics": 92, "chemistry": 95, "math": 89 },
  { "id": 5, "name": "Student 5", "physics": 55, "chemistry": 60, "math": 58 },
  { "id": 6, "name": "Student 6", "physics": 73, "chemistry": 77, "math": 80 },
  { "id": 7, "name": "Student 7", "physics": 81, "chemistry": 84, "math": 79 },
  { "id": 8, "name": "Student 8", "physics": 69, "chemistry": 65, "math": 71 },
  { "id": 9, "name": "Student 9", "physics": 90, "chemistry": 87, "math": 93 },
  { "id": 10, "name": "Student 10", "physics": 77, "chemistry": 74, "math": 76 }
]

]

const ResultChart = () => {
  return (
    <div>
      <LineChart width={500} height={500} data={resultData}>
        <Line dataKey="math"></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;