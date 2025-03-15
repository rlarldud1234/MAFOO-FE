import { LogoImage } from "@/assets/images";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import StandardButton from "../buttons/StandardButton";

const menuData = [
  { id: 1, name: "Menu", path: "/" },
  { id: 2, name: "Menu", path: "/" },
  { id: 3, name: "Menu", path: "/" },
  { id: 4, name: "Menu", path: "/" },
];
const Header = () => {
  const [selectedId, setSelectedId] = useState<number>(0);

  return (
    <HeaderContainer>
      <h1>
        <Logo onClick={() => setSelectedId(0)}>
          <Image src={LogoImage} alt="logo" />
        </Logo>
      </h1>
      <nav>
        <MenuContainer>
          {menuData.map((menu) => {
            return (
              <li key={menu.id}>
                <Menu
                  onClick={() => setSelectedId(menu.id)}
                  isSelected={selectedId === menu.id}
                  href={menu.path}
                >
                  Menu
                </Menu>
              </li>
            );
          })}
        </MenuContainer>
      </nav>
      <ButtonContainer>
        <StandardButton size="small" styleType="filled" title="Login" />
        <StandardButton size="small" styleType="outline" title="Sign up" />
      </ButtonContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${color.base.white};
  padding: 0 15rem;
  z-index: 500;
  height: 84px;
`;
const Logo = styled.a`
  width: 127px;
  height: 60px;
`;
const MenuContainer = styled.ul`
  display: flex;
`;
const Menu = styled.a<{ isSelected: boolean }>`
  ${font.body.md.medium}
  color: ${color.gray[900]};
  height: 100%;
  padding: 30px 27.5px;
  border-bottom: ${({ isSelected }) =>
    isSelected ? `4px solid ${color.primary[600]}` : null};
  :hover {
    border-bottom: ${({ isSelected }) =>
      isSelected ? null : `4px solid ${color.primary[300]}`};
  }
  :active {
    border-bottom: 4px solid ${color.primary[600]};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export default Header;
