import React, { useState } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Rating, AirbnbRating } from 'react-native-ratings';

const ItemsList = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.icons}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
        <TouchableOpacity style={styles.icons}><Feather name="shopping-cart" size={24} color="slateblue" /></TouchableOpacity>
      </View>
      <View style={styles.intro}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>All Jackets</Text>
        <KeyboardAvoidingView style={styles.input}>
          <TextInput placeholder="Search Jacket"/>
          <TouchableOpacity>
           <Text style={{color: "slateblue", fontWeight: "bold"}}>Filter</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.details}>
        <ScrollView>
          <View style={styles.item}>
            <View style={styles.imgCol}>
              <Image source={require("../../assets/a1-removebg.png")} style={styles.img}/>
            </View>
            <View style={styles.desCol}>
              <Text style={styles.text}>Winter Thermal Cycling Jacket</Text>
              <Text style={styles.star}><Rating imageSize={15}/></Text>
              <Text style={styles.num}>$90.99</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.imgCol}>
              <Image source={require("../../assets/a2-removebg.png")} style={styles.img}/>
            </View>
            <View style={styles.desCol}>
              <Text style={styles.text}>Stoic P260 Merino</Text>
              <Text style={styles.star}><Rating imageSize={15}/></Text>
              <Text style={styles.num}>$82.99</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.imgCol}>
              <Image source={require("../../assets/a3-removebg.png")} style={styles.img}/>
            </View>
            <View style={styles.desCol}>
              <Text style={styles.text}>Winter Ultralight Jacket</Text>
              <Text style={styles.star}><Rating imageSize={15}/></Text>
              <Text style={styles.num}>$87.99</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.imgCol}>
              <Image source={require("../../assets/a4-removebg.png")} style={styles.img}/>
            </View>
            <View style={styles.desCol}>
              <Text style={styles.text}>Slimfit Leather Jacket</Text>
              <Text style={styles.star}><Rating imageSize={15}/></Text>
              <Text style={styles.num}>$102.99</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.imgCol}>
              <Image source={require("../../assets/a5-removebg.png")} style={styles.img}/>
            </View>
            <View style={styles.desCol}>
              <Text style={styles.text}>Wool Coat</Text>
              <Text style={styles.star}><Rating imageSize={15}/></Text>
              <Text style={styles.num}>$180.99</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5
  },

  icons: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",

  },

  intro: {
    flex: 2,
    padding: 5,
  },

  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 20
  },

  details: {
    flex: 7,
    padding: 5,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
  },

  imgCol: {
    flex: 4,
    height: 130,
    width: "100%",
    backgroundColor: "white",
    transform: [{skewY: "10deg"}],
    borderRadius: 20
  },

  img: {
    top: -35,
    height: 140,
    width: 110,
  },

  desCol: {
    flex: 6,
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },

  star: {
    marginVertical: 5
  },

  num: {
    fontSize: 20,
    color: "slateblue",
    fontWeight: "bold",
    marginVertical: 5
  }
});

export default ItemsList;