interface CardProps {
  title: string;
  imageUrl?: string;
  description: string;
}

export default function Card(
  { title, imageUrl, description }: CardProps
) {
  return (
    <div className="card">
      <h1 className="title-position title">{title}</h1>
      {Boolean(imageUrl) &&
        <img className="image-position image" src={imageUrl} />
      }
      <p className="description">{description}</p>
    </div>
  )
}
