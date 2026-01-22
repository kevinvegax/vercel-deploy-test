
import { useEffect, useState } from "react"

type ApiResponse = {
  message: string
}

function App() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const response = await fetch("/api/hello")
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }
        const json = (await response.json()) as ApiResponse
        setData(json)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido")
      } finally {
        setLoading(false)
      }
    }

    run()
  }, [])

  return (
    <>
      <h1>Kevin App</h1>
      {loading && <p>Cargando...</p>}
      {!loading && error && <p>Error: {error}</p>}
      {!loading && !error && <p>Respuesta: {data?.message}</p>}
    </>
  )
}

export default App
