import React from "react";
import { Col, Row } from "reactstrap";
import "./Activity.css";
function Activity(props) {
  let activity = props.activity;
  return (
    <div className='activity p-5'>
      <Row>
        <Col className='mb-3' md={6}>
          {activity.id % 2 === 0 ? (
            <div className='description mt-3'>{activity.description}</div>
          ) : (
            <div className='activity-image rounded'>
              <img
                className='img rounded'
                alt=''
                width='100%'
                hight='100%'
                src={activity.image}
              />
              <div className='activity-overlay rounded'>
                <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                  <h3 className='text-white activity-name'>{activity.name}</h3>
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col className='mb-3' md={6}>
          {activity.id % 2 === 0 ? (
            <div className='activity-image rounded'>
              <img
                className='img rounded'
                alt=''
                width='100%'
                hight='100%'
                src={activity.image}
              />
              <div className='activity-overlay rounded'>
                <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                  <h3 className='text-white activity-name'>{activity.name}</h3>
                </div>
              </div>
            </div>
          ) : (
            
            <div className='description mt-5'>{activity.description}</div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Activity;
