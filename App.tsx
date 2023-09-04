import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { Footer, Header } from "./src";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.screenWrapper}>
        <Header />
        <Footer />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    margin: 25,
  },
});
