import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hi there! 🖖 &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Cipi</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
