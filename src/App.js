import React, { useState } from 'react';
import { BookOpen, User, Award, TrendingUp, Clock } from 'lucide-react';

import appStyles from './styles/appStyles';
import DashboardView from './components/DashboardView';
import CronogramaView from './components/CronogramaView';
import CursosView from './components/CursosView';
import EvidenciasView from './components/EvidenciasView';
import CompetenciasView from './components/CompetenciasView';

const PortafolioAprendizaje = () => {
  // Navegación
  const [vistaActiva, setVistaActiva] = useState('dashboard');

  // Filtros de Cursos
  const [busqueda, setBusqueda] = useState('');
  const [filtroUN, setFiltroUN] = useState('Todas');
  const [filtroModalidad, setFiltroModalidad] = useState('Todas');

  // Filtros de Cronograma
  const [busquedaCronograma, setBusquedaCronograma] = useState('');
  const [filtroUNCronograma, setFiltroUNCronograma] = useState('Todas');
  const [filtroModalidadCronograma, setFiltroModalidadCronograma] = useState('Todas');
  const [filtroMes, setFiltroMes] = useState('Todos');

  // Evidencias
  const [evidencias, setEvidencias] = useState([]);
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setArchivoSeleccionado(file);
  };

  const handleSubirEvidencia = () => {
    if (archivoSeleccionado) {
      const nuevaEvidencia = {
        id: Date.now(),
        nombre: archivoSeleccionado.name,
        tipo: archivoSeleccionado.type,
        tamaño: (archivoSeleccionado.size / 1024).toFixed(2),
        fecha: new Date().toLocaleDateString('es-CO'),
        hora: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
      };
      setEvidencias([nuevaEvidencia, ...evidencias]);
      setArchivoSeleccionado(null);
      const fileInput = document.getElementById('file-input');
      if (fileInput) fileInput.value = '';
      alert('¡Evidencia subida exitosamente!');
    } else {
      alert('Por favor selecciona un archivo primero');
    }
  };

  const handleEliminarEvidencia = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta evidencia?')) {
      setEvidencias(evidencias.filter((ev) => ev.id !== id));
    }
  };

  const navItems = [
    { id: 'dashboard',    label: 'Dashboard',   Icon: TrendingUp },
    { id: 'cronograma',   label: 'Cronograma',  Icon: Clock      },
    { id: 'cursos',       label: 'Cursos',      Icon: BookOpen   },
    { id: 'evidencias',   label: 'Evidencias',  Icon: Award      },
    { id: 'competencias', label: 'Competencias',Icon: User       },
  ];

  return (
    <>
      <style>{appStyles}</style>
      <div className="app-container">
        <div className="main-content">

          {/* Header */}
          <header className="app-header">
            <div className="header-content">
              <div className="header-left">
                <img
                  src="/logo-gradezco.png"
                  alt="Logo Gradezco"
                  style={{ width: '64px', height: '64px', objectFit: 'contain' }}
                />
                <div className="header-text">
                  <h1>Portafolio de Aprendizaje 2026</h1>
                  <p>Gestión integral de capacitación corporativa</p>
                </div>
              </div>
            </div>
          </header>

          {/* Navegación */}
          <nav className="navigation">
            {navItems.map(({ id, label, Icon }) => (
              <button
                key={id}
                className={`nav-btn ${vistaActiva === id ? 'active' : ''}`}
                onClick={() => setVistaActiva(id)}
              >
                <Icon size={20} />
                {label}
              </button>
            ))}
          </nav>

          {/* Vistas */}
          <main>
            {vistaActiva === 'dashboard' && <DashboardView />}

            {vistaActiva === 'cronograma' && (
              <CronogramaView
                busquedaCronograma={busquedaCronograma}
                setBusquedaCronograma={setBusquedaCronograma}
                filtroUNCronograma={filtroUNCronograma}
                setFiltroUNCronograma={setFiltroUNCronograma}
                filtroModalidadCronograma={filtroModalidadCronograma}
                setFiltroModalidadCronograma={setFiltroModalidadCronograma}
                filtroMes={filtroMes}
                setFiltroMes={setFiltroMes}
              />
            )}

            {vistaActiva === 'cursos' && (
              <CursosView
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                filtroUN={filtroUN}
                setFiltroUN={setFiltroUN}
                filtroModalidad={filtroModalidad}
                setFiltroModalidad={setFiltroModalidad}
              />
            )}

            {vistaActiva === 'evidencias' && (
              <EvidenciasView
                evidencias={evidencias}
                archivoSeleccionado={archivoSeleccionado}
                onFileChange={handleFileChange}
                onSubirEvidencia={handleSubirEvidencia}
                onEliminarEvidencia={handleEliminarEvidencia}
              />
            )}

            {vistaActiva === 'competencias' && <CompetenciasView />}
          </main>

          {/* Footer */}
          <footer className="app-footer">
            <div className="footer-content">
              <img
                src="/logo-gradezcoCirculo.png"
                alt="Logo Gradezco"
                style={{ width: '64px', height: '64px', objectFit: 'contain' }}
              />
              <span>Gradezco - Capacitación y Desarrollo 2026</span>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
};

export default PortafolioAprendizaje;
