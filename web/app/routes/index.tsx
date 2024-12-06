import { createFileRoute } from "@tanstack/react-router"
import { useAccount } from "~/lib/providers/jazz-provider"

// TODO: breaks with `useAccount must be used within a JazzProvider`
function RouteComponent() {
  const { me, logOut } = useAccount()
  return (
    <>
      <div className="container">
        <h1>You're logged in</h1>
        <p>Welcome back, {me?.profile?.name}</p>
        <button onClick={() => logOut()}>Logout</button>
      </div>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: RouteComponent,
})
