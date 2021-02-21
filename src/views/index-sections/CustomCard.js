import React from "react";
import { Card,CardTitle, CardImg, CardBody, CardText,CardImgOverlay } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Container from "reactstrap/lib/Container";
import mg from '../../assets/img/lol-cover.jpg'
const CustomCard = () => {
  return (
    <>
      <div
        className="section section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/lol-cover.jpg") + ")",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"auto"
            }}
          >
            <CardImg src={mg} alt="..."/>
            <CardImgOverlay>
            <CardBody>
              <CardText style={{ color: "white"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
            <center><Button>A</Button></center>
            </CardImgOverlay>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "15rem",
              height: "20rem",
              backgroundColor: "transparent",
              border: "1px solid  rgb(92, 209, 255)",
              overflow:"hidden"
            }}
          >
            <CardImg top src="..." alt="..." />
            <CardBody>
              <CardText style={{ color: "white" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
