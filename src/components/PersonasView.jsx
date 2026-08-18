import React, { useState, useRef } from 'react';
import { User, Lock, Upload, Search, ChevronDown, ChevronUp, X, FileSpreadsheet } from 'lucide-react';
import * as XLSX from 'xlsx';

const PASSWORD = 'Formacion20**';

const PersonasView = () => {
  const [autenticado, setAutenticado] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [errorPass, setErrorPass] = useState(false);
  const [personas, setPersonas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtroEmpresa, setFiltroEmpresa] = useState('Todas');
  const [expandida, setExpandida] = useState(null);
  const [archivoNombre, setArchivoNombre] = useState('');
  const fileRef = useRef();

  // ── Login ──────────────────────────────────────────────────────────────────
  const handleLogin = () => {
    if (inputPassword === PASSWORD) {
      setAutenticado(true);
      setErrorPass(false);
    } else {
      setErrorPass(true);
    }
  };

  // ── Cargar Excel ───────────────────────────────────────────────────────────
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setArchivoNombre(file.name);
    const reader = new FileReader();
    reader.onload = (evt) => {
      const wb = XLSX.read(evt.target.result, { type: 'binary' });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, { defval: '' });

      // Agrupar por cédula
      const mapa = {};
      rows.forEach((row) => {
        const cedula = String(row['CÉDULA'] || '').trim();
        const nombre = `${row['NOMBRES'] || ''} ${row['APELLIDOS '] || row['APELLIDOS'] || ''}`.trim();
        const empresa = (row['EMPRESA'] || '').trim();
        const area = (row['ÁREA'] || '').trim();
        const cargo = (row['CARGO'] || '').trim();

        // Convertir fecha Excel a legible
        let fecha = row['FECHA DE CAPACITACIÓN'] || '';
        if (typeof fecha === 'number') {
          const d = new Date(Math.round((fecha - 25569) * 86400 * 1000));
          fecha = d.toLocaleDateString('es-CO', { day: '2-digit', month: '2-digit', year: 'numeric' });
        }

        const curso = {
          nombre: (row['NOMBRE DE LA CAP'] || '').trim(),
          fecha,
          lugar: (row['LUGAR DE CAPACITACIÓN'] || '').trim(),
        };

        if (!cedula) return;
        if (!mapa[cedula]) {
          mapa[cedula] = { cedula, nombre, empresa, area, cargo, cursos: [] };
        }
        if (curso.nombre) mapa[cedula].cursos.push(curso);
      });

      setPersonas(Object.values(mapa));
      setExpandida(null);
    };
    reader.readAsBinaryString(file);
  };

  // ── Filtros ────────────────────────────────────────────────────────────────
  const empresas = ['Todas', ...new Set(personas.map((p) => p.empresa).filter(Boolean))];

  const personasFiltradas = personas.filter((p) => {
    const q = busqueda.toLowerCase();
    const coincide = p.nombre.toLowerCase().includes(q) || p.cedula.includes(q);
    const empresa = filtroEmpresa === 'Todas' || p.empresa === filtroEmpresa;
    return coincide && empresa;
  });

  // ── Login screen ───────────────────────────────────────────────────────────
  if (!autenticado) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', padding: '48px 40px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', backgroundColor: 'rgba(255,0,0,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Lock size={28} color="#ff0000" />
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#121e4b', marginBottom: '8px' }}>Acceso Restringido</h2>
          <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '32px' }}>Esta sección contiene información confidencial. Ingresa tu contraseña de administrador.</p>
          <input
            type="password"
            placeholder="Contraseña"
            value={inputPassword}
            onChange={(e) => { setInputPassword(e.target.value); setErrorPass(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            style={{
              width: '100%', padding: '12px 16px', borderRadius: '8px', fontSize: '15px', outline: 'none', marginBottom: '12px', boxSizing: 'border-box',
              border: errorPass ? '2px solid #ff0000' : '1.5px solid #dee2e6',
            }}
          />
          {errorPass && <p style={{ color: '#ff0000', fontSize: '13px', marginBottom: '12px' }}>Contraseña incorrecta</p>}
          <button
            onClick={handleLogin}
            style={{ width: '100%', padding: '12px', backgroundColor: '#ff0000', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}
          >
            Ingresar
          </button>
        </div>
      </div>
    );
  }

  // ── Vista principal ────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      {/* Header */}
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <User size={32} color="#ff0000" />
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#121e4b', margin: 0 }}>Detalle de Capacitaciones por Persona</h2>
        </div>
        <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>Información confidencial — Solo administrador</p>
      </div>

      {/* Carga de archivo */}
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '24px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#121e4b', marginBottom: '16px' }}>Cargar archivo Excel</h3>
        <div
          onClick={() => fileRef.current.click()}
          style={{
            border: '2px dashed #dee2e6', borderRadius: '12px', padding: '32px', textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff0000'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#dee2e6'}
        >
          <FileSpreadsheet size={40} color="#babcbe" style={{ marginBottom: '12px' }} />
          <p style={{ color: '#121e4b', fontWeight: '500', marginBottom: '4px' }}>
            {archivoNombre ? `✅ ${archivoNombre}` : 'Haz clic para seleccionar el archivo Excel'}
          </p>
          <p style={{ color: '#babcbe', fontSize: '13px', margin: 0 }}>Formato: .xlsx</p>
          <input ref={fileRef} type="file" accept=".xlsx" style={{ display: 'none' }} onChange={handleFile} />
        </div>
        {personas.length > 0 && (
          <div style={{ marginTop: '16px', padding: '12px 16px', backgroundColor: 'rgba(40,167,69,0.08)', borderRadius: '8px', color: '#28a745', fontSize: '14px', fontWeight: '500' }}>
            ✅ {personas.length} personas cargadas — {personas.reduce((a, p) => a + p.cursos.length, 0)} registros de capacitación
          </div>
        )}
      </div>

      {/* Filtros y lista */}
      {personas.length > 0 && (
        <>
          {/* Filtros */}
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', padding: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <Search size={18} color="#babcbe" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input
                  type="text"
                  placeholder="Buscar por nombre o cédula..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  style={{ width: '100%', padding: '10px 10px 10px 38px', border: '1px solid #dee2e6', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
              <select
                value={filtroEmpresa}
                onChange={(e) => setFiltroEmpresa(e.target.value)}
                style={{ padding: '10px', border: '1px solid #dee2e6', borderRadius: '8px', fontSize: '14px', color: '#121e4b', backgroundColor: 'white', cursor: 'pointer', outline: 'none' }}
              >
                {empresas.map((e) => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>
            <p style={{ fontSize: '13px', color: '#6c757d', marginTop: '10px', marginBottom: 0 }}>
              Mostrando <strong>{personasFiltradas.length}</strong> de <strong>{personas.length}</strong> personas
            </p>
          </div>

          {/* Lista de personas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {personasFiltradas.length === 0 ? (
              <div style={{ background: 'white', borderRadius: '12px', padding: '48px', textAlign: 'center', color: '#babcbe' }}>
                No se encontraron personas con esos filtros
              </div>
            ) : (
              personasFiltradas.map((persona) => (
                <div key={persona.cedula} style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                  {/* Fila resumen */}
                  <div
                    onClick={() => setExpandida(expandida === persona.cedula ? null : persona.cedula)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', cursor: 'pointer', borderLeft: `4px solid #ff0000` }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <User size={20} color="#ff0000" />
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: '#121e4b', margin: 0, fontSize: '15px' }}>{persona.nombre}</p>
                        <p style={{ color: '#6c757d', fontSize: '13px', margin: 0 }}>CC {persona.cedula} · {persona.cargo}</p>
                      </div>
                      <span style={{ backgroundColor: 'rgba(255,0,0,0.08)', color: '#ff0000', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: '600' }}>
                        {persona.empresa}
                      </span>
                      <span style={{ backgroundColor: 'rgba(18,30,75,0.08)', color: '#121e4b', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: '500' }}>
                        {persona.cursos.length} capacitación{persona.cursos.length !== 1 ? 'es' : ''}
                      </span>
                    </div>
                    {expandida === persona.cedula ? <ChevronUp size={20} color="#babcbe" /> : <ChevronDown size={20} color="#babcbe" />}
                  </div>

                  {/* Detalle expandido */}
                  {expandida === persona.cedula && (
                    <div style={{ borderTop: '1px solid #f1f3f5', overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#f8f9fa' }}>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: '600', color: '#121e4b', borderBottom: '1px solid #e9ecef' }}>Capacitación</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: '600', color: '#121e4b', borderBottom: '1px solid #e9ecef', whiteSpace: 'nowrap' }}>Fecha</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: '600', color: '#121e4b', borderBottom: '1px solid #e9ecef' }}>Lugar</th>
                          </tr>
                        </thead>
                        <tbody>
                          {persona.cursos.map((c, i) => (
                            <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'white' : '#f8f9fa' }}>
                              <td style={{ padding: '10px 16px', color: '#121e4b', borderBottom: '1px solid #f1f3f5' }}>{c.nombre}</td>
                              <td style={{ padding: '10px 16px', color: '#6c757d', borderBottom: '1px solid #f1f3f5', whiteSpace: 'nowrap' }}>{c.fecha}</td>
                              <td style={{ padding: '10px 16px', color: '#6c757d', borderBottom: '1px solid #f1f3f5' }}>{c.lugar}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PersonasView;
