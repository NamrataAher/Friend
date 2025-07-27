import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Friend = () => {
  const showSurprise = () => {
    alert("Friendship like yours makes the world a beautiful place! 🌍💗");
  };

  return (
    <div
      className="bg-light min-vh-100 py-5 position-relative"
      style={{
        fontFamily: "Roboto, sans-serif",
        background: "linear-gradient(to bottom right, #f8bbd0, #bbdefb)",
      }}
    >
      {/* Background Music */}
      <audio autoPlay loop>
        <source src="your-music-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Hearts */}
      {["💖", "💕", "💓", "💗", "💘"].map((heart, index) => (
        <div
          key={index}
          className={`position-absolute text-danger fs-4 animate-float delay-${index}`}
          style={{ left: `${10 + index * 20}%` }}
        >
          {heart}
        </div>
      ))}

      {/* Card Container */}
      <div className="container bg-white rounded-4 shadow-lg p-5">
        <h1
          className="text-center mb-5"
          style={{
            fontFamily: "Pacifico, cursive",
            color: "#d81b60",
            textShadow: "2px 2px 6px #ffccbc",
          }}
        >
          Namrata & Bushra's Bond 🌸👯‍♀️💫
        </h1>

        {/* Images */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-5 mb-3">
            <div className="card border-0 shadow-sm rounded-4">
              <img src="https://i.postimg.cc/k5XQx8bT/girl.jpg" alt="Friends laughing" className="card-img-top rounded-4" />
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="card border-0 shadow-sm rounded-4">
              <img src="https://i.postimg.cc/Gp2DBCWN/6b093491-b84a-47b3-a918-8c9457797b6c.jpg" alt="Together forever" className="card-img-top rounded-4" />
            </div>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="fs-6 lh-lg text-justify">
          <p>
            🌟 Bushra and Namrata share a friendship that is heartwarming and inspiring. Their bond is full of trust, laughter 😂,
            and unconditional support. From day one, their connection felt like magic ✨—like soul sisters who had known each other forever.
          </p>

          <p>
            🎒 They met in school while sitting together in a boring class 😴. What began as casual chats turned into endless jokes,
            secrets 🤫, and unforgettable memories. Through heartbreaks 💔, achievements 🏆, and tough exams 📚—they were each other's anchor ⚓.
          </p>

          <p>
            👩‍🦰 Bushra is calm, wise, and a great listener. She radiates warmth and comfort 🤗. Namrata is bold, energetic 🔥, and always
            ready to defend her bestie. Together, they are the perfect blend—like chai ☕ and pakoras 🥟 on a rainy day!
          </p>

          <p>
            🎉 Whether it’s surprise celebrations 🥳, midnight calls 📞, or crazy dance-offs 💃—they know how to have fun. Even in fights 😤,
            they talk it out, forgive, and come back stronger 💪. No ego. Just love.
          </p>

          <p>
            💌 Their friendship is like a diary written with invisible ink—full of feelings, unspoken promises, and shared dreams 🌈.
            They understand each other with just a glance 👀. And no matter how much time passes, their bond stays golden 💛.
          </p>
        </div>

        {/* Quote */}
        <div className="text-center border-top border-2 pt-4 mt-5">
          <blockquote className="blockquote">
            <em className="text-secondary fs-5">
              "True friendship isn’t about being inseparable, it’s about being separated and nothing changes." 🌍💖
            </em>
          </blockquote>
        </div>

        {/* Surprise Button */}
        <div className="text-center mt-4">
          <button className="btn btn-danger px-4 py-2 rounded-pill fw-bold shadow" onClick={showSurprise}>
            Click for a Surprise! 🎁
          </button>
        </div>

        {/* Emojis */}
        <div className="text-center fs-3 mt-5">👭💫🌈💞🎶✨</div>

        {/* Signature */}
        <div
          className="text-end fw-bold mt-4"
          style={{ fontFamily: "Pacifico, cursive", color: "#ab47bc" }}
        >
          — Made with love by Namrata & Bushra 💌
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }

        .animate-float {
          animation: floatUp 6s infinite ease-in-out;
          pointer-events: none;
        }

        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 1s; }
        .delay-2 { animation-delay: 2s; }
        .delay-3 { animation-delay: 3s; }
        .delay-4 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Friend;
