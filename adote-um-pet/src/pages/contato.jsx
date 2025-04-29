'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main>
      <Header />
      <div className="content">
        <button className="back-button" onClick={() => router.back()}>← Voltar</button>
        <div className="contato-container">
          <h2 className="section-title">Fale Conosco</h2>
          {!enviado ? (
            <form onSubmit={handleSubmit} className="formulario">
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="Seu email" required />
              <textarea placeholder="Sua mensagem" required></textarea>
              <button type="submit" className="submit-button">Enviar</button>
            </form>
          ) : (
            <p>Mensagem enviada com sucesso! 📨</p>
          )}
        </div>
      </div>
    </main>
  );
}
