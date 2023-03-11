import React from "react";
import { Col, Row } from "reactstrap";
import "./Footer.css";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className='footer bg-dark-green text-light-blue p-2'>
      <div className='container'>
        <Row>
          <Col md={4}>
            <h2 className='text-start mt-5'>Hillside</h2>
          </Col>
          <Col md={4}>
            <div className='vertical-line'></div>
          </Col>
          <Col md={4} className='text-start p-3'>
            <p>For any question: hillside@gmail.com</p>
            <p>3152 Reppert Coal Road, Detroit, Michigan</p>
            <div className='d-flex'>
              <span className='m-2'>
                <Icon
                  icon='skill-icons:instagram'
                  color='#168aff'
                  width='30'
                  height='30'
                />
              </span>
              <span className='m-2'>
                <Icon
                  icon='skill-icons:twitter'
                  color='#168aff'
                  width='30'
                  height='30'
                />
              </span>
              <span className='m-2'>
                <Icon
                  icon='logos:pinterest'
                  color='#168aff'
                  width='30'
                  height='30'
                />
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
