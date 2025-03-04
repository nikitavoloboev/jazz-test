import { useAccount, useIsAuthenticated } from "jazz-react"
import { AuthButton } from "./AuthButton.tsx"
import { Form } from "./Form.tsx"
import { Logo } from "./Logo.tsx"

function App() {
  const { me } = useAccount({ profile: {}, root: {} })
  const isAuthenticated = useIsAuthenticated()

  return (
    <>
      <header>
        <nav className="container flex justify-between items-center py-3">
          {isAuthenticated ? (
            <span></span>
          ) : (
            <span>Auth to share data with another device</span>
          )}
          <AuthButton />
        </nav>
      </header>
      <main className="container mt-16 flex flex-col gap-8">
        <Logo />
        <div className="text-center">
          <pre className="text-left inline-block bg-gray-100 p-4 rounded-lg overflow-auto max-w-full">
            {JSON.stringify(me?.root, null, 2)}
          </pre>
        </div>
        <div className="text-center">
          <h1>
            Welcome{me?.profile.firstName ? <>, {me?.profile.firstName}</> : ""}
            !
          </h1>
          {!!me?.root.age && (
            <p>As of today, you are {me.root.age} years old.</p>
          )}
          {!!me?.root.bio && <p className="mt-2 italic">Bio: {me.root.bio}</p>}
        </div>
        <Form />
      </main>
    </>
  )
}

export default App
