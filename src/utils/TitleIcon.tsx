const TitleIcon = ({ fill, status }: any) => {
  const polygon = (
    <svg
      width="23"
      height="23"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_68_140)">
        <rect
          x="-3.14722"
          y="20.2842"
          width="33.1372"
          height="33.1372"
          rx="8"
          transform="rotate(-45 -3.14722 20.2842)"
          fill={fill}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_68_140"
          x="0.166504"
          y="0.166504"
          width="42.2357"
          height="42.2354"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_68_140"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_68_140"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_angular_68_140"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.0661 22.0215) rotate(135) scale(41.9393)"
        >
          <stop stop-color="#D375FF" />
          <stop offset="1" stop-color="#CC3DFF" />
        </radialGradient>
      </defs>
    </svg>
  );

  const circle = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_68_143)">
        <rect
          x="-4"
          y="6.48438"
          width="24.0418"
          height="24.0418"
          rx="12.0209"
          transform="rotate(-25.8557 -4 6.48438)"
          fill={fill}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_68_143"
          x="0.0362549"
          y="0.0361328"
          width="26.0472"
          height="26.0469"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_68_143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_68_143"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_angular_68_143"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(18.646 7.7448) rotate(135) scale(30.4279)"
        >
          <stop stop-color="#FFE175" />
          <stop offset="1" stop-color="#FFC93D" />
        </radialGradient>
      </defs>
    </svg>
  );

  return status === "polygon" ? polygon : circle;
};

export default TitleIcon;
