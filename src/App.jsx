import style from "./styles/cat.module.scss";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

function App() {
  return (
    <div className={style.App}>
      <h1>Ты сегодня покормил кота?</h1>
      <div className={style.card_table}>
        {data.map((obj, id) => (
          <Card
            key={id}
            name={obj.name}
            title={obj.title}
            desc={obj.desc}
            gift={obj.gift}
            cycle={obj.cycle}
            select_text={obj.select_text}
            status={obj.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
