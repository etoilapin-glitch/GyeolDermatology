import { useState, type ReactNode } from "react"

const heroImage =
  "https://images.unsplash.com/photo-1713085085470-fba013d67e65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600"
const doctorImage =
  "https://images.unsplash.com/photo-1758691462651-611d730c5272?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
const laserImage =
  "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000"

type IconProps = { className?: string }

function ArrowUpRight({ className = "size-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 18 18 6M8 6h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Check({ className = "size-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Menu({ className = "size-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Close({ className = "size-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Phone({ className = "size-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.2 3.5 10 8.2 7.9 10a15 15 0 0 0 6.1 6.1l1.8-2.1 4.7 2.8-.8 3.4c-.2.8-.9 1.3-1.7 1.3C9.4 21.5 2.5 14.6 2.5 6c0-.8.5-1.5 1.3-1.7l3.4-.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossMark({ className = "size-8" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 4v24M4 16h24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function LineIcon({ type }: { type: "laser" | "wave" | "drop" }) {
  if (type === "wave") {
    return (
      <svg
        className="size-8"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 11c4-5 8-5 12 0s8 5 12 0M4 21c4-5 8-5 12 0s8 5 12 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (type === "drop") {
    return (
      <svg
        className="size-8"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 3S7.5 13 7.5 20A8.5 8.5 0 0 0 24.5 20C24.5 13 16 3 16 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 21c.6 2 2 3 4 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  return (
    <svg className="size-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="m5 27 9-9m4-4 9-9M19 7l6 6M13 15l4 4M5 17l10 10M5 22h5M10 17v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SectionTitle({
  eyebrow,
  children,
  light = false,
}: {
  eyebrow: string
  children: ReactNode
  light?: boolean
}) {
  return (
    <div className={light ? "text-white" : "text-stone-900"}>
      <p
        className={`mb-5 text-xs font-semibold tracking-[0.22em] uppercase ${
          light ? "text-teal-200" : "text-teal-800"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-[1.16] font-medium tracking-[-0.03em] md:text-5xl">
        {children}
      </h2>
    </div>
  )
}

const navItems = [
  ["진료 철학", "philosophy"],
  ["보유 장비", "equipment"],
  ["의료진", "doctor"],
  ["진료 안내", "contact"],
]

const equipment = [
  {
    name: "피코슈어 프로",
    en: "PICOSURE PRO",
    copy: "짧은 조사 시간으로 색소를 정교하게 타깃하는 피코 레이저",
    type: "laser" as const,
  },
  {
    name: "써마지 FLX",
    en: "THERMAGE FLX",
    copy: "고주파 에너지로 피부 깊은 층까지 전달하는 리프팅 솔루션",
    type: "wave" as const,
  },
  {
    name: "브이빔 퍼펙타",
    en: "VBEAM PERFECTA",
    copy: "혈관 병변과 붉은 자국을 섬세하게 케어하는 레이저",
    type: "drop" as const,
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-stone-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-900/10 bg-[#f7f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <button
            className="flex items-center gap-3 text-left"
            onClick={() => scrollTo("top")}
            aria-label="맨 위로"
          >
            <CrossMark className="size-8 text-teal-800" />
            <span className="leading-none">
              <strong className="block font-serif text-xl tracking-[-0.03em]">
                결 피부과
              </strong>
              <span className="mt-1 block text-[9px] font-semibold tracking-[0.18em] text-stone-500">
                GYEOL DERMATOLOGY
              </span>
            </span>
          </button>
          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="주요 메뉴"
          >
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link text-sm font-medium text-stone-600"
              >
                {label}
              </button>
            ))}
          </nav>
          <a
            href="tel:02-555-2025"
            className="hidden items-center gap-2 bg-teal-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 md:flex"
          >
            <Phone className="size-4" />
            상담 예약
          </a>
          <button
            className="p-2 text-stone-800 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-stone-900/10 bg-[#f7f5ef] px-5 py-6 md:hidden">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full border-b border-stone-900/10 py-4 text-left font-medium"
              >
                {label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden pt-20">
          <div className="mx-auto grid min-h-[780px] max-w-7xl lg:grid-cols-[1.03fr_0.97fr]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-20 md:px-8 lg:py-28">
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
                <span className="h-px w-10 bg-teal-700" />
                피부과 전문의가 직접 진료합니다
              </p>
              <h1 className="max-w-2xl font-serif text-5xl leading-[1.08] font-medium tracking-[-0.045em] text-stone-950 sm:text-6xl lg:text-7xl">
                피부의 결을 읽고,
                <br />
                <em className="font-normal text-teal-800 not-italic">
                  본연의 아름다움
                </em>
                을 찾다
              </h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-stone-600 md:text-lg">
                정확한 진단, 검증된 장비, 섬세한 시술.
                <br className="hidden sm:block" />결 피부과는 당신의 피부에
                필요한 것만 제안합니다.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center gap-8 bg-teal-900 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
                >
                  진료 상담 예약
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => scrollTo("equipment")}
                  className="flex items-center gap-2 border border-stone-400 px-6 py-4 text-sm font-semibold transition-colors hover:border-teal-800 hover:text-teal-800"
                >
                  보유 장비 보기
                </button>
              </div>
              <div className="mt-16 grid max-w-lg grid-cols-3 border-t border-stone-900/15 pt-7">
                <div>
                  <strong className="font-serif text-2xl text-teal-900">
                    1:1
                  </strong>
                  <p className="mt-1 text-xs text-stone-500">
                    전문의 맞춤 진료
                  </p>
                </div>
                <div className="border-l border-stone-900/10 pl-5">
                  <strong className="font-serif text-2xl text-teal-900">
                    9종+
                  </strong>
                  <p className="mt-1 text-xs text-stone-500">프리미엄 장비</p>
                </div>
                <div className="border-l border-stone-900/10 pl-5">
                  <strong className="font-serif text-2xl text-teal-900">
                    정품
                  </strong>
                  <p className="mt-1 text-xs text-stone-500">팁·소모품 원칙</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[560px] overflow-hidden lg:min-h-full">
              <img
                src={heroImage}
                alt="전문 의료진에게 피부 시술을 받는 모습"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/45 via-transparent to-transparent" />
              <div className="absolute right-6 bottom-6 left-6 border border-white/30 bg-white/85 p-5 backdrop-blur-lg md:right-8 md:bottom-8 md:left-auto md:w-72">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-teal-800 uppercase">
                  Skin Analysis
                </p>
                <p className="mt-2 font-serif text-xl">
                  보이는 증상보다
                  <br />
                  원인을 먼저 봅니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <SectionTitle eyebrow="Our Standard">
                과한 시술보다
                <br />
                정확한 진단을 먼저
              </SectionTitle>
              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                {[
                  [
                    "01",
                    "전문의 직접 진료",
                    "상담부터 시술, 경과 확인까지 피부과 전문의가 직접 책임집니다.",
                  ],
                  [
                    "02",
                    "피부 진단 기반 설계",
                    "육안에만 의존하지 않고 피부 상태를 정밀하게 분석해 계획합니다.",
                  ],
                  [
                    "03",
                    "검증된 장비의 조합",
                    "한 가지 장비만 고집하지 않고 피부에 맞는 에너지와 깊이를 선택합니다.",
                  ],
                  [
                    "04",
                    "필요한 만큼만",
                    "유행이나 패키지가 아닌, 지금 피부에 꼭 필요한 치료만 권합니다.",
                  ],
                ].map(([num, title, copy]) => (
                  <article key={num} className="border-t border-stone-300 pt-5">
                    <span className="font-serif text-sm italic text-teal-700">
                      {num}
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-500">
                      {copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="equipment"
          className="overflow-hidden bg-teal-950 py-24 text-white md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionTitle eyebrow="Medical Technology" light>
                결과의 차이를 만드는
                <br />
                정교한 테크놀로지
              </SectionTitle>
              <p className="max-w-md text-sm leading-7 text-teal-100/70">
                피부 타입과 고민은 모두 다릅니다. 결 피부과는 다양한 프리미엄
                장비를 바탕으로 에너지, 깊이, 횟수를 세밀하게 조율합니다.
              </p>
            </div>

            <div className="mt-16 grid border-t border-white/20 lg:grid-cols-3">
              {equipment.map((item, index) => (
                <article
                  key={item.name}
                  className={`group relative min-h-80 border-b border-white/20 px-1 py-9 lg:border-b-0 lg:px-8 ${
                    index > 0 ? "lg:border-l" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-teal-300">
                      <LineIcon type={item.type} />
                    </span>
                    <span className="text-xs text-white/35">0{index + 1}</span>
                  </div>
                  <div className="absolute right-8 bottom-9 left-1 lg:left-8">
                    <p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-teal-300">
                      {item.en}
                    </p>
                    <h3 className="font-serif text-3xl">{item.name}</h3>
                    <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                      {item.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 grid overflow-hidden bg-[#d8e5df] text-stone-900 md:grid-cols-2">
              <div className="relative min-h-80 md:min-h-[430px]">
                <img
                  src={laserImage}
                  alt="피부 레이저 시술 장비"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14">
                <p className="text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
                  Combination Treatment
                </p>
                <h3 className="mt-5 font-serif text-2xl leading-tight md:text-3xl">
                  좋은 장비보다 중요한 건<br />
                  제대로 사용하는 경험입니다.
                </h3>
                <p className="mt-6 text-sm leading-7 text-stone-600">
                  같은 장비도 피부 상태와 조사 방식에 따라 결과가 달라집니다.
                  충분한 진단 후, 필요한 장비를 단독 또는 복합으로 설계합니다.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-teal-950">
                  {["색소·기미", "홍조·혈관", "탄력·리프팅", "흉터·모공"].map(
                    (tag) => (
                      <span key={tag} className="flex items-center gap-2">
                        <Check className="size-4" />
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="doctor" className="bg-[#ebe8de] py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-24">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-stone-300">
                <img
                  src="/doctor-profile.png"
                  alt="결 피부과 대표원장"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute -right-3 -bottom-5 bg-teal-900 p-5 text-white md:-right-8 md:p-7">
                <CrossMark className="size-10 text-teal-200" />
                <p className="mt-5 text-xs leading-5 text-teal-50/80">
                  대한피부과학회
                  <br />
                  정회원
                </p>
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Dermatologist">
                피부를 오래 공부한
                <br />
                피부과 전문의의 진료
              </SectionTitle>
              <p className="mt-8 max-w-xl text-base leading-8 text-stone-600">
                피부는 매일 달라지고, 사람마다 다릅니다. 질환과 미용을 분리하지
                않고 피부 본연의 건강을 회복하는 것에서 시작하겠습니다.
              </p>
              <div className="mt-10 border-y border-stone-900/15 py-7">
                <p className="text-sm text-stone-500">
                  대표원장 · 피부과 전문의
                </p>
                <p className="mt-2 font-serif text-3xl">
                  김서윤{" "}
                  <span className="ml-2 text-base font-sans text-stone-500">
                    M.D.
                  </span>
                </p>
              </div>
              <ul className="mt-7 grid gap-3 text-sm text-stone-600 sm:grid-cols-2">
                {[
                  "서울대학교 의과대학 졸업",
                  "서울대학교병원 피부과 전문의",
                  "대한피부과학회 정회원",
                  "대한피부레이저학회 정회원",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 bg-teal-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 border-y border-stone-900/20 py-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
                  Appointment
                </p>
                <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] md:text-5xl">
                  당신의 피부 고민,
                  <br />
                  차분히 듣겠습니다.
                </h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-stone-400">
                    진료 시간
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span>월 · 화 · 목 · 금</span>
                      <span>10:00 — 19:30</span>
                    </p>
                    <p className="flex justify-between">
                      <span>토요일</span>
                      <span>10:00 — 15:00</span>
                    </p>
                    <p className="pt-1 text-xs text-stone-400">
                      수요일 · 일요일 · 공휴일 휴진
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-stone-400">
                    오시는 길
                  </p>
                  <p className="mt-4 text-sm leading-6">
                    서울 강남구 도산대로 120, 4층
                    <br />
                    <span className="text-stone-400">
                      신사역 1번 출구 도보 3분
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <a
                href="tel:02-000-0000"
                className="font-serif text-3xl text-teal-950 transition-colors hover:text-teal-700 md:text-4xl"
              >
                02. 000. 0000
              </a>
              <div className="flex gap-3">
                <a
                  href="tel:02-555-2025"
                  className="flex items-center justify-center gap-2 bg-teal-900 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
                >
                  <Phone className="size-4" /> 전화 상담
                </a>
                <button
                  onClick={() => alert("카카오톡 상담 채널을 준비 중입니다.")}
                  className="border border-stone-300 px-6 py-4 text-sm font-semibold transition-colors hover:border-teal-800 hover:text-teal-800"
                >
                  카카오톡 상담
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 px-5 py-12 text-stone-400 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 text-xs md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2 text-white">
              <CrossMark className="size-6 text-teal-300" />
              <span className="font-serif text-lg">결 피부과</span>
            </div>
            <p className="leading-6">
              대표자 김서윤 · 사업자등록번호 123-45-67890
              <br />
              서울 강남구 도산대로 120, 4층
            </p>
          </div>
          <p>© 2025 GYEOL DERMATOLOGY. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
