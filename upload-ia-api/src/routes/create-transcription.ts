import { FastifyInstance } from "fastify"
import { z } from "zod" // zod é um validador de esquemas de dados
import { prisma } from "../lib/prisma"

// O fastify exige todos módulos de rotas sejam assíncronos
export async function createTranscriptionRoute(app: FastifyInstance) {
	app.post("/videos/:videoId/transcription", async (request) => {
		const paramsSchema = z.object({
			videoId: z.string().uuid(),
		})

		const { videoId } = paramsSchema.parse(request.params)

		const bodySchema = z.object({
			prompt: z.string(),
		})

		const { prompt } = bodySchema.parse(request.body)

		return {
			videoId,
			prompt,
		}
	})
}
