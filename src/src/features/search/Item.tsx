import React from 'react';
import { useParams } from 'react-router-dom';
import s from './Item.module.scss';
import CONTENTS from './contents.json';

export function Item() {
  const params = useParams();

  const item = CONTENTS.find((elem) => elem.slug === params.id);

  return (
    <div>
      {!item && (
        <h1>Post not found.</h1>
      )}
      {!!item && (
        <>
          <h1 className={s.title}>{item.title}</h1>
          <p>{item.details}</p>
        </>
      )}
    </div>
  );
}
