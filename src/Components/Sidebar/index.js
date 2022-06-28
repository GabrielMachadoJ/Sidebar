import React, { useState } from 'react';

import logoIcon from '../../assets/logo-icon.png'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'
 
import { List, House, UserList, ShoppingCartSimple, Paperclip, FileText } from 'phosphor-react';

import './styles.scss';

export default function Sidebar() {

    const [show, setShow] = useState(false)
    const [components, setComponents] = useState({
        home: false,
        clientes: false,
        vendas: false,
        servicos: false,
        arquivos: false,
    })

    function changeSelected(id) {
        const allDivs = document.querySelectorAll('.nav-link')
        const element = document.getElementById(id)
        
        for(const propriedade in components){
            if(element.classList[0] === propriedade){
                allDivs.forEach((e) => {
                    if(e.classList.contains('active')) {
                        e.classList.remove('active')
                    }
                })   
                element.classList.add('active')
            }
        }
    }

    return (
        <main className={show ? 'space-toggle' : null}>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className="nav">
                    <img src={ show ? logo : logoIcon} alt="Logo da cubo sistemas" id='logo'/>
                    <div className='separator'></div>
                    <div className="nav-list">
                        <div className="toggle" onClick={() => {setShow(!show)}}>
                            <List size={32} />
                        </div>
                        <Link to="/home" id="home" className="home nav-link" onClick={() => changeSelected('home')}>
                            <House size={32}  className="nav-link-icon"/>
                            <span className="nav-logo-name">Inicio</span>    
                        </Link>
                        <Link to="/clients" id="clientes" className="clientes nav-link"  onClick={() => changeSelected('clientes')}>
                            <UserList size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Clientes</span>    
                        </Link>
                        <Link to="/sales"  id="vendas" className="vendas nav-link"  onClick={() => changeSelected('vendas')}>
                            <ShoppingCartSimple size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Vendas</span>    
                        </Link>
                        <Link to="/services"  id="servicos" className="servicos nav-link"  onClick={() => changeSelected('servicos')}>
                            <Paperclip size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Serviços</span>    
                        </Link>
                        <Link to="/files"  id="arquivos" className="arquivos nav-link" onClick={() => changeSelected('arquivos')}>
                            <FileText size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Relatórios</span>    
                        </Link>
                    </div>
                </nav>
            </aside>
        </main>
    )
}