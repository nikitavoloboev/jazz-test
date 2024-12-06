import { createJazzReactApp } from "jazz-react"
import { useJazzClerkAuth } from "jazz-react-auth-clerk"
import { useAuth, useClerk } from "@clerk/tanstack-start"
import { useLocation } from "@tanstack/react-router"
import { AuthMethod } from "jazz-tools"

const Jazz = createJazzReactApp()

export const { useAccount, useAccountOrGuest, useCoState, useAcceptInvite } =
  Jazz

interface ChildrenProps {
  children: React.ReactNode
}

export function JazzAndAuth({ children }: ChildrenProps) {
  const { pathname } = useLocation()
  const Component = pathname === "/" ? JazzGuest : JazzAuth
  return <Component>{children}</Component>
}

export function JazzAuth({ children }: ChildrenProps) {
  const clerk = useClerk()
  const { isLoaded, isSignedIn } = useAuth()
  const [authMethod] = useJazzClerkAuth(clerk)

  if (!isLoaded) return null
  if (!isSignedIn) return <JazzGuest>{children}</JazzGuest>
  if (!authMethod) return null

  return <JazzProvider auth={authMethod}>{children}</JazzProvider>
}

export function JazzGuest({ children }: ChildrenProps) {
  return <JazzProvider auth="guest">{children}</JazzProvider>
}

function JazzProvider({
  auth,
  children,
}: {
  auth: AuthMethod | "guest"
  children: React.ReactNode
}) {
  return (
    <Jazz.Provider
      auth={auth}
      peer={"wss://cloud.jazz.tools/?key=minimal-auth-clerk-example@garden.co"}
    >
      {children}
    </Jazz.Provider>
  )
}
