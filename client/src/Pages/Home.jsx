import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import Splash from "../Components/Splash";

const Home = () => {
  const splash = [];

  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());

  useEffect(() => {
    // update logged state when the auth changes
    setLoggedIn(Auth.loggedIn());
  }, []);

  // placeholder featured data
  const featuredArt = [
    { id: 1, title: "Featured Artwork 1", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
    { id: 2, title: "Featured Artwork 2", imageUrl: "https://cdn.britannica.com/44/175344-050-267B3DF1/1A-oil-enamel-canvas-Jackson-Pollock-Museum-1948.jpg" },
    { id: 3, title: "Featured Artwork 3", imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437127/796089/restricted" },
    { id: 4, title: "Featured Artwork 4", imageUrl: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg" },
  ];

  // placeholder gallery data
  const GalleryArt = [
    { id: 1, title: "Artwork 1", imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Two_Fridas.jpg" },
    { id: 2, title: "Artwork 2", imageUrl: "https://artprep.weebly.com/uploads/2/8/4/9/28493185/2467616_orig.jpg" },
    { id: 3, title: "Artwork 3", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Warhol-Campbell_Soup-1-screenprint-1968.jpg/170px-Warhol-Campbell_Soup-1-screenprint-1968.jpg" },
    { id: 4, title: "Artwork 4", imageUrl: "https://sothebys-com.brightspotcdn.com/dims4/default/a20e86b/2147483647/strip/true/crop/450x536+0+0/resize/684x815!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot-migration.s3.amazonaws.com%2F20%2F3f%2Fe0%2F337d3e01f64e8fd933fb212088a00aef806fc9f0a9ec8e0223e0f3bb27%2Fpicasso-announcement-1.jpg" },
    { id: 5, title: "Artwork 5", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
    { id: 6, title: "Artwork 6", imageUrl: "https://cdn.britannica.com/44/175344-050-267B3DF1/1A-oil-enamel-canvas-Jackson-Pollock-Museum-1948.jpg" },
    { id: 7, title: "Artwork 7", imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437127/796089/restricted" },
    { id: 8, title: "Artwork 8", imageUrl: "https://cdn.britannica.com/10/182610-050-77811599/The-Persistence-of-Memory-canvas-collection-Salvador-1931.jpg" },
  ];

  return (
    <main>
      {loggedIn && (
        <div className="grid justify-center">
          <div className="container">
            <section className="artworks-section">
              <h2>Featured Artwork</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="artwork-list">
                {featuredArt.map((artwork) => (
                  <div key={artwork.id} className="featured-card">
                    <img src={artwork.imageUrl} alt={artwork.title} />
                    <p className="artwork-title">{artwork.title}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="artworks-section">
              <h2>Gallery</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="masonry-grid">
                {GalleryArt.map((artwork, index) => (
                  <div key={artwork.id} className={`gallery-card ${index % 3 === 0 ? 'large' : 'small'}`}>
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="h-auto max-w-full rounded-lg"
                    />
                    <p className="artwork-title">{artwork.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
      {!loggedIn && (
        <div className="col-span-3">
          <Splash splash={splash} />
        </div>
      )}
    </main>
  );
};

export default Home;
