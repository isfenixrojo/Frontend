/**
 * Punto de entrada principal de la aplicación (JavaScript del lado cliente).
 * Importa estilos, registra los módulos de UI y deja listo el apiClient.
 */
import '../css/main.css';
import { initMobileMenu, initResponsiveCleanup } from './utils/dom.js';

// UI / interacciones
initMobileMenu();
initResponsiveCleanup();

// El apiClient queda disponible para los componentes que lo requieran.
// import { cursosApi } from './api/index.js';
