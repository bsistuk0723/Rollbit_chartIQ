import React from 'react';

function SvgLoading(props) {
    return (
        <svg
            width={props.width}
            height={props.height}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            >
            <g>
                <g transform="translate(80 50)">
                    <circle r="8" fill="currentColor">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.875s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.875s"></animate>
                    </circle>
                </g>
            </g>
            <g>
                <g transform="rotate(45 -50.355 121.569)">
                    <circle r="8" fill="currentColor" fillOpacity=".875">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.75s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.75s"></animate>
                    </circle>
                </g>
            </g>
            <g>
                <g transform="rotate(90 -15 65)">
                    <circle r="8" fill="currentColor" fillOpacity=".75">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.625s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.625s"></animate>
                    </circle>
                </g>
            </g>
            <g>
                <g transform="rotate(135 -.355 41.569)">
                    <circle r="8" fill="currentColor" fillOpacity=".625">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.5s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.5s"></animate>
                    </circle>
                </g>
            </g>
            <g>
                <g transform="rotate(180 10 25)">
                    <circle r="8" fill="currentColor" fillOpacity=".5">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.375s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.375s"></animate>
                    </circle>
                </g>
            </g>
            <g>
                <g transform="rotate(-135 20.355 8.431)">
                    <circle r="8" fill="currentColor" fillOpacity=".375">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.25s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.25s"></animate>
                    </circle>
                </g>
            </g>
            <g>
                <g transform="rotate(-90 35 -15)">
                    <circle r="8" fill="currentColor" fillOpacity=".25">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.125s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.125s"></animate>
                    </circle>
                </g>
            </g>
            <g>
                <g transform="rotate(-45 70.355 -71.569)">
                    <circle r="8" fill="currentColor" fillOpacity=".125">
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="0s"
                            values="1 1;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"></animateTransform>
                        <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="0s"></animate>
                    </circle>
                </g>
            </g>
        </svg>
    )
}

export default SvgLoading;