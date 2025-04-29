import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "@emotion/styled";
import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  Customized,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export interface ChartProp {
  name: string;
  value: number;
  color: string;
  disabled?: boolean;
}
export interface ChartCardProp {
  questionNumber: number;
  question: string;
  data: ChartProp[];
}
const CustomLabel = ({ x = 0, y = 0, width = 0, value = 0 }) => {
  return (
    <text
      x={x + width + 32}
      y={y + 10}
      fill="#333"
      fontSize={14}
      alignmentBaseline="middle"
    >
      {value}%
    </text>
  );
};

const ChartCard = (prop: ChartCardProp) => {
  const CustomYAxisLabels: React.FC = () => {
    return (
      <>
        {prop.data.map((entry, index) => (
          <text
            style={font.body.md.semiBold}
            key={`label-${index}`}
            x={14}
            y={index * 48 + 10} // 막대 위치보다 약간 위
            fill="#333"
            textAnchor="start"
          >
            {entry.name}
          </text>
        ))}
      </>
    );
  };

  return (
    <Container>
      <QuestionText>
        Q{prop.questionNumber + 1}. <br />
        {prop.question}
      </QuestionText>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart
          layout="vertical"
          data={prop.data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          barCategoryGap={30}
        >
          <XAxis type="number" hide />
          <Customized component={<CustomYAxisLabels />} />
          <Tooltip />
          <Bar
            dataKey="value"
            barSize={14}
            label={<CustomLabel />}
            radius={[10, 10, 10, 10]}
          >
            {prop.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                opacity={entry.disabled ? 0.4 : 1}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.gray[50]};
  padding: 40px 32px;
  border-radius: 8px;
`;
const QuestionText = styled.text`
  ${font.body.xl.bold}
  color: ${color.gray[950]};
  margin-bottom: 36px;
`;
export default ChartCard;
