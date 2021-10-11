import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const PdfFetch = ({ lang, tag, type }) => {
  const [pressReleases, setPressReleases] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(
          `https://feed.mfn.se/v1/feed/3a920c14-5ffb-40b9-9ca5-889d038690f1.json?type=${type}&tag=${tag}&lang=${lang}`
        );
        const json = await res.json();
        setPressReleases(json.items);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [lang, tag, type]);

  return pressReleases ? (
    <Main>
      {pressReleases.map((item) => (
        <ListSection key={item.news_id}>
          <TitleText>
            <PressLink
              target='_blanc'
              href={item.content.attachments.map(
                (attachment) => attachment.url
              )}
            >
              <DateText>Published: {item.content.publish_date}</DateText>
              <Text>{item.content.title}</Text>
            </PressLink>
          </TitleText>
        </ListSection>
      ))}
      ;
    </Main>
  ) : null;
};

const Main = styled.div``;

const TitleText = styled.li`
  font-size: 18px;
  padding: 0 5px 0 5px;
  border-bottom: 1px solid #000;
  padding: 15px;
`;

const Text = styled.p`
  font-size: 18px;
  padding: 0 5px 0 5px;
  padding: 15px;
  cursor: pointer;
`;

const ListSection = styled.ul`  &:hover {
	background: #fff; 
  `;

const PressLink = styled.a`
  text-decoration: none;
`;
const DateText = styled.h5`
  font-size: 14px;
  padding: 0 5px 0 5px;
`;
