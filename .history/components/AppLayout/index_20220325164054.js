import React from 'react';
import {fonts, colors} from '../../styles/theme'

const AppLayout = ({children}) => {
    return (
        <>
            <main>
                {children}
            </main>
            <style jsx global>{`
            html,
            body {
                background-image:
                radial-gradient(${colors.primary}33 1px, #fdfdfd 1px),
                radial-gradient(${colors.secondary}33 1px, #fdfdfd 1px);
                background-position: 0 0, 25px 25px;
                background-size: 50px 50px;
                padding: 0;
                margin: 0;
                font-family: ${fonts.base}
            }
            * {
                box-sizing: border-box;
            }
            `}
            </style>
        </>
    );
}

export default AppLayout;
