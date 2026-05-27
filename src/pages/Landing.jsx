import ScrollReveal from '../components/ScrollReveal.jsx';

export default function Landing() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-14">
        <div className="max-w-3xl w-full text-center">
          <ScrollReveal>
            <p className="section-heading text-center">// hero</p>
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Hey <span className="text-accent">Nodryx</span>
              <span className="cursor-blink"></span>
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Voice assistant berbasis Python. Local-first, offline-capable, dan sepenuhnya privat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#quickstart" className="btn-primary">
                $ pip install
              </a>
              <a href="/docs" className="btn">
                Docs &rarr;
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
              <Stat value="100%" label="Offline STT" />
              <Stat value="5" label="Skills" />
              <Stat value="ID" label="Bahasa" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="section-heading">// about</p>
            <p className="text-lg sm:text-xl text-[#CCCCCC] leading-relaxed">
              <strong className="text-[#EDEDED]">Hey Nodryx</strong> adalah asisten suara yang berjalan
              sepenuhnya di mesin kamu. Speech-to-text pakai Whisper, text-to-speech pakai Edge TTS,
              dan LLM fallback ke Sumopod + OpenRouter.
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              Dibangun dengan Python. Tidak kirim data ke cloud kecuali kamu pilih. Dirancang untuk
              developer dan pengguna harian yang peduli privasi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 border-t border-border">
        <ScrollReveal>
          <p className="section-heading">// features</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <ScrollReveal key={i}>
              <div className="card">
                <div className="font-mono text-accent text-lg mb-3">{f.icon}</div>
                <h3 className="font-mono text-sm font-semibold text-[#EDEDED] mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FLOW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 border-t border-border">
        <ScrollReveal>
          <p className="section-heading">// flow</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm min-w-max">
              <FlowStep label="🎤 Mic" accent />
              <span className="text-muted">&rarr;</span>
              <FlowStep label="STT Whisper" />
              <span className="text-muted">&rarr;</span>
              <FlowStep label="Intent Router" />
              <span className="text-muted">&rarr;</span>
              <FlowStep label="Skill / LLM" accent borderAccent />
              <span className="text-muted">&rarr;</span>
              <FlowStep label="TTS Edge" />
              <span className="text-muted">&rarr;</span>
              <FlowStep label="🔊 Speaker" accent />
            </div>
          </div>
          <p className="text-muted text-xs mt-4">
            Local commands diproses tanpa LLM. LLM hanya dipanggil saat diperlukan.
          </p>
        </ScrollReveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 border-t border-border">
        <ScrollReveal>
          <p className="section-heading">// skills</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bg-surface border border-border rounded-lg overflow-hidden">
            {skills.map((s, i) => (
              <div key={i} className="term-item px-5">
                <span className="term-prompt">&gt;</span>
                <span className="term-cmd">{s.cmd}</span>
                <span className="term-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* COMMANDS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 border-t border-border">
        <ScrollReveal>
          <p className="section-heading">// commands</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="code-block text-muted text-sm">
            $ python -m assistant.main<br />
            $ python -m assistant.main --text <span className="text-[#EDEDED]">"halo"</span> --no-speak<br />
            $ python -m assistant.main --wake-word<br />
            $ python -m assistant.main --text <span className="text-[#EDEDED]">"jam berapa"</span><br />
            $ python -m assistant.main --model base --language id --device 2<br />
            $ python -m assistant.main --tts-engine edge --edge-voice id-ID-GadisNeural
          </div>
        </ScrollReveal>
      </section>

      {/* QUICKSTART */}
      <section id="quickstart" className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 border-t border-border">
        <ScrollReveal>
          <p className="section-heading">// quickstart</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="code-block">
            <div className="text-muted mb-2"># clone &amp; setup</div>
            <div className="text-[#EDEDED]">$ git clone https://github.com/user/heynodryx</div>
            <div className="text-[#EDEDED] mt-2">$ cd heynodryx</div>
            <div className="text-muted mt-4 mb-2"># virtual environment</div>
            <div className="text-[#EDEDED]">$ python -m venv .venv</div>
            <div className="text-muted mt-1">$ .\.venv\Scripts\Activate.ps1</div>
            <div className="text-muted mt-4 mb-2"># install &amp; run</div>
            <div className="text-[#EDEDED]">$ pip install -r requirements.txt</div>
            <div className="text-[#EDEDED] mt-2">$ python -m assistant.main</div>
          </div>
          <p className="text-muted text-xs mt-3">Butuh Python 3.10+. Windows, Linux, macOS supported.</p>
        </ScrollReveal>
      </section>

      {/* ARCHITECTURE ROADMAP */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 border-t border-border">
        <ScrollReveal>
          <p className="section-heading">// architecture roadmap</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-3">
            {roadmap.map((r, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${r.dotClass} shrink-0`}></div>
                <div className="flex-1 bg-surface border border-border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <span className={`font-mono text-sm ${r.textClass}`}>{r.phase}</span>
                    <span className="text-muted text-sm ml-3">{r.label}</span>
                  </div>
                  <span className="text-xs text-muted font-mono">{r.status}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

// ── Sub-components ──

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-mono text-2xl font-bold text-accent">{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}

function FlowStep({ label, accent, borderAccent }) {
  return (
    <div
      className={`bg-surface border rounded-lg px-4 py-3 whitespace-nowrap ${
        accent ? 'text-accent' : 'text-[#EDEDED]'
      } ${borderAccent ? 'border-accent/30' : 'border-border'}`}
    >
      {label}
    </div>
  );
}

// ── Data ──

const features = [
  { icon: '🎤', title: 'Speech-to-Text', desc: 'Whisper model lokal. Dukung Bahasa Indonesia. VAD otomatis, filter noise, transkripsi real-time.' },
  { icon: '🧠', title: 'LLM Fallback', desc: 'Sumopod sebagai primary, OpenRouter sebagai backup. Auto-fallback tanpa crash.' },
  { icon: '🔊', title: 'Text-to-Speech', desc: 'Edge TTS neural voices Indonesia. Juga support pyttsx3 offline. Chunked playback.' },
  { icon: '🛠️', title: 'Local Tools', desc: 'Buka website, app, folder. Buat catatan. Cari file. Semua lewat suara, opsional konfirmasi.' },
  { icon: '🧩', title: 'Skills System', desc: 'Plugin-based skills: web search, task calendar, mahasiswa ITERA, time planner, Hermes agent.' },
  { icon: '📝', title: 'Memory', desc: 'SQLite persistent memory. Simpan fakta, profil, percakapan. Semantic keyword scoring.' },
];

const skills = [
  { cmd: 'web_search', desc: 'cari di internet — Bing HTML, tanpa API key' },
  { cmd: 'task_calendar', desc: 'kelola tugas, jadwal, reminders — local JSON' },
  { cmd: 'itera_students', desc: 'database mahasiswa ITERA — SQLite FTS5 + XLSX import' },
  { cmd: 'time_planner', desc: 'cek waktu, pengingat, timer' },
  { cmd: 'hermes_agent', desc: 'subprocess / HTTP agent untuk task kompleks' },
];

const roadmap = [
  { phase: 'Phase A', label: 'Service Layer', dotClass: 'bg-accent', textClass: 'text-accent', status: 'done' },
  { phase: 'Phase B', label: 'FastAPI Shell', dotClass: 'bg-accent', textClass: 'text-accent', status: 'done' },
  { phase: 'Phase C', label: 'AsyncIO Boundary', dotClass: 'bg-accent/50', textClass: 'text-accent/70', status: 'in progress' },
  { phase: 'Phase D', label: 'LangChain & LangGraph', dotClass: 'bg-border', textClass: 'text-muted', status: 'planned' },
  { phase: 'Phase E', label: 'Background Workers', dotClass: 'bg-border', textClass: 'text-muted', status: 'planned' },
  { phase: 'Phase F', label: 'Clients & Dashboard', dotClass: 'bg-border', textClass: 'text-muted', status: 'planned' },
];
