import Link from "next/link";

const WA_LINK = `https://wa.me/66627424469?text=${encodeURIComponent(
  "Assalamualaikum, saya berminat dengan pakej nikah Thailand RM6,500. Boleh terangkan lebih lanjut?"
)}`;

const PACKAGE_ITEMS = [
  "Nikah di Majlis Agama Islam Songkhla",
  "Imam Jurunikah",
  "Saksi Bertauliah",
  "Khidmat Gambar",
  "Sijil Nikah",
  "Surat Pengesahan Konsulat Malaysia",
  "Sijil Nikah Sah Malaysia",
];

const STEPS = [
  {
    num: "01",
    title: "Hubungi Kami",
    desc: "Mulakan dengan satu mesej WhatsApp. Kami akan pandu anda sepenuhnya dari A ke Z.",
  },
  {
    num: "02",
    title: "Sediakan Dokumen",
    desc: "Hantar dokumen yang diperlukan. Kami bantu semak dan uruskan semua urusan berkenaan.",
  },
  {
    num: "03",
    title: "Majlis Nikah",
    desc: "Hadir ke Songkhla, Thailand. Nikah dijalankan secara rasmi di Majlis Agama Islam Songkhla.",
  },
  {
    num: "04",
    title: "Terima Sijil",
    desc: "Sijil Nikah Sah Malaysia siap dalam masa sebulan melalui pengesahan Konsulat Malaysia.",
  },
];

const FAQS = [
  {
    q: "Berapa kos pakej ini?",
    a: "Pakej kami berharga RM6,500 all-in. Tiada caj tersembunyi atau bayaran tambahan. Harga yang tertera adalah harga muktamad.",
  },
  {
    q: "Adakah nikah ini sah di Malaysia?",
    a: "Ya, sepenuhnya sah. Melalui surat pengesahan Konsulat Malaysia dan proses pendaftaran di Perlis, perkahwinan anda akan diiktiraf sepenuhnya oleh undang-undang Malaysia.",
  },
  {
    q: "Berapa lama untuk mendapat sijil nikah Malaysia?",
    a: "Dalam masa sebulan, anda akan menerima Sijil Nikah Sah Malaysia. Kami memantau proses ini dari awal hingga akhir.",
  },
  {
    q: "Adakah ada jaminan wang dikembalikan?",
    a: "Ya! Kami menawarkan jaminan penuh wang dikembalikan. Jika kami tidak dapat memenuhi perkhidmatan yang dijanjikan, wang anda akan dikembalikan sepenuhnya.",
  },
  {
    q: "Perlukah pasangan hadir ke Thailand?",
    a: "Ya, pasangan perlu hadir di Songkhla, Thailand untuk majlis nikah. Jarak Songkhla dari Perlis hanya lebih kurang 2 jam perjalanan darat.",
  },
  {
    q: "Apakah dokumen yang diperlukan?",
    a: "Dokumen asas seperti kad pengenalan dan sijil kelahiran. Kami akan berikan senarai lengkap beserta panduan terperinci selepas anda menghubungi kami.",
  },
];

const USPS = [
  {
    icon: "scale",
    title: "Sah di Sisi Undang-Undang Kedua-Dua Negara",
    desc: "Semua urusan dijalankan mengikut lunas undang-undang Malaysia dan Thailand sepenuhnya.",
  },
  {
    icon: "user",
    title: "Pendaftaran Malaysia Tanpa Kehadiran Isteri Pertama",
    desc: "Proses pendaftaran nikah di Malaysia boleh dilaksanakan tanpa memerlukan kehadiran isteri pertama.",
  },
  {
    icon: "lock",
    title: "Peribadi &amp; Sulit Adalah Keutamaan Kami",
    desc: "Privasi anda dijaga sepenuhnya. Semua maklumat dan urusan dirahsiakan dengan ketat.",
  },
];

// ─── Icons ───────────────────────────────────────────────────────────────────

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BadgeCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18M3 9l9-6 9 6M3 15l9 6 9-6" />
      <path d="M5 9l-2 6h4L5 9zM19 9l-2 6h4l-2-6z" />
    </svg>
  );
}

function UserShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.68-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.28a8.16 8.16 0 0 0 4.77 1.52V7.35a4.85 4.85 0 0 1-1-.42z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ─── Logo ────────────────────────────────────────────────────────────────────

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="34" height="34" rx="8" fill="#059669" />
        {/* crescent — outer white circle offset by inner green circle */}
        <circle cx="15" cy="17" r="11" fill="white" />
        <circle cx="19" cy="14" r="9" fill="#059669" />
        {/* star */}
        <circle cx="25" cy="10" r="2.5" fill="white" />
      </svg>
      <span className={`text-xl font-bold tracking-tight ${dark ? "text-white" : "text-emerald-700"}`}>
        JomNikah
      </span>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Usp />
        <Package />
        <HowItWorks />
        <Gallery />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" aria-label="JomNikah">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#pakej" className="hover:text-emerald-600 transition-colors">Pakej</Link>
          <Link href="#proses" className="hover:text-emerald-600 transition-colors">Proses</Link>
          <Link href="#galeri" className="hover:text-emerald-600 transition-colors">Galeri</Link>
          <Link href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</Link>
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Hubungi Kami</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-36 pb-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          Khidmat Nikah Thailand — Daftar Sah di Malaysia
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
          Nikah di Thailand,{" "}
          <span className="text-emerald-600">Daftar Sah</span>{" "}
          di Malaysia.
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Pakej lengkap{" "}
          <strong className="text-gray-800 font-bold">RM6,500</strong> — kami uruskan semua dari A ke Z.
          Sijil Nikah Sah Malaysia dalam masa{" "}
          <strong className="text-gray-800 font-bold">sebulan</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg shadow-green-200 text-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Hubungi Kami di WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 pt-2">
          <span className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-emerald-500" />
            Jaminan Wang Dikembalikan
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-emerald-500" />
            Sijil Sah Dalam Masa Sebulan
          </span>
          <span className="flex items-center gap-1.5">
            <CheckIcon className="w-4 h-4 text-emerald-500" />
            Proses 100% Sah &amp; Terurus
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Strip ─────────────────────────────────────────────────────────────

