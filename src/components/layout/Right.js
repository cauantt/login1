import React from 'react'
import './Right.css'
import Input from '../right/Input'

function Right() {
  return (
    <div className='right'>
        <div className='layout'>
            <p>Bem vindos de volta</p>
            <h1>Faça login na sua conta</h1>
            <Input placeholder="exemplo@gmail.com" type="email"label="E-mail"/>            
            <Input placeholder="0123456789" type="password" label="Senha"/>  
            <div className='line'>
              <div className='checkbox'>
                <input id='input1' type='checkbox'></input>
                <label>Lembre de mim</label>
              </div>
              <p id="senha">Esqueceu a senha?</p>

            </div>



        </div>
      
    </div>
  )
}

export default Right
