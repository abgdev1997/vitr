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
                        radial-gradient(${colors.primary} 1px, #fdfdfd 1px),
                        radial-gradient(${colors.secondary} 1px, #fdfdfd 1px);
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
