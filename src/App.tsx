import { useEffect, useState, type ReactNode } from "react"

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

const octoberPromotions = [
  {
    title: "감쪽같이 예뻐지는 마법",
    accent: "보톡스",
    items: [
      ["주름보톡스 3부위 (국산 기본)", "42,000원", "29,000원"],
      ["스킨보톡스 풀페이스 (국산 기본)", "70,000원", "49,000원"],
      ["바디보톡스 100u (국산 기본)", "71,000원", "49,000원"],
    ],
  },
  {
    title: "중력을 거스르는 탄력의 시작",
    accent: "리프팅",
    items: [
      ["온다 6만둘 + 뉴비쥬 1vial", "607,000원", "419,000원"],
      ["바디 온자 10만줄", "655,000원", "459,000원"],
      ["덴서티 클래식팁 300샷", "723,000원", "499,000원"],
    ],
  },
  {
    title: "광채를 깨우는 주문",
    accent: "스킨부스터",
    items: [
      ["리쥬란힐러 2cc + 스킨보톡스 (코어)", "288,000원", "199,000원"],
      ["리쥬란 HB 2cc + 물광주사 2cc", "433,000원", "299,000원"],
      ["힐로웨이브 2cc", "433,000원", "299,000원"],
      ["고우리 1syringe (6cc)", "723,000원", "499,000원"],
    ],
  },
]

