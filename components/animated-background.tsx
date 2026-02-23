'use client'

export default function AnimatedBackground() {
  return (
    <>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-xl bg-[#de0f3f]/15 blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-xl bg-[#de0f3f]/15 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-xl bg-[#de0f3f]/15 blur-[120px] animate-blob animation-delay-4000" />
      </div>
    </>
  )
}
