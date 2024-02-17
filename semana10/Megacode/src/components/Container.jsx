export default function Container(props) {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6">
        {props.children}
    </div>
  )
}
