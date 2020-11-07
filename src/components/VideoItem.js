import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';
import {Image, Linking, Pressable} from 'react-native';
import DefaultText from 'sharedComponents/DefaultText';
import {screenWidth} from 'utils/ScreenUtils';

moment.locale('fr');

const VideoItem = ({video}) => {
  return (
    <Pressable onPress={() => Linking.openURL('https://www.youtube.com/watch?v='+video.id)} style={{marginHorizontal: 5}}>
      <Image
        source={{uri: video.thumbnails.high.url}}
        resizeMode="contain"
        style={{
          height:
            video.thumbnails.high.height *
            ((screenWidth - 10) / video.thumbnails.high.width),
          width: screenWidth - 10,
        }}
      />
      <DefaultText style={{fontSize: 17, alignSelf: 'flex-start'}}>
        {video.title}
      </DefaultText>
      <DefaultText style={{fontSize: 13}}>
        {`${video.channelTitle} • ${moment(video.publishedAt).fromNow()}`}
      </DefaultText>
    </Pressable>
  );
};

export default VideoItem;
