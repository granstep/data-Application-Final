import React, { useState, useEffect } from "react";
import { dataStore } from "../system/dataStore";
import "../styles.css";
import Profile from "./profile";
import Barracks from "./barracks";

export default function View() {
  const [charaData, setCharaData] = useState(dataStore.charas);
  const [curID, setCurID] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dataStore.loadData();
  }, []);

  useEffect(() => {
    dataStore.subscribe(onUpdate);
  }, []);

  function onUpdate() {
    setCharaData([...dataStore.charas]);
  }

  function charaSwap(e) {
    setCurID(e);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  let profile = <Profile info={charaData[curID]} />;
  let barrack = (
    <Barracks chara={charaData} change={(e) => charaSwap(e)} current={curID} />
  );

  return (
    <div className="holder">
      <div
        className={`loading-screen ${charaData[curID].Hair} ${
          loading ? "showLoad" : "hideLoad"
        }`}
      ></div>
      <h1>Fire Emblem Awakening Gen. 1 Unit Overview</h1>
      <div className={`${loading ? "hideProfile" : "showProfile"}`}>
        {profile}
      </div>
      <div className="between">Units</div>
      <div className={`${loading ? "hideBarracks" : "showBarracks"}`}>
        {barrack}
      </div>
    </div>
  );
}
