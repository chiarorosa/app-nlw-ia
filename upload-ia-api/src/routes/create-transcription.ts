import { FastifyInstance } from "fastify"
import { createReadStream } from "node:fs"
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

		const video = await prisma.video.findUniqueOrThrow({
			where: {
				id: videoId,
			},
		})

		const videoPath = video.path
		const audioReadStream = createReadStream(videoPath)

		return {
			videoId,
			prompt,
			videoPath,
		}
	})
}
