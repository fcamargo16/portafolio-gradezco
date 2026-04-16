import React from 'react';
import { Plus, Heart } from 'lucide-react';

const EvidenciasView = ({
  evidencias,
  archivoSeleccionado,
  onFileChange,
  onSubirEvidencia,
  onEliminarEvidencia,
}) => (
  <div className="evidencias-card">
    <div className="section-header">
      <Heart size={32} color="#ff0000" fill="#ff0000" />
      <h2 className="section-title-large">Registro de Evidencias</h2>
    </div>

    <div className="info-box">
      <p>
        <strong>Instrucciones:</strong> Los empleados pueden subir evidencias de aprendizaje como
        certificados, trabajos finales, evaluaciones aprobadas, fotografías de actividades
        presenciales, etc.
      </p>
    </div>

    <div className="upload-container">
      <div className="upload-area">
        <Plus size={48} color="#babcbe" />
        <p className="upload-text">
          {archivoSeleccionado ? 'Archivo seleccionado:' : 'Subir nueva evidencia'}
        </p>

        <input
          id="file-input"
          type="file"
          className="file-input"
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          onChange={onFileChange}
        />

        <label htmlFor="file-input">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('file-input').click()}
            type="button"
          >
            Seleccionar archivo
          </button>
        </label>

        {archivoSeleccionado && (
          <div className="file-selected">
            📄 {archivoSeleccionado.name} ({(archivoSeleccionado.size / 1024).toFixed(2)} KB)
          </div>
        )}

        {archivoSeleccionado && (
          <button
            className="btn-primary"
            onClick={onSubirEvidencia}
            style={{ marginTop: '12px' }}
          >
            Subir evidencia
          </button>
        )}
      </div>

      <div className="evidence-types">
        <h3 className="evidence-title">Tipos de evidencia aceptados:</h3>
        <ul className="evidence-list">
          {[
            'Certificados de finalización (.pdf, .jpg, .png)',
            'Evaluaciones aprobadas (capturas de pantalla)',
            'Trabajos finales o proyectos (.pdf, .docx)',
            'Fotografías de capacitaciones presenciales',
            'Listas de asistencia firmadas',
          ].map((item) => (
            <li key={item}>
              <Heart size={16} color="#ff0000" fill="#ff0000" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {evidencias.length > 0 && (
        <div className="evidencias-list">
          <h3 className="evidence-title">Evidencias subidas ({evidencias.length})</h3>
          {evidencias.map((evidencia) => (
            <div key={evidencia.id} className="evidencia-item">
              <div className="evidencia-info">
                <h4>📄 {evidencia.nombre}</h4>
                <div className="evidencia-meta">
                  <span>Tamaño: {evidencia.tamaño} KB</span>
                  <span>•</span>
                  <span>Subido: {evidencia.fecha} a las {evidencia.hora}</span>
                </div>
              </div>
              <button
                className="btn-delete"
                onClick={() => onEliminarEvidencia(evidencia.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default EvidenciasView;
