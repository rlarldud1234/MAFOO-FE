import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "@emotion/styled";

const ChapterFourthSection = () => {
  return (
    <Container>
      <ChapterText>Chapter 4</ChapterText>
      <TitleText>개쩌는 기능을 한 눈에 확인하세요.</TitleText>
      <ContentText>
        존나 개쩌는 기능이니까 닥치고 그으으으냥 사용해보세요~
      </ContentText>
      <ChartContainer></ChartContainer>
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
`;

export default ChapterFourthSection;
