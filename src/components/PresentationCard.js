import React from "react";
import "../css/presentation-card.scss";

export default function PresentationCard(props) {
  return (
    <>
      <div className="presentation-card">
        <div className="m-5 d-flex justify-content-center align-items-center">
          <img
            src="/profile-image.jpeg"
            alt="Bruno Vincenzi"
            className="profile-img"
            style={{ aspectRatio: "1/1" }}
          />
        </div>
        <div className="mb-4">
          <h4 className="h4-bold h4-cold-blue h4-century-gothic">Profilo</h4>
          <h6 className="h6-montserrat">
            Sono uno studente universitario al terzo anno del corso di Laurea in
            Informatica. Ritengo di essere una persona determinata, organizzata
            e affidabile e capace di lavorare in gruppo. Il mio interesse
            principale attualmente è quello di approfondire le mie conoscenze e
            applicarle in campo lavorativo per iniziare a fare esperienza.
          </h6>
        </div>
        <div className="mb-4">
          <h4 className="h4-bold h4-cold-blue h4-century-gothic">Contatti</h4>
          <h6 className="h6-century-gothic">
            <strong>Telefono:</strong> +39 345 597 2890
          </h6>
          <h6>
            <strong>Email: </strong>
            <a href="mailto: vincenzibruno3107@gmail.com">
              vincenzibruno3107@gmail.com
            </a>
          </h6>
          <h6 className="h6-century-gothic">
            <strong>LinkedIn: </strong>
            <a href="https://www.linkedin.com/in/bruno-vincenzi-1041b8259/">
              Bruno Vincenzi
            </a>
          </h6>
        </div>
        <div className="mb-4">
          <h4 className="h4-bold h4-cold-blue h4-century-gothic">Patenti</h4>
          <h6 className="h6-century-gothic">A1, B</h6>
        </div>
        <div className="mb-4">
          <h4 className="h4-bold h4-cold-blue h4-century-gothic">
            Certificazioni linguistiche
          </h4>
          <h6 className="h6-century-gothic">Inglese: First(FCE) B2</h6>
        </div>
      </div>
    </>
  );
}
