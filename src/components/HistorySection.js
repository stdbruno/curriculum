import React from "react";

export default function HistorySection(props) {
  return (
    <>
      <div className="mt-5">
        <div>
          <h6 className="h6-bold h6-impact">ISTRUZIONE E FORMAZIONE</h6>
          <div className="blue-line" />
          <div className="m-2">
            <div className="mb-5">
              <h6 className="h6-bold h6-century-gothic">
                Università degli Studi di Verona
              </h6>
              <p>
                Ottobre 2021 - Presente
                <br />
                Corso di Laurea in Informatica.
              </p>
            </div>
            <h6 className="h6-bold h6-century-gothic">
              Liceo Linguistico "Elio Vittorini"
            </h6>
            <p>
              Settembre 2016 - Giugno 2021 - Gela (CL) <br />
              Voto di maturità: 92/100.
            </p>
          </div>
          <div className="mt-5">
            <h6 className="h6-bold h6-impact">ESPERIENZE PROFESSIONALI</h6>
            <div className="blue-line" />
            <div className="m-2">
              <div className="mb-5">
                <h6 className="h6-bold h6-century-gothic">
                  Stage presso "Filosoft SRL"
                </h6>
                <p>
                  Aprile 2023 - Giugno 2023 - Verona (VR) <br />
                  Frontend developer per lo sviluppo di una web-app nel settore
                  della ristorazione. (Next.js, HTML, SCSS)
                </p>
              </div>
              <div>
                <h6 className="h6-bold h6-century-gothic">
                  Stage presso "Filosoft SRL"
                </h6>
                <p>
                  Ottobre 2023 - Dicembre 2023 - Verona (VR) <br />
                  Frontend developer per lo sviluppo di una web-app in ambito di
                  trading. (ReactJS, HTML, CSS, integrazione API tramite
                  GraphQL)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="h6-bold h6-impact">COMPETENZE</h6>
            <div className="blue-line" />
            <div className="m-2">
              <p>
                Conoscenza base dei linguaggi di programmazione C e Java (+
                relativo framework JavaFX). Conoscenza di HTML, CSS (e SCSS),
                Javascript, React (e Next.js)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
