import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";

interface FunctionCardProps {
  image: StaticImageData;
  title: string;
  content: string;
}
const FunctionCard = ({ image, title, content }: FunctionCardProps) => {
  return (
    <Container>
      <FunctionImage src={image} alt="function card" />
      <TitleText>{title}</TitleText>
      <ContentText>{content}</ContentText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 220px;
  border: 1px solid ${color.gray[400]};
  border-radius: 12px;
  padding: 36px 0px;
`;
const FunctionImage = styled(Image)`
  width: 65px;
  height: 56px;
`;
const TitleText = styled.text`
  color: ${color.gray[950]};
  ${font.heading.sm.semiBold}
  margin-top: 28px;
`;
const ContentText = styled.text`
  margin-top: 12px;
  color: ${color.gray[700]};
  ${font.body.md.medium}
  text-align: center;
  white-space: pre-wrap;
`;
export default FunctionCard;
