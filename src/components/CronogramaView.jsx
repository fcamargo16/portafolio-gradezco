import React from 'react';
import { Search, Heart, CheckCircle, Clock } from 'lucide-react';
import { cursosCronograma, unidades, meses } from '../data/data';

const EstadoBadge = ({ estado }) => {
  const enCurso = estado === 'En curso';
  const completado = estado === 'Completado';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '3px 8px',
      borderRadius: '999px',
      fontSize: '11px',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      backgroundColor: completado ? 'rgba(40, 167, 69, 0.1)' : enCurso ? 'rgba(255, 0, 0, 0.1)' : 'rgba(186, 188, 190, 0.25)',
      color: completado ? '#28a745' : enCurso ? '#ff0000' : '#6c757d',
    }}>
      {completado || enCurso ? <CheckCircle size={11} /> : <Clock size={11} />}
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
    const cumpleModalidad = filtroModalidadCronograma === 'Todas' || curso.modalidad === filtroModalidadCronograma;
    const cumpleMes = filtroMes === 'Todos' || curso.mes.toLowerCase() === filtroMes.toLowerCase();
    return cumpleBusqueda && cumpleUN && cumpleModalidad && cumpleMes;
  });

  const mesesConCursos = meses.filter((mes) =>
    cursosFiltrados.some((curso) => curso.mes.toLowerCase() === mes.toLowerCase())
  );

  const totalEnCurso   = cursosFiltrados.filter((c) => c.estado === 'En curso').length;
  const totalCompletado = cursosFiltrados.filter((c) => c.estado === 'Completado').length;
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
        <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#121e4b' }}>
            <CheckCircle size={15} color="#28a745" />
            <span><strong style={{ color: '#28a745' }}>{totalCompletado}</strong> completados</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#121e4b' }}>
            <CheckCircle size={15} color="#ff0000" />
            <span><strong style={{ color: '#ff0000' }}>{totalEnCurso}</strong> en curso</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#121e4b' }}>
            <Clock size={15} color="#babcbe" />
            <span><strong>{totalNoIniciado}</strong> no iniciados</span>
          </div>
          <div style={{ fontSize: '14px', color: '#121e4b' }}>
            Total: <strong>{cursosFiltrados.length}</strong>
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
          <select className="filter-select" value={filtroUNCronograma} onChange={(e) => setFiltroUNCronograma(e.target.value)}>
            {unidades.filter((un) => un !== 'Transversal').map((un) => (
              <option key={un} value={un}>{un}</option>
            ))}
          </select>
          <select className="filter-select" value={filtroModalidadCronograma} onChange={(e) => setFiltroModalidadCronograma(e.target.value)}>
            <option value="Todas">Todas las modalidades</option>
            <option value="Virtual">Virtual</option>
            <option value="Presencial">Presencial</option>
          </select>
          <select className="filter-select" value={filtroMes} onChange={(e) => setFiltroMes(e.target.value)}>
            <option value="Todos">Todos los meses</option>
            {meses.map((mes) => (
              <option key={mes} value={mes}>{mes.charAt(0).toUpperCase() + mes.slice(1)}</option>
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
          const completadosMes = cursosDelMes.filter((c) => c.estado === 'Completado').length;
          const enCursoMes    = cursosDelMes.filter((c) => c.estado === 'En curso').length;

          return (
            <div key={mes} className="mes-section">
              {/* Encabezado del mes */}
              <div className="mes-header">
                <div className="mes-badge">
                  {mes.charAt(0).toUpperCase() + mes.slice(1)} 2026
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {completadosMes > 0 && (
                    <span style={{ backgroundColor: 'rgba(40,167,69,0.1)', color: '#28a745', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
                      {completadosMes} completados
                    </span>
                  )}
                  {enCursoMes > 0 && (
                    <span style={{ backgroundColor: 'rgba(255,0,0,0.1)', color: '#ff0000', padding: '4px 12px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
                      {enCursoMes} en curso
                    </span>
                  )}
                  <div className="mes-count">
                    {cursosDelMes.length} curso{cursosDelMes.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>

              {/* Tabla compacta */}
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(186,188,190,0.15)' }}>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '600', color: '#121e4b', borderBottom: '2px solid #e9ecef' }}>Capacitación</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '600', color: '#121e4b', borderBottom: '2px solid #e9ecef', whiteSpace: 'nowrap' }}>Unidad</th>
                      <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: '600', color: '#121e4b', borderBottom: '2px solid #e9ecef', whiteSpace: 'nowrap' }}>Modalidad</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: '600', color: '#121e4b', borderBottom: '2px solid #e9ecef', whiteSpace: 'nowrap' }}>Estado</th>
                      <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: '600', color: '#121e4b', borderBottom: '2px solid #e9ecef', whiteSpace: 'nowrap' }}>% Avance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cursosDelMes.map((curso, idx) => (
                      <tr
                        key={idx}
                        style={{
                          backgroundColor: idx % 2 === 0 ? 'white' : '#f8f9fa',
                          borderLeft: curso.estado === 'Completado'
                            ? '3px solid #28a745'
                            : curso.estado === 'En curso'
                            ? '3px solid #ff0000'
                            : '3px solid transparent',
                        }}
                      >
                        <td style={{ padding: '10px 14px', color: '#121e4b', fontWeight: '500', borderBottom: '1px solid #f1f3f5' }}>
                          {curso.nombre}
                        </td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid #f1f3f5', whiteSpace: 'nowrap' }}>
                          <span className="tag tag-un" style={{ fontSize: '11px', padding: '3px 8px' }}>{curso.un}</span>
                        </td>
                        <td style={{ padding: '10px 14px', borderBottom: '1px solid #f1f3f5', whiteSpace: 'nowrap' }}>
                          <span className="tag tag-modalidad" style={{ fontSize: '11px', padding: '3px 8px' }}>{curso.modalidad}</span>
                        </td>
                        <td style={{ padding: '10px 14px', textAlign: 'center', borderBottom: '1px solid #f1f3f5' }}>
                          <EstadoBadge estado={curso.estado} />
                        </td>
                        <td style={{ padding: '10px 14px', textAlign: 'center', borderBottom: '1px solid #f1f3f5', whiteSpace: 'nowrap' }}>
                          {(curso.estado === 'Completado' || curso.estado === 'En curso') && curso.completado > 0 ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                              <div style={{ width: '60px', height: '6px', backgroundColor: '#f1f3f5', borderRadius: '999px', overflow: 'hidden' }}>
                                <div style={{
                                  height: '100%',
                                  width: `${curso.completado * 100}%`,
                                  backgroundColor: curso.estado === 'Completado' ? '#28a745' : '#ff0000',
                                  borderRadius: '999px',
                                }} />
                              </div>
                              <span style={{ fontSize: '12px', fontWeight: '600', color: curso.estado === 'Completado' ? '#28a745' : '#ff0000' }}>
                                {Math.round(curso.completado * 100)}%
                              </span>
                            </div>
                          ) : (
                            <span style={{ color: '#babcbe', fontSize: '12px' }}>—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CronogramaView;