import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
            /* latin */
            @font-face {
                font-family: 'DMSerifDisplay-Regular';
                font-style: normal;
                font-weight: normal;
                font-display: swap;
                src: url('/DMSerifDisplay-Regular.woff') format('woff')
            }
            @font-face {
                font-family: 'DMSerifDisplay-Italic';
                font-style: italic;
                font-weight: normal;
                font-display: swap;
                src: url('/DMSerifDisplay-Italic.woff') format('woff')
            }
        `}
  />
);
