import React, { Component } from 'react';

//Componente de iconos como botones
export class SearchTextBox extends Component {

    focusOutFuncion() {
        var x = document.getElementById("searchTextBox");
        x.value = '';
      }

    render() {

        const sytleHoverActive = [
            "focus:border-blue-600",
            "focus:w-56",
            "active:border-blue-600",
            "active:w-56",
        ]

        console.log(sytleHoverActive);
        return (
            <div className={`${this.props.position} relative`}>
                <span className='material-icons-outlined text-base text-neutral-500 absolute
                    left-1.5 bottom-0.5'>search</span>
                <input id='searchTextBox' type="text" placeholder='Search'
                    className='border rounded pl-7 text-sm border-neutral-400 w-40 py-1 outline-none
            focus:border-blue-600 transition-all focus:ease-in delay-75 duration-75 focus:w-56'
            value={null} onBlur= {this.focusOutFuncion}/>
                
            </div>
        )
    }
}