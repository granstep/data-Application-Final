import React from "react";
import Avatar from "./avatar";

export default function Profile(prop) {
  //an empty element to be filled
  var display = <div></div>;

  //create an image link with the data
  function id2Link() {
    var link = "img/" + prop.info.Img + ".png";
    return link;
  }

  //fill the display variable with HTML and data
  if (prop.info.Avatar) {
    display = <Avatar info={prop.info} img={id2Link()} />;
  } else {
    display = (
      <div>
        <div className="p-line-1">
          <img id="profile" src={id2Link()} alt={prop.info.Img} />
          <div className="p-line-1-text">
            <h2>{prop.info.Name}</h2>
            <p>Default Class: {prop.info.Class}</p>
            <p>Level on Recruitment: {prop.info.Start.Lv}</p>
          </div>
        </div>
        <div className="p-line-2">
          <h4>Starting Stats</h4>
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
          <h4>Growth Rates</h4>
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
  }

  //return the display to the view
  return display;
}
