/**
 * Ejemplo de uso del apiClient concreto para la web de NexusTech.
 * Cada recurso del negocio expone sus operaciones CRUD de forma aislada,
 * para que los componentes solo importen lo que necesitan.
 */
import { get, post, put, patch } from './apiClient.js';

/* ------------------------------ Cursos ------------------------------ */
export const cursosApi = {
  listar: () => get('/cursos'),
  obtener: (id) => get(`/cursos/${id}`),
  crear: (data) => post('/cursos', data),
  reemplazar: (id, data) => put(`/cursos/${id}`, data),
  actualizar: (id, data) => patch(`/cursos/${id}`, data),
};

/* ---------------------------- Desarrollos --------------------------- */
export const desarrollosApi = {
  listar: () => get('/desarrollos'),
  obtener: (id) => get(`/desarrollos/${id}`),
  crear: (data) => post('/desarrollos', data),
  actualizar: (id, data) => patch(`/desarrollos/${id}`, data),
};

/* ------------------------------ Contacto ---------------------------- */
export const contactoApi = {
  enviar: (payload) => post('/contacto', payload),
};

/* Uso:
import { cursosApi } from './api/index.js';
const cursos = await cursosApi.listar();
await cursosApi.actualizar(42, { precio: 349 });
*/
