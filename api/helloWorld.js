export default function helloWorld(req, res) {
  res.status(200).json({ message: "Hola desde Vercel Functions (local)!" });
}
