import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasCommonElements<T>(arr1: T[], arr2: T[]): boolean {
  const [shorter, longer] =
    arr1.length < arr2?.length ? [arr1, arr2] : [arr2, arr1];
  const set = new Set<T>(shorter);
  return longer.some((element) => set.has(element));
}
