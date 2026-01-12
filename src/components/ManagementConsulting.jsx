import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import FreeAutomation from "/assets/free-automation.png";
import FreeOrchestre from "/assets/free-orchestre.png";
import FreeHourglass from "/assets/free-hourglass.png";
import FreeCharts from "/assets/free-charts.png";
import "../i18n";
import { useTranslation } from "react-i18next";

import "../scss/styles.scss";

function ManagementConsulting() {
  const [t, i18n] = useTranslation();

  return (
    <div className="management-consulting" id="ManagementConsulting">
      <Container className="mt-1 pt-2">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h2> {t("ManagementConsulting.title")} </h2>
            <hr />
            <p> {t("ManagementConsulting.offer")} </p>
            <ul>
              <li> {t("ManagementConsulting.bullet1")} </li>
              <li> {t("ManagementConsulting.bullet2")} </li>
              <li> {t("ManagementConsulting.bullet3")} </li>
              <li> {t("ManagementConsulting.bullet4")} </li>
              <li> {t("ManagementConsulting.bullet5")} </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <img
              src={
                import.meta.env.VITE_PUBLIC_URL + "/assets/free-automation.png"
              }
              className="free-automation float-md-start me-3 me-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("ManagementConsulting.Budget.title")} </h3>
            <hr />
            <p> {t("ManagementConsulting.Budget.item1")} </p>
            <p> {t("ManagementConsulting.Budget.item2")} </p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1 ">
          <Col>
            <img
              src={
                import.meta.env.VITE_PUBLIC_URL + "/assets/free-orchestre.png"
              }
              className="free-orchestre float-md-end ms-3 ms-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("ManagementConsulting.Governance.title").toString()} </h3>
            <hr />
            <p> {t("ManagementConsulting.Governance.item1")} </p>
            <p> {t("ManagementConsulting.Governance.item2")} </p>
            <p> {t("ManagementConsulting.Governance.item3")} </p>
            <p> {t("ManagementConsulting.Governance.item4")} </p>
            <p> {t("ManagementConsulting.Governance.item5")} </p>
            <p> {t("ManagementConsulting.Governance.item6")} </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <img
              src={
                import.meta.env.VITE_PUBLIC_URL + "/assets/free-hourglass.png"
              }
              className="free-hourglass float-md-start me-3 me-md-5 "
              alt=""
              loading="lazy"
            />
            <h3>{t("ManagementConsulting.Closing.title")}</h3>
            <hr />
            <p> {t("ManagementConsulting.Closing.item1")} </p>
            <p> {t("ManagementConsulting.Closing.item2")} </p>
            <p> {t("ManagementConsulting.Closing.item3")} </p>
            <ul>
              <li>{t("ManagementConsulting.Closing.bullet1")}</li>
              <li>{t("ManagementConsulting.Closing.bullet2")}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <img
              src={import.meta.env.VITE_PUBLIC_URL + "/assets/free-charts.png"}
              className="free-charts float-md-end ms-3 ms-md-5"
              alt=""
              loading="lazy"
            />
            <h3> {t("ManagementConsulting.Reporting.title")} </h3>
            <hr />
            <p> {t("ManagementConsulting.Reporting.item1")} </p>
            <p> {t("ManagementConsulting.Reporting.item2")} </p>
            <p> {t("ManagementConsulting.Reporting.item3")} </p>
            <ul>
              <li>{t("ManagementConsulting.Reporting.bullet1")}</li>
              <li>{t("ManagementConsulting.Reporting.bullet2")}</li>
              <li>{t("ManagementConsulting.Reporting.bullet3")}</li>
              <li>{t("ManagementConsulting.Reporting.bullet4")}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4 pt-4">
        <Row className="gx-1 g-lg-1">
          <Col>
            <h3> {t("ManagementConsulting.Outsourcing.title")}</h3>
            <hr />
            <p> {t("ManagementConsulting.Outsourcing.item1")} </p>
            <ul>
              <li>{t("ManagementConsulting.Outsourcing.bullet1")}</li>
              <li>{t("ManagementConsulting.Outsourcing.bullet2")}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ManagementConsulting;
