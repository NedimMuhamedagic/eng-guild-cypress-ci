import React, { PropsWithChildren, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';
import s from './Wrapper.module.scss';
import logo from '../../../assets/ankora.svg';

export function Wrapper({ children }: PropsWithChildren<{}>) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const doSearch = useCallback(() => {
    const query = qs.stringify({
      q: input,
    });
    navigate(`/search?${query}`);
  }, [input, navigate]);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <Link to="/">
          <img src={logo} className={s.logo} alt="ankora Software" />
        </Link>
        <input
          data-cy="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={s.search_input}
        />
        <button data-cy="search-button" className={s.button} onClick={doSearch} type="button">Search</button>
      </header>
      <div className={s.content}>
        {children}
      </div>
    </div>
  );
}
