import styled from "@emotion/styled";
import StandardButton from "../buttons/StandardButton";
import { font } from "@/styles/font";
import { color } from "@/styles/color";
import { ArrowRightImage, LogoImage } from "@/assets/images";
import FunctionCard from "./FunctionCard";

const ChapterSection = () => {
  return (
    <Container>
      <ChapterContainer>
        <h2>
          <ChapterText>Chapter 1</ChapterText>
        </h2>
        <TitleText>
          개쩌는 기능을 <br /> 한 눈에 확인하세요.
        </TitleText>
        <ContentText>
          존나 개쩌는 기능이니까
          <br />
          닥치고 그으으으냥 사용해보세요~
        </ContentText>
        <StandardButton
          size="large"
          styleType="filled"
          title="Button"
          image={ArrowRightImage}
        />
      </ChapterContainer>
      <FunctionCardContainer>
        {[0, 1, 2, 3].map((number) => {
          return (
            <FunctionCard
              key={number}
              image={LogoImage}
              title="첫 번째 개쩌는 기능"
              content={`이야~ 시발 존나 쩌는 기능이다\n이야~ 시발 존나 쩌는 기능이다아아아아앙`}
            />
          );
        })}
      </FunctionCardContainer>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${color.base.white};
  padding: 100px 60px;
  display: flex;
`;
const ChapterContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;
const FunctionCardContainer = styled.div`
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(2, 350px);
  gap: 20px;
`;

export default ChapterSection;
