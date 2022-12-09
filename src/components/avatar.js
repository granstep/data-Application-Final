import React, { useState } from "react";
import { dataStore, ReName, GenderSwap } from "../system/dataStore";

export default function Avatar(prop) {
  const [nameVal, setNameVal] = useState(prop.info.Name);

  var display = (
    <div>
      <div className="p-line-1">
        <img id="profile" src={prop.img} alt={prop.info.Img} />
        <div className="p-line-1-text">
          <div className="avatarHeader">
            <h2>{nameVal}</h2>
            <button className={prop.info.Gender} onClick={() => genderSwap()}>
              {prop.info.Gender === "Male" ? "♂" : "♀"}
            </button>
          </div>
          <input
            type="text"
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}
          ></input>
          <button className="nameButton" onClick={() => finalizeName()}>
            Rename
          </button>
          <p>Default Class: {prop.info.Class}</p>
          <p>Level on Recruitment: {prop.info.Start.Lv}</p>
        </div>
      </div>
      <div className="p-line-2">
        <h4>Neutral Starting Stats</h4>
        <table>
          <tr>
            <th>HP</th>
            <th>Str</th>
            <th>Mag</th>
            <th>Skl</th>
            <th>Spd</th>
            <th>Lck</th>
            <th>Def</th>
            <th>Res</th>
          </tr>
          <tr>
            <td>{prop.info.Start.HP}</td>
            <td>{prop.info.Start.Str}</td>
            <td>{prop.info.Start.Mag}</td>
            <td>{prop.info.Start.Skl}</td>
            <td>{prop.info.Start.Spd}</td>
            <td>{prop.info.Start.Lck}</td>
            <td>{prop.info.Start.Def}</td>
            <td>{prop.info.Start.Res}</td>
          </tr>
        </table>
      </div>
      <div className="p-line-2">
        <h4>Neutral Growth Rates</h4>
        <table>
          <tr>
            <th>HP</th>
            <th>Str</th>
            <th>Mag</th>
            <th>Skl</th>
            <th>Spd</th>
            <th>Lck</th>
            <th>Def</th>
            <th>Res</th>
          </tr>
          <tr>
            <td>{prop.info.Growths.HP}%</td>
            <td>{prop.info.Growths.Str}%</td>
            <td>{prop.info.Growths.Mag}%</td>
            <td>{prop.info.Growths.Skl}%</td>
            <td>{prop.info.Growths.Spd}%</td>
            <td>{prop.info.Growths.Lck}%</td>
            <td>{prop.info.Growths.Def}%</td>
            <td>{prop.info.Growths.Res}%</td>
          </tr>
        </table>
      </div>
    </div>
  );

  function finalizeName() {
    let newName = new ReName(nameVal);
    dataStore.avatarRename(newName);
  }

  function genderSwap() {
    if (prop.info.Gender === "Male") {
      let change = new GenderSwap("Female", "robinF");
      dataStore.avatarGender(change);
    } else {
      let change = new GenderSwap("Male", "robinM");
      dataStore.avatarGender(change);
    }
  }
  return display;
}
