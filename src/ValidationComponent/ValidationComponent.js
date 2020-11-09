import React from 'react';

const validationComponent = (props) => {

    let replyText = "Text long enough";
      if (props.length < 5) {
        replyText = 'Text too short';
      }


  return (
    <div>
      Le texte fait {props.length} de longueur.
      <p>{replyText}</p>
    </div>
  )
};

export default validationComponent;
