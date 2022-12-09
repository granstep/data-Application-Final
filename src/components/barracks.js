import React from "react";

export default function Barracks(prop) {
  var units = [];

  function iconLink(num) {
    var link = "img/" + prop.chara[num].Img + ".icon.png";
    return link;
  }

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
  return <div className="logbook">{units}</div>;
}
