import React from 'react'
import './Right.css'
import Input from '../right/Input'
import { FcGoogle } from "react-icons/fc";
import './Checkbox.css'


function Right() {
  return (
    <div className='right'>
        <div className='layout'>
            <div className='welcome'>
              <p >Bem-vindo de volta</p>
              <h1>Faça login na sua conta</h1>
            </div>
            <Input placeholder="exemplo@gmail.com" type="email"label="E-mail"/>            
            <Input placeholder="0123456789" type="password" label="Senha"/>  
            <div className='line'>
              <div className='checkbox'>
              <label>
             <input type="checkbox" onChange={() => {}} />
            <span>Lembre de mim</span>
      
            </label>
                
              </div>
              <p >Esqueceu a senha?</p>

            </div>
            <div className='buttons'>
              <button id='button1' className='button'>Entrar na conta</button>
              <button id='button2' className='button'> <FcGoogle id='icon'/> Ou faça login com o google</button>
            </div>
            <div className='lastline'>
              <p>Não tem uma conta? </p> <p id='cadastre'>Cadastre-se</p>
            </div>



        </div>
      
    </div>
  )
}

export default Right
