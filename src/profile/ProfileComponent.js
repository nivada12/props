import React from "react";
import Profile from "./Profile";

function ProfileComponent({ children }) {
  const name = "Amine Srasra";
  const prof = "web Dev";
  const bio = "l est parfois nécessaire d'écrire une biographie personnelle et courte, pour le travail par exemple. Ces biographies s'utilisent à des fins diverses, pour l'inclure dans le bulletin de l'entreprise ou l'envoyer, avec une proposition ou un rapport. Lorsqu'on vous demande d'écrire une biographie, veillez à l'écrire sur un ton professionnel et à demandez à un collègue de travail de vous relire. Écrire est humain, relire est divin.";

  const handleName = () => {
    alert(name);
  };
  return (
    <div className="row mt-5  d-flex justify-content-center align-item-center">
      <div className="col-3">
      <img style={{width:"200px" ,height:"200px"}} src={children} alt="test" />
      </div>
      <div className="col-9 align-item-center">
      <Profile name={name} prof={prof} bio={bio} fn={handleName} />
      </div>
    </div>
  );
}

export default ProfileComponent;