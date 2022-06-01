import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const OnlineShopping = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
          <View style={styles.details}>
            <Text style={{fontSize: 30, fontWeight: "bold", marginVertical: 20}}>ONLINE SHOPPING</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
          <View style={styles.img}>
            <View style={styles.imgStyle}>
              <Image source={require("../../assets/shopping.png")} style={{width: 340, height:250}} />
            </View>
            <View style={styles.btnStyle}>
              <TouchableOpacity onPress={() => navigation.navigate("AddToCart")}>
                <Text style={{color: "white", fontSize: 25, fontWeight: "bold"}}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footer}>
            <Text></Text>
            <View style={{flexDirection: "row"}}>
              <View style={{height: 10, width: 20, borderWidth: 1, borderRadius: 10, marginRight: 5, backgroundColor: "slateblue"}}></View> 
              <View style={{height: 10, width: 12, borderWidth: 1, borderRadius: 5, marginRight: 5, backgroundColor: "black"}}></View>
              <View style={{height: 10, width: 12, borderWidth: 1, borderRadius: 5, backgroundColor: "black"}}></View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
              <Text style={{fontSize: 20, fontWeight: "bold", color: "grey"}}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },

  details: {
    flex: 3,
    marginVertical: 20
  },

  img: {
    flex: 5,
    marginTop: 20
  },

  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40
  },

  imgStyle: {
    flex: 8,
  },

  btnStyle: {
    flex: 2,
    marginHorizontal: 80,
    height: "10%", 
    width: "50%", 
    backgroundColor: "blue", 
    borderRadius: 30, 
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70
  }
});


export default OnlineShopping;