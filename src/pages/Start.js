import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PressReleaseList } from 'components/PressReleaseList';
import { SelectFilter } from 'components/SelectFilter';

export const Start = () => {
  const [lang, setLang] = useState('');
  const [tag, setTag] = useState('');
  const [type, setType] = useState('');

  return (
    <Main>
      <NavWrapper>
        <Link to='/pdf'>Links to reports as pdf-files</Link>
        <SelectFilter
          setLang={(e) => setLang(e.target.value)}
          setTag={(e) => setTag(e.target.value)}
          setType={(e) => setType(e.target.value)}
        />
      </NavWrapper>
      <Text>Press Releases and Public Relations</Text>
      <PressReleaseList lang={lang} tag={tag} type={type} />
    </Main>
  );
};

const Main = styled.div``;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.h1``;
