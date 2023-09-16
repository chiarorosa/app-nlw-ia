import { FileVideo, Upload } from "lucide-react"
import { Separator } from "./ui/separator"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

export function VideoInputForm() {
	return (
		<form className="space-y-6">
			{/* aspect-ratio 16:9 */}
			<label htmlFor="video" className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-4 items-center justify-center text-muted-foreground hover:bg-primary/5">
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
	)
}
