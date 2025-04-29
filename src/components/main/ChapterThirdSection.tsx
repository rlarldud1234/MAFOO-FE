import { ArrowRightImage, ExerciseImage } from "@/assets/images";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "@emotion/styled";
import Image from "next/image";
import StandardButton from "../buttons/StandardButton";

const ChapterThirdSection = () => {
  return (
    <Container>
      <ChapterContainer>
        <ChapterText>Chapter 3</ChapterText>
        <TitleText>
          개쩌는 기능을
          <br />한 눈에 확인하세요.
        </TitleText>
        <ContentText>
          존나 개쩌는 기능이에요~존나 개쩌는 기능이에요~존나 개쩌는
          기능이에요~존나 개쩌는 기능이에요~존나 개쩌는 기능이에요~ 개쩌는
          기능이에요~개쩌는 기능이에요~개쩌는 기능이에요~
          <br /> 닥치고 그으으으으으으으으ㅡ으으으으으냥 사용해보세요~
        </ContentText>
        <StandardButton
          size="large"
          styleType="filled"
          title="Button"
          image={ArrowRightImage}
        />
      </ChapterContainer>
      <ChapterImage src={ExerciseImage} alt="runningBoy" />
    </Container>
  );
};
const Container = styled.div`
  background-color: ${color.base.white};
  padding: 60px 100px;
  display: flex;
  margin: 32px 0px;
  gap: 60px;
  border-radius: 16px;
`;
const ChapterImage = styled(Image)`
  width: 300px;
  height: 300px;
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
  white-space: pre-wrap;
`;
export default ChapterThirdSection;
