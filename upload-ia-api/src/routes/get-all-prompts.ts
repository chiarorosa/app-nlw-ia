import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"

// O fastify exige todos módulos de rotas sejam assíncronos
export async function getAllPromptsRoute(app: FastifyInstance) {
	app.get("/prompts", async () => {
		// Utilizando o Prisma para buscar todos os prompts
		const prompts = await prisma.prompt.findMany()

		return prompts
	})
}
