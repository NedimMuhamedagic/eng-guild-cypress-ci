import React from 'react';
import CONTENTS from './contents.json';
import s from './Home.module.scss';

interface Item {
  key: string;
  title: string;
  paragraph: string;
  img?: string;
}

export function Home() {
  return (
    <div>
      {CONTENTS.map((item: Item) => (
        <div key={item.key} className={s.item}>
          <h1>{item.title}</h1>
          <p className={s.paragraph}>
            {item.img && <img className={s.image} src={item.img} alt={item.title} />}
            {item.paragraph}
          </p>
        </div>
      ))}
    </div>
  );
}
