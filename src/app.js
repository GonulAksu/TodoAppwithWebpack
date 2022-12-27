//herhangi bir paketi uygulamamıza yüklemeden önce 
//uygulama klasörü içerisine package.json dosyasını yüklemeliyiz
//uygulama içerisine yükleyecek olduğumuz paketleri yönetmek için

//npm init --yes dersek package.json gelir

//yardımcı methodları içeren underscore paketini indiricez (node_module ve package-lock.json gelir)

//babel paketlerini ve presets leri yükledik 
//.babelrc dosyasına presetsleri yazdık


//webpack paketlerini yükledik
//şuan projenin sıkıştırılmış ve sıkıştırılmamış versiyonlarını oluşturabiliyorduk

//farklı configurasyonlar yapamk iiçn ana klasöre webpack.config.js'i ekleyeceğiz

//webpack dev-server ile sıkıştırlmış versiyonunun memoryde oluşan bundel.js ile oluşturacağız

//scriplerimiz yazdıktan sonra 

//react kütüphenelerini npm ile projeye dahi edicez

//babel rules yazılacak ve babel npm paketi yüklenecek

import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
// import './style/style.css';
// import './style/style.scss';
import './style/main.scss';

const root=document.getElementById('root');
ReactDOM.render(<TodoApp/>,root);