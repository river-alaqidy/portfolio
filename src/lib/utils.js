import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// take multiple class strings and merges them into one clean string, resolving any Tailwind conflicts 
// example cn("p-4 bg-red-500", "bg-blue-500") --> "p-4 bg-blue-500"  (conflict resolved, last wins)
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}