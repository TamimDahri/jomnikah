import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">💍</span>
          <span className="text-xl font-bold text-rose-700">Jom Nikah</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#how-it-works" className="hover:text-rose-600 transition-colors">Bagaimana Ia Berfungsi</Link>
          <Link href="#features" className="hover:text-rose-600 transition-colors">Kelebihan</Link>
          <Link href="#testimonials" className="hover:text-rose-600 transition-colors">Testimoni</Link>
          <Link href="#pricing" className="hover:text-rose-600 transition-colors">Harga</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors">
            Log Masuk
          </Link>
          <Link
            href="/register"
            className="bg-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-rose-700 transition-colors"
          >
            Daftar Percuma
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-medium px-4 py-2 rounded-full">
            <span>✨</span>
            <span>Platform Perkahwinan Islam Terpercaya</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Temui{" "}
            <span className="text-rose-600">Jodoh</span>{" "}
            Yang Sesuai
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Bergabung bersama lebih 50,000 ahli yang mencari pasangan hidup berdasarkan nilai-nilai Islam. Profil terverifikasi, privasi terjamin, dan sokongan sepenuh masa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="bg-rose-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-rose-700 transition-colors text-center shadow-lg shadow-rose-200"
            >
              Mulakan Perjalanan Anda
            </Link>
            <Link
              href="#how-it-works"
              className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-rose-300 hover:text-rose-600 transition-colors text-center"
            >
              Ketahui Lebih Lanjut
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            Percuma untuk mendaftar • Tiada kad kredit diperlukan
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="bg-gradient-to-br from-rose-400 to-amber-400 rounded-3xl w-full aspect-square max-w-md mx-auto flex items-center justify-center shadow-2xl shadow-rose-200">
            <div className="text-center space-y-4 p-8">
              <div className="text-8xl">💑</div>
              <div className="bg-white/90 rounded-2xl p-4 space-y-2">
                <p className="text-gray-800 font-semibold">Ahmad & Nurul</p>
                <p className="text-rose-600 text-sm">Bertemu melalui Jom Nikah</p>
                <p className="text-gray-500 text-xs">Berkahwin pada 2024 ❤️</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <span className="text-2xl">🌙</span>
            <div>
              <p className="text-xs text-gray-500">Berdasarkan</p>
              <p className="text-sm font-semibold text-gray-800">Nilai Islam</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-xs text-gray-500">Profil</p>
              <p className="text-sm font-semibold text-gray-800">Terverifikasi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "50,000+", label: "Ahli Berdaftar" },
    { value: "5,000+", label: "Pasangan Berjaya" },
    { value: "98%", label: "Kepuasan Pengguna" },
    { value: "10+", label: "Tahun Pengalaman" },
  ];

  return (
    <section className="py-16 bg-rose-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-rose-200 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "🛡️",
      title: "Profil Terverifikasi",
      description: "Setiap profil disemak dan disahkan oleh pasukan kami untuk memastikan keselamatan dan keaslian ahli.",
    },
    {
      icon: "🔒",
      title: "Privasi Terjamin",
      description: "Kawalan penuh ke atas maklumat peribadi anda. Hanya kongsi apa yang anda selesa.",
    },
    {
      icon: "🌙",
      title: "Nilai-Nilai Islam",
      description: "Platform yang direka khas mengikut garis panduan Islam, menghormati adab dan tatasusila perkahwinan.",
    },
    {
      icon: "🤝",
      title: "Sokongan Wali",
      description: "Kami memudahkan proses melibatkan keluarga dan wali dalam perjalanan mencari pasangan.",
    },
    {
      icon: "💬",
      title: "Komunikasi Selamat",
      description: "Sistem pesanan terkawal yang memastikan interaksi berlangsung dalam persekitaran yang sopan.",
    },
    {
      icon: "🎯",
      title: "Padanan Tepat",
      description: "Algoritma pintar yang memadankan anda berdasarkan nilai, minat, latar belakang, dan keutamaan.",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-rose-600 font-semibold text-sm uppercase tracking-wide">Kelebihan Kami</p>
          <h2 className="text-4xl font-bold text-gray-900">Mengapa Pilih Jom Nikah?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Kami memahami kepentingan perkahwinan dalam Islam dan komited untuk membantu anda menemukan pasangan yang sesuai.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-gray-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-50 transition-all group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Daftar & Bina Profil",
      description: "Cipta akaun percuma dan lengkapkan profil anda dengan maklumat peribadi, pendidikan, kerjaya, dan apa yang anda cari dalam pasangan.",
    },
    {
      step: "02",
      title: "Cari & Padankan",
      description: "Gunakan ciri carian terperinci kami atau biarkan sistem padanan pintar kami mencadangkan profil yang sesuai untuk anda.",
    },
    {
      step: "03",
      title: "Hubungi & Melangkah",
      description: "Hantar permintaan minat, berbual dalam persekitaran yang selamat, dan apabila bersedia, libatkan keluarga untuk melangkah ke peringkat seterusnya.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-rose-600 font-semibold text-sm uppercase tracking-wide">Proses Mudah</p>
          <h2 className="text-4xl font-bold text-gray-900">Bagaimana Ia Berfungsi?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hanya tiga langkah mudah untuk memulakan perjalanan mencari pasangan hidup anda.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-rose-200" />
          {steps.map((step, i) => (
            <div key={step.step} className="relative text-center space-y-4">
              <div className="w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-rose-200 relative z-10">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Ahmad Faris & Nurul Ain",
      location: "Kuala Lumpur",
      year: "Berkahwin 2023",
      quote: "Saya tidak menyangka akan menemui jodoh melalui platform dalam talian. Alhamdulillah, Jom Nikah telah memudahkan proses kami dengan cara yang beradab dan bersesuaian dengan nilai Islam.",
      avatar: "👨‍👩‍👧",
    },
    {
      name: "Zulhilmi & Farah Diyana",
      location: "Johor Bahru",
      year: "Berkahwin 2024",
      quote: "Ciri padanan yang tepat membantu kami menemui antara satu sama lain walaupun tinggal di bandar yang berbeza. Proses dari berkenalan hingga berkahwin berjalan dengan lancar.",
      avatar: "💏",
    },
    {
      name: "Hafiz & Suraya",
      location: "Penang",
      year: "Berkahwin 2024",
      quote: "Yang paling kami hargai ialah platform ini menggalakkan penglibatan keluarga dari awal. Ia sangat membantu dalam memastikan prosesnya berjalan mengikut adab Islam.",
      avatar: "👫",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-rose-600 font-semibold text-sm uppercase tracking-wide">Kisah Kejayaan</p>
          <h2 className="text-4xl font-bold text-gray-900">Pasangan Yang Berjaya</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ribuan pasangan telah menemui jodoh mereka melalui Jom Nikah. Inilah beberapa kisah mereka.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-rose-50 rounded-2xl p-8 space-y-6 border border-rose-100"
            >
              <div className="text-4xl text-center">{t.avatar}</div>
              <blockquote className="text-gray-600 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-rose-200 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-rose-500">{t.location} · {t.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Percuma",
      price: "RM0",
      period: "selamanya",
      description: "Sesuai untuk memulakan perjalanan mencari jodoh.",
      features: [
        "Profil asas",
        "Cari sehingga 10 profil sehari",
        "Hantar 3 permintaan minat sebulan",
        "Akses komuniti",
      ],
      excluded: [
        "Lihat yang melihat profil anda",
        "Mesej tanpa had",
        "Lencana terverifikasi",
        "Sokongan keutamaan",
      ],
      cta: "Daftar Percuma",
      href: "/register",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "RM49",
      period: "sebulan",
      description: "Untuk mereka yang serius mencari pasangan hidup.",
      features: [
        "Semua dalam pelan Percuma",
        "Cari profil tanpa had",
        "Mesej tanpa had",
        "Lihat yang melihat profil anda",
        "Lencana ahli terverifikasi",
        "Profil ditonjolkan dalam carian",
        "Sokongan keutamaan 24/7",
      ],
      excluded: [],
      cta: "Mulakan 7 Hari Percuma",
      href: "/register?plan=premium",
      highlighted: true,
    },
    {
      name: "Keluarga",
      price: "RM89",
      period: "sebulan",
      description: "Penglibatan keluarga penuh dalam proses pencarian.",
      features: [
        "Semua dalam pelan Premium",
        "Akaun wali / ibu bapa",
        "Komunikasi terpandu keluarga",
        "Sesi kaunseling perkahwinan (1x/bulan)",
        "Pengesahan latar belakang tambahan",
        "Pengurus akaun peribadi",
      ],
      excluded: [],
      cta: "Hubungi Kami",
      href: "/contact",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-rose-600 font-semibold text-sm uppercase tracking-wide">Harga</p>
          <h2 className="text-4xl font-bold text-gray-900">Pilih Pelan Yang Sesuai</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Mulakan secara percuma atau tingkatkan ke pelan premium untuk lebih banyak ciri dan peluang mencari jodoh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 space-y-6 border-2 relative ${
                plan.highlighted
                  ? "bg-rose-600 border-rose-600 shadow-2xl shadow-rose-200 scale-105"
                  : "bg-white border-gray-100"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full">
                    ⭐ PALING POPULAR
                  </span>
                </div>
              )}

              <div className="space-y-2">
                <p className={`font-semibold text-sm uppercase tracking-wide ${plan.highlighted ? "text-rose-200" : "text-rose-600"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlighted ? "text-rose-200" : "text-gray-400"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlighted ? "text-rose-200" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <Link
                href={plan.href}
                className={`block text-center font-semibold py-3 rounded-full transition-colors ${
                  plan.highlighted
                    ? "bg-white text-rose-600 hover:bg-rose-50"
                    : "bg-rose-600 text-white hover:bg-rose-700"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 shrink-0">✅</span>
                    <span className={plan.highlighted ? "text-rose-100" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.excluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm opacity-50">
                    <span className="mt-0.5 shrink-0">❌</span>
                    <span className={plan.highlighted ? "text-rose-200" : "text-gray-400"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Semua harga dalam Ringgit Malaysia (RM) termasuk cukai. Batalkan pada bila-bila masa.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Adakah Jom Nikah selamat digunakan?",
      a: "Ya. Kami mengesahkan setiap profil secara manual sebelum diluluskan. Semua maklumat peribadi dilindungi dan tidak dikongsi tanpa kebenaran anda. Kami juga menggunakan enkripsi SSL untuk melindungi data anda.",
    },
    {
      q: "Bagaimana proses pengesahan profil berfungsi?",
      a: "Setelah mendaftar, anda perlu menghantar salinan kad pengenalan dan gambar terkini. Pasukan kami akan menyemak dan mengesahkan profil anda dalam masa 1–2 hari bekerja. Profil yang disahkan akan mendapat lencana khas.",
    },
    {
      q: "Bolehkah saya mendaftar atas nama anak atau ahli keluarga?",
      a: "Ya, kami menggalakkan penglibatan keluarga. Anda boleh mendaftar dengan pelan Keluarga yang membolehkan ibu bapa atau wali mengurus profil bersama-sama, selaras dengan adab perkahwinan Islam.",
    },
    {
      q: "Apakah yang berlaku selepas saya menghantar permintaan minat?",
      a: "Pihak yang anda minati akan dimaklumkan dan boleh menerima atau menolak permintaan. Jika diterima, anda berdua boleh mula berkomunikasi melalui platform kami. Kami menggalakkan penglibatan keluarga pada peringkat ini.",
    },
    {
      q: "Bolehkah saya membatalkan langganan pada bila-bila masa?",
      a: "Ya, anda boleh membatalkan langganan pada bila-bila masa tanpa sebarang penalti. Akses premium anda akan kekal sehingga akhir tempoh pembayaran semasa.",
    },
    {
      q: "Adakah platform ini hanya untuk orang Islam?",
      a: "Jom Nikah direka khas mengikut nilai dan adab perkahwinan Islam. Platform ini terbuka untuk semua umat Islam yang serius mencari pasangan hidup mengikut cara yang direstui agama.",
    },
    {
      q: "Berapa lama biasanya seseorang menemui pasangan melalui Jom Nikah?",
      a: "Ia berbeza bergantung pada setiap individu. Ramai ahli kami menemui jodoh dalam masa 3–6 bulan. Kunci utamanya ialah melengkapkan profil dengan jujur dan aktif berinteraksi dengan cara yang sopan.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-rose-600 font-semibold text-sm uppercase tracking-wide">FAQ</p>
          <h2 className="text-4xl font-bold text-gray-900">Soalan Lazim</h2>
          <p className="text-gray-500">
            Ada soalan? Kami ada jawapannya.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border border-gray-100 rounded-2xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-rose-50 transition-colors">
                <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                <span className="shrink-0 text-rose-500 text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Masih ada soalan?{" "}
          <Link href="/contact" className="text-rose-600 hover:underline font-medium">
            Hubungi kami
          </Link>
        </p>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-rose-600 to-rose-700">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-white">
          Siap Untuk Memulakan Perjalanan Anda?
        </h2>
        <p className="text-rose-200 text-lg">
          Daftar percuma hari ini dan mula mencari pasangan hidup anda bersama ribuan ahli lain yang serius dalam mencari jodoh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-white text-rose-600 font-semibold px-8 py-4 rounded-full hover:bg-rose-50 transition-colors shadow-lg"
          >
            Daftar Percuma Sekarang
          </Link>
          <Link
            href="/login"
            className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-colors"
          >
            Log Masuk
          </Link>
        </div>
        <p className="text-rose-300 text-sm">
          Tiada bayaran tersembunyi • Batalkan pada bila-bila masa
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const links = {
    Platform: ["Cari Profil", "Bagaimana Ia Berfungsi", "Harga", "Kisah Kejayaan"],
    Syarikat: ["Tentang Kami", "Blog", "Kerjaya", "Hubungi Kami"],
    Sokongan: ["Pusat Bantuan", "Keselamatan", "Laporan Masalah", "FAQ"],
    Undang: ["Terma Perkhidmatan", "Dasar Privasi", "Dasar Kuki"],
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💍</span>
              <span className="text-xl font-bold text-white">Jom Nikah</span>
            </div>
            <p className="text-sm leading-relaxed">
              Platform perkahwinan Islam terpercaya di Malaysia.
            </p>
            <div className="flex gap-4 text-xl">
              <span className="cursor-pointer hover:text-white transition-colors">📘</span>
              <span className="cursor-pointer hover:text-white transition-colors">📸</span>
              <span className="cursor-pointer hover:text-white transition-colors">🐦</span>
            </div>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <p className="text-white font-semibold text-sm">{category}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2025 Jom Nikah. Hak cipta terpelihara.</p>
          <p className="text-sm">Dibuat dengan ❤️ di Malaysia</p>
        </div>
      </div>
    </footer>
  );
}
