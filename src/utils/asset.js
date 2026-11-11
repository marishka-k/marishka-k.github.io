// Путь к файлу из public/ с учётом base
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
