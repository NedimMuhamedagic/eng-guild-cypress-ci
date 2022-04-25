import React, { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { Item, SearchItem } from './components/SearchItem';
import CONTENTS from './contents.json';

export function Search() {
  const location = useLocation();
  const search = useMemo(() => {
    const s = location.search;
    return qs.parse(s.substring(1)).q as string;
  }, [location.search]);

  const filterFn = useCallback((item: Item) => {
    const combined = (`${item.title} ${item.details}`).toLowerCase();
    return combined.indexOf(search.toLowerCase()) > -1;
  }, [search]);

  const items = useMemo(() => CONTENTS.filter(filterFn), [filterFn]);

  return (
    <div data-cy="search-items">
      {items.length === 0 && (
      <h1>No results.</h1>
      )}
      {items.map((item) => (
        <SearchItem key={item.slug} item={item} />
      ))}
    </div>
  );
}
