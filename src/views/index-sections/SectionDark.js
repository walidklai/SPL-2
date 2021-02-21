/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      {/* <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/leona.png") + ")",
            zIndex:-2,
            opacity:0.1
          }}
        /> */}
        {/* <div
          className=""
          style={{
            backgroundImage: "url(" + require("assets/img/leona2.png") + ")",
            zIndex:-2,
            opacity:0.1
          }}
        /> */}
            
      <div className="section section-dark">
      <h1 className='presentation-subtitle text-center'>RECENT MATCHES</h1>
      <br/>
      <hr/>
        <Container>
          <div>
            <Card style={{
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card style={{
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card style={{
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card style={{
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card style={{
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}>
              <CardImg
                top
                width="100%"
                src="/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        
          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
          
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
