import { FastifyInstance } from "fastify"
import { fastifyMultipart } from "@fastify/multipart"
import path from "node:path"
import { randomUUID } from "node:crypto"
import fs from "node:fs"
import { pipeline } from "node:stream"
import { promisify } from "node:util"
import { prisma } from "../lib/prisma"

const pump = promisify(pipeline) // Transforma o pipeline em uma promise async/await

export async function uploadVideoRoute(app: FastifyInstance) {
	app.register(fastifyMultipart, {
		limits: {
			fileSize: 1048576 * 25, // 25MB
		},
	})
	app.post("/videos", async (request, reply) => {
		const data = await request.file()

		console.log(request)

		if (!data) {
			return reply.status(400).send({ error: "Nenhum arquivo enviado." })
		}

		const extension = path.extname(data.filename)

		if (extension !== ".mp3") {
			return reply.status(400).send({ error: "Arquivo inválido." })
		}

		const fileBaseName = path.basename(data.filename, extension)
		const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`

		const uploadDestination = path.resolve(__dirname, "../../tmp", fileUploadName)

		await pump(data.file, fs.createWriteStream(uploadDestination))

		return reply.send()
	})
}