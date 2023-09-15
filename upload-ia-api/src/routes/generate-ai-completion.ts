import { FastifyInstance } from "fastify"
import { createReadStream } from "node:fs"
import { z } from "zod" // zod é um validador de esquemas de dados
import { prisma } from "../lib/prisma"
import { openai } from "../lib/openai"

// O fastify exige todos módulos de rotas sejam assíncronos
export async function generateAICompletionRoute(app: FastifyInstance) {
	app.post("/ai/complete", async (request) => {
		const bodySchema = z.object({
			videoId: z.string().uuid(),
			template: z.string(),
			temperature: z.number().min(0).max(1).default(0.5),
		})

		const { videoId, template, temperature } = bodySchema.parse(request.body)

		return {
			videoId,
			template,
			temperature,
		}
	})
}
