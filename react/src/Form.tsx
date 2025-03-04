import { useAccount } from "jazz-react"

export function Form() {
  const { me } = useAccount({ profile: {}, root: {} })
  if (!me) return null

  return (
    <div className="grid gap-4 border p-8">
      <div className="flex items-center gap-3">
        <label htmlFor="firstName" className="sm:w-32">
          First name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name here..."
          className="border border-stone-300 rounded shadow-sm py-1 px-2 flex-1"
          value={me.profile.firstName || ""}
          onChange={(e) => (me.profile.firstName = e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="dateOfBirth" className="sm:w-32">
          Date of birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          className="border border-stone-300 rounded shadow-sm py-1 px-2 flex-1"
          value={me.root.dateOfBirth?.toISOString().split("T")[0] || ""}
          onChange={(e) => (me.root.dateOfBirth = new Date(e.target.value))}
        />
      </div>
      <div className="flex items-start gap-3">
        <label htmlFor="bio" className="sm:w-32">
          Bio
        </label>
        <textarea
          id="bio"
          placeholder="Tell us about yourself..."
          className="border border-stone-300 rounded shadow-sm py-1 px-2 flex-1 min-h-[100px]"
          value={me.root.bio || ""}
          onChange={(e) => (me.root.bio = e.target.value)}
        />
      </div>
    </div>
  )
}
