export const metadata = { title: "Writing" };

export default function WritingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <header className="mb-12">
        <p className="text-sm text-ink/50 uppercase tracking-wider mb-3">Writing</p>
        <h1 className="font-display text-5xl md:text-6xl font-medium tracking-tight">
          Essays & Teardowns
        </h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Coming soon. Drop MDX files in <code className="text-sm bg-ink/5 px-1.5 py-0.5 rounded font-mono">content/writing/</code> and they'll show up here.
        </p>
      </header>
    </div>
  );
}
