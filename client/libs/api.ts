import type { BackendApp } from "@/server";
import { edenTreaty } from "@elysiajs/eden";

export const backendClient = edenTreaty<BackendApp>("http://localhost:3000");
