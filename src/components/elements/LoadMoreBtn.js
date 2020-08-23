import React from 'react'
import PropTypes from 'prop-types';
import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn'
const LoadMoreBtn = ({text, callback}) => {
    return (
        <StyledLoadMoreBtn type="Button" onClick={callback}>
            {text}
        </StyledLoadMoreBtn>
    )
}

LoadMoreBtn.propTypes={
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default LoadMoreBtn
