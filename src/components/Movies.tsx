import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/DataContext";
import { DataContextProps, MovieDataProps } from "../types";

export default function Movies() {
  const { movies } = useAuth() as DataContextProps;
  console.log("test moveis", movies);

  return (
    <View>
      {movies.map((movie: MovieDataProps, i: number) => (
        <Text key={i}>{movie.overview}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
