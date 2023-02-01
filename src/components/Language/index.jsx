import React, { useState, useEffect } from 'react';
import Linguage from '../../Linguage';

const Language = () => {
    const [language, setLanguage] = useState([]);

    useEffect(() => {
        Linguage.getLanguage().then(data => {
            setLanguage(data);
        });
    }, []);

    return (
        <div>
            {language.map(item => (
                <div key={item.TituloNome}>
                    <h1>{item.TituloNome}</h1>
                    <p>{item.Sobre}</p>
                </div>
            ))}
        </div>
    );
};

export default Language;
