import React, { useState } from 'react';

import logoIcon from '../../assets/logo-icon.png'
import logo from '../../assets/logo.png'
import { List, House, UserList, ShoppingCartSimple, Paperclip, FileText } from 'phosphor-react';
import { Link } from 'react-router-dom'

import './styles.scss';

export default function Sidebar() {

    const [show, setShow] = useState(false)
    const [logo, setLogo] = useState(false)


    return (
        <main className={show ? 'space-toggle' : null}>
            <aside className={`sidebar ${show ? 'show' : null}`}>
                <nav className="nav">
                    <img src={show ? 'logo' : 'logoIcon'} alt="Logo da cubo sistemas" id='logo'/>
                    <div className='separator'></div>
                    <div className="nav-list">
                        <div className="toggle" onClick={() => {
                            setLogo('logo')
                            setShow(!show)
                            }}>
                            <List size={32} />
                        </div>
                        <Link  to="/" className="nav-link">
                            <House size={32}  className="nav-link-icon"/>
                            <span className="nav-logo-name">Inicio</span>    
                        </Link>
                        <Link  to="/clients" className="nav-link ">
                            <UserList size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Clientes</span>    
                        </Link>
                        <Link  to="/sales" className="nav-link">
                            <ShoppingCartSimple size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Vendas</span>    
                        </Link>
                        <Link  to="/services" className="nav-link">
                            <Paperclip size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Serviços</span>    
                        </Link>
                        <Link  to="/reports" className="nav-link active">
                            <FileText size={32}  className="nav-link-icon"/>
                            <span className="nav-link-name">Relatórios</span>    
                        </Link>
                    </div>
                </nav>
            </aside>
        </main>
    )
}