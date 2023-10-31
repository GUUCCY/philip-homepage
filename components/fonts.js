import { Global } from '@emotion/react'

// https://fonts.googleapis.com/css?family=libre+baskerville
// https://fonts.googleapis.com/css?family=Tangerine

// THE NEW FONT IS NOT IMPORTING
const Fonts = () => (
    <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=libre+baskerville+1c');
    `}
    />
)

export default Fonts