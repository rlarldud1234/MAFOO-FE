import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "@emotion/styled";
import Image from "next/image";

interface StandardButtonProps {
  size: "large" | "medium" | "small";
  styleType: "filled" | "outline" | "empty";
  title: string;
  image?: string;
}

const StandardButton = (props: StandardButtonProps) => {
  return (
    <ButtonContainer size={props.size} styleType={props.styleType}>
      {props.title}
      {props.image ? <Image src={props.image} alt="buttonImage" /> : null}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<{ size: string; styleType: string }>`
  display: flex;
  align-items: center;
  padding: ${({ size }) => (size === "small" ? "24px" : "32px")};
  box-shadow: ${({ styleType }) =>
    styleType === "outline" ? `inset 0 0 0 1px ${color.primary[600]}` : null};
  border-radius: ${({ size }) => (size === "small" ? "4px" : "8px")};
  ${({ size }) => {
    switch (size) {
      case "large":
        return `height: 59px; ${font.body.lg};`;
        break;
      case "medium":
        return `height: 48px; ${font.body.md};`;
      case "small":
        return `height: 37px; ${font.body.sm};`;
      default:
        return;
    }
  }}
  ${({ styleType }) => {
    switch (styleType) {
      case "filled":
        return `background-color: ${color.primary[600]};
          color: ${color.base.white};`;
      case "outline":
        return `background-color: ${color.base.white};
          color: ${color.primary[600]};`;
      case "empty":
        return `background-color: ${color.base.white};
          color: ${color.primary[600]};`;
    }
  }}
  :hover:active {
    ${({ styleType }) => {
      switch (styleType) {
        case "filled":
          return `background-color: ${color.primary[700]};`;
        case "outline":
          return `background-color: ${color.gray[100]};
          box-shadow: inset 0 0 0 1px ${color.primary[700]};
          color: ${color.primary[700]};`;
        case "empty":
          return `background-color: ${color.gray[100]};
          color: ${color.primary[700]};`;
      }
    }}
  }
  :hover {
    ${({ styleType }) => {
      switch (styleType) {
        case "filled":
          return `background-color: ${color.primary[500]};`;
        case "outline":
          return `background-color: ${color.gray[100]};
          box-shadow: inset 0 0 0 1px ${color.primary[500]};
          color: ${color.primary[500]};`;
        case "empty":
          return `background-color: ${color.gray[100]};`;
      }
    }}
  }
`;

export default StandardButton;
