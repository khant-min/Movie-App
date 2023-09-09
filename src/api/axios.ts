import axios from "axios";

export default axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
});
