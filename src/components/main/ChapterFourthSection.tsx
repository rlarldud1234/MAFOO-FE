import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "@emotion/styled";
import ChartCard, { ChartProp } from "./ChartCard";

const ChapterFourthSection = () => {
  const questionList = [
    "솔직히 거울 봤으면 운동 시작해야 한다 인정?",
    "솔직히 거울 봤으면 운동 시작해야 한다 인정?",
    "솔직히 거울 봤으면 운동 시작해야 한다 인정?",
  ];
  const chartList: ChartProp[] = [
    { name: "인정한다", value: 64, color: color.primary[500] },
    { name: "이것만먹고하겠다", value: 25, color: color.secondary[600] },
    { name: "응안해", value: 25, color: color.gray[500] },
  ];

  return (
    <Container>
      <ChapterText>Chapter 4</ChapterText>
      <TitleText>개쩌는 기능을 한 눈에 확인하세요.</TitleText>
      <ContentText>
        존나 개쩌는 기능이니까 닥치고 그으으으냥 사용해보세요~
      </ContentText>
      <ChartContainer>
        {questionList.map((chart, index) => {
          return (
            <ChartCard
              key={index}
              question={chart}
              questionNumber={index}
              data={chartList}
            />
          );
        })}
      </ChartContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.base.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 100px;
  border-radius: 16px;
`;
const ChapterText = styled.text`
  ${font.body.md.bold}
  color: ${color.primary[600]};
`;
const TitleText = styled.text`
  margin-top: 8px;
  ${font.heading.lg.bold}
  color: ${color.gray[900]};
`;
const ContentText = styled.text`
  margin-top: 10px;
  ${font.body.lg.medium};
  color: ${color.gray[700]};
  margin-bottom: 36px;
  white-space: pre-wrap;
`;
const ChartContainer = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 20px;
`;

export default ChapterFourthSection;
