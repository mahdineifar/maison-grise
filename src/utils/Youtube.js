import axios from 'axios';
import {MAX_RESULTS, NUMBER_OF_DAYS} from 'constants/YoutubeConstants';

const KEY = 'AIzaSyDZ7l00Vg1rERwiTIXVivkOU5hIPEJJw3g';

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - NUMBER_OF_DAYS);
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    part: 'snippet',
    maxResults: MAX_RESULTS,
    order: 'date',
    publishedAfter: currentDate.toISOString(),
    key: KEY,
  },
});
