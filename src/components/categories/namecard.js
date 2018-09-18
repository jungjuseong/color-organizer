import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import PropTypes from 'prop-types'

const NameCard = ({ name='홍길동', company='Clbee Ltd', title='매니저', logo, tel='02-1234-9876', 
    mobile='010-9000-3332', fax='02-777-9999', address='서울시 강남구 서초동 123-900', share='triple', email='kraken@gmail.com',
    description='...', doo}) => (doo == null) ?
        (<div>
            <ListGroup>
                <ListGroupItem>{name} <Badge color="success">*</Badge></ListGroupItem>
                <ListGroupItem>{company}</ListGroupItem>
                <ListGroupItem>{title}</ListGroupItem>
                <ListGroupItem>{mobile}</ListGroupItem>
                <ListGroupItem>{address}</ListGroupItem>
                <ListGroupItem>{email}</ListGroupItem>
            </ListGroup>
        </div>) :
        <div>
        <ListGroup>
                <ListGroupItem>{doo.name} <Badge color="success">*</Badge></ListGroupItem>
                <ListGroupItem>{doo.company}</ListGroupItem>
                <ListGroupItem>{doo.title}</ListGroupItem>
                <ListGroupItem>{doo.mobile}</ListGroupItem>
                <ListGroupItem>{doo.address}</ListGroupItem>
                <ListGroupItem>{doo.email}</ListGroupItem>
            </ListGroup>
        </div>    
    
NameCard.propTypes = {
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

NameCard.defaultProps = {
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
export default NameCard;