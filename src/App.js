import "./reset.css";
import "./App.scss";
import { useState } from "react";

function App() {
  // 選択肢を用意
  const monstersData = [
    {
      name: "リオレウス",
      weakPoint: "龍",
    },
    {
      name: "リオレイア",
      weakPoint: "雷",
    },
    {
      name: "マガイマガド",
      weakPoint: "水",
    },
  ];

  // 選択されたものを入れる変数とセット変数を用意、初期値は空
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 選択されたものselectedIndexに入れる
  const selectMonster = (event) => {
    setSelectedIndex(event.target.value);
  };

  return (
    <div className="app">
      <header>
        <div className="container">
          <h1 className="title">モンハン弱点教えてくれるくん</h1>
        </div>
      </header>
      <div className="container">
        <h2>モンスターをえらんでね</h2>
        {/* セレクトボックスを表示 */}
        <select className="selectMenu" onChange={selectMonster}>
          {monstersData.map((monster, index) => {
            return (
              <option key={index} value={index}>
                {monster.name}
              </option>
            );
          })}
        </select>

        {/* 選択されたものに紐づく弱点を表示 */}
        <h2>弱点は…</h2>
        <div className="result">{monstersData[selectedIndex].weakPoint}</div>
      </div>
    </div>
  );
}

export default App;
