import useTheme from "../hooks/useTheme"

export default function Home() {
  const { toggleTheme } = useTheme()
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="px-5 py-2 rounded-lg border-2 bg-blue-600 text-white font-bold" onClick={toggleTheme}>Change theme</button>
    </div>
  )
}
