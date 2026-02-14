// Here is where I would import my styling and other libraries

export function Profile() {
  return (
    <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
  )
}

export function FirstComponent() {
  return (
    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Block</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  )
}

export default function Gallery() {
  return (
    <section>
      <FirstComponent />
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
