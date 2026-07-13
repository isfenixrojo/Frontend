/**
 * Cliente HTTP base para conectar con una API REST.
 * Centraliza la configuración (baseURL, headers, manejo de errores)
 * y expone funciones para GET, POST, PUT y PATCH.
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://api.nexustech.com/v1';
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

/**
 * Wrapper sobre fetch con manejo de errores y parseo JSON.
 * @param {string} endpoint - Ruta relativa (sin la baseURL), p.ej. '/cursos'
 * @param {RequestInit} options - Opciones nativas de fetch
 * @returns {Promise<any>} Cuerpo de la respuesta en JSON
 * @throws {Error} Si la respuesta no es OK (status >= 400)
 */
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const config = {
    ...options,
    headers: {
      ...DEFAULT_HEADERS,
      ...(options.headers ?? {}),
    },
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    let detail = '';
    try {
      detail = await response.text();
    } catch {
      detail = response.statusText;
    }
    throw new ApiError(`Petición fallida a ${endpoint}`, response.status, detail);
  }

  // 204 No Content no tiene cuerpo
  if (response.status === 204) return null;

  return response.json();
}

/** Error personalizado que incluye el status HTTP. */
export class ApiError extends Error {
  constructor(message, status, detail) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.detail = detail;
  }
}

/** GET - obtener uno o varios recursos. */
export function get(endpoint, options = {}) {
  return request(endpoint, { method: 'GET', ...options });
}

/** POST - crear un recurso. `body` debe ser un objeto serializable. */
export function post(endpoint, body, options = {}) {
  return request(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    ...options,
  });
}

/** PUT - reemplazar un recurso por completo. */
export function put(endpoint, body, options = {}) {
  return request(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
    ...options,
  });
}

/** PATCH - actualizar parcialmente un recurso. */
export function patch(endpoint, body, options = {}) {
  return request(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(body),
    ...options,
  });
}

export const apiClient = { get, post, put, patch };
export default apiClient;
