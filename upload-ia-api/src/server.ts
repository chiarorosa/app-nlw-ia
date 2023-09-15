import { assert } from "console"
import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploadVideoRoute } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription"
import { generateAICompletionRoute } from "./routes/generate-ai-completion"

const app = fastify()

app.register(fastifyCors, {
	origin: "*", // TODO: trocar para o domínio do site
	methods: ["GET", "POST", "PUT", "DELETE"], // TODO: trocar para os métodos que serão usados
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log("Servidor HTTP rodando na porta 3333")
	})
