import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Login.css';

const desktopBg = `${process.env.PUBLIC_URL}/yahtzee-bg-desktop.png`;
const mobileBg = `${process.env.PUBLIC_URL}/yahtzee-bg-mobile.png`;

function Login() {
  const { email, setEmail, password, setPassword, handleLogin } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (handleLogin(email, password)) {
      navigate('/home');
    } else {
      alert('Vul e-mail en wachtwoord in!');
    }
  };

  return (
    <div
      className="login-page"
      style={{
        '--login-bg-desktop': `url("${desktopBg}")`,
        '--login-bg-mobile': `url("${mobileBg}")`,
      }}
    >
      <div className="login-page__bg" aria-hidden="true" />
      <img
        className="login-page__mobile-hero"
        src={mobileBg}
        alt=""
        aria-hidden="true"
        draggable="false"
      />
      <div className="login-page__overlay" aria-hidden="true" />

      <div className="login-page__content">
        <aside className="login-brand">
          <h1 className="login-brand__sr-only">Yahtzee</h1>
          <div className="login-brand__copy">
            <p className="login-brand__tagline">Roll. Score. Play. Together.</p>
            <p className="login-brand__subtitle">Classic fun. Modern experience.</p>
          </div>
        </aside>

        <main className="login-main">
          <form className="login-card" onSubmit={onSubmit}>
            <header className="login-card__header">
              <h2 className="login-card__title">Welkom terug!</h2>
              <p className="login-card__subtitle">Log in om verder te spelen.</p>
            </header>

            <div className="login-field">
              <label htmlFor="email" className="login-field__label">
                E-mailadres
              </label>
              <input
                id="email"
                className="login-field__input"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.com"
              />
            </div>

            <div className="login-field">
              <label htmlFor="password" className="login-field__label">
                Wachtwoord
              </label>
              <input
                id="password"
                className="login-field__input"
                type="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="login-submit">
              Inloggen <span className="login-submit__arrow" aria-hidden="true">→</span>
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;
