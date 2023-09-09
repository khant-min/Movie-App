import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/DataContext";
import { MovieProps } from "../types";
import axios, { AxiosHeaders } from "axios";
import { useEffect } from "react";

export default function Movies() {
  //   const { data } = useAuth() as MovieProps;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            headers: {
              Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
            },
          }
        );
        console.log("data: ", movies);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovies();
  }, []);

  return (
    <View>
      <Text>Movies</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