function TrustStrip() {
  const items = [
    {
      Icon: ShieldCheckIcon,
      title: "Jaminan Wang Dikembalikan",
      desc: "Jika kami gagal memenuhi perkhidmatan, wang anda dikembalikan sepenuhnya.",
    },
    {
      Icon: ClockIcon,
      title: "Sijil Sah Dalam Masa Sebulan",
      desc: "Sijil Nikah Sah Malaysia siap dalam tempoh 30 hari dari tarikh nikah.",
    },
    {
      Icon: BadgeCheckIcon,
      title: "Diiktiraf Di Sisi Undang-Undang",
      desc: "Sah sepenuhnya di Malaysia melalui pengesahan Konsulat dan pendaftaran Perlis.",
    },
  ];

  return (
    <section className="py-16 bg-emerald-50 border-y border-emerald-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">{title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── USP ─────────────────────────────────────────────────────────────────────

const USP_ICONS: Record<string, React.FC<{ className?: string }>> = {
  scale: ScaleIcon,
  user: UserShieldIcon,
  lock: LockIcon,
};

function Usp() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Kelebihan Kami</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Mengapa Pilih JomNikah?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {USPS.map(({ icon, title, desc }) => {
            const Icon = USP_ICONS[icon];
            return (
              <div key={title} className="p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Package ─────────────────────────────────────────────────────────────────

function Package() {
  return (
    <section id="pakej" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Pakej Kami</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Apa Yang Anda Terima</h2>
          <p className="text-gray-500 text-lg">Satu pakej lengkap, tiada caj tersembunyi.</p>
        </div>

        <div className="rounded-3xl border-2 border-emerald-200 overflow-hidden shadow-2xl shadow-emerald-50">
          {/* Price header */}
          <div className="bg-emerald-600 px-8 py-12 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              <ShieldCheckIcon className="w-4 h-4" />
              Jaminan Wang Dikembalikan
            </div>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-emerald-300 text-3xl font-semibold mb-1">RM</span>
              <span className="text-white text-8xl font-bold leading-none tracking-tight">6,500</span>
            </div>
            <p className="text-emerald-200 text-base">Pakej All-In — Tiada Caj Tersembunyi</p>
          </div>

          {/* Items */}
          <div className="bg-white px-8 py-10">
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {PACKAGE_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-8 text-center space-y-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-10 py-4 rounded-full transition-colors shadow-lg shadow-green-200 text-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Daftar &amp; Tanya Sekarang
              </a>
              <p className="text-sm text-gray-400">Kami sedia membantu anda setiap langkah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section id="proses" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Cara Ia Berfungsi</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">4 Langkah Mudah</h2>
          <p className="text-gray-500 text-lg">Dari hubungi kami hingga sijil di tangan — kami uruskan semuanya.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {STEPS.map((step) => (
            <div key={step.num} className="space-y-4">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                <span className="text-white font-bold text-lg">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

const PHOTOS = [1, 2, 3, 4, 5, 6, 7];

function Gallery() {
  return (
    <section id="galeri" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Galeri Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Kenangan Yang Bermakna</h2>
          <p className="text-gray-500 text-lg">Gambar diburamkan bagi menjaga privasi setiap pasangan.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((n) => (
            <div key={n} className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/gallery/photo-${n}.jpg`}
                alt="Portfolio"
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ filter: "blur(10px)" }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Hubungi kami di WhatsApp untuk melihat lebih banyak portfolio kami.
        </p>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

function Faq() {
  return (
    <section id="faq" className="py-24 px-6 bg-emerald-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">Soalan Lazim</h2>
          <p className="text-gray-500 text-lg">Ada soalan? Kami ada jawapannya.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-emerald-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.q}</span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-lg leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Masih ada soalan lain?</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Tanya kami terus di WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────

function CtaBanner() {
  return (
    <section className="py-28 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Bersedia Untuk{" "}
          <span className="text-emerald-400">Melangkah</span>?
        </h2>
        <p className="text-slate-400 text-xl leading-relaxed">
          Hubungi kami sekarang. Kami akan pandu anda sepenuhnya — dari dokumen hingga sijil di tangan.
        </p>
        <div className="pt-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-10 py-5 rounded-full transition-colors shadow-xl shadow-green-900/30 text-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Hubungi Kami di WhatsApp
          </a>
        </div>
        <p className="text-slate-500 text-sm">
          Jaminan wang dikembalikan &middot; Pakej RM6,500 all-in
        </p>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  const socials = [
    { Icon: FacebookIcon, href: "#", label: "Facebook" },
    { Icon: TikTokIcon, href: "#", label: "TikTok" },
    { Icon: YouTubeIcon, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Link href="/" aria-label="JomNikah">
          <Logo dark />
        </Link>

        <p className="text-slate-400 text-sm text-center max-w-sm">
          Khidmat nikah Thailand — daftar sah di Malaysia. Pakej RM6,500 all-in dengan jaminan wang dikembalikan.
        </p>

        <div className="flex items-center gap-5">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full border border-slate-700 hover:border-emerald-500 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="border-t border-slate-800 w-full pt-8 text-center text-sm text-slate-600">
          &copy; {new Date().getFullYear()} JomNikah. Hak cipta terpelihara.
        </div>
      </div>
    </footer>
  );
}
