import React from 'react';
import { Search, Heart, CheckCircle, Clock } from 'lucide-react';
import { cursosCronograma, unidades, meses } from '../data/data';

const EstadoBadge = ({ estado }) => {
  const enCurso = estado === 'En curso';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 10px',
        borderRadius: '999px',
        fontSize: '12px',
        fontWeight: '600',
        backgroundColor: enCurso ? 'rgba(255, 0, 0, 0.1)' : 'rgba(186, 188, 190, 0.25)',
        color: enCurso ? '#ff0000' : '#6c757d',
      }}
    >
      {enCurso ? <CheckCircle size={12} /> : <Clock size={12} />}
      {estado}
    </span>
  );
};

const CronogramaView = ({
  busquedaCronograma,
  setBusquedaCronograma,
  filtroUNCronograma,
  setFiltroUNCronograma,
  filtroModalidadCronograma,
  setFiltroModalidadCronograma,
  filtroMes,
  setFiltroMes,
}) => {
  const cursosFiltrados = cursosCronograma.filter((curso) => {
    const cumpleBusqueda = curso.nombre.toLowerCase().includes(busquedaCronograma.toLowerCase());
    const cumpleUN = filtroUNCronograma === 'Todas' || curso.un === filtroUNCronograma;
    const cumpleModalidad =
      filtroModalidadCronograma === 'Todas' || curso.modalidad === filtroModalidadCronograma;
    const cumpleMes =
      filtroMes === 'Todos' || curso.mes.toLowerCase() === filtroMes.toLowerCase();
    return cumpleBusqueda && cumpleUN && cumpleModalidad && cumpleMes;
  });

  const mesesConCursos = meses.filter((mes) =>
    cursosFiltrados.some((curso) => curso.mes.toLowerCase() === mes.toLowerCase())
  );

  const totalEnCurso = cursosFiltrados.filter((c) => c.estado === 'En curso').length;
  const totalNoIniciado = cursosFiltrados.filter((c) => c.estado === 'No iniciado').length;

  return (
    <div className="cronograma-container">
      {/* Header */}
      <div className="cronograma-header-card">
        <div className="section-header">
          <Heart size={32} color="#ff0000" fill="#ff0000" />
          <h2 className="section-title-large">Cronograma de Capacitación 2026</h2>
        </div>
        <p className="cronograma-subtitle">
          Calendario completo de cursos y capacitaciones programadas para el año
        </p>

        {/* Resumen rápido */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#121e4b' }}>
            <CheckCircle size={16} color="#ff0000" />
            <span><strong style={{ color: '#ff0000' }}>{totalEnCurso}</strong> en curso</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#121e4b' }}>
            <Clock size={16} color="#babcbe" />
            <span><strong>{totalNoIniciado}</strong> no iniciados</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#121e4b' }}>
            <span>Total: <strong>{cursosFiltrados.length}</strong> capacitaciones</span>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="filters-card">
        <div className="filters-grid-cronograma">
          <div className="search-container">
            <Search size={20} color="#babcbe" className="search-icon" />
            <input
              type="text"
              placeholder="Buscar curso..."
              className="search-input"
              value={busquedaCronograma}
              onChange={(e) => setBusquedaCronograma(e.target.value)}
            />
          </div>

          <select
            className="filter-select"
            value={filtroUNCronograma}
            onChange={(e) => setFiltroUNCronograma(e.target.value)}
          >
            {unidades.filter((un) => un !== 'Transversal').map((un) => (
              <option key={un} value={un}>{un}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={filtroModalidadCronograma}
            onChange={(e) => setFiltroModalidadCronograma(e.target.value)}
          >
            <option value="Todas">Todas las modalidades</option>
            <option value="Virtual">Virtual</option>
            <option value="Presencial">Presencial</option>
          </select>

          <select
            className="filter-select"
            value={filtroMes}
            onChange={(e) => setFiltroMes(e.target.value)}
          >
            <option value="Todos">Todos los meses</option>
            {meses.map((mes) => (
              <option key={mes} value={mes}>
                {mes.charAt(0).toUpperCase() + mes.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sin resultados */}
      {mesesConCursos.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron cursos con los filtros seleccionados</p>
        </div>
      ) : (
        mesesConCursos.map((mes) => {
          const cursosDelMes = cursosFiltrados.filter(
            (curso) => curso.mes.toLowerCase() === mes.toLowerCase()
          );
          const enCursoMes = cursosDelMes.filter((c) => c.estado === 'En curso').length;

          return (
            <div key={mes} className="mes-section">
              <div className="mes-header">
                <div className="mes-badge">
                  {mes.charAt(0).toUpperCase() + mes.slice(1)} 2026
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {enCursoMes > 0 && (
                    <span style={{
                      backgroundColor: 'rgba(255, 0, 0, 0.1)',
                      color: '#ff0000',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '600',
                    }}>
                      {enCursoMes} en curso
                    </span>
                  )}
                  <div className="mes-count">
                    {cursosDelMes.length} curso{cursosDelMes.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              <div className="cursos-mes-grid">
                {cursosDelMes.map((curso, idx) => (
                  <div key={idx} className="cronograma-card" style={{
                    borderLeft: curso.estado === 'En curso' ? '3px solid #ff0000' : '3px solid transparent',
                  }}>
                    {/* Título y estado */}
                    <div className="cronograma-card-header">
                      <h3 className="cronograma-curso-title">{curso.nombre}</h3>
                      <EstadoBadge estado={curso.estado} />
                    </div>

                    {/* Descripción */}
                    <p className="cronograma-descripcion">{curso.descripcion}</p>

                    {/* Barra de progreso si está en curso */}
                    {curso.estado === 'En curso' && curso.completado > 0 && (
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6c757d', marginBottom: '4px' }}>
                          <span>Progreso</span>
                          <span style={{ fontWeight: '600', color: '#ff0000' }}>{Math.round(curso.completado * 100)}%</span>
                        </div>
                        <div className="progress-bar-container" style={{ height: '8px' }}>
                          <div
                            className="progress-bar"
                            style={{ width: `${curso.completado * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Tags de pie */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                      <span className="tag tag-un">{curso.un}</span>
                      <span className="tag tag-modalidad">{curso.modalidad}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CronogramaView;