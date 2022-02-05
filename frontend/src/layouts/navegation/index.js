import React, { Component } from 'react';
import { SearchTextBox } from '../../components/search-textbox/index'
import { IconButton } from '../../components/icon-button/index'
export class TopNav extends Component {

  render() {
    return (
      <header className='flex flex-row content-between justify-between shadow-md'>

        <h1 className='text-2xl  font-bold text-blue-600 p-1 mx-3 self-center'>STU</h1>

        <SearchTextBox position='self-center'></SearchTextBox>

        <nav className='self-center'>
          <IconButton name='notifications' color='text-neutral-800'></IconButton>
          <IconButton name='help' color='text-neutral-800'></IconButton>
          <IconButton name='settings' color='text-neutral-800' marginRight='mr-8'> 
          <div className='text-blue-600 w-7'></div>
          </IconButton>
        </nav>
      </header>

    )
  }
}   