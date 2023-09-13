import { assert } from "console"
import { fastify } from "fastify"
import { prisma } from "./lib/prisma"

const app = fastify()

app.get("/prompts", async () => {
	// Utilizando o Prisma para buscar todos os prompts
	const prompts = await prisma.prompt.findMany()

	return prompts
})

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("Servidor HTTP rodando na porta 3333")
	})
