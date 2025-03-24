import { BannerImage } from "@/assets/images";
import ChapterSection from "@/components/main/ChapterSection";
import { color } from "@/styles/color";
import styled from "@emotion/styled";
import Image from "next/image";

const MainPage = () => {
  return (
    <Container>
      <Padding />
      <Banner src={BannerImage} alt="Banner" />
      <Padding />
      <ChapterSection />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.gray[50]};
  padding: 0 15rem;
  margin-top: 84px;
`;
const Padding = styled.div`
  height: 32px;
`;
const Banner = styled(Image)`
  width: 1440px;
  height: auto;
`;

export default MainPage;
