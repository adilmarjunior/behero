import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Profile() {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        api.get('cases', {})
          .then(response => {
            setCases(response.data);
          });
    }, []);

    return (
        <div className="cases-container">
            <header>
                <img src={logo} alt="Be The Hero" />

                <Link className="button" to="/">Login</Link>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {cases.map(incident => (
                    <li key={incident.id}>
                        <strong>TÍTULO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>ONG RESPONSÁVEL:</strong>
                        <p>{incident.name}</p>

                        <strong>LOCALIZAÇÃO: </strong>
                        <p>{incident.city + ' - ' + incident.uf}</p>

                        <strong>WHATSAPP:</strong>
                        <p>{incident.whatsapp}</p>
                    </li>
                ))}
            </ul>
        </div >
    );
}