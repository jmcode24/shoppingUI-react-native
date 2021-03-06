import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
          <View style={styles.details}>
            <Text style={{fontSize: 30, fontWeight: "bold", marginVertical: 20}}>PAYMENT SUCCESSFUL</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>
          <View style={styles.img}>
            <View style={styles.imgStyle}>
              <Image source={require("../../assets/payment.png")} style={{width: 340, height:250}} />
            </View>
            <View style={styles.btnStyle}>
              <TouchableOpacity>
                <Text style={{color: "white", fontSize: 25, fontWeight: "bold"}}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate("AddToCart")} >
              <Text style={{fontSize: 20, fontWeight: "bold", color: "grey"}}>Previous</Text>
            </TouchableOpacity>
            <View style={{flexDirection: "row"}}>
              <View style={{height: 10, width: 12, borderWidth: 1, borderRadius: 5, marginRight: 5, backgroundColor: "black"}}></View>
              <View style={{height: 10, width: 12, borderWidth: 1, borderRadius: 5, marginRight: 5, backgroundColor: "black"}}></View> 
              <View style={{height: 10, width: 20, borderWidth: 1, borderRadius: 10, backgroundColor: "slateblue"}}></View>
            </View>
            <Text style={{fontSize: 20, fontWeight: "bold", color: "grey"}}></Text>
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
    flex: 6,
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


export default Payment;