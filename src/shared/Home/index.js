import React from "react";
import CardPanel from "../../components/molecules/Card";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion';
import { Card } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <h5 className="mb-0" onClick={decoratedOnClick}>
        <button
        className="btn btn-link"
      >
        {children} 
        </button>
    </h5>
   
   
  );
}

export default function AHome(props) { 
  
    return (
      <div id="content">
        <div className="container-fluid">
          <div className="">
            <h1 className="h3 mb-0 text-gray-800">
              Welcome, Admin or Doctor or Pharmacist
            </h1>
            <p>Dashboard</p>
          </div>

          <div className="d-flex justify-content-end">
            <a className="text-gray-800" href="">
              View Stats
            </a>
          </div>
          <div className="row">
            <CardPanel
              title="Patients"
              count={"19"}
              icon="fas fa-users fa-2x text-gray-300"
            />
            <CardPanel
              title="Doctors"
              icon="fas fa-stethoscope fa-2x text-gray-300"
              count={"24"}
            />
            <CardPanel
              title="Support Groups"
              icon="fas fa-comments fa-2x text-gray-300"
              count={"87"}
            />

            <CardPanel
              icon="fas fa-money-bill fa-2x text-gray-300"
              title="My Account"
              count="KSH5,900.00"
            />
          </div>

          <br />
          <br />

          

          <div className="">
            <h1 className="h3 mb-0 text-gray-800">Finding Your Way Around</h1>
            <p>Let's show you how</p>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">How to use</h6>
            </div>
            <div className="card-body">
             <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="0">Step #1</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                            tempor, sunt aliqua put a bird on it squid single-origin
                            coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice
                            lomo. Leggings occaecat craft beer farm-to-table, raw
                            denim aesthetic synth nesciunt you probably haven't heard
                            of them accusamus labore sustainable VHS.
                        </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="1"> Step #2</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid single-origin
                          coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                          helvetica, craft beer labore wes anderson cred nesciunt
                          sapiente ea proident. Ad vegan excepteur butcher vice
                          lomo. Leggings occaecat craft beer farm-to-table, raw
                          denim aesthetic synth nesciunt you probably haven't heard
                          of them accusamus labore sustainable VHS.
                        </Card.Body>
                </Accordion.Collapse>
                    </Card>
                    <Card>
                <Card.Header>
                  <CustomToggle eventKey="2"> Step #3</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid. 3 wolf moon officia
                          aute, non cupidatat skateboard dolor brunch. Food truck
                          quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                          tempor, sunt aliqua put a bird on it squid single-origin
                          coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                          helvetica, craft beer labore wes anderson cred nesciunt
                          sapiente ea proident. Ad vegan excepteur butcher vice
                          lomo. Leggings occaecat craft beer farm-to-table, raw
                          denim aesthetic synth nesciunt you probably haven't heard
                          of them accusamus labore sustainable VHS.
                        </Card.Body>
                </Accordion.Collapse>
              </Card>
          </Accordion>
              


            </div>
          </div>
        </div>
      </div>
    );
  }

