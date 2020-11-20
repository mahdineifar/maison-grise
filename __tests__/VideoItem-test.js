/**
 * @format
 */

import 'react-native';
import React from 'react';
import VideoItem from '../src/components/VideoItem';

import {render} from '../jest/test-utils';
import {fireEvent} from '@testing-library/react-native';
import {Linking} from 'react-native';

test('Video item renders correctly', () => {
  const mockFn = Linking.openURL;
  const video = {
    id: 1,
    title: 'Video title',
    publishedAt: '2020-11-19T16:30:39Z',
    channelTitle: 'channel title',
    thumbnails: {
      high: {
        height: 360,
        width: 480,
      },
    },
  };

  const {getByText} = render(<VideoItem video={video} />);
  const title = getByText('Video title');
  const channel = getByText(/channel title/);

  expect(title).toBeTruthy();
  expect(channel).toBeTruthy();
  fireEvent.press(title);
  expect(mockFn).toBeCalledWith(`https://www.youtube.com/watch?v=${video.id}`);
});
