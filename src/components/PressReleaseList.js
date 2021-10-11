import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

export const PressReleaseList = ({ lang, tag, type }) => {
  const [pressReleases, setPressReleases] = useState(null);
  const [selectedId, setSelecetId] = useState(null);

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

  const selectedPress = useMemo(() => {
    if (selectedId)
      return pressReleases.find((press) => {
        return press.news_id === selectedId;
      });
  }, [selectedId, pressReleases]);

  return pressReleases ? (
    <Main>
      <Modal
        isOpen={Boolean(selectedId)}
        onRequestClose={() => setSelecetId(null)}
        contentLabel='Modal'
        ariaHideApp={false}
      >
        {selectedPress ? (
          <div>
            <div>{selectedPress.content.title}</div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedPress.content.html }}
            />
          </div>
        ) : null}
      </Modal>
      {pressReleases.map((item) => (
        <ul key={item.news_id}>
          <PressLink href='#' onClick={() => setSelecetId(item.news_id)}>
            <ListCell>
              <Image src={item.author.brand_image_url} alt='Brand image' />
              <ListTextCell>
                <DateText>Published: {item.content.publish_date}</DateText>
                <Text>Title: {item.content.title}</Text>
              </ListTextCell>
            </ListCell>
          </PressLink>
        </ul>
      ))}
      ;
    </Main>
  ) : null;
};

const Main = styled.div``;

const Text = styled.li`
  font-size: 18px;
  padding: 0 15px 20px 15px;
  cursor: pointer;
`;

const DateText = styled.h5`
  font-size: 14px;
  padding: 0 15px 0 15px;
`;

const ListCell = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
  &:hover {
	background: #fff; 
`;

const ListTextCell = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const Image = styled.img`
  height: 100px;
  width: 200px;
`;

const PressLink = styled.a`
  text-decoration: none;
`;
