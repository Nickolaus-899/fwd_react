"use client"
import styled from "styled-components";

export const GeneralFooterHeader = styled("div")`
  position: fixed;
  width: 100%;
  height: 70px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(191, 128, 48, 0.29);
`

export const PositionFooter = styled(GeneralFooterHeader)`
  bottom: 0;
`

export const PositionHeader = styled(GeneralFooterHeader)`
  top: 0;
`

export const InnoLogo = styled("div")`
  color: #000;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`