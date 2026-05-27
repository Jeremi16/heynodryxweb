import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../components/CodeBlock.jsx';
import useScrollSpy from '../hooks/useScrollSpy.js';

// ── Sidebar config ──
const sidebar = [
  { section: 'getting started', links: [
    { id: 'overview', label: 'Overview' },
    { id: 'installation', label: 'Installation' },
    { id: 'configuration', label: 'Configuration' },
  ]},
  { section: 'usage', links: [
    { id: 'commands', label: 'Commands' },
    { id: 'speech-to-text', label: 'Speech-to-Text' },
    { id: 'text-to-speech', label: 'Text-to-Speech' },
    { id: 'llm-fallback', label: 'LLM Fallback' },
    { id: 'wake-word', label: 'Wake Word' },
  ]},
  { section: 'skills', links: [
    { id: 'skills-web-search', label: 'web_search' },
    { id: 'skills-task-calendar', label: 'task_calendar' },
    { id: 'skills-itera-students', label: 'itera_students' },
    { id: 'skills-time-planner', label: 'time_planner' },
    { id: 'skills-hermes-agent', label: 'hermes_agent' },
  ]},
  { section: 'features', links: [
    { id: 'memory', label: 'Memory' },
    { id: 'local-tools', label: 'Local Tools' },
    { id: 'gui', label: 'GUI' },
  ]},
  { section: 'advanced', links: [
    { id: 'fastapi', label: 'FastAPI Runtime' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'project-structure', label: 'Project Structure' },
  ]},
];

// Collect all heading IDs for scroll spy
const allIds = sidebar.flatMap((g) => g.links.map((l) => l.id));

const headingIds = [
  ...allIds,
  'skills-web-search', 'skills-task-calendar', 'skills-itera-students',
  'skills-time-planner', 'skills-hermes-agent',
];

export default function Docs() {
  const activeId = useScrollSpy(headingIds);

  return (
    <div className="max-w-6xl mx-auto docs-layout pt-14">

      {/* SIDEBAR */}
      <aside className="hidden md:block border-r border-border pt-8 pb-16 px-6 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
        {sidebar.map((group) => (
          <div key={group.section}>
            <p className="sidebar-section">{group.section}</p>
            {group.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`sidebar-link ${
                  activeId === link.id ? 'text-accent' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </aside>

      {/* CONTENT */}
      <main className="docs-content pt-8 pb-32 px-4 sm:px-8 lg:px-12 max-w-none overflow-x-hidden">
        <Overview />
        <Installation />
        <Configuration />
        <Commands />
        <SpeechToText />
        <TextToSpeech />
        <LlmFallback />
        <WakeWord />
        <SkillsSection />
        <Memory />
        <LocalTools />
        <GuiSection />
        <Fastapi />
        <Architecture />
        <ProjectStructure />
      </main>
    </div>
  );
}

// ── Section components ──

function H2({ id, children }) {
  return <h2 id={id}>// {children}</h2>;
}

function H3({ children }) {
  return <h3>{children}</h3>;
}

function P({ children }) {
  return <p>{children}</p>;
}

function Ul({ items }) {
  return <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
}

function InlineCode({ children }) {
  return <code>{children}</code>;
}

function Overview() {
  return (
    <>
      <H2 id="overview">overview</H2>
      <P>
        <strong>Hey Nodryx</strong> adalah asisten suara berbasis Python yang berjalan sepenuhnya di mesin lokal.
        Dirancang untuk developer dan pengguna harian yang peduli privasi, asisten ini memproses suara kamu
        menggunakan Whisper, memahami perintah, dan merespon menggunakan text-to-speech neural.
      </P>
      <Ul items={[
        <>Speech-to-text lokal dengan <InlineCode>Whisper</InlineCode> (model base/small)</>,
        <>Text-to-speech dengan <InlineCode>Edge TTS</InlineCode> (neural voices Indonesia) atau <InlineCode>pyttsx3</InlineCode> offline</>,
        <>LLM fallback ke <InlineCode>Sumopod</InlineCode> (primary) + <InlineCode>OpenRouter</InlineCode> (backup)</>,
        'Skills plugin system: web search, task calendar, mahasiswa ITERA, time planner, Hermes agent',
        'Local tools: buka website, app, folder, buat catatan, cari file',
        'SQLite persistent memory dengan semantic keyword scoring',
        'Wake word detection, GUI dashboard, dan FastAPI runtime',
      ]} />
    </>
  );
}

function Installation() {
  return (
    <>
      <H2 id="installation">installation</H2>
      <H3>Prerequisites</H3>
      <Ul items={['Python 3.10+', 'Windows, Linux, atau macOS', 'Microphone (untuk mode suara)']} />
      <H3>Clone & Setup</H3>
      <CodeBlock>{`git clone https://github.com/user/heynodryx
cd heynodryx`}</CodeBlock>
      <H3>Virtual Environment</H3>
      <CodeBlock>{`python -m venv .venv

# Windows
.\\.venv\\Scripts\\Activate.ps1

# Linux / macOS
source .venv/bin/activate`}</CodeBlock>
      <H3>Install Dependencies</H3>
      <CodeBlock>{`pip install --upgrade pip
pip install -r requirements.txt`}</CodeBlock>
      <H3>Download Whisper Model</H3>
      <P>Jalankan sekali untuk cache model secara offline:</P>
      <CodeBlock>python -c "import whisper; whisper.load_model('base')"</CodeBlock>
      <P>Untuk transkripsi Bahasa Indonesia yang lebih akurat, gunakan model <InlineCode>small</InlineCode>:</P>
      <CodeBlock>python -c "import whisper; whisper.load_model('small')"</CodeBlock>
      <H3>Setup Environment</H3>
      <CodeBlock>cp .env.example .env</CodeBlock>
      <P>Edit <InlineCode>.env</InlineCode> dengan API key kamu:</P>
      <CodeBlock>{`SUMOPOD_API_KEY=your_key_here
SUMOPOD_MODEL=MiniMax-M2.7-highspeed
SUMOPOD_BASE_URL=https://ai.sumopod.com/v1
OPENROUTER_API_KEY=your_key_here
OPENROUTER_MODEL=google/gemma-4-31b-it:free
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_FALLBACK_MODEL=nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free`}</CodeBlock>
    </>
  );
}

function Configuration() {
  return (
    <>
      <H2 id="configuration">configuration</H2>
      <P>Runtime defaults disimpan di <InlineCode>config/assistant.json</InlineCode>. Buat dengan perintah:</P>
      <CodeBlock>python -m assistant.main --init-config</CodeBlock>
      <P>Contoh konfigurasi:</P>
      <CodeBlock>{`{
  "assistant_name": "Jarvis",
  "mic_device": 2,
  "stt_model": "base",
  "language": "id",
  "tts_engine": "edge",
  "edge_voice": "id-ID-GadisNeural",
  "wake_word_enabled": false,
  "enabled_skills": [
    "time_planner",
    "itera_students",
    "web_search",
    "task_calendar",
    "hermes_agent"
  ],
  "skill_confirmation_enabled": true,
  "web_search_provider": "bing",
  "web_search_max_results": 5,
  "llm_intent_rewrite_enabled": true,
  "llm_intent_rewrite_min_confidence": 0.65,
  "memory_enabled": true
}`}</CodeBlock>
    </>
  );
}

function Commands() {
  return (
    <>
      <H2 id="commands">commands</H2>
      <H3>Basic Commands</H3>
      <Ul items={[
        <><InlineCode>"halo"</InlineCode> — respon <em>Halo, ada yang bisa saya bantu?</em></>,
        <><InlineCode>"jam berapa"</InlineCode> — waktu lokal saat ini</>,
        <><InlineCode>"berhenti"</InlineCode>, <InlineCode>"keluar"</InlineCode>, <InlineCode>"matikan assistant"</InlineCode> — stop asisten</>,
      ]} />
      <H3>Run Modes</H3>
      <CodeBlock>{`# Continuous listening (default)
python -m assistant.main

# Listen once and exit
python -m assistant.main --once

# With config file
python -m assistant.main --config config/assistant.json

# Text mode (no mic)
python -m assistant.main --text "jam berapa" --no-speak`}</CodeBlock>
      <H3>Recommended Runs</H3>
      <CodeBlock>{`# Balanced (Indonesian)
python -m assistant.main --model base --language id --device 2 --tts-engine edge --edge-voice id-ID-GadisNeural

# Higher accuracy
python -m assistant.main --model small --language id --device 2 --duration 15 --vad-silence 1.8 --tts-engine edge --edge-voice id-ID-GadisNeural`}</CodeBlock>
    </>
  );
}

function SpeechToText() {
  return (
    <>
      <H2 id="speech-to-text">speech-to-text</H2>
      <P>STT menggunakan Whisper dengan default Bahasa Indonesia (<InlineCode>--language id</InlineCode>). Voice Activity Detection (VAD) aktif secara default untuk mendeteksi kapan kamu selesai bicara.</P>
      <H3>VAD Tuning</H3>
      <P>Jika suara terpotong:</P>
      <CodeBlock>python -m assistant.main --device 2 --duration 18 --vad-silence 2.0 --vad-min-duration 1.0</CodeBlock>
      <P>Jika mikrofon terlalu pelan:</P>
      <CodeBlock>python -m assistant.main --device 2 --vad-start-threshold 0.004 --vad-stop-threshold 0.0025</CodeBlock>
      <P>Jika asisten mendengar kata saat kamu diam:</P>
      <CodeBlock>python -m assistant.main --device 2 --debug-audio --once</CodeBlock>
      <P>Untuk ruangan berisik:</P>
      <CodeBlock>python -m assistant.main --device 2 --vad-start-threshold 0.008 --audio-min-peak 0.01 --audio-min-rms 0.002</CodeBlock>
      <P>Disable VAD:</P>
      <CodeBlock>python -m assistant.main --no-vad --duration 8</CodeBlock>
    </>
  );
}

function TextToSpeech() {
  return (
    <>
      <H2 id="text-to-speech">text-to-speech</H2>
      <P>Dua engine tersedia:</P>
      <Ul items={[
        <><InlineCode>pyttsx3</InlineCode> — offline, pakai Windows voices lokal</>,
        <><InlineCode>edge</InlineCode> — online, Microsoft Edge neural voices (lebih baik untuk Bahasa Indonesia)</>,
      ]} />
      <H3>List Voices</H3>
      <CodeBlock>{`# Local Windows voices
python -m assistant.main --list-voices

# Edge Indonesian voices
python -m assistant.main --list-edge-voices --voice-locale id-ID`}</CodeBlock>
      <H3>Test TTS</H3>
      <CodeBlock>{`# Test without microphone
python -m assistant.main --say "Halo, ada yang bisa saya bantu?"

# Choose specific voice
python -m assistant.main --voice 1 --say "Halo, ini suara assistant."

# Indonesian Edge TTS
python -m assistant.main --tts-engine edge --edge-voice id-ID-GadisNeural --say "Halo, ada yang bisa saya bantu?"

# Male Indonesian voice
python -m assistant.main --tts-engine edge --edge-voice id-ID-ArdiNeural --say "Halo"`}</CodeBlock>
      <H3>TTS Tuning</H3>
      <CodeBlock>{`# Speed and volume
python -m assistant.main --rate 160 --volume 0.9 --say "Halo, ini lebih pelan."

# Edge voice style
python -m assistant.main --tts-engine edge --edge-rate=-10% --edge-volume=+0% --edge-pitch=+0Hz --say "Suara custom"

# Chunked playback for interruption
python -m assistant.main --tts-engine edge --tts-chunked --tts-chunk-max-chars 180

# Playback timeout
python -m assistant.main --tts-engine edge --tts-playback-timeout 30 --say "Tes suara."`}</CodeBlock>
    </>
  );
}

function LlmFallback() {
  return (
    <>
      <H2 id="llm-fallback">llm fallback</H2>
      <P>Asisten memproses perintah lokal terlebih dahulu. Jika transkrip tidak cocok dengan perintah lokal, LLM dipanggil untuk memperbaiki kemungkinan kesalahan STT dan mencoba ulang.</P>
      <H3>Transcript Repair</H3>
      <P>Contoh: STT mendengar <InlineCode>"jem berapah"</InlineCode>, LLM repair menginterpretasi sebagai <InlineCode>"jam berapa"</InlineCode>, lalu perintah jam lokal dijalankan tanpa menggunakan LLM response.</P>
      <H3>Test LLM</H3>
      <CodeBlock>{`# Text mode, no TTS
python -m assistant.main --text "apa itu API" --no-speak

# Full flow with Indonesian TTS
python -m assistant.main --text "beri saya ide konten Instagram" --tts-engine edge --edge-voice id-ID-GadisNeural

# Disable LLM entirely
python -m assistant.main --no-llm`}</CodeBlock>
      <H3>LLM Control</H3>
      <CodeBlock>{`# Disable streaming
python -m assistant.main --no-llm-stream

# Disable transcript repair only
python -m assistant.main --no-llm-intent-rewrite

# Raise repair confidence threshold
python -m assistant.main --llm-intent-rewrite-min-confidence 0.8`}</CodeBlock>
    </>
  );
}

function WakeWord() {
  return (
    <>
      <H2 id="wake-word">wake word</H2>
      <CodeBlock>python -m assistant.main --wake-word</CodeBlock>
      <P>Ucapkan:</P>
      <Ul items={[
        <><InlineCode>"hey jarvis"</InlineCode> — aktivasi asisten</>,
        <><InlineCode>"hey jarvis jam berapa"</InlineCode> — aktivasi + perintah langsung</>,
      ]} />
      <P>Setelah wake word terdeteksi, perintah lanjutan diterima dalam window waktu singkat.</P>
    </>
  );
}

function SkillsSection() {
  return (
    <>
      <H2 id="skills-web-search">skills</H2>

      <H3>web_search</H3>
      <P>Mencari di internet menggunakan Bing HTML (tanpa API key). Hanya berjalan untuk trigger eksplisit atau setelah konfirmasi skill.</P>
      <CodeBlock>{`# Explicit search
python -m assistant.main --text "cari web vegetarian" --no-speak
python -m assistant.main --text "berita terbaru OpenAI" --no-speak
python -m assistant.main --text "cari di internet dokumentasi faster whisper" --no-speak

# Tune results
python -m assistant.main --web-search-max-results 3 --web-search-timeout 8

# Switch provider
python -m assistant.main --web-search-provider duckduckgo`}</CodeBlock>

      <h3 id="skills-task-calendar">task_calendar</h3>
      <P>Mock lokal berbasis JSON untuk integrasi Google Classroom, Calendar, dan Moodle di masa depan.</P>
      <CodeBlock>{`python -m assistant.main --text "cek tugas saya" --no-speak --no-llm
python -m assistant.main --text "lihat jadwal" --no-speak --no-llm`}</CodeBlock>
      <P>Data path: <InlineCode>data/tasks.json</InlineCode>. Fallback ke <InlineCode>config/tasks.example.json</InlineCode>.</P>

      <h3 id="skills-itera-students">itera_students</h3>
      <P>Database mahasiswa ITERA lokal dengan SQLite FTS5. Bisa seed dari file XLSX.</P>
      <CodeBlock>{`# Import from XLSX
python -m assistant.main --text "import mahasiswa" --no-speak --no-llm

# Search by NIM
python -m assistant.main --text "mahasiswa nim 119120001" --no-speak --no-llm

# Search by name & program
python -m assistant.main --text "cari mahasiswa budi informatika" --no-speak --no-llm

# Statistics
python -m assistant.main --text "statistik mahasiswa" --no-speak --no-llm`}</CodeBlock>
      <P>Storage: <InlineCode>data/itera_students/itera_students.db</InlineCode></P>

      <h3 id="skills-time-planner">time_planner</h3>
      <P>Cek waktu, pengingat, dan timer. Perintah default untuk waktu lokal.</P>

      <h3 id="skills-hermes-agent">hermes_agent</h3>
      <P>Agent eksternal yang berjalan sebagai skill terpisah, bukan seluruh otak asisten. Hanya berjalan saat diminta eksplisit.</P>
      <CodeBlock>{`# Check status
python -m assistant.main --text "status hermes" --no-speak --no-llm

# Use Hermes for complex task
python -m assistant.main --text "pakai hermes cek tugasku" --no-speak --no-llm

# HTTP mode
python -m assistant.main --text "pakai hermes susun rencana belajar" --no-speak --hermes-agent-mode http --hermes-agent-url http://127.0.0.1:8765/chat

# Subprocess mode
python -m assistant.main --text "pakai hermes susun rencana belajar" --no-speak --hermes-agent-mode subprocess --hermes-agent-command "python -m hermes_agent"`}</CodeBlock>
    </>
  );
}

function Memory() {
  return (
    <>
      <H2 id="memory">memory</H2>
      <P>Memory persisten dengan SQLite. Semantic keyword scoring untuk retrieval.</P>
      <CodeBlock>{`# Remember a fact
python -m assistant.main --text "ingat bahwa nama saya Jeremi" --no-speak

# Show memory
python -m assistant.main --memory-show

# Clear conversation memory
python -m assistant.main --memory-clear-conversations

# Clear all memory
python -m assistant.main --memory-clear-all`}</CodeBlock>
      <P>Storage: <InlineCode>data/assistant_memory.db</InlineCode></P>
      <P>Disable semantic memory:</P>
      <CodeBlock>python -m assistant.main --no-semantic-memory</CodeBlock>
    </>
  );
}

function LocalTools() {
  return (
    <>
      <H2 id="local-tools">local tools</H2>
      <P>Perintah suara/teks untuk aksi lokal:</P>
      <CodeBlock>{`# Open website
python -m assistant.main --text "buka website example.com" --no-speak --no-llm

# Open app
python -m assistant.main --text "buka aplikasi chrome" --no-speak --no-llm

# Open folder
python -m assistant.main --text "buka folder ." --no-speak --no-llm

# Create note
python -m assistant.main --text "buat catatan meeting jam 4 sore" --no-speak --no-llm

# Search files
python -m assistant.main --text "cari file README" --no-speak --no-llm`}</CodeBlock>
      <P>Konfirmasi diminta secara default untuk operasi berisiko. Disable untuk automation:</P>
      <CodeBlock>python -m assistant.main --text "buka website example.com" --no-speak --no-llm --no-tool-confirmation</CodeBlock>
    </>
  );
}

function GuiSection() {
  return (
    <>
      <H2 id="gui">gui</H2>
      <P>Panel kontrol berbasis Tkinter:</P>
      <CodeBlock>python -m assistant.main --gui</CodeBlock>
      <P>Fitur GUI:</P>
      <Ul items={[
        'Start / stop CLI assistant',
        'Toggle wake word & debug audio',
        'Show logs & memory',
        'Edit config: mic device, model, language, TTS engine, provider, skills, memory, tools, confirmation',
      ]} />
    </>
  );
}

function Fastapi() {
  return (
    <>
      <H2 id="fastapi">fastapi runtime</H2>
      <P>Hey Nodryx memiliki runtime FastAPI untuk integrasi web, mobile, dan background worker.</P>
      <H3>Endpoints</H3>
      <Ul items={[
        <><InlineCode>GET /health</InlineCode></>,
        <><InlineCode>POST /chat/text</InlineCode></>,
        <><InlineCode>GET /memory</InlineCode></>,
        <><InlineCode>POST /memory/profile</InlineCode></>,
        <><InlineCode>DELETE /memory</InlineCode></>,
        <><InlineCode>GET /tasks</InlineCode></>,
        <><InlineCode>POST /tasks</InlineCode></>,
        <><InlineCode>PATCH /tasks/{'{task_id}'}</InlineCode></>,
        <><InlineCode>GET /reminders</InlineCode></>,
        <><InlineCode>POST /reminders</InlineCode></>,
        <><InlineCode>GET /students/search</InlineCode></>,
      ]} />
    </>
  );
}

function Architecture() {
  return (
    <>
      <H2 id="architecture">architecture</H2>
      <P>Arsitektur target dengan FastAPI, LangChain, dan AsyncIO:</P>
      <CodeBlock>{`clients/
|-- voice_cli
|-- tkinter_gui
\`-- future_web_dashboard
        |
        v
assistant/api/                FastAPI routes, schemas, dependencies
        |
        v
assistant/services/           AssistantService, MemoryService, TaskService
        |
        +-- assistant/router/  deterministic local routing
        +-- assistant/skills/  local skill registry and adapters
        +-- assistant/agents/  LangChain/LangGraph orchestration
        +-- assistant/tools/   safe local tool adapters
        \`-- assistant/repos/   SQLite repositories and migrations`}</CodeBlock>
      <H3>Upgrade Phases</H3>
      <Ul items={[
        <><strong>Phase A</strong> — Service Layer <span className="text-accent text-xs ml-1">done</span></>,
        <><strong>Phase B</strong> — FastAPI Shell <span className="text-accent text-xs ml-1">done</span></>,
        <><strong>Phase C</strong> — AsyncIO Boundary <span className="text-accent/70 text-xs ml-1">in progress</span></>,
        <><strong>Phase D</strong> — LangChain & LangGraph <span className="text-muted text-xs ml-1">planned</span></>,
        <><strong>Phase E</strong> — Background Workers <span className="text-muted text-xs ml-1">planned</span></>,
        <><strong>Phase F</strong> — Clients & Dashboard <span className="text-muted text-xs ml-1">planned</span></>,
      ]} />
    </>
  );
}

function ProjectStructure() {
  return (
    <>
      <H2 id="project-structure">project structure</H2>
      <CodeBlock>{`heynodryx/
|-- assistant/
|   |-- __init__.py
|   |-- cli.py
|   |-- confirmations.py
|   |-- config.py
|   |-- intents.py
|   |-- logic.py
|   |-- llm.py
|   |-- main.py
|   |-- memory.py
|   |-- response_pipeline.py
|   |-- runner.py
|   |-- skills/
|   |   |-- __init__.py
|   |   |-- base.py
|   |   |-- registry.py
|   |   |-- hermes_agent/
|   |   |-- itera_students/
|   |   |   |-- database.py
|   |   |   \`-- skill.py
|   |   |-- task_calendar/
|   |   |-- time_planner/
|   |   \`-- web_search/
|   |-- transcript_log.py
|   |-- tools.py
|   \`-- voice.py
|-- config/
|   |-- assistant.json
|   \`-- tasks.example.json
|-- tests/
|-- data/
|   |-- assistant_memory.db
|   |-- logs/
|   \`-- itera_students/
|-- PLANNING.md
|-- README.md
\`-- requirements.txt`}</CodeBlock>
    </>
  );
}
