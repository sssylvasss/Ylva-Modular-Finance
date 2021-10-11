import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PdfFetch } from '../components/PdfFetch';
import { SelectFilter } from 'components/SelectFilter';

export const PdfList = () => {
  const [lang, setLang] = useState('');
  const [tag, setTag] = useState('');
  const [type, setType] = useState('');

  return (
    <Main>
      <NavWrapper>
        <Link to='/'>Home</Link>
        <SelectFilter
          setLang={(e) => setLang(e.target.value)}
          setTag={(e) => setTag(e.target.value)}
          setType={(e) => setType(e.target.value)}
        />
      </NavWrapper>

      <Text>Reports as pdf-files</Text>
      <PdfFetch lang={lang} tag={tag} type={type} />
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
