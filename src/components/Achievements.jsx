import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import "../i18n";
import { useTranslation } from "react-i18next";
//import {availableLanguages} from "../i18n";

import "../scss/styles.scss";

// not used yet...
function Achievement(i) {
  const [t, i18n] = useTranslation();
  var items = t("Achievements." + String(i) + ".Mission", {
    returnObjects: true,
  });

  return (
    <Table responsive striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td>{t("Achievements.type")} </td>
          <td>{t("Achievements." + String(i) + ".type")} </td>
        </tr>
        <tr>
          <td>{t("Achievements.sector")}</td>
          <td>{t("Achievements." + String(i) + ".sector")}</td>
        </tr>
        <tr>
          <td>{t("Achievements.mission")}</td>
          {items.map((item) => (
            <td> {item} </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

function Achievements() {
  const [t, i18n] = useTranslation();

  return (
    <div className="achievements" id="Achievements">
      <Container className="mt-1 pt-2">
        <h2>{t("Achievements.title")} </h2> <hr />
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="focus">{t("Achievements.type")}</th>
              <th className="focus">{t("Achievements.1.type")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.1.sector")}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission")}</td>
              <td>
                {t("Achievements.1.Mission.title")}
                <p>{t("Achievements.1.Mission.item1")}</p>
                <ul>
                  <li>{t("Achievements.1.Mission.bullet1")}</li>
                  <li>{t("Achievements.1.Mission.bullet2")}</li>
                  <li>{t("Achievements.1.Mission.bullet3")}</li>
                  <li>{t("Achievements.1.Mission.bullet4")}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type")} </td>
              <td className="focus">{t("Achievements.2.type")} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.2.sector")}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission")}</td>
              <td>
                <ul>
                  <li>{t("Achievements.2.Mission.bullet1")}</li>
                  <li>{t("Achievements.2.Mission.bullet2")}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type")} </td>
              <td className="focus">{t("Achievements.3.type")} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.3.sector")}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission")}</td>
              <td>{t("Achievements.3.Mission.item1")}</td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type")} </td>
              <td className="focus">{t("Achievements.4.type")} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.4.sector")}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission")}</td>
              <td>
                <p>{t("Achievements.4.Mission.item1")}</p>
                <ul>
                  <li>{t("Achievements.4.Mission.bullet1")}</li>
                  <li>{t("Achievements.4.Mission.bullet2")}</li>
                  <li>{t("Achievements.4.Mission.bullet3")}</li>
                  <li>{t("Achievements.4.Mission.bullet4")}</li>
                </ul>
                <p>{t("Achievements.4.Mission.item2")}</p>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type")} </td>
              <td className="focus">{t("Achievements.5.type")} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.5.sector")}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission")}</td>
              <td>{t("Achievements.5.Mission.title")}</td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type")} </td>
              <td className="focus">{t("Achievements.6.type")} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.6.sector")}</td>
            </tr>
            <tr>
              <td>{t("Achievements.mission")}</td>
              <td>
                <ul>
                  <li>{t("Achievements.6.Mission.bullet1")}</li>
                  <li>{t("Achievements.6.Mission.bullet2")}</li>
                  <li>{t("Achievements.6.Mission.bullet3")}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type")} </td>
              <td className="focus">{t("Achievements.7.type")} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.7.sector")}</td>
            </tr>
            <tr>
              <td className="light">{t("Achievements.mission")}</td>
              <td>
                <ul>
                  <li>{t("Achievements.7.Mission.bullet1")}</li>
                  <li>{t("Achievements.7.Mission.bullet2")}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
            </tr>

            <tr>
              <td className="focus">{t("Achievements.type")} </td>
              <td className="focus">{t("Achievements.8.type")} </td>
            </tr>
            <tr>
              <td>{t("Achievements.sector")}</td>
              <td>{t("Achievements.8.sector")}</td>
            </tr>
            <tr>
              <td className="light">{t("Achievements.mission")}</td>
              <td>
                <ul>
                  <li>{t("Achievements.8.Mission.bullet1")}</li>
                  <li>{t("Achievements.8.Mission.bullet2")}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Achievements;
