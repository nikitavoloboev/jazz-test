import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/(landing)/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Landing page</div>
    </>
  )
}