const equipment = [
  {
    slug: "picosure-pro",
    name: "피코슈어 프로",
    en: "PICOSURE PRO",
    copy:
      "짧은 조사 시간으로 주변 조직의 열 손상을 줄이면서 색소를 정교하게 타깃하는 피코 레이저",
    type: "laser" as const,
    eyebrow: "Precision Pigment Treatment",
    image:
      "https://images.unsplash.com/photo-1655655314398-c40c8dc6fb75?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    imageAlt: "피부 치료에 사용되는 의료 장비와 모니터",
    description:
      "피코초 단위의 짧은 조사 시간으로 주변 조직의 열 손상 부담을 줄이면서 색소 입자를 정교하게 타깃합니다.",
    principle:
      "피코슈어 프로는 755nm 알렉산드라이트 파장의 에너지를 피코초 단위로 전달합니다. 짧은 순간에 발생하는 광음향 효과가 색소 입자를 잘게 분해하도록 돕고, 분해된 색소는 피부의 자연스러운 대사 과정을 통해 점차 배출됩니다. 색소의 종류와 깊이, 피부 톤을 먼저 확인한 뒤 조사 강도와 패스 수를 조절하는 것이 중요합니다.",
    technology: [
      ["파장", "755nm"],
      ["에너지 방식", "피코초 레이저"],
      ["핵심 원리", "광음향 효과"],
      ["맞춤 설정", "강도·스폿·패스"],
    ],
    strengths: [
      ["정교한 색소 타깃", "짧고 강한 에너지로 색소 입자를 미세하게 분해합니다."],
      ["피부 부담을 고려한 설계", "피부 상태에 따라 에너지와 조사 방식을 세밀하게 조절합니다."],
      ["개인별 맞춤 접근", "색소의 깊이와 범위를 진단한 뒤 치료 계획을 수립합니다."],
    ],
    concerns: ["기미·잡티", "주근깨", "색소 침착", "문신 제거"],
    process: [
      ["정밀 진단", "색소의 종류와 깊이, 피부 민감도를 확인합니다."],
      ["맞춤 설계", "치료 부위에 맞는 에너지와 조사 방식을 설정합니다."],
      ["레이저 조사", "피부 반응을 확인하며 필요한 부위를 섬세하게 조사합니다."],
      ["진정 관리", "열감과 붉음을 줄이기 위한 진정·보습 관리를 진행합니다."],
    ],
    aftercare: [
      "시술 후 일시적인 붉음이나 미세한 딱지가 생길 수 있습니다.",
      "보습제와 자외선 차단제를 충분히 사용해 주세요.",
      "딱지는 억지로 제거하지 말고 자연스럽게 탈락하도록 둡니다.",
    ],
  },
  {
    slug: "thermage-flx",
    name: "써마지 FLX",
    en: "THERMAGE FLX",
    copy:
      "고주파 에너지로 피부 깊은 층까지 전달해 피부 탄력과 윤곽 개선을 돕는 리프링 솔루션",
    type: "wave" as const,
    eyebrow: "Monopolar RF Lifting",
    image:
      "https://images.unsplash.com/photo-1713085085470-fba013d67e65?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    imageAlt: "의료진이 피부 상태를 확인하며 시술하는 모습",
    description:
      "고주파 에너지를 피부 깊은 층까지 균일하게 전달해 피부 탄력과 윤곽 개선을 돕는 프리미엄 리프팅 솔루션입니다.",
    principle:
      "써마지 FLX는 단극성 고주파 에너지를 피부 깊은 층에 전달해 콜라겐 섬유의 수축과 재구성 과정을 유도합니다. 시술 중에는 진동과 냉각 시스템이 피부 표면을 보호하며, AccuREP 기술이 각 샷의 에너지 전달 상태를 확인합니다. 얼굴 구조와 지방 분포, 처짐 방향에 따라 샷의 밀도와 벡터를 다르게 설계합니다.",
    technology: [
      ["에너지 방식", "단극성 고주파"],
      ["주요 타깃", "진피·섬유 격막"],
      ["보호 시스템", "진동·접촉 냉각"],
      ["맞춤 설정", "샷·강도·벡터"],
    ],
    strengths: [
      ["깊이 있는 에너지 전달", "피부 표면을 보호하며 진피층에 고주파 에너지를 전달합니다."],
      ["섬세한 윤곽 디자인", "얼굴의 구조와 탄력 저하 부위를 고려해 샷을 배치합니다."],
      ["정품 원칙", "정품 팁과 소모품 사용 원칙을 바탕으로 시술합니다."],
    ],
    concerns: ["피부 탄력", "얼굴 윤곽", "잔주름", "처짐 개선"],
    process: [
      ["윤곽 분석", "탄력 저하 부위와 얼굴의 구조적 균형을 확인합니다."],
      ["시술 디자인", "샷 배치와 리프팅 방향을 피부 위에 세밀하게 설계합니다."],
      ["고주파 조사", "피부 반응을 확인하며 부위별로 에너지를 전달합니다."],
      ["마무리 확인", "열감과 피부 상태를 확인하고 홈케어 방법을 안내합니다."],
    ],
    aftercare: [
      "시술 직후 일상생활이 가능하지만 열감이 잠시 남을 수 있습니다.",
      "당일에는 사우나와 과격한 운동처럼 열을 높이는 활동을 피합니다.",
      "충분한 보습과 자외선 차단으로 피부를 편안하게 관리해 주세요.",
    ],
  },
  {
    slug: "vbeam-perfecta",
    name: "브이빔 퍼펙타",
    en: "VBEAM PERFECTA",
    copy:
      "선택적으로 반응하는 파장을 이용해 홍조와 붉은자국, 혈관 병변 섬세하게 케어하는 레이저",
    type: "drop" as const,
    eyebrow: "Vascular Laser Treatment",
    image:
      "https://images.unsplash.com/photo-1689103722266-1f2f837145e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
    imageAlt: "의료진이 장비를 조작하며 피부 시술을 준비하는 모습",
    description:
      "혈관 속 헤모글로빈에 선택적으로 반응하는 파장을 이용해 홍조와 붉은 자국, 혈관 병변을 섬세하게 치료합니다.",
    principle:
      "브이빔 퍼펙타는 595nm 펄스 다이 레이저로 혈관 속 헤모글로빈에 선택적으로 흡수되는 빛을 전달합니다. 혈관의 굵기와 깊이에 맞춰 펄스 폭과 에너지를 조절하며, DCD 냉각 시스템이 레이저 조사 직전 피부 표면을 보호합니다. 홍조의 원인이 다양하므로 피부 질환과 생활 요인을 함께 살펴 치료 범위를 정합니다.",
    technology: [
      ["파장", "595nm"],
      ["에너지 방식", "펄스 다이 레이저"],
      ["보호 시스템", "DCD 냉각"],
      ["맞춤 설정", "펄스·스폿·강도"],
    ],
    strengths: [
      ["혈관 병변 선택 치료", "주변 피부 조직의 부담을 줄이며 혈관을 선택적으로 타깃합니다."],
      ["쿨링 시스템", "레이저 조사 전 피부를 보호하는 냉각 시스템을 적용합니다."],
      ["단계별 치료 계획", "붉음의 원인과 혈관 상태에 맞춰 강도와 횟수를 조절합니다."],
    ],
    concerns: ["안면 홍조", "여드름 붉은 자국", "실핏줄", "혈관 병변"],
    process: [
      ["혈관 진단", "붉음의 원인과 혈관의 굵기, 분포를 확인합니다."],
      ["파라미터 설정", "치료 목적에 맞춰 펄스 폭과 스폿, 강도를 조절합니다."],
      ["레이저 조사", "냉각 시스템과 함께 필요한 혈관 부위를 조사합니다."],
      ["피부 진정", "시술 부위를 진정시키고 예상되는 반응을 안내합니다."],
    ],
    aftercare: [
      "붉음, 부기 또는 자주색 반응이 일시적으로 나타날 수 있습니다.",
      "시술 부위를 문지르거나 강한 열에 노출하지 않도록 주의합니다.",
      "보습과 자외선 차단을 꼼꼼히 하고 안내된 재진 일정을 지켜 주세요.",
    ],
  },
]

