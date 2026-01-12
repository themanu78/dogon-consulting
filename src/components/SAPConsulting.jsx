import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import FreeMagnifyingGlass from "/assets/free-magnifying-glass.png";
import "../i18n";
import { useTranslation } from "react-i18next";

import "../scss/styles.scss";

function SAPConsulting() {
  const [t, i18n] = useTranslation();

  return (
    <div className="SAP-consulting" id="SAPConsulting">
      <Container className="mt-1 pt-2">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h2> {t("SAPConsulting.title")} </h2>
            <hr />
            <p> {t("SAPConsulting.offer")} </p>
            <ul>
              <li> {t("SAPConsulting.bullet1")} </li>
              <li> {t("SAPConsulting.bullet2")} </li>
              <li> {t("SAPConsulting.bullet3")} </li>
              <li> {t("SAPConsulting.bullet4")} </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row>
          <Col>
            <img
              src={import.meta.env.VITE_PUBLIC_URL + "/assets/free-magnifying-glass.png"}
              className="free-magnifying-glass float-md-start me-3 me-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("SAPConsulting.Audit.title")} </h3>
            <hr />
            <p> {t("SAPConsulting.Audit.item1")} </p>
            <p> {t("SAPConsulting.Audit.item2")} </p>
            <p> {t("SAPConsulting.Audit.item3")} </p>
            <p> {t("SAPConsulting.Audit.item4")} </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1 ">
          <Col>
            <h3>{t("SAPConsulting.SAPExpertise.title")} </h3>
            <hr />
            <p> {t("SAPConsulting.SAPExpertise.item1")} </p>
            <ul>
              <li>{t("SAPConsulting.SAPExpertise.bullet1")}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet2")}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet3")}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet4")}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet5")}</li>
              <li>{t("SAPConsulting.SAPExpertise.bullet6")}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h3>{t("SAPConsulting.Deployment.title")}</h3>
            <hr />
            <p> {t("SAPConsulting.Deployment.item1")} </p>
            <p> {t("SAPConsulting.Deployment.item2")} </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h3> {t("SAPConsulting.Training.title")} </h3>
            <hr />
            <p> {t("SAPConsulting.Training.item1")} </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SAPConsulting;
