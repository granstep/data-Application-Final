import React from "react";

export default function Barracks(prop) {
  //an empty array to be filled
  var units = [];

  //turn data into a functional image link
  function iconLink(num) {
    var link = "img/" + prop.chara[num].Img + ".icon.png";
    return link;
  }

  //a for loop to create an instance for every character
  for (let i = 0; i < prop.chara.length; i++) {
    if (i === prop.current) {
      units[i] = (
        <img
          className="icon icon-cur"
          src={iconLink(i)}
          alt={prop.chara[i].Img}
        />
      );
    } else {
      units[i] = (
        <img
          className="icon"
          src={iconLink(i)}
          title={prop.chara[i].Name}
          alt={prop.chara[i].Img}
          onClick={() => prop.change(i)}
        />
      );
    }
  }
  
  //return the barracks to be displayed
  return <div className="logbook">{units}</div>;
}
