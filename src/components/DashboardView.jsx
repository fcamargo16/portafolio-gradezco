import React from 'react';
import { BookOpen, User, Award, TrendingUp, CheckCircle, Clock, Heart } from 'lucide-react';
import { cursos, unidades, TOTAL_EMPLEADOS } from '../data/data';

const DashboardView = () => {
  const cursosCompletadosPromedio = Math.round(
    cursos.reduce((acc, c) => acc + c.completados, 0) / cursos.length
  );
  const tasaCompletacion = Math.round((cursosCompletadosPromedio / TOTAL_EMPLEADOS) * 100);

  return (
    <div className="dashboard-container">
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <BookOpen size={32} color="#121e4b" />
            <span className="metric-value">{cursos.length}</span>
          </div>
          <p className="metric-label">Cursos Totales</p>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <User size={32} color="#121e4b" />
            <span className="metric-value">{TOTAL_EMPLEADOS}</span>
          </div>
          <p className="metric-label">Empleados</p>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <Award size={32} color="#121e4b" />
            <span className="metric-value">{tasaCompletacion}%</span>
          </div>
          <p className="metric-label">Tasa Cumplimiento</p>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <TrendingUp size={32} color="#121e4b" />
            <span className="metric-value">8.2</span>
          </div>
          <p className="metric-label">Cursos por Empleado</p>
        </div>
      </div>

      <div className="divider-heart">
        <div className="divider-line"></div>
        <Heart size={24} color="#ff0000" fill="#ff0000" />
        <div className="divider-line"></div>
      </div>

      <div className="indicadores-section">
        <h3 className="section-title">Indicadores de Capacitación</h3>

        <div className="indicadores-grid">
          {/* Cumplimiento */}
          <div className="indicador-card">
            <div className="indicador-header">
              <div className="indicador-icon-wrapper" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
                <CheckCircle size={28} color="#ff0000" />
              </div>
              <div className="indicador-info">
                <h4 className="indicador-titulo">Cumplimiento</h4>
                <p className="indicador-descripcion">Cobertura de cursos por UN</p>
              </div>
            </div>
            <div className="indicador-valor-principal">
              <span className="indicador-numero">85%</span>
              <span className="indicador-meta">Meta: 80%</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: '85%', backgroundColor: '#ff0000' }}></div>
              </div>
              <div className="indicador-detalle-un">
                {[
                  { nombre: 'Transversal', porcentaje: '92%' },
                  { nombre: 'Alimentos y Aceites', porcentaje: '78%' },
                  { nombre: 'Nutrición Animal', porcentaje: '81%' },
                  { nombre: 'Aseo', porcentaje: '88%' },
                ].map((item) => (
                  <div key={item.nombre} className="un-item">
                    <span className="un-nombre">{item.nombre}</span>
                    <span className="un-porcentaje">{item.porcentaje}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="indicador-status indicador-status-cumple">
              <CheckCircle size={16} />
              <span>Meta cumplida</span>
            </div>
          </div>

          {/* Eficacia */}
          <div className="indicador-card">
            <div className="indicador-header">
              <div className="indicador-icon-wrapper" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
                <Award size={28} color="#ff0000" />
              </div>
              <div className="indicador-info">
                <h4 className="indicador-titulo">Eficacia</h4>
                <p className="indicador-descripcion">Resultado de evaluaciones</p>
              </div>
            </div>
            <div className="indicador-valor-principal">
              <span className="indicador-numero">76%</span>
              <span className="indicador-meta">Meta: 75%</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: '76%', backgroundColor: '#ff0000' }}></div>
              </div>
              <div className="indicador-stats">
                {[
                  { label: 'Evaluaciones realizadas:', value: '1,520' },
                  { label: 'Aprobadas (≥70%):', value: '1,155' },
                  { label: 'Promedio general:', value: '78.5/100' },
                ].map((row) => (
                  <div key={row.label} className="stats-row">
                    <span className="stats-label">{row.label}</span>
                    <span className="stats-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="indicador-status indicador-status-cumple">
              <CheckCircle size={16} />
              <span>Meta cumplida</span>
            </div>
          </div>

          {/* Satisfacción */}
          <div className="indicador-card">
            <div className="indicador-header">
              <div className="indicador-icon-wrapper" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
                <Heart size={28} color="#ff0000" fill="#ff0000" />
              </div>
              <div className="indicador-info">
                <h4 className="indicador-titulo">Satisfacción</h4>
                <p className="indicador-descripcion">Resultados de encuestas</p>
              </div>
            </div>
            <div className="indicador-valor-principal">
              <span className="indicador-numero">4.2/5.0</span>
              <span className="indicador-meta">Meta: 4.0/5.0</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: '84%', backgroundColor: '#ff0000' }}></div>
              </div>
              <div className="indicador-stats">
                {[
                  { label: 'Encuestas respondidas:', value: '1,245' },
                  { label: 'Muy satisfechos (5★):', value: '48%' },
                  { label: 'Satisfechos (4★):', value: '36%' },
                ].map((row) => (
                  <div key={row.label} className="stats-row">
                    <span className="stats-label">{row.label}</span>
                    <span className="stats-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="indicador-status indicador-status-cumple">
              <CheckCircle size={16} />
              <span>Meta cumplida</span>
            </div>
          </div>

          {/* Inducción Corporativa */}
          <div className="indicador-card">
            <div className="indicador-header">
              <div className="indicador-icon-wrapper" style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
                <User size={28} color="#ff0000" />
              </div>
              <div className="indicador-info">
                <h4 className="indicador-titulo">Inducción Corporativa</h4>
                <p className="indicador-descripcion">Resultados de reinducción</p>
              </div>
            </div>
            <div className="indicador-valor-principal">
              <span className="indicador-numero">68%</span>
              <span className="indicador-meta">Meta: 70%</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: '68%', backgroundColor: '#babcbe' }}></div>
              </div>
              <div className="indicador-stats">
                {[
                  { label: 'Empleados completados:', value: '1,360 / 2,000' },
                  { label: 'Promedio de calificación:', value: '82/100' },
                  { label: 'Tiempo promedio:', value: '2.5 horas' },
                ].map((row) => (
                  <div key={row.label} className="stats-row">
                    <span className="stats-label">{row.label}</span>
                    <span className="stats-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="indicador-status indicador-status-pendiente">
              <Clock size={16} />
              <span>Cerca de la meta (falta 2%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-heart">
        <div className="divider-line"></div>
        <Heart size={24} color="#ff0000" fill="#ff0000" />
        <div className="divider-line"></div>
      </div>

      <div className="progress-card">
        <h3 className="section-title">Progreso por Unidad de Negocio</h3>
        <div className="progress-list">
          {unidades
            .filter((u) => u !== 'Todas')
            .map((un) => {
              const cursosUN = cursos.filter((c) => c.un === un);
              const totalCompletados = cursosUN.reduce((acc, c) => acc + c.completados, 0);
              const totalPosible = cursosUN.length * TOTAL_EMPLEADOS;
              const porcentaje = Math.round((totalCompletados / totalPosible) * 100);

              return (
                <div key={un} className="progress-item">
                  <div className="progress-header">
                    <span className="progress-name">{un}</span>
                    <span className="progress-percentage">{porcentaje}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${porcentaje}%` }}></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
