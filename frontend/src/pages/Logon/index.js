import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (error) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
      <>  
      <div class="container-button-right">
        <Link to="/cases" className="button">
              <FiLogIn size={16} color="#e02041" />
              Casos cadastrados
        </Link>
      </div>
      <div className="logon-container">
        <section className="form">
            <img src={logo} alt="Be The Hero" />

            <form>
                <h1>Faça seu logon</h1>
                <input
                    placeholder="Sua Id"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <button onClick={handleLogin} className="button" type="submit">Entrar</button>

                <Link to="/register" className="back-link">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                </Link>
            </form>
          </section>
          <img src={herosImg} alt="Heroes" />
      </div>
      </>
    );
}