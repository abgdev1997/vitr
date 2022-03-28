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
                    font-family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif';
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
