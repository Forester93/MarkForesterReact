import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Welcome to</div>
          <div className="logo-2">
            Mark Forester's <span>Portfolio</span>
          </div>
          <div className="text-2">
            Your Main Go-to for{" "}
            <span className="typing">
              <Typewriter
                options={{
                  strings: [
                    "High-quality Dev Solutions",
                    "Efficient Team Management",
                    "Wide-network Talent Sourcing",
                    "Great Client Relationships",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div>
            <a href="#contact">
              <button>
                <i className="fas fa-pen-fancy"></i> Contact Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
