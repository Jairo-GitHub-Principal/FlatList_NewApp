import React,{ Component } from "react";
import { useState } from "react";
import { ImageProps } from "react-native";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";


export interface Anuncio {
  titulo: string;  
  testo: string;
  imagem: ImageProps["source"];
  id:Int32
 
  
  
}

const imagem1 = require("'../images/img1.webp'");
const imagem2 = require("../images/img2.webp");
const imagem3 = require("../images/img3.webp");


export const ItemsDaLista: Anuncio[] = [
  {
    titulo: "Lorem ipsum", 
    testo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
    imagem: require('../images/img1.webp'),
    id:0
  
    
  },
  {
    titulo: "Lorem ipsum", 
    testo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
    imagem: require('../images/img2.webp'),
    id:1
  
    
  },
  {
    titulo: "Lorem ipsum", 
    testo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in congue risus, non viverra tellus. Nam faucibus ligula non metus ultrices mollis. Cras dolor purus, hendrerit eu eros quis, dignissim eleifend mi. In tincidunt mi in diam egestas congue ac ut purus. Nulla semper libero vitae blandit vehicula.",
    imagem: require('../images/img3.webp'),
    id:2
  
    
  },
  
];