import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LatestPostSlider.css';


const LatestPostsSlider = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://wp1.edukacija.online/backend/wp-json/wp/v2/posts?_embed&author=6&per_page=3");
        if (!res.ok) throw new Error("Greška pri dohvaćanju postova");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) return <p>Greška: {error}</p>;
  if (!posts.length) return <p>Učitavanje...</p>;

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className="slick-carousel prvi-section">
      <Slider {...settings}>
        {posts.map((post) => (
          <div className="slide" key={post.id}>
            {/* Left column: Title and Button */}
            <div className="content-container">
              <div
                className="title"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <Link
                to={`/pivarski-blog/${post.slug}`}
                className="button brojgumb"
              >
                Pročitaj više
              </Link>
            </div>
            
            {/* Right column: Image */}
            <div className="image-container">
                <img
                  src={post._embedded["wp:featuredmedia"]?.[0]?.source_url}
                  alt={post.title.rendered}
                  className="slajd"
                />
            </div>
          </div>
        ))}
      </Slider>
    </div>
</>
  );
};

export default LatestPostsSlider;