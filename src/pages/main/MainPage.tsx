import { Banner2Image, BannerImage } from "@/assets/images";
import ChapterFirstSection from "@/components/main/ChapterFirstSection";
import ChapterFourthSection from "@/components/main/ChapterFourthSection";
import ChapterSecondSection from "@/components/main/ChapterSecondSection";
import ChapterThirdSection from "@/components/main/ChapterThirdSection";
import ThirdBanner from "@/components/main/ThirdBanner";
import { color } from "@/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";

const MainPage = () => {
  return (
    <>
      <Container>
        <Banner src={BannerImage} alt="Banner" />
        <Padding />
        <ChapterFirstSection />
        <ChapterSecondSection />
        <SecondBanner src={Banner2Image} alt="Banner2" />
        <ChapterThirdSection />
        <ChapterFourthSection />
        <ThirdBanner />
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: ${color.gray[50]};
  padding: 32px 15rem;
  margin-top: 84px;
`;
const Padding = styled.div`
  height: 32px;
`;
const Banner = styled(Image)`
  width: 1440px;
  height: auto;
`;
const SecondBanner = styled(Image)`
  width: 1440px;
  height: auto;
`;

export default MainPage;
