
import { cloneElement, ReactDOM } from "react";
import Additem from './Additem';
import TodoList from "./TodoList";
import React, { Component } from 'react'


export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.additem = this.additem.bind(this);
        this.removeitem=this.removeitem.bind(this);
        this.clearitems=this.clearitems.bind(this);
        this.state = {
            product: "Iphone",
            model: "Promax13",
            items: [],
            
        }
    }

    componentDidMount(){
        console.log("component oluşturuldu");
        const items=JSON.parse(localStorage.getItem("items"));
        if(items){
            this.setState({items:items})
        }
        
    }

    componentDidUpdate(prevProps,prevState){
        
        console.log(prevState.items);
        console.log("component guncellendi");
        console.log(this.state.items)
       if(prevState.items.length != this.state.items){
                localStorage.setItem("items",JSON.stringify(this.state.items));
       }

    }
    additem(item) {
        //formdan gelen item'ı alıp, tüm componentleri iligilendiren listeye ekleyecek
        if (!item) {
              return "lütfen istediğiniz bir item giriniz";
        }else if(this.state.items.indexOf(item) > -1){
               return "girmiş oldugunuz item zaten mevcuttur";
        }

            

        this.setState(

                (prevState) => {

                    // const arr = prevState.items.push(item);
                    // return { items: arr };

                    //push dizinin sonuna ekler ve index sayısını döndürür
                    //concat da kullanılabilir yeni eleman eklenmis dizi ile diziyi birleştirir ve geriye dizi dondurur

                    return { items:prevState.items.concat(item)};

                }

            )
           
    }


    removeitem(item){
       console.log("cc");
       this.setState(prevState=>{
             const arr=prevState.items.filter(Pitem=>Pitem!=item)
             return{items:arr}
       })
    }

    clearitems(){
        this.setState(
            {items:[]}
        )
    }
    render() {
        return (
            <div>
                <Additem 
                additem={this.additem} ></Additem>
                  <TodoList items={this.state.items} 
                            removeitem={this.removeitem}
                            clearitems={this.clearitems}
                        ></TodoList>
            </div>
        )
    }
}