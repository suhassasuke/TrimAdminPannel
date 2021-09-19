import React from "react";

const TrimzLogo = (props) => {
    const { color = "#fff" } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="146"
            height="41"
            fill="none"
            viewBox="0 0 146 41"
        >
            <path
                fill={color}
                d="M13.512 33.549V11.88h7.756V6.884H0v4.997h7.795V33.55h5.717zM55.33 33.549l-6.037-10.154c2.878-.68 5.876-3.239 5.876-7.916 0-4.957-3.438-8.595-8.994-8.595H33.702v26.665h5.676v-9.475h4.158l5.237 9.475h6.556zm-9.955-14.472h-5.997v-7.196h5.997c2.239 0 3.958 1.36 3.958 3.558 0 2.279-1.72 3.638-3.958 3.638zM117.791 33.549V6.884h-7.995l-6.477 16.67-6.476-16.67h-7.955v26.665h5.676v-19.23l7.516 19.23h2.479l7.515-19.23v19.23h5.717zM146 6.884h-18.916v5.34h11.441l-11.441 16.474v4.958H146v-5.34h-11.517L146 11.843V6.884z"
            ></path>
            <path
                fill={color}
                fillRule="evenodd"
                d="M66.004 3.941A3.941 3.941 0 0169.945 0h3.942a3.941 3.941 0 013.941 3.941v3.942h-1.126V3.94a2.815 2.815 0 00-2.815-2.815h-3.942a2.815 2.815 0 00-2.815 2.815v2.816h6.414v1.126h-7.54V3.94zM77.828 36.598a3.941 3.941 0 01-3.941 3.942h-3.942a3.941 3.941 0 01-3.941-3.942V33.22h1.126v3.378a2.815 2.815 0 002.815 2.816h3.942a2.815 2.815 0 002.815-2.816v-2.252h-6.414V33.22h7.54v3.378z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#FF78B9"
                fillRule="evenodd"
                d="M77.828 14.154V8.446L66.004 18.775v5.708l11.824-10.329zM66.004 26.386v5.708l11.824-10.33v-5.707L66.004 26.386zm10.698-7.85l-9.572 8.361v2.718l9.572-8.362v-2.717zm-9.572 3.468l9.572-8.362v-2.717l-9.572 8.361v2.718z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#31E8F3"
                fillRule="evenodd"
                d="M66.004 9.009h7.793v.675l-7.793 6.75V9.01zm1.126 4.96l4.426-3.834H67.13v3.834zm0 12.9v2.739l9.572-8.402v-2.738l-9.572 8.401zm-1.126-.51v5.735l11.824-10.378v-5.735L66.004 26.359z"
                clipRule="evenodd"
            ></path>
            <path
                fill="#FF78B9"
                fillRule="evenodd"
                d="M72.275 30.792h4.427v-3.834l-4.427 3.834zm-2.24.45l7.793-6.75v7.426h-7.793v-.675z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};

const TrimzArrowRight = (props) => {
    const { color = "#BDBDBD" } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="none"
            viewBox="0 0 21 21"
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.309"
                d="M16.581 10.472H4.8m11.781 0l-5.236 5.236m5.236-5.236l-5.236-5.236"
            ></path>
        </svg>
    );
};

const Star = (props) => {
    const { color = "#CEA26C" } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="10"
            fill="none"
            viewBox="0 0 11 10"
        >
            <path
                fill={color}
                d="M4.549.927c.3-.921 1.603-.921 1.902 0l.508 1.564a1 1 0 00.951.691h1.645c.969 0 1.372 1.24.588 1.81l-1.33.966a1 1 0 00-.364 1.118l.508 1.565c.3.92-.755 1.687-1.539 1.118l-1.33-.967a1 1 0 00-1.176 0l-1.33.967c-.784.569-1.839-.197-1.54-1.118l.509-1.565a1 1 0 00-.363-1.118L.857 4.991c-.784-.569-.381-1.809.588-1.809H3.09a1 1 0 00.95-.69L4.55.926z"
            ></path>
        </svg>
    );
};
export { TrimzLogo, TrimzArrowRight, Star };
