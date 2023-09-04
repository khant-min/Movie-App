import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <ScrollView style={styles.footer}>
      <View>
        <Text style={styles.subHeader}>
          Copyright {date} {"\n"}All right reserved &copy;
        </Text>
      </View>
      <View>
        <View>
          <Text style={styles.subHeader}>About</Text>
          <View style={styles.linksContainer}>
            <Text>How it works?</Text>
            <Text>Featured</Text>
            <Text>Partnership</Text>
            <Text>Business Relation</Text>
          </View>
        </View>
        <View>
          <Text style={styles.subHeader}>Company</Text>
          <View style={styles.linksContainer}>
            <Text>Events</Text>
            <Text>Blog</Text>
            <Text>Podcast</Text>
            <Text>Inviate a friend</Text>
          </View>
        </View>
        <View>
          <Text style={styles.subHeader}>Socials</Text>
          <View style={styles.linksContainer}>
            <Text>Discord</Text>
            <Text>Instagram</Text>
            <Text>Twitter</Text>
            <Text>Facebook</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View>
        <Text style={[styles.subHeader, styles.copyright]}>
          Copyright @ {date} by Khant Min. All Rights Reserved
        </Text>
      </View>
      <View style={styles.subFooter}>
        <Text>Privacy Policy</Text>
        <Text>Terms of Use</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginVertical: 40,
  },
  subHeader: {
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  linksContainer: {
    gap: 10,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#a9abb1",
    marginVertical: 20,
  },
  copyright: {
    textAlign: "center",
  },
  subFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
