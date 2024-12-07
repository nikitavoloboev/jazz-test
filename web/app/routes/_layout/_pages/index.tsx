import { SignInButton } from "@clerk/tanstack-start"
import { createFileRoute } from "@tanstack/react-router"

function RouteComponent() {
  return (
    <>
      <div>Landing page</div>
      <SignInButton mode="modal">
        <button>Sign in</button>
      </SignInButton>
    </>
  )
}

export const Route = createFileRoute("/_layout/_pages/")({
  component: RouteComponent,
})
