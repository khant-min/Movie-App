import Header from "../components/Header";
import Footer from "../components/Footer";
import Movies from "../components/Movies";
import ScreenWrapper from "../hoc/ScreenWrapper";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <Header />
      <Movies />
      <Footer />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
