import { Github } from "lucide-react"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"

export function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="px-6 py-3 flex items-center justify-between border-b">
				<h1 className="text-xl font-bold">upload.ai</h1>

				<div className="flex items-center gap-3">
					<span className="text-sm text-muted-foreground">
						Desenvolvido no NLW-ia 🤖 2023
					</span>

					<Separator orientation="vertical" className="h-6" />

					<Button variant="outline">
						<Github className="w-4 h-4 mr-2" />
						Github
					</Button>
				</div>
			</div>

			{/* flex-1 = ocupa todo o espaço disponível */}
			<main className="flex-1 p-6 flex gap-6">
				{/* flex-col = coluna (vertical) e flex-1 é espaço disponível subtraindo o aside*/}
				<div className="flex flex-col flex-1 gap-4">
					<div className="grid grid-rows-2 gap-4 flex-1"></div>

					<p className="text-sm text-muted-foreground">
						Lembre-se: você pode utilizar a variável{" "}
						<code className="text-blue-400">{"{transcription}"}</code> no seu
						prompt para adicionar o contéudo da transcrição do vídeo carregado.
					</p>
				</div>
				<aside className="w-80"></aside>
			</main>
		</div>
	)
}
