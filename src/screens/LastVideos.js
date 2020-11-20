import React, {useContext, useEffect, useState} from 'react';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import axios from 'utils/Youtube';
import VideoItem from 'components/VideoItem';
import Container from 'components/shared/Container';
import DefaultText from 'components/shared/DefaultText';
import {screenWidth} from 'utils/ScreenUtils';
import {ThemeContext} from 'utils/Themes';

const dataProvider = new DataProvider((r1, r2) => {
  return r1 !== r2;
});

const layoutProvider = new LayoutProvider(
  () => 0,
  (type, dim) => {
    dim.width = screenWidth;
    dim.height = 360;
  },
);

const LastVideos = () => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);
  const {changeTheme} = useContext(ThemeContext);
  useEffect(() => {
    Promise.all([
      axios.get('', {
        params: {
          channelId: 'UCwp2_uZxzKQTWyxGpaX1ByQ',
        },
      }),
      axios.get('', {
        params: {
          channelId: 'UCfMw_NLtTEur_Gz7kpwvQGA',
        },
      }),
    ])
      .then((response) => {
        const result = response
          .reduce((acc, cur) => acc.concat(cur.data.items), [])
          .map((r) => ({
            ...r.snippet,
            id: r.id.videoId,
          }));
        result.sort(
          ({publishedAt: t1}, {publishedAt: t2}) => new Date(t2) - new Date(t1),
        );
        setVideos(dataProvider.cloneWithRows(result));
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  function rowRenderer(type, data) {
    return <VideoItem video={data} />;
  }

  if (videos) {
    return (
      <Container>
        <RecyclerListView
          layoutProvider={layoutProvider}
          dataProvider={videos}
          rowRenderer={rowRenderer}
          forceNonDeterministicRendering={true}
        />
      </Container>
    );
  }
  return (
    <Container>
      <DefaultText onPress={changeTheme}>Error</DefaultText>
    </Container>
  );
};

export default LastVideos;
