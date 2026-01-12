import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

// import "../i18n";
import { useTranslation } from "react-i18next";
import "../scss/styles.scss";

function TopPage() {
  const [t, i18n] = useTranslation();

  return (
    <Container className="top-page" id="DogonConsulting">
      <div className="overlay">
        <video loop autoPlay muted>
          <source
            src={
              import.meta.env.VITE_PUBLIC_URL +
              "/assets/modern-plant-and-communication-network-concept-IoT.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <Row className="mt-5 pt-5 mx-2 mx-sm-0">
          <Col xs={{ offset: 1 }} lg={{ offset: 5 }} xxl={{ offset: 6 }}>
            <img
              src={
                import.meta.env.VITE_PUBLIC_URL +
                "/assets/Logo-Dogon-blanc-sur-fond-noir-230x246.png"
              }
              className="dogon-logo float-sm-start me-1 me-sm-5 pt-3"
              alt=""
              loading="lazy"
            />
            <h1> {t("General.ManagementConsulting")} </h1>
            <h1> {t("General.PerformanceManagement")} </h1>
            <h1> {t("General.SAPExpertise")} </h1>
          </Col>
        </Row>

        <div className="news">
          <Row className="mt-4">
            <Col xs={{ offset: 1, span: 9 }} lg={{ offset: 2, span: 9 }}></Col>
          </Row>
        </div>

        <div className="badge-container">
          <Row className="mt-5 mt-xxl-4 pt-5 pt-xxl-1">
            <Col xs={{ offset: 1 }} lg={{ offset: 2 }}>
              <h2> SAP Partner</h2>
              <h3> Open Ecosystem</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={{ offset: 1 }} lg={{ offset: 2 }}>
              <a
                href="https://www.youracclaim.com/badges/5e5341fe-f2e1-43e3-8c7e-8b6b1bd32976/public_url"
                rel="noreferrer noopener"
                target="_blank"
              >
                <img
                  src={
                    import.meta.env.VITE_PUBLIC_URL +
                    "/assets/badge-S4-financials.png"
                  }
                  className="sap-badge"
                  alt=""
                  loading="lazy"
                />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.youracclaim.com/badges/acdc5d14-74d5-48b4-96bc-014044d75d23/public_url"
                rel="noreferrer noopener"
                target="_blank"
              >
                <img
                  src={
                    import.meta.env.VITE_PUBLIC_URL +
                    "/assets/badge-S4-conversion.png"
                  }
                  className="sap-badge"
                  alt=""
                  loading="lazy"
                />
              </a>
            </Col>
            <Col xs={{ span: 6 }} lg={{ span: 7 }}>
              <h3> {t("General.coinnovation")} </h3>
              <h3> {t("General.DSAG")} </h3>
              <h3>{t("General.DFCG")} </h3>
            </Col>
            <Col />
          </Row>
          <Row>
            <Col xs={{ offset: 1, span: 2 }} lg={{ offset: 2, span: 2 }}>
              <img
                src={
                  import.meta.env.VITE_PUBLIC_URL +
                  "/assets/IA4SP-logo-small.png"
                }
                className="sap-badge"
                alt=""
                loading="lazy"
              />
            </Col>
            <Col xs={{ span: 6 }} lg={{ span: 7 }}>
              <h3> {t("General.IA4SP")} </h3>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default TopPage;
