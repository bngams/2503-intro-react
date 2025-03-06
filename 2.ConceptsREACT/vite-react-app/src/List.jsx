export function List({ users }) {
  return (
    <ul>
      { users.map(u => <li key={u.name}>{u.name}</li>) }
    </ul>
  )
}