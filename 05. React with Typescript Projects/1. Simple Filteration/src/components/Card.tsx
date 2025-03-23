interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}
const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <a href={link} className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
