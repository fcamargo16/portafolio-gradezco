const appStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .app-container {
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  .main-content {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .app-header {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
    margin-bottom: 24px;
    border-left: 8px solid #ff0000;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .logo {
    width: 64px;
    height: 64px;
    background-color: #ff0000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .logo span {
    font-size: 36px;
    font-weight: bold;
    color: white;
  }

  .header-text h1 {
    font-size: 28px;
    font-weight: bold;
    color: #121e4b;
    margin-bottom: 4px;
  }

  .header-text p {
    font-size: 14px;
    color: #babcbe;
  }

  .btn-primary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: opacity 0.2s;
  }

  .btn-primary:hover {
    opacity: 0.9;
  }

  .navigation {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 8px;
    margin-bottom: 24px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .nav-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    background: transparent;
    color: #121e4b;
    transition: all 0.2s;
  }

  .nav-btn.active {
    background-color: #ff0000;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-btn:hover:not(.active) {
    background-color: #f8f9fa;
  }

  .dashboard-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }

  .metric-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
    border-left: 4px solid #ff0000;
  }

  .metric-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .metric-value {
    font-size: 32px;
    font-weight: bold;
    color: #121e4b;
  }

  .metric-label {
    font-size: 14px;
    font-weight: 500;
    color: #babcbe;
  }

  .divider-heart {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    gap: 16px;
  }

  .divider-line {
    flex-grow: 1;
    height: 1px;
    background-color: #babcbe;
  }

  .progress-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }

  .section-title {
    font-size: 20px;
    font-weight: 600;
    color: #121e4b;
    margin-bottom: 24px;
  }

  .section-title-large {
    font-size: 24px;
    font-weight: bold;
    color: #121e4b;
  }

  .progress-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .progress-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .progress-name {
    font-size: 14px;
    font-weight: 600;
    color: #121e4b;
  }

  .progress-percentage {
    font-size: 14px;
    font-weight: bold;
    color: #ff0000;
  }

  .progress-bar-container {
    width: 100%;
    height: 12px;
    background-color: #f1f3f5;
    border-radius: 999px;
    overflow: hidden;
  }

  .progress-bar {
    height: 100%;
    background-color: #ff0000;
    border-radius: 999px;
    transition: width 0.5s ease;
  }

  .cursos-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .filters-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
  }

  .filters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .filters-grid-cronograma {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }

  .no-results {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 48px 24px;
    text-align: center;
  }

  .no-results p {
    color: #babcbe;
    font-size: 16px;
  }

  .search-container {
    position: relative;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .search-input {
    width: 100%;
    padding: 10px 10px 10px 40px;
    border: 1px solid #babcbe;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
  }

  .search-input:focus {
    border-color: #ff0000;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.1);
  }

  .filter-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #babcbe;
    border-radius: 8px;
    font-size: 14px;
    color: #121e4b;
    background-color: white;
    cursor: pointer;
    outline: none;
  }

  .filter-select:focus {
    border-color: #ff0000;
    box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.1);
  }

  .courses-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .course-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
    border-left: 4px solid #ff0000;
    transition: box-shadow 0.2s;
  }

  .course-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .course-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    gap: 16px;
  }

  .course-info {
    flex: 1;
  }

  .course-title {
    font-size: 18px;
    font-weight: 600;
    color: #121e4b;
    margin-bottom: 12px;
  }

  .course-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
  }

  .tag-un {
    background-color: rgba(255, 0, 0, 0.1);
    color: #ff0000;
  }

  .tag-modalidad {
    background-color: rgba(18, 30, 75, 0.1);
    color: #121e4b;
  }

  .tag-tipo {
    background-color: rgba(186, 188, 190, 0.3);
    color: #121e4b;
  }

  .tag-reinduccion {
    background-color: rgba(255, 0, 0, 0.1);
    color: #ff0000;
  }

  .course-percentage {
    font-size: 24px;
    font-weight: bold;
    color: #ff0000;
    flex-shrink: 0;
  }

  .course-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 12px;
  }

  .stat {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #121e4b;
  }

  .evidencias-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .info-box {
    padding: 16px;
    background-color: rgba(18, 30, 75, 0.05);
    border-left: 4px solid #121e4b;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  .info-box p {
    font-size: 14px;
    color: #121e4b;
    line-height: 1.6;
  }

  .upload-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .upload-area {
    border: 2px dashed #babcbe;
    border-radius: 12px;
    padding: 48px 32px;
    text-align: center;
    transition: border-color 0.2s;
  }

  .upload-area:hover {
    border-color: #ff0000;
  }

  .upload-text {
    color: #121e4b;
    margin: 16px 0;
    font-size: 16px;
  }

  .file-input {
    display: none;
  }

  .file-selected {
    margin-top: 12px;
    padding: 12px;
    background-color: rgba(255, 0, 0, 0.05);
    border-radius: 8px;
    color: #121e4b;
    font-size: 14px;
  }

  .evidencias-list {
    margin-top: 24px;
  }

  .evidencia-item {
    background: white;
    border: 1px solid #babcbe;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.2s;
  }

  .evidencia-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .evidencia-info h4 {
    color: #121e4b;
    margin-bottom: 4px;
    font-size: 16px;
  }

  .evidencia-meta {
    display: flex;
    gap: 16px;
    font-size: 13px;
    color: #babcbe;
  }

  .btn-delete {
    background-color: transparent;
    border: 1px solid #ff0000;
    color: #ff0000;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
  }

  .btn-delete:hover {
    background-color: #ff0000;
    color: white;
  }

  .evidence-types {
    border: 1px solid #babcbe;
    border-radius: 12px;
    padding: 20px;
  }

  .evidence-title {
    font-weight: 600;
    color: #121e4b;
    margin-bottom: 16px;
  }

  .evidence-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .evidence-list li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #121e4b;
  }

  .competencias-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .competencias-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }

  .competencias-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .competencia-item {
    border: 1px solid #babcbe;
    border-radius: 12px;
    padding: 20px;
  }

  .competencia-name {
    font-weight: 600;
    color: #121e4b;
    margin-bottom: 16px;
  }

  .competencia-progress {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .competencia-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .competencia-label {
    font-size: 14px;
    color: #babcbe;
  }

  .competencia-value {
    font-weight: bold;
    color: #ff0000;
  }

  .competencia-info {
    font-size: 14px;
    color: #babcbe;
    margin-top: 8px;
  }

  .matriz-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }

  .table-container {
    overflow-x: auto;
  }

  .competencias-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  .competencias-table thead {
    background-color: rgba(186, 188, 190, 0.2);
  }

  .competencias-table th {
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    color: #121e4b;
  }

  .competencias-table td {
    padding: 12px 16px;
    border-bottom: 1px solid #e9ecef;
  }

  .competencias-table tbody tr:hover {
    background-color: #f8f9fa;
  }

  .area-name {
    font-weight: 500;
    color: #121e4b;
  }

  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
  }

  .badge-high {
    background-color: rgba(255, 0, 0, 0.1);
    color: #ff0000;
  }

  .badge-medium {
    background-color: rgba(186, 188, 190, 0.3);
    color: #121e4b;
  }

  .badge-low {
    background-color: rgba(186, 188, 190, 0.5);
    color: #121e4b;
  }

  .app-footer {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #babcbe;
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }

  .logo-small {
    width: 40px;
    height: 40px;
    background-color: #ff0000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-small span {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }

  .footer-content span {
    font-size: 14px;
    font-weight: 500;
    color: #121e4b;
  }

  .cronograma-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .cronograma-header-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }

  .cronograma-subtitle {
    color: #babcbe;
    margin-top: 8px;
    font-size: 15px;
  }

  .mes-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
    border-left: 6px solid #ff0000;
  }

  .mes-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 2px solid #f1f3f5;
  }

  .mes-badge {
    font-size: 24px;
    font-weight: bold;
    color: #121e4b;
    text-transform: capitalize;
  }

  .mes-count {
    background-color: rgba(255, 0, 0, 0.1);
    color: #ff0000;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
  }

  .cursos-mes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 16px;
  }

  .cronograma-card {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 20px;
    transition: all 0.2s;
  }

  .cronograma-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: #ff0000;
  }

  .cronograma-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
  }

  .cronograma-curso-title {
    font-size: 16px;
    font-weight: 600;
    color: #121e4b;
    line-height: 1.4;
    flex: 1;
  }

  .cronograma-tags {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  }

  .cronograma-descripcion {
    color: #6c757d;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .cronograma-footer {
    display: flex;
    justify-content: flex-start;
  }

  .indicadores-section {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }

  .indicadores-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .indicador-card {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    border-left: 4px solid #ff0000;
    transition: all 0.3s;
  }

  .indicador-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .indicador-header {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .indicador-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .indicador-info {
    flex: 1;
  }

  .indicador-titulo {
    font-size: 16px;
    font-weight: 600;
    color: #121e4b;
    margin-bottom: 4px;
  }

  .indicador-descripcion {
    font-size: 13px;
    color: #6c757d;
  }

  .indicador-valor-principal {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 12px;
  }

  .indicador-numero {
    font-size: 32px;
    font-weight: bold;
    color: #121e4b;
  }

  .indicador-meta {
    font-size: 13px;
    color: #6c757d;
    font-weight: 500;
  }

  .indicador-progress {
    margin-bottom: 12px;
  }

  .progress-bar-indicador {
    height: 100%;
    border-radius: 999px;
    transition: width 0.5s ease;
  }

  .indicador-stats {
    margin-top: 8px;
    font-size: 13px;
    color: #6c757d;
  }

  .stats-row {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    font-size: 13px;
  }

  .stats-label {
    color: #6c757d;
  }

  .stats-value {
    font-weight: 600;
    color: #121e4b;
  }

  .indicador-detalle-un {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .un-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 8px;
    background: white;
    border-radius: 6px;
    font-size: 13px;
  }

  .un-nombre {
    color: #121e4b;
    font-weight: 500;
  }

  .un-porcentaje {
    font-weight: 700;
    color: #ff0000;
  }

  .indicador-status {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    width: fit-content;
  }

  .indicador-status-cumple {
    background-color: rgba(0, 255, 0, 0.1);
    color: #28a745;
  }

  .indicador-status-pendiente {
    background-color: rgba(255, 165, 0, 0.1);
    color: #ff8800;
  }

  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .metrics-grid {
      grid-template-columns: 1fr;
    }
    
    .competencias-grid {
      grid-template-columns: 1fr;
    }
    
    .filters-grid {
      grid-template-columns: 1fr;
    }

    .filters-grid-cronograma {
      grid-template-columns: 1fr;
    }
  }
`;

export default appStyles;
