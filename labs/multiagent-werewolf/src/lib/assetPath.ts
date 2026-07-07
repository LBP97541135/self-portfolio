const baseUrl = import.meta.env.BASE_URL || "/";

export function publicAssetPath(path: string): string {
  const cleanPath = path.replace(/^\/+/, "");
  if (baseUrl === "./" || baseUrl === "") return `./${cleanPath}`;
  return `${baseUrl.replace(/\/$/, "")}/${cleanPath}`;
}
