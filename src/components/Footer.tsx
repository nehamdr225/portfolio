import BackToTop from "@/components/BackToTop";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <BackToTop />
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Neha Manandhar. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["LinkedIn", "GitHub", "Dribbble"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-text-muted text-sm hover:text-text transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
