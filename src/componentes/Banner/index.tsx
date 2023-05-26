import "./Banner.css";

interface BannerProps {
  sourceImage: string;
  altText?: string;
}

const Banner = ({ sourceImage, altText }: BannerProps) => {
  return (
    <header className="banner">
      <img src={sourceImage} alt={altText} />
    </header>
  );
};

export default Banner;
