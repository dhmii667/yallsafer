"use client";

export default function Particles() {

  const particles = Array.from({
    length: 25,
  });

  return (

    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[0]">

      {particles.map((_, index) => (

        <span

          key={index}

          className="absolute block rounded-full bg-white/10 animate-pulse"

          style={{

            width: `${Math.random() * 6 + 2}px`,

            height: `${Math.random() * 6 + 2}px`,

            left: `${Math.random() * 100}%`,

            top: `${Math.random() * 100}%`,

            animationDuration: `${Math.random() * 6 + 4}s`,

            opacity: Math.random() * 0.5,

          }}
        />

      ))}

    </div>
  );
}