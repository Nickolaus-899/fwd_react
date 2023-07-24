"use client";
import React, { JSX } from "react";
import styled from "styled-components";
import { SignWrapperColor } from "@/lib/form/components/veggie/VeggieChoose";

const CheckMark: ({ active }: { active: boolean }) => JSX.Element = ({
  active,
}) => {
  return (
    <CheckMarkWrapperColor $active={active}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 1280.000000 1185.000000"
        className="CheckMark"
      >
        <g
          transform="translate(0.000000,1185.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M12595 11778 c-798 -464 -1551 -977 -2329 -1587 -2298 -1802 -4607
                                -4276 -6680 -7159 -49 -67 -92 -122 -97 -122 -5 0 -753 420 -1662 934 -908
                                513 -1666 940 -1683 949 l-30 15 -42 -51 c-35 -44 -39 -54 -28 -67 7 -8 919
                                -1066 2025 -2350 1826 -2118 2015 -2335 2044 -2338 l32 -3 232 463 c1660 3307
                                3383 5918 5493 8323 793 905 1778 1912 2655 2714 105 95 201 184 214 197 l24
                                22 -37 51 c-21 28 -43 51 -49 51 -7 -1 -43 -19 -82 -42z"
          />
        </g>
      </svg>
    </CheckMarkWrapperColor>
  );
};

const CheckMarkWrapperColor = styled("div")<SignWrapperColor>`
  svg {
    g {
      fill: ${(props) => (props.$active ? "green" : "black")};
    }
  }
`;

export default CheckMark;
