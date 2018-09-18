import React from 'react';
import PropTypes from 'prop-types'

const SVGNameCard = ({ doo }) => 
    <div>
        <svg width="180mm" height="75mm" version="1.1" viewBox="0 0 180 75" xmlns="http://www.w3.org/2000/svg">
            <g fill="#070707" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                <text x="8" y="21" fontFamily="'Bell MT'" fontSize="12.8px" style={{lineHeight:1.25}} >
                    <tspan x="7" y="21" font-family="'Bell MT'" stroke-width=".15">{doo.name}</tspan>
                </text>
                <text x="5" y="55" fontFamily="'210 Gaksultang'" fontSize="4.8px" style={{lineHeight:1.25}} >
                    <tspan x="4.5" y="55" stroke-width=".26458">{doo.address}</tspan>
                </text>
            </g>
        </svg>
    </div>    
    
    SVGNameCard.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    title: PropTypes.string,
    logo: PropTypes.string,
    tel: PropTypes.string,
    mobile: PropTypes.string.isRequired,
    fax: PropTypes.string,
    share: PropTypes.string,
    adddress: PropTypes.string,
    email: PropTypes.string.isRequired,
    // onRemove: PropTypes.func,
    // onRate: PropTypes.func
}

SVGNameCard.defaultProps = {
    name: '홍길동', 
    company: 'Clbee Ltd', 
    title: '매니저', 
    tel: '02-1234-9876', 
    mobile: '010-9000-3332', 
    fax: '02-777-9999', 
    address: '서울시 강남구 서초동 123-900', 
    share: 'triple', 
    email:'kraken@gmail.com'
}
export default SVGNameCard;