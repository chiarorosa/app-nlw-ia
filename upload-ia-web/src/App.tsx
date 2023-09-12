import { Github, FileVideo, Upload } from "lucide-react"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"

export function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="px-6 py-3 flex items-center justify-between border-b">
				<h1 className="text-xl font-bold">upload.ai</h1>

				<div className="flex items-center gap-3">
					<span className="text-sm text-muted-foreground">Desenvolvido no NLW-ia 🤖 2023</span>

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
					<div className="grid grid-rows-2 gap-4 flex-1">
						{/* Componente react Textarea */}
						<Textarea className="resize-none p-4 leading-relaxed" placeholder="Insira o prompt para a IA..." />
						<Textarea className="resize-none p-4 leading-relaxed" placeholder="Resultado gerado pela IA..." readOnly />
					</div>
					<p className="text-sm text-muted-foreground">
						Lembre-se: você pode utilizar a variável <code className="text-blue-400">{"{transcription}"}</code> no seu prompt para adicionaro contéudo da transcrição do vídeo carregado.
					</p>
				</div>

				<aside className="w-80 space-y-6">
					<form className="space-y-6">
						{/* aspect-ratio 16:9 */}
						<label
							htmlFor="video"
							className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-4 items-center justify-center text-muted-foreground hover:bg-primary/5"
						>
							<FileVideo className="w-5 h-5" />
							Selecione o vídeo
						</label>
						{/* sr-only = screen reader faz com que o elemento seja lido apenas pelo leitor de tela */}
						<input type="file" id="video" accept="video/mp4" className="sr-only" />

						<Separator />

						<div className="space-y-2">
							<Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
							<Textarea id="transcription_prompt" className="h-20 leading-relaxed resize-none" placeholder="Insira palavras-chave mencionadas no vídeo, separadas por vírgula (,)" />
						</div>

						<Button type="submit" className="w-full">
							Carregar vídeo
							<Upload className="w-5 h-5 ml-2" />
						</Button>
					</form>

					<Separator />

					<form className="space-y-6">
						<div className="space-y-2">
							<Label>Modelo</Label>
							{/* https://ui.shadcn.com/docs/components/select */}
							<Select disabled defaultValue="gpt3.5">
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
								</SelectContent>
							</Select>
							<span className="block text-xs text-muted-foreground italic">Se você assinar o plano pago da open.ai você pode customizar essa opção</span>
						</div>
					</form>
				</aside>
			</main>
		</div>
	)
}
