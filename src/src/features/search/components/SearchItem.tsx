import React from 'react';
import { Link } from 'react-router-dom';
import s from './SearchItem.module.scss';

export interface Item {
    title: string;
    details: string;
    slug: string;
}

interface SearchItemProps {
    item: Item
}
export function SearchItem({ item }: SearchItemProps) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{item.title}</h2>
      <p className={s.paragraph}>{item.details}</p>
      <Link className={s.link} to={`/search/${item.slug}`}>
        Read more
      </Link>
    </div>
  );
}
