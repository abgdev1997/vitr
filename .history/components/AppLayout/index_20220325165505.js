import React from 'react';
import {fonts, colors, breakpoints} from '../../styles/theme'
import {addOpacity} from '../../styles/utils'

const backgroundColorOpacity = addOpacity(colors.primary, 0.3)

const AppLayout = ({children}) => {
    return (
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <style jsx>{`
                div {
                    display: grid;
                    height: 100vh;
                    place-items: center;
                }

                main {
                    background-color: ${colors.white};
                    border-radius: 10px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, .2);
                    height: 100%;
                    width: 100%;
                }

                @media (min-width: ${breakpoints.mobile}) {
                    
                }
            `}    
            </style>    
            <style jsx global>{`
            html,
            body {
                background-image:
                radial-gradient(${backgroundColorOpacity} 1px, #fdfdfd 1px),
                radial-gradient(${backgroundColorOpacity} 1px, #fdfdfd 1px);
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
