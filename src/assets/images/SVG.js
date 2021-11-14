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

const MenuHomeIcon = (props) => {
    const { color = "#A1A1AA" } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={color}
                d="M12.848 2.752a1.2 1.2 0 00-1.697 0l-8.4 8.4a1.2 1.2 0 001.697 1.697l.351-.352V20.4A1.2 1.2 0 006 21.6h2.4a1.2 1.2 0 001.2-1.2V18a1.2 1.2 0 011.2-1.2h2.4a1.2 1.2 0 011.2 1.2v2.4a1.2 1.2 0 001.2 1.2H18a1.2 1.2 0 001.2-1.2v-7.903l.352.351a1.2 1.2 0 001.697-1.696l-8.4-8.4z"
            ></path>
        </svg>
    );
};
const MenuOrderIcon = (props) => {
    const { color = "#A1A1AA" } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={color}
                d="M3.6 1.2a1.2 1.2 0 100 2.4h1.464l.366 1.467.012.05 1.63 6.516L6 12.703C4.488 14.215 5.56 16.8 7.697 16.8H18a1.2 1.2 0 100-2.4H7.697l1.2-1.2H16.8a1.2 1.2 0 001.073-.663l3.6-7.2A1.2 1.2 0 0020.4 3.6H7.536L7.164 2.11A1.2 1.2 0 006 1.2H3.6zm15.6 18.6a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0zM7.8 21.6a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"
            ></path>
        </svg>
    );
};
const MenuSettingIcon = (props) => {
    const { color = "#A1A1AA" } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M13.788 3.804c-.456-1.872-3.12-1.872-3.576 0A1.838 1.838 0 017.47 4.942c-1.647-1.003-3.53.88-2.527 2.527a1.84 1.84 0 01-1.137 2.745c-1.873.454-1.873 3.12 0 3.573a1.838 1.838 0 011.137 2.745c-1.004 1.646.88 3.53 2.527 2.527a1.839 1.839 0 012.744 1.136c.455 1.873 3.12 1.873 3.574 0a1.84 1.84 0 012.744-1.136c1.647 1.003 3.53-.881 2.527-2.527a1.839 1.839 0 011.137-2.745c1.873-.455 1.873-3.12 0-3.573a1.838 1.838 0 01-1.137-2.745c1.004-1.646-.88-3.53-2.527-2.527a1.838 1.838 0 01-2.744-1.136l.001-.002zM12 15.6a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};
export {
    TrimzLogo,
    TrimzArrowRight,
    MenuHomeIcon,
    MenuOrderIcon,
    MenuSettingIcon
};