type Equipment = (typeof equipment)[number]

function EquipmentDetailPage({
  item,
  onBack,
  onContact,
}: {
  item: Equipment
  onBack: () => void
  onContact: () => void
}) {
  return (
    <main className="pt-20">
      <section className="overflow-hidden bg-teal-950 text-white">
        <div className="mx-auto grid min-h-[600px] max-w-7xl px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-center py-20 lg:py-28">
            <button
              onClick={onBack}
              className="mb-14 flex w-fit items-center gap-3 text-xs font-semibold tracking-[0.16em] text-teal-200 uppercase transition-colors hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Medical Technology
            </button>
            <p className="text-xs font-semibold tracking-[0.22em] text-teal-300 uppercase">
              {item.eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.04em] sm:text-6xl">
              {item.name}
            </h1>
            <p className="mt-3 text-sm tracking-[0.12em] text-white/45">
              {item.en}
            </p>
            <p className="mt-9 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              {item.description}
            </p>
            <button
              onClick={onContact}
              className="group mt-10 flex w-fit items-center gap-12 bg-white px-6 py-4 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-50"
            >
              진료 상담 예약
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border-white/15 lg:min-h-full lg:border-l">
            <img
              src={item.image}
              alt={item.imageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-teal-950/10" />
            <div className="absolute right-6 bottom-6 left-6 flex items-end justify-between border-t border-white/30 pt-4 text-white md:right-8 md:bottom-8 md:left-8">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">
                Medical Technology
              </span>
              <span className="font-serif text-4xl">
                0
                {equipment.findIndex(
                  (equipmentItem) => equipmentItem.slug === item.slug,
                ) + 1}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5ef] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
                Treatment Focus
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em]">
                피부 상태에 맞춘
                <br />
                섬세한 치료 설계
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {item.strengths.map(([title, copy], index) => (
                <article
                  key={title}
                  className="border-t border-stone-900/20 py-6 md:px-5 md:first:pl-0"
                >
                  <span className="font-serif text-sm text-teal-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-500">{copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 border-y border-stone-900/15 py-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-stone-400 uppercase">
              Recommended For
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {item.concerns.map((concern) => (
                <span
                  key={concern}
                  className="border border-teal-900/20 bg-white px-5 py-3 text-sm font-medium text-teal-950"
                >
                  {concern}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs leading-6 text-stone-400">
            개인의 피부 상태에 따라 적합한 시술과 치료 횟수는 달라질 수 있으며,
            피부과 전문의의 진단 후 결정됩니다.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
              How It Works
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
              장비의 원리와
              <br />
              치료 메커니즘
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-stone-600 md:text-lg md:leading-9">
              {item.principle}
            </p>
            <dl className="mt-12 grid grid-cols-2 border-t border-stone-900/15 md:grid-cols-4">
              {item.technology.map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-stone-900/15 py-6 even:pl-5 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0"
                >
                  <dt className="text-[10px] font-semibold tracking-[0.15em] text-stone-400 uppercase">
                    {label}
                  </dt>
                  <dd className="mt-3 text-sm font-semibold text-teal-950">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#dfe9e4] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-teal-800 uppercase">
                Treatment Process
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em]">
                진단부터 진정까지
                <br />
                차분하게 진행합니다
              </h2>
            </div>
            <ol className="grid gap-x-8 gap-y-10 md:grid-cols-2">
              {item.process.map(([title, copy], index) => (
                <li key={title} className="border-t border-teal-950/20 pt-5">
                  <span className="font-serif text-sm text-teal-700">
                    STEP 0{index + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-teal-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{copy}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20 grid gap-8 border-t border-teal-950/20 pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-teal-800 uppercase">
                After Care
              </p>
              <h3 className="mt-4 font-serif text-2xl">시술 후 관리 안내</h3>
            </div>
            <ul className="space-y-4">
              {item.aftercare.map((care) => (
                <li
                  key={care}
                  className="flex gap-3 text-sm leading-7 text-stone-600"
                >
                  <Check className="mt-1 size-4 shrink-0 text-teal-800" />
                  {care}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 bg-teal-950 p-8 text-white md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-teal-300 uppercase">
                Personal Consultation
              </p>
              <p className="mt-3 font-serif text-2xl">
                내 피부에 맞는 치료인지 전문의와 상담하세요.
              </p>
            </div>
            <button
              onClick={onContact}
              className="group flex shrink-0 items-center gap-8 bg-white px-6 py-4 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-50"
            >
              상담 예약
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [promotionOpen, setPromotionOpen] = useState(false)
  const getEquipmentSlug = () =>
    window.location.hash.match(/^#\/equipment\/([^/]+)$/)?.[1] ?? null
  const [activeEquipmentSlug, setActiveEquipmentSlug] = useState<string | null>(
    getEquipmentSlug,
  )
  const activeEquipment =
    equipment.find((item) => item.slug === activeEquipmentSlug) ?? null

  useEffect(() => {
    const handleHashChange = () => {
      setActiveEquipmentSlug(getEquipmentSlug())
      window.scrollTo({ top: 0 })
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  useEffect(() => {
    if (activeEquipment) {
      setPromotionOpen(false)
      return
    }

    const today = new Date().toLocaleDateString("en-CA")
    const dismissedDate = window.localStorage.getItem(
      "gyeol-october-promotion-dismissed",
    )
    setPromotionOpen(dismissedDate !== today)
  }, [activeEquipment])

  useEffect(() => {
    if (!promotionOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPromotionOpen(false)
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [promotionOpen])

  const dismissPromotionToday = () => {
    const today = new Date().toLocaleDateString("en-CA")
    window.localStorage.setItem("gyeol-october-promotion-dismissed", today)
    setPromotionOpen(false)
  }

  const scrollTo = (id: string) => {
    setMenuOpen(false)

    if (activeEquipment) {
      window.history.pushState(null, "", window.location.pathname)
      setActiveEquipmentSlug(null)
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 0)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const openEquipment = (slug: string) => {
    window.location.hash = `/equipment/${slug}`
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

      {promotionOpen && !activeEquipment && (
        <div
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="promotion-title"
            className="pointer-events-auto flex max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl flex-col overflow-hidden bg-[#f7f5ef] shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
          >
            <div className="relative shrink-0 overflow-hidden bg-teal-950 px-6 py-7 text-white sm:px-9 sm:py-9">
              <div className="absolute -top-16 -right-12 size-44 rounded-full border border-teal-300/15" />
              <div className="absolute -top-6 -right-2 size-24 rounded-full border border-teal-300/15" />
              <p className="text-[10px] font-semibold tracking-[0.24em] text-teal-300 uppercase">
                October Special Event
              </p>
              <h2
                id="promotion-title"
                className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-4xl"
              >
                10월 할인 행사
              </h2>
              <p className="mt-3 text-xs leading-5 text-white/55">
                결 피부과가 준비한 이달의 특별한 혜택을 확인해 보세요.
              </p>
            </div>

            <div className="overflow-y-auto px-5 py-2 sm:px-9">
              {octoberPromotions.map((group, groupIndex) => (
                <article
                  key={group.accent}
                  className="border-b border-stone-900/10 py-6 last:border-b-0"
                >
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-serif text-lg leading-snug text-stone-900 sm:text-xl">
                      {group.title}{" "}
                      <strong className="font-medium text-teal-800">
                        {group.accent}
                      </strong>
                    </h3>
                    <span className="shrink-0 font-serif text-xs text-teal-700">
                      0{groupIndex + 1}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {group.items.map(([name, originalPrice, salePrice]) => (
                      <li
                        key={name}
                        className="grid gap-1 text-xs sm:grid-cols-[1fr_auto] sm:items-end sm:gap-5 sm:text-sm"
                      >
                        <span className="leading-5 text-stone-600">
                          {name}
                        </span>
                        <span className="flex items-center gap-2 whitespace-nowrap">
                          <del className="text-[11px] text-stone-400">
                            {originalPrice}
                          </del>
                          <strong className="text-sm text-teal-900 sm:text-base">
                            {salePrice}
                          </strong>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <p className="pb-5 text-[10px] leading-5 text-stone-400">
                이벤트 구성과 적용 여부는 피부 상태 및 진료 결과에 따라 달라질
                수 있습니다.
              </p>
            </div>

            <div className="grid shrink-0 grid-cols-2 border-t border-stone-900/10 bg-white">
              <button
                type="button"
                onClick={dismissPromotionToday}
                className="border-r border-stone-900/10 px-4 py-4 text-xs font-medium text-stone-500 transition-colors hover:bg-stone-50 hover:text-teal-900 sm:text-sm"
              >
                오늘 그만 보기
              </button>
              <button
                type="button"
                onClick={() => setPromotionOpen(false)}
                className="px-4 py-4 text-xs font-semibold text-teal-900 transition-colors hover:bg-teal-50 sm:text-sm"
              >
                닫기
              </button>
            </div>
          </section>
        </div>
      )}

      {activeEquipment ? (
        <EquipmentDetailPage
          item={activeEquipment}
          onBack={() => scrollTo("equipment")}
          onContact={() => scrollTo("contact")}
        />
      ) : (
      <main id="top">
        <section className="relative overflow-hidden pt-20">
          <div className="relative min-h-[calc(100svh-5rem)] w-full">
            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-center px-5 py-20 md:px-8 lg:py-28">
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-teal-200 uppercase">
                <span className="h-px w-10 bg-teal-200" />
                피부과 전문의가 직접 진료합니다
              </p>
              <h1 className="max-w-2xl font-serif text-3xl leading-[1.12] font-medium tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                <span className="block whitespace-nowrap">
                  피부의 결을 읽고,
                </span>
                <span className="block whitespace-nowrap">
                  <em className="font-normal text-teal-200 not-italic">
                    본연의 아름다움
                  </em>
                  을 찾다
                </span>
              </h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-white/75 md:text-lg">
                정확한 진단, 검증된 장비, 섬세한 시술.
                <br className="hidden sm:block" />결 피부과는 당신의 피부에
                필요한 것만 제안합니다.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center gap-8 bg-white px-6 py-4 text-sm font-semibold text-teal-950 transition-colors hover:bg-teal-50"
                >
                  진료 상담 예약
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => scrollTo("equipment")}
                  className="flex items-center gap-2 border border-white/60 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  보유 장비 보기
                </button>
              </div>
              <div className="mt-16 grid max-w-lg grid-cols-3 border-t border-white/25 pt-7">
                <div>
                  <strong className="font-serif text-2xl text-white">
                    1:1
                  </strong>
                  <p className="mt-1 text-xs text-white/60">
                    전문의 맞춤 진료
                  </p>
                </div>
                <div className="border-l border-white/20 pl-5">
                  <strong className="font-serif text-2xl text-white">
                    9종+
                  </strong>
                  <p className="mt-1 text-xs text-white/60">프리미엄 장비</p>
                </div>
                <div className="border-l border-white/20 pl-5">
                  <strong className="font-serif text-2xl text-white">
                    정품
                  </strong>
                  <p className="mt-1 text-xs text-white/60">팁·소모품 원칙</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={heroImage}
                alt="전문 의료진에게 피부 시술을 받는 모습"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,47,46,0.96)_0%,rgba(4,47,46,0.82)_42%,rgba(4,47,46,0.2)_75%,rgba(4,47,46,0.08)_100%)] max-md:bg-teal-950/75" />
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

            <div className="mt-16 grid overflow-hidden border-t border-white/20 lg:[&>button]:border-b lg:[&>button]:border-l-0 xl:grid-cols-3 xl:[&>button]:border-b-0 xl:[&>button+button]:border-l xl:[&>button>div:last-child>p:last-child]:text-[11px] [&>button]:min-w-0 [&>button]:overflow-hidden">
              {equipment.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => openEquipment(item.slug)}
                  aria-label={`${item.name} 상세 페이지 보기`}
                  className={`group flex min-h-[19rem] cursor-pointer flex-col border-b border-white/20 px-7 py-9 text-left transition-colors hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal-200 lg:border-b-0 lg:px-8 ${
                    index > 0 ? "lg:border-l" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-teal-300">
                      <LineIcon type={item.type} />
                    </span>
                    <span className="text-xs text-white/35">0{index + 1}</span>
                  </div>
                  <div className="mt-auto pt-12">
                    <p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-teal-300">
                      {item.en}
                    </p>
                    <h3 className="font-serif text-3xl">{item.name}</h3>
                    <p className="mt-4 max-w-xs text-xs leading-6 text-white/55 xl:!text-sm">
                      {item.copy}
                    </p>
                  </div>
                </button>
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
                href="tel:02-123-4567"
                className="font-serif text-3xl text-teal-950 transition-colors hover:text-teal-700 md:text-4xl"
              >
                02-123-4567
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
      )}

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
