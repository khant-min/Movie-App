import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/DataContext";
import { DataContextProps, MovieDataProps } from "../types";
import { Card, Image } from "native-base";

const Loading = () => <Text>loading...</Text>;

export default function Movies() {
  const { movies } = useAuth() as DataContextProps;
  console.log("test moveis", movies);

  return (
    <View>
      {movies ? (
        <View>
          {movies.map((movie: MovieDataProps, i: number) => (
            <Card key={i}>
              <View>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
                  }}
                  alt="Alternate Text"
                  size="xl"
                />
              </View>
              <View>
                <Text>{movie.original_title}</Text>
              </View>
              <Text>{movie.overview}</Text>
            </Card>
          ))}
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
