import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function uid(value:string){return crypto.createHash("sha256").update(value).digest("hex").slice(0,16)}
export function cleanText(value:string){return value.replace(/<[^>]+>/g," ").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/\s+/g," ").trim()}
export function iso(d:Date){return d.toISOString().slice(0,10)}
export function daysBetween(start:string,end:string){const a=new Date(start+"T00:00:00Z"),b=new Date(end+"T00:00:00Z");const out:string[]=[];for(let d=a;d<=b;d.setUTCDate(d.getUTCDate()+1))out.push(iso(d));return out}
export function host(url:string){try{return new URL(url).hostname.replace(/^www\./,"")}catch{return "unknown"}}
