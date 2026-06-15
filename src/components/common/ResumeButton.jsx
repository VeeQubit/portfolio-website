function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      className="
      px-5
      py-2.5
      rounded-full
      bg-gradient-to-r
      from-pink-400
      to-violet-400
      text-white
      font-semibold
      shadow-lg
      hover:scale-105
      hover:shadow-xl
      transition
      "
    >
      Resume
    </a>
  );
}

export default ResumeButton;