import React from 'react';
import { Search, CheckCircle, Clock, XCircle, Heart } from 'lucide-react';
import { cursos, unidades, modalidades } from '../data/data';

const CursosView = ({
  busqueda,
  setBusqueda,
  filtroUN,
  setFiltroUN,
  filtroModalidad,
  setFiltroModalidad,
}) => {
  const cursosFiltrados = cursos.filter((curso) => {
    const cumpleBusqueda = curso.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const cumpleUN = filtroUN === 'Todas' || curso.un === filtroUN;
    const cumpleModalidad = filtroModalidad === 'Todas' || curso.modalidad === filtroModalidad;
    return cumpleBusqueda && cumpleUN && cumpleModalidad;
  });

  return (
    <div className="cursos-container">
      <div className="filters-card">
        <div className="filters-grid">
          <div className="search-container">
            <Search size={20} color="#babcbe" className="search-icon" />
            <input
              type="text"
              placeholder="Buscar curso..."
              className="search-input"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <select
            className="filter-select"
            value={filtroUN}
            onChange={(e) => setFiltroUN(e.target.value)}
          >
            {unidades.map((un) => (
              <option key={un} value={un}>{un}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={filtroModalidad}
            onChange={(e) => setFiltroModalidad(e.target.value)}
          >
            {modalidades.map((mod) => (
              <option key={mod} value={mod}>{mod}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="courses-list">
        {cursosFiltrados.map((curso) => {
          const total = curso.completados + curso.enProgreso + curso.pendientes;
          const porcentajeCompletado = Math.round((curso.completados / total) * 100);

          return (
            <div key={`${curso.id}-${curso.un}`} className="course-card">
              <div className="course-header">
                <div className="course-info">
                  <h3 className="course-title">{curso.nombre}</h3>
                  <div className="course-tags">
                    <span className="tag tag-un">{curso.un}</span>
                    <span className="tag tag-modalidad">{curso.modalidad}</span>
                    <span className="tag tag-tipo">{curso.tipo}</span>
                    {curso.reinduccion === 'Sí' && (
                      <span className="tag tag-reinduccion">
                        <Heart size={12} fill="#ff0000" color="#ff0000" />
                        Reinducción
                      </span>
                    )}
                  </div>
                </div>
                <span className="course-percentage">{porcentajeCompletado}%</span>
              </div>

              <div className="course-stats">
                <div className="stat">
                  <CheckCircle size={16} color="#ff0000" />
                  <span>Completados: <strong>{curso.completados}</strong></span>
                </div>
                <div className="stat">
                  <Clock size={16} color="#babcbe" />
                  <span>En progreso: <strong>{curso.enProgreso}</strong></span>
                </div>
                <div className="stat">
                  <XCircle size={16} color="#babcbe" />
                  <span>Pendientes: <strong>{curso.pendientes}</strong></span>
                </div>
              </div>

              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${porcentajeCompletado}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CursosView;
