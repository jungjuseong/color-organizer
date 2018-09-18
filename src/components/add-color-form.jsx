import React from 'react';

import {  Col, Row, Button  } from 'reactstrap';
import PropTypes from 'prop-types';
import '../stylesheets/add-color-form.scss'

const AddColorForm = ({onNewColor=f=>f}) => {

    let _title, _color;

    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#66f'
        _title.focus()
    }

    return (
        <Row>
          <Col sm="12">
          <form className="add-color" onSubmit={submit}>
            <div className="bg-info clearfix" style={{ padding: '.5rem' }}>
                <input className="float-left" ref={input => _title = input} type="text" placeholder="color title..." required/>                
                <input className="float-left" ref={input => _color = input} type="color" required/>
                <Button className="float-right">추가</Button>
            </div>            
            </form>
          </Col>
        </Row>
    )
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm