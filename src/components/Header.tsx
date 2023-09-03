import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, HamburgerIcon, Menu, Pressable } from "native-base";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.header}>MoviePlayer</Text>
      </View>
      <View style={styles.toolsContainer}>
        <Box>
          <Ionicons name="search" size={24} color="black" />
        </Box>
        <Box>
          <Entypo name="light-up" size={24} color="black" />
        </Box>
        <Box>
          <Menu
            w="140"
            trigger={triggerProps => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                >
                  <HamburgerIcon style={styles.menu} />
                </Pressable>
              );
            }}
          >
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Detail</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Box>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontStyle: "italic",
  },
  toolsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  menu: {
    width: 25,
    height: 25,
  },
});
