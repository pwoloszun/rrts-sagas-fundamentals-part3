const API_PORT = 3100;
const BASE_URL = `http://localhost:${API_PORT}`;

export default function getApiUrl(absolutePath: string): string {
  return `${BASE_URL}${absolutePath}`;
}
