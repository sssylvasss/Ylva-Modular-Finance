import React from 'react';
import styled from 'styled-components';

export const SelectFilter = ({ setLang, setType, setTag }) => {
  return (
    <Main>
      <SelectSection onChange={setLang}>
        <option value=''>All Languages</option>
        <option value='sv'>SWE</option>
        <option value='en'>ENG</option>
      </SelectSection>
      <SelectSection onChange={setTag}>
        <option value='sub:report'>All Reports</option>
        <option value=':regulatory'>Regulatory</option>
        <option value='sub:report:annual'>Annual</option>
      </SelectSection>
      <SelectSection onChange={setType}>
        <option value=''>Choose Type</option>
        <option value='pr'>Press Release</option>
        <option value='ir'>Public Relations</option>
      </SelectSection>
    </Main>
  );
};

const Main = styled.div``;

const SelectSection = styled.select`
background: none; 
  border: none;
  height: 40px;
  padding: 5px 5px 5px 0;
  margin: 5px 5px 5px 0;
  &:hover {
	background: #fff; 
`;
