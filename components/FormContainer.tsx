import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

export function FormContainer({ children,subTitle }: { children: React.ReactNode,subTitle:string }) {
  return (
    <View style={styles.container}>
        <Text style={styles.subTitle}>{subTitle}</Text>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
    container: { 
        width: "100%", 
        alignItems: "center" ,
        backgroundColor:"#FFFFFF",
        padding: 30,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position:"relative"
      },
      subTitle:{
        fontFamily:"FredokaSemiBold",
        fontSize:24,
        marginBottom:20,
      },
    });