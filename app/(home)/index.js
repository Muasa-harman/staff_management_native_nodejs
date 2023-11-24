import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";

const index = () => {
    const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#e7d3e8", "#e9a4ed"]} style={{ flex: 1 }}>
        <View style={{ padding: 22 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color={"black"} />
            <Text style={{ fontSize: 16, fontWeight: "800" }}>
              Staff Management System
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
            onPress={()=> router.push('/(home)/employees')}
              style={{
                backgroundColor: "#D3CCE3",
                flex: 1,
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#D3CCE3",
                flex: 1,
                padding: 12,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "800",
                  flex: 1,
                }}
              >
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color={"black"} />
              </View>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "800",
                  flex: 1,
                }}
              >
                Summary Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color={"black"} />
              </View>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "800",
                  flex: 1,
                }}
              >
                All Generate Reports
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color={"black"} />
              </View>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: "#BE93C5",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "800",
                  flex: 1,
                }}
              >
                Overtime Employees
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo name="chevron-right" size={24} color={"black"} />
              </View>
            </Pressable>
          </View>
          <View style={{marginTop:20,flexDirection:'row',alignItems:'center',gap:12}}>
            <View
              style={{
                backgroundColor: "#c17cc4",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                flex:1,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 2,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{marginTop:7}}>Attendance Criteria</Text>
            </View>
            <View
              style={{
                backgroundColor: "#b447ba",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                flex:1,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 2,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="barchart" size={24} color="black" />
              </View>
              <Text style={{marginTop:7}}>Increased Workflow</Text>
            </View>
          </View>
          <View style={{marginTop:20,flexDirection:'row',alignItems:'center',gap:12}}>
            <View
              style={{
                backgroundColor: "#d14f8a",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                flex:1,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 2,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{marginTop:7}}>Cost Savings</Text>
            </View>
            <View
              style={{
                backgroundColor: "#9c3a66",
                borderRadius: 6,
                padding: 12,
                alignItems: "center",
                flex:1,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 2,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="barchart" size={24} color="black" />
              </View>
              <Text style={{marginTop:7}}>Employee Perfomance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
