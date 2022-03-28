import React from 'react';

const AppLayout = ({children}) => {
    return (
        <>
            <main>
                {children}
            </main>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: monospace;
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
