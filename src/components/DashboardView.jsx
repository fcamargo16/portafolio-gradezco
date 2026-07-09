import React, { useState } from 'react';
import { BookOpen, User, Award, TrendingUp, CheckCircle, Clock, Heart } from 'lucide-react';
import { cursos, TOTAL_EMPLEADOS } from '../data/data';

const datosMes = {
  marzo: {
    cumplimiento: {
      general: 67,
      meta: 80,
      detalle: [
        { nombre: 'Alimentos',        porcentaje: '93%' },
        { nombre: 'Aceites',          porcentaje: '61%' },
        { nombre: 'Nutrición Animal', porcentaje: '28%' },
        { nombre: 'Aseo',             porcentaje: '89%' },
      ],
    },
    eficacia: {
      general: 96,
      meta: 75,
      evaluacionesRealizadas: 26,
      aprobadas: 24,
      promedio: '96%',
    },
    satisfaccion: {
      puntaje: 4.6,
      meta: 4.0,
      encuestas: 68,
      muySatisfechos: '51',
      satisfechos: '17',
    },
    induccion: {
      general: 100,
      meta: 70,
      empleados: '31',
      totalEmpleados: '31',
      promedio: '93%',
      tiempo: '1 hora',
    },
  },
  abril: {
    cumplimiento: {
      general: 72,
      meta: 80,
      detalle: [
        { nombre: 'Alimentos',        porcentaje: '98%' },
        { nombre: 'Aceites',          porcentaje: '66%' },
        { nombre: 'Nutrición Animal', porcentaje: '33%' },
        { nombre: 'Aseo',             porcentaje: '94%' },
      ],
    },
    eficacia: {
      general: 98,
      meta: 75,
      evaluacionesRealizadas: 32,
      aprobadas: 24,
      promedio: '98%',
    },
    satisfaccion: {
      puntaje: 4.8,
      meta: 4.0,
      encuestas: 56,
      muySatisfechos: '49',
      satisfechos: '7',
    },
    induccion: {
      general: 99,
      meta: 70,
      empleados: '26',
      totalEmpleados: '26',
      promedio: '98%',
      tiempo: '1 hora',
    },
  },
  mayo: {
    cumplimiento: {
      general: 86,
      meta: 80,
      detalle: [
        { nombre: 'Alimentos',        porcentaje: '97%'  },
        { nombre: 'Aceites',          porcentaje: '87%'  },
        { nombre: 'Nutrición Animal', porcentaje: '100%' },
        { nombre: 'Aseo',             porcentaje: '66%'  },
      ],
    },
    eficacia: {
      general: 0,
      meta: 75,
      evaluacionesRealizadas: 0,
      aprobadas: 0,
      promedio: '0%',
    },
    satisfaccion: {
      puntaje: 4.7,
      meta: 4.0,
      encuestas: 26,
      muySatisfechos: '18',
      satisfechos: '6',
    },
    induccion: {
      general: 98,
      meta: 70,
      empleados: '53',
      totalEmpleados: '53',
      promedio: '99%',
      tiempo: '2 horas',
    },
  },
  junio: {
    cumplimiento: {
      general: 79,
      meta: 80,
      detalle: [
        { nombre: 'Alimentos',        porcentaje: '84%' },
        { nombre: 'Aceites',          porcentaje: '71%' },
        { nombre: 'Nutrición Animal', porcentaje: '76%' },
        { nombre: 'Aseo',             porcentaje: '84%' },
      ],
    },
    eficacia: {
      general: 98,
      meta: 75,
      evaluacionesRealizadas: 6,
      aprobadas: 6,
      promedio: '98%',
    },
    satisfaccion: {
      puntaje: 4.9,
      meta: 4.0,
      encuestas: 64,
      muySatisfechos: '52',
      satisfechos: '10',
    },
    induccion: {
      general: 98,
      meta: 70,
      empleados: '88',
      totalEmpleados: '88',
      promedio: '99%',
      tiempo: '2 horas',
    },
  },
};

const mesesDisponibles = ['marzo', 'abril', 'mayo', 'junio'];

const DashboardView = () => {
  const [mesActivo, setMesActivo] = useState('junio');
  const datos = datosMes[mesActivo];

  const cursosCompletadosPromedio = Math.round(
    cursos.reduce((acc, c) => acc + c.completados, 0) / cursos.length
  );
  const tasaCompletacion = Math.round((cursosCompletadosPromedio / TOTAL_EMPLEADOS) * 100);

  return (
    <div className="dashboard-container">
      {/* Métricas generales */}
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

      {/* Indicadores con selector de mes */}
      <div className="indicadores-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <h3 className="section-title" style={{ marginBottom: 0 }}>Indicadores de Capacitación</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            {mesesDisponibles.map((mes) => (
              <button
                key={mes}
                onClick={() => setMesActivo(mes)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  backgroundColor: mesActivo === mes ? '#ff0000' : '#f1f3f5',
                  color: mesActivo === mes ? 'white' : '#121e4b',
                  transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {mes.charAt(0).toUpperCase() + mes.slice(1)}
              </button>
            ))}
          </div>
        </div>

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
              <span className="indicador-numero">{datos.cumplimiento.general}%</span>
              <span className="indicador-meta">Meta: {datos.cumplimiento.meta}%</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: `${datos.cumplimiento.general}%`, backgroundColor: '#ff0000' }}></div>
              </div>
              <div className="indicador-detalle-un">
                {datos.cumplimiento.detalle.map((item) => (
                  <div key={item.nombre} className="un-item">
                    <span className="un-nombre">{item.nombre}</span>
                    <span className="un-porcentaje">{item.porcentaje}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`indicador-status ${datos.cumplimiento.general >= datos.cumplimiento.meta ? 'indicador-status-cumple' : 'indicador-status-pendiente'}`}>
              {datos.cumplimiento.general >= datos.cumplimiento.meta
                ? <><CheckCircle size={16} /><span>Meta cumplida</span></>
                : <><Clock size={16} /><span>En progreso (falta {datos.cumplimiento.meta - datos.cumplimiento.general}%)</span></>
              }
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
              <span className="indicador-numero">{datos.eficacia.general}%</span>
              <span className="indicador-meta">Meta: {datos.eficacia.meta}%</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: `${datos.eficacia.general}%`, backgroundColor: '#ff0000' }}></div>
              </div>
              <div className="indicador-stats">
                {[
                  { label: 'Evaluaciones realizadas:', value: datos.eficacia.evaluacionesRealizadas },
                  { label: 'Aprobadas (≥70%):', value: datos.eficacia.aprobadas },
                  { label: 'Promedio general:', value: datos.eficacia.promedio },
                ].map((row) => (
                  <div key={row.label} className="stats-row">
                    <span className="stats-label">{row.label}</span>
                    <span className="stats-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`indicador-status ${datos.eficacia.general >= datos.eficacia.meta ? 'indicador-status-cumple' : 'indicador-status-pendiente'}`}>
              {datos.eficacia.general >= datos.eficacia.meta
                ? <><CheckCircle size={16} /><span>Meta cumplida</span></>
                : <><Clock size={16} /><span>En progreso</span></>
              }
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
              <span className="indicador-numero">{datos.satisfaccion.puntaje}/5.0</span>
              <span className="indicador-meta">Meta: {datos.satisfaccion.meta}/5.0</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: `${(datos.satisfaccion.puntaje / 5) * 100}%`, backgroundColor: '#ff0000' }}></div>
              </div>
              <div className="indicador-stats">
                {[
                  { label: 'Encuestas respondidas:', value: datos.satisfaccion.encuestas },
                  { label: 'Muy satisfechos (5★):', value: datos.satisfaccion.muySatisfechos },
                  { label: 'Satisfechos (4★):', value: datos.satisfaccion.satisfechos },
                ].map((row) => (
                  <div key={row.label} className="stats-row">
                    <span className="stats-label">{row.label}</span>
                    <span className="stats-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`indicador-status ${datos.satisfaccion.puntaje >= datos.satisfaccion.meta ? 'indicador-status-cumple' : 'indicador-status-pendiente'}`}>
              {datos.satisfaccion.puntaje >= datos.satisfaccion.meta
                ? <><CheckCircle size={16} /><span>Meta cumplida</span></>
                : <><Clock size={16} /><span>En progreso</span></>
              }
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
              <span className="indicador-numero">{datos.induccion.general}%</span>
              <span className="indicador-meta">Meta: {datos.induccion.meta}%</span>
            </div>
            <div className="indicador-progress">
              <div className="progress-bar-container">
                <div className="progress-bar-indicador" style={{ width: `${datos.induccion.general}%`, backgroundColor: datos.induccion.general >= datos.induccion.meta ? '#ff0000' : '#babcbe' }}></div>
              </div>
              <div className="indicador-stats">
                {[
                  { label: 'Empleados completados:', value: `${datos.induccion.empleados} / ${datos.induccion.totalEmpleados}` },
                  { label: 'Promedio de calificación:', value: datos.induccion.promedio },
                  { label: 'Tiempo promedio:', value: datos.induccion.tiempo },
                ].map((row) => (
                  <div key={row.label} className="stats-row">
                    <span className="stats-label">{row.label}</span>
                    <span className="stats-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`indicador-status ${datos.induccion.general >= datos.induccion.meta ? 'indicador-status-cumple' : 'indicador-status-pendiente'}`}>
              {datos.induccion.general >= datos.induccion.meta
                ? <><CheckCircle size={16} /><span>Meta cumplida</span></>
                : <><Clock size={16} /><span>Cerca de la meta (falta {datos.induccion.meta - datos.induccion.general}%)</span></>
              }
            </div>
          </div>

        </div>
      </div>

      <div className="divider-heart">
        <div className="divider-line"></div>
        <Heart size={24} color="#ff0000" fill="#ff0000" />
        <div className="divider-line"></div>
      </div>

      {/* Progreso por Unidad de Negocio (sin Transversal) */}
      <div className="progress-card">
        <h3 className="section-title">Progreso por Unidad de Negocio</h3>
        <div className="progress-list">
          {[
            { un: 'Alimentos',        porcentaje: 67 },
            { un: 'Aceites',          porcentaje: 48 },
            { un: 'Nutrición animal', porcentaje: 48 },
            { un: 'Aseo',             porcentaje: 72 },
          ].map(({ un, porcentaje }) => (
            <div key={un} className="progress-item">
              <div className="progress-header">
                <span className="progress-name">{un}</span>
                <span className="progress-percentage">{porcentaje}%</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${porcentaje}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;