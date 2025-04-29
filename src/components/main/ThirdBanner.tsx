import styled from "@emotion/styled";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import StandardButton from "../buttons/StandardButton";
import { ArrowRightImage } from "@/assets/images";

const ThirdBanner = () => {
  return (
    <Container>
      <TitleText>
        개쩌는 기능을 사용하고 싶다면?
        <br />
        개추 누르고 아래 버튼을 클릭하세요.
      </TitleText>
      <StandardButton
        size="large"
        styleType="empty"
        title="Button"
        image={ArrowRightImage}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    to top,
    ${color.primary[200]},
    ${color.primary[100]}
  );
  padding: 50px 0px;
  margin-top: 32px;
  border-radius: 16px;
`;
const TitleText = styled.text`
  ${font.heading.lg.bold}
  color: ${color.gray[900]};
  text-align: center;
  margin-bottom: 36px;
`;

export default ThirdBanner;
