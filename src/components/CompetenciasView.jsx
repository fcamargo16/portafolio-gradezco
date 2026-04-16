import React from 'react';
import { Heart } from 'lucide-react';

const competencias = [
  { nombre: 'Orientación al Logro',   nivel: 75, empleados: 234 },
  { nombre: 'Comunicación Asertiva',  nivel: 68, empleados: 267 },
  { nombre: 'Adaptabilidad',          nivel: 52, empleados: 198 },
  { nombre: 'Actitud de Servicio',    nivel: 82, empleados: 312 },
];

const areas = ['Producción', 'Ventas', 'Administración', 'Logística', 'Calidad'];
const valoresMatriz = [85, 72, 68, 91];

const CompetenciasView = () => (
  <div className="competencias-container">
    <div className="competencias-card">
      <div className="section-header">
        <Heart size={32} color="#ff0000" fill="#ff0000" />
        <h2 className="section-title-large">Desarrollo de Competencias</h2>
      </div>

      <div className="competencias-grid">
        {competencias.map((comp) => (
          <div key={comp.nombre} className="competencia-item">
            <h3 className="competencia-name">{comp.nombre}</h3>
            <div className="competencia-progress">
              <div className="competencia-header">
                <span className="competencia-label">Nivel de desarrollo</span>
                <span className="competencia-value">{comp.nivel}%</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${comp.nivel}%` }}></div>
              </div>
              <p className="competencia-info">{comp.empleados} empleados en formación</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="divider-heart">
      <div className="divider-line"></div>
      <Heart size={24} color="#ff0000" fill="#ff0000" />
      <div className="divider-line"></div>
    </div>

    <div className="matriz-card">
      <h3 className="section-title">Matriz de Competencias por Área</h3>
      <div className="table-container">
        <table className="competencias-table">
          <thead>
            <tr>
              <th>Área</th>
              <th>Orient. Logro</th>
              <th>Comunicación</th>
              <th>Adaptabilidad</th>
              <th>Servicio</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((area) => (
              <tr key={area}>
                <td className="area-name">{area}</td>
                {valoresMatriz.map((val, idx) => (
                  <td key={idx}>
                    <span
                      className={`badge ${
                        val >= 80 ? 'badge-high' : val >= 60 ? 'badge-medium' : 'badge-low'
                      }`}
                    >
                      {val}%
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default CompetenciasView;
