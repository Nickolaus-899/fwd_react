"use client"
import styled from "styled-components";

export const GeneralFooterHeader = styled("div")`
  position: fixed;
  width: 100%;
  height: 70px;

  background-color: rgba(191, 128, 48, 0.29);
`

export const PositionFooter = styled(GeneralFooterHeader)`
  bottom: 0;
`

export const PositionHeader = styled(GeneralFooterHeader)`
  top: 0;
`