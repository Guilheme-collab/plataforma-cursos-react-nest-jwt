import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UsuarioService } from '../../services/usuario.service';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import validator from 'validator';

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  // Login fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Register fields
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  
  const [error, setError] = useState('');
  const [canReactivate, setCanReactivate] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const EMAIL_DOMAIN_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  const isEmailValid = (val: string) => validator.isEmail(val, { require_tld: true }) && EMAIL_DOMAIN_REGEX.test(val);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCanReactivate(false);

    if (!isEmailValid(email.trim())) {
      return setError('Por favor, informe um e-mail com domínio válido (ex: usuario@gmail.com, nome@empresa.com.br).');
    }
    if (password.trim().length < 6) {
      return setError('A senha deve ter pelo menos 6 caracteres.');
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Credenciais inválidas';
      if (msg.includes('inativo') || msg.includes('excluído')) {
        setCanReactivate(true);
        setError('Sua conta foi desativada anteriormente. Deseja reativá-la e restaurar seu acesso e histórico?');
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReactivate = async () => {
    setLoading(true);
    try {
      const response = await api.post('/auth/reactivate', { email, senha: password });
      const newToken = response.data.access_token;
      const userData = response.data.user;

      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(userData));

      toast.success('🎉 Sua conta foi reativada com sucesso! Seu histórico, cursos e certificados foram restaurados.');
      window.location.href = '/';
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao reativar conta.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setCanReactivate(false);

    if (nomeCompleto.trim().length < 3) {
      return setError('O nome completo precisa ter pelo menos 3 caracteres.');
    }
    if (!isEmailValid(registerEmail.trim())) {
      return setError('Por favor, informe um e-mail com domínio válido (ex: usuario@gmail.com, nome@empresa.com.br).');
    }
    if (registerPassword.trim().length < 6) {
      return setError('A senha precisa ter pelo menos 6 caracteres.');
    }

    setLoading(true);
    try {
      await UsuarioService.create({
        nomeCompleto: nomeCompleto.trim(),
        email: registerEmail.trim(),
        senhaHash: registerPassword
      } as any);

      toast.success('Conta criada com sucesso! Fazendo login...');
      await login(registerEmail.trim(), registerPassword);
      navigate('/');
    } catch (err: any) {
      const msg = err.response?.data?.message;
      setError(Array.isArray(msg) ? msg[0] : msg || 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow border-0 rounded-4 p-4" style={{ width: '440px' }}>
        <div className="text-center mb-4">
          <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
            <i className="bi bi-mortarboard-fill fs-2"></i>
          </div>
          <h3 className="fw-bold" style={{ color: '#2b3674' }}>
            {isLogin ? 'Bem-vindo de volta' : 'Criar Nova Conta'}
          </h3>
          <p className="text-muted">
            {isLogin ? 'Faça login para acessar seus cursos' : 'Junte-se à nossa plataforma de ensino'}
          </p>
        </div>

        {error && (
          <div className={`alert ${canReactivate ? 'alert-warning' : 'alert-danger'} py-3 small mb-3`}>
            <i className={`bi ${canReactivate ? 'bi-exclamation-triangle-fill' : 'bi-x-circle-fill'} me-2`}></i>
            {error}
            {canReactivate && (
              <div className="mt-3">
                <button
                  type="button"
                  onClick={handleReactivate}
                  disabled={loading}
                  className="btn btn-warning btn-sm w-100 fw-bold rounded-pill text-dark shadow-sm"
                >
                  <i className="bi bi-arrow-counterclockwise me-1"></i> Reativar Minha Conta Agora
                </button>
              </div>
            )}
          </div>
        )}

        {isLogin ? (
          <form onSubmit={handleLogin} noValidate>
            <div className="mb-3">
              <label className="form-label fw-bold text-muted small">E-MAIL</label>
              <input 
                type="email" 
                className="form-control form-control-lg bg-light" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold text-muted small">SENHA</label>
              <input 
                type="password" 
                className="form-control form-control-lg bg-light" 
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="******"
              />
            </div>
            <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-100 fw-bold">
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
            <div className="text-center mt-4">
              <span className="text-muted">Não tem uma conta? </span>
              <button type="button" className="btn btn-link p-0 text-decoration-none fw-bold" onClick={() => { setIsLogin(false); setError(''); setCanReactivate(false); }}>
                Cadastre-se grátis
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister} noValidate>
            <div className="mb-3">
              <label className="form-label fw-bold text-muted small">NOME COMPLETO</label>
              <input 
                type="text" 
                className="form-control form-control-lg bg-light" 
                value={nomeCompleto}
                onChange={(e) => { setNomeCompleto(e.target.value); setError(''); }}
                placeholder="Ex: João da Silva"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold text-muted small">E-MAIL</label>
              <input 
                type="email" 
                className="form-control form-control-lg bg-light" 
                value={registerEmail}
                onChange={(e) => { setRegisterEmail(e.target.value); setError(''); }}
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold text-muted small">SENHA</label>
              <input 
                type="password" 
                className="form-control form-control-lg bg-light" 
                value={registerPassword}
                onChange={(e) => { setRegisterPassword(e.target.value); setError(''); }}
                placeholder="Mínimo 6 caracteres"
              />
            </div>
            <button type="submit" disabled={loading} className="btn btn-success btn-lg w-100 fw-bold">
              {loading ? 'Criando...' : 'Criar Conta'}
            </button>
            <div className="text-center mt-4">
              <span className="text-muted">Já tem uma conta? </span>
              <button type="button" className="btn btn-link p-0 text-decoration-none fw-bold" onClick={() => { setIsLogin(true); setError(''); setCanReactivate(false); }}>
                Fazer login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
