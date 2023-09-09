import { StyleSheet, ScrollView } from "react-native";
import { ChildrenProps } from "../types";

const ScreenWrapper: React.FC<ChildrenProps> = ({ children }) => (
  <ScrollView style={styles.screenWrapper}>{children}</ScrollView>
);

export default ScreenWrapper;

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: "#eaf5c9",
    padding: 20,
  },
});
