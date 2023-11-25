import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
// {data,input,setInput}
const SearchResults = ({ employeeName, designation }) => {
  return (
    <View style={{ marginVertical: 10, gap: 10, flexDirection: "row" }}>
      <View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Employee1
              employeeName={item.employeeName}
              initial={item.initial}
              designation={item.designation}
              keyExtractor={(item) => item.employeeId}
            />
          )}
        />
      </View>
    </View>
    //     <View style={{padding:10}}>
    //       <FlatList data={data} renderItem={({item})=>{
    //         if(item?.employeeName.toLowerCase().inckudes(input.toLowerCase())){
    //             return(
    //                 <View style={{marginVertical:10,gap:10,flexDirection:'row'}}>
    //                 <View style={{width:50,height:50,borderRadius:8,padding:10,justifyContent:'center',alignItems:'center', backgroundColor:'#4b6cb7'}}>
    //                     <Text>{item?.employeeName?.charAt(0)}</Text>
    //                 </View>
    //                 <View>
    //                     {/* <Text>{item?.employeeName}</Text> */}
    //                     {/* <Text>{item?.designation} ({item?.employeeId})</Text> */}
    //                 </View>
    //                 </View>
    //             )
    //         }
    //       }}/>
    //     </View>
    //   )
  );
};

export default SearchResults;

const DATA = [
  {
    employeeName: "Harman Muasa",
    employeeId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    initial: 'HM',
    designation: "Software Engineer",
    phoneNumber: "+254721456992",
    dateOfBirth: "27/05/1992",
    joiningDate: "03/03/2022",
    activeEmployee: "",
    salary: 5000,
    address: 51 - 60001,
  },
  {
    employeeName: "Harman Muasa",
    employeeId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    initial: 'HM',
    designation: "Software Engineer",
    phoneNumber: "+254721456992",
    dateOfBirth: "27/05/1992",
    joiningDate: "03/03/2022",
    activeEmployee: "",
    salary: 5000,
    address: 51 - 60001,
  },
  {
    employeeName: "Harman Muasa",
    employeeId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    initial: 'HM',
    designation: "Software Engineer",
    phoneNumber: "+254721456992",
    dateOfBirth: "27/05/1992",
    joiningDate: "03/03/2022",
    activeEmployee: "",
    salary: 5000,
    address: 51 - 60001,
  },
];
const Employee1 = ({ employeeName, designation,initial }) => {
  return (
    <View style={{ marginVertical: 10, gap: 10, flexDirection: "row" }}>
      <View
        style={{
          width: 70,
          height: 60,
          borderRadius: 8,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e6130b",
        }}
      >
        <Text style={{color:'white', fontSize:16}}>{initial}</Text>
      </View>
      <View>
        <Text style={{fontSize:16, fontWeight:'bold'}}>{employeeName}</Text>
        <Text style={{marginTop:10,color:'gray'}}>{designation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
