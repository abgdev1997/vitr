import React from 'react';
import {fonts, colors, breakpoints} from '../../styles/theme'
import {addOpacity} from '../../styles/utils'
import styles, {globalStyles} from './styles'

const backgroundColorOpacity = addOpacity(colors.primary, 0.3)

const AppLayout = ({children}) => {
    return (
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <style jsx>{styles}</style>    
            <style jsx global>{globalStyles}</style>
        </>
    );
}

export default AppLayout;
