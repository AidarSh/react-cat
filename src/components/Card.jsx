import React, { useState } from "react";

import style from "../styles/cat.module.scss";

function Card(props) {
  const [select, setSelect] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const status = props.status === "disable";

  return (
    <section>
      <div
        onClick={() => setSelect(!select)}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={
          status
            ? `${style.card_border} ${style.disable_bg}`
            : select
            ? isShown
              ? `${style.card_border} ${style.red_bg}`
              : `${style.card_border} ${style.select}`
            : isShown
            ? `${style.card_border} ${style.blue_bg}`
            : `${style.card_border}`
        }
      >
        <div
          className={
            status ? `${style.opacity} ${style.card}` : `${style.card}`
          }
        >
          <div
            className={
              status
                ? `${style.disable_text} ${style.card_text}`
                : `${style.card_text}`
            }
          >
            <div
              className={
                status ? `${style.disable_text} ${style.name}` : `${style.name}`
              }
            >
              {isShown && select && !status ? (
                <div className={style.red}>Котэ не одобряет?</div>
              ) : (
                props.name
              )}
            </div>
            <div className={style.title}>{props.title}</div>
            <div className={style.desc}>{props.desc}</div>
            <div
              className={
                status ? `${style.disable_text} ${style.gift}` : `${style.gift}`
              }
            >
              {props.gift}
            </div>
          </div>
          <div
            className={
              status
                ? `${style.cycle} ${style.disable_bg}`
                : select
                ? isShown
                  ? `${style.cycle} ${style.red_bg}`
                  : `${style.cycle} ${style.select}`
                : isShown
                ? `${style.cycle} ${style.blue_bg}`
                : `${style.cycle}`
            }
          >
            <div>
              <span>{props.cycle}</span>
              <br /> кг
            </div>
          </div>
        </div>
      </div>
      <p>
        <div className={select || status ? `${style.none}` : ""}>
          Чего сидишь? Порадуй котэ,
          <a href="#" onClick={() => setSelect(!select)}>
            купи.
          </a>
        </div>
        {select && !status && props.select_text}
        {status && (
          <div className={style.yellow}>Печалька, {props.desc} закончился.</div>
        )}
      </p>
    </section>
  );
}

export default Card;
