import css from 'styled-jsx/css'

import {breakpoints, colors, fonts} from '../../styles/theme'
import {addOpacity} from '../../styles/utils'

const backgroundColor = addOpacity(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image:
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base}
  }
  * {
    box-sizing: border-box;
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px ${backgroundColor};
    height: 90vh;
    width: ${breakpoints.mobile};
  }
  @media (max-width: ${breakpoints.mobile}) {
    main {
        height:100%;
        width: 100%;
    }
  }`