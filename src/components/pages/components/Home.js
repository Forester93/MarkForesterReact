import React from "react";

function Home() {
  return (
    <section class="home">
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">Welcome to</div>
          <div class="logo-2">
            Mark Forester's <span>Portfolio</span>
          </div>
          <div class="text-2">
            Your Main Go-to for <span class="typing"></span>
          </div>
          <div>
            <a href="#contact">
              <button>
                <i class="fas fa-pen-fancy"></i> Contact Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
