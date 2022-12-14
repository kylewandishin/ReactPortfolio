import '../../Home/logo/index.scss'
import logo from '../../../assets/images/logo.png'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    // useEffect(() => {
    //     gsap.registerPlugin(DrawSVGPlugin)
        
    //     gsap
    //     .timeline()
    //     .to(bgRef.current,{
    //         duration: 1,
    //         opacity: 1
    //     })
    //     .from(
    //         outlineLogoRef.current,{
    //             drawSVG: 1,
    //             duration:20
    //         }
    //     )

    //     gsap.fromTo(
    //         solidLogoRef.current,{
    //             opacity:0,
    //         },{
    //             opacity:0.6,
    //             delay:3,
    //             duration:4
    //         }
    //     )
    // })



    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={logo} alt='K' opacity='0'/>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="654.000000pt" height="786.000000pt" viewBox="0 0 654.000000 786.000000"
                preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,786.000000) scale(0.100000,-0.100000)"
                    fill="none" className='svg-container'>
                    <path id="drawable" ref={outlineLogoRef} d="M38 5338 c1 -1377 3 -2951 5 -3498 l2 -995 111 205 c60 113 114 205
                    120 205 5 0 11 -88 14 -207 l5 -208 198 368 198 367 2 3132 2 3133 -330 0
                    -330 0 3 -2502z

                    M810 5053 l0 -2788 52 95 c138 254 184 333 193 332 6 -1 12 -81 15
                    -204 l5 -203 198 366 197 366 3 2411 2 2412 -332 0 -333 0 0 -2787z

                    M1590 5778 l0 -2063 113 208 c63 115 118 210 123 210 5 1 11 -88 14
                    -207 l5 -209 203 375 202 375 0 1687 0 1686 -330 0 -330 0 0 -2062z

                    M4316 7826 c3 -8 -24 -65 -59 -127 -35 -63 -81 -148 -102 -189 -44
                    -85 -108 -198 -250 -445 -54 -93 -155 -276 -225 -405 -70 -129 -156 -284 -192
                    -345 -229 -388 -341 -585 -433 -760 -97 -182 -120 -223 -203 -365 -47 -80
                    -110 -188 -140 -240 -30 -52 -86 -149 -125 -215 -38 -66 -117 -210 -174 -319
                    -58 -110 -147 -272 -197 -360 -51 -89 -143 -255 -206 -371 -62 -115 -137 -253
                    -165 -305 -29 -52 -92 -169 -140 -260 -48 -91 -209 -394 -358 -675 -148 -280
                    -356 -670 -462 -865 -106 -195 -322 -596 -481 -890 -158 -294 -303 -562 -321
                    -595 -18 -33 -33 -63 -33 -67 0 -10 222 -10 472 -1 l188 6 149 276 c326 605
                    1033 1919 1055 1961 13 25 239 443 501 930 263 487 647 1200 855 1585 937
                    1737 1291 2394 1463 2713 l185 342 -304 0 c-255 0 -303 -2 -298 -14z

                    M5152 7831 l-124 -6 -720 -1335 c-981 -1819 -2067 -3830 -2206 -4085
                    -216 -394 -1282 -2376 -1282 -2382 0 -9 653 6 661 15 4 4 424 781 934 1727
                    1138 2110 1261 2338 2378 4405 492 910 894 1656 893 1656 -4 6 -437 10 -534 5z

                    M5750 7665 c-50 -91 -130 -240 -179 -332 -137 -261 -202 -382 -1051
                    -1953 -439 -811 -1031 -1909 -1318 -2440 -286 -531 -756 -1404 -1046 -1940
                    l-525 -975 157 -3 c86 -1 236 1 332 5 l174 8 732 1360 c808 1500 908 1684 933
                    1717 10 13 75 131 146 263 174 326 1310 2436 1720 3195 182 338 392 728 465
                    865 73 138 150 283 172 323 l39 72 -330 0 -330 0 -91 -165z

                    M4328 3439 c-25 -46 -70 -131 -100 -189 l-55 -105 841 -1562 841
                    -1562 195 1 c107 0 255 3 327 7 l133 6 -942 1744 -942 1743 -24 -48 c-13 -27
                    -40 -78 -59 -113 -42 -76 -42 -76 -118 64 l-52 97 -45 -83z

                    M3884 2614 l-100 -186 647 -1202 648 -1201 322 2 c177 2 324 4 326 6
                    4 5 -1480 2757 -1487 2757 -3 0 -30 -46 -60 -102 -30 -56 -59 -101 -65 -101
                    -9 0 -30 35 -112 181 l-18 33 -101 -187z

                    M3494 1892 l-100 -186 51 -91 c27 -50 232 -429 455 -843 l405 -751
                    195 1 c107 0 254 3 326 7 l131 6 -550 1018 c-303 559 -554 1017 -557 1017 -3
                    0 -30 -47 -60 -103 -30 -56 -59 -102 -65 -102 -5 0 -35 46 -66 103 -31 56 -58
                    104 -60 107 -3 2 -50 -80 -105 -183z"/>
                    </g>
                </svg>
            <img className='hidden-logo' src={logo} alt='logo'/>
        </div>
    );
}

export default Logo;