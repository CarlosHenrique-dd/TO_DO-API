import "dotenv/config"
import z from "zod"

const envSchema = z.object({
	NODE_ENV: z.enum(["dev", "test", "production"]),
	PORT: z.string().transform(Number).pipe(z.number().min(1).max(65535)),
	SALT: z.string().transform(Number)
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
	console.error("❌ Erro na validação das variáveis de ambiente")
	console.error(_env.error.format())
	throw new Error("Variáveis de ambiente inválidas")
}

const env = _env.data

export default env
