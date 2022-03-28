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
                    background-image: linear-gradient(${colors.primary, colors.secondary})
                    padding: 0;
                    margin: 0;
                    font-family: ${fonts.base};
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
