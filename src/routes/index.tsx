import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Quote, ChevronDown, ChevronLeft, ChevronRight, MessageCircle, Send, Menu, X } from "lucide-react";

import imgGathering from "@/assets/redkino-yard-gathering.jpg";
import imgFrontEntrance from "@/assets/redkino-house-front-entrance.jpg";
import imgDriveway from "@/assets/redkino-house-driveway-front.png";
import imgLilac from "@/assets/redkino-guests-lilac-photo.jpg";
import imgBenchPath from "@/assets/redkino-garden-bench-path.png";
import imgPathHouse from "@/assets/redkino-garden-path-house.jpg";
import imgBooklet from "@/assets/redkino-recovery-booklet-grass.png";
import imgWorkDetail from "@/assets/redkino-community-work-detail.png";
import imgGreenYard from "@/assets/redkino-green-yard-trees.png";
import imgTableTree from "@/assets/redkino-house-seating-zone.jpg";
import imgOutdoorSeating from "@/assets/outdoor-seating-area.jpg";
import imgCupWindow from "@/assets/redkino-cup-window.png";
import imgGardenBench from "@/assets/redkino-garden-bench-path.png";
import imgBookletField from "@/assets/redkino-booklet-field-towers.jpg";
import imgFourGirls from "@/assets/redkino-four-girls-lilac.jpg";
import imgThreeGuys from "@/assets/redkino-three-guys-yard.png";
import imgGardenPathFence from "@/assets/redkino-garden-path-fence.png";
import imgHouseBenches from "@/assets/redkino-house-side-benches.jpg";
import imgGroupPhoto from "@/assets/redkino-community-group-photo.jpg";



// Aliases used across sections
const heroHouse = imgDriveway;
const quietCup = imgFrontEntrance;
const peopleThree = imgGroupPhoto;
const yard = imgGreenYard;
const gardenWork = imgPathHouse;
const exitExists = imgDriveway;
const bookletField = imgBooklet;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Дом милосердия — помощь людям с зависимостью" },
      { name: "description", content: "Реальный дом, где помогают вернуться к жизни. Без давления, без агрессии — спокойная среда, программа восстановления и поддержка людей рядом." },
      { property: "og:title", content: "Дом милосердия" },
      { property: "og:description", content: "Место, где помогают вернуться к жизни." },
      { property: "og:image", content: heroHouse },
    ],
  }),
  component: Index,
});

// ────────── shared bits ──────────

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </span>
  );
}

function SquareButton({
  children,
  variant = "dark",
  href,
  icon,
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "accent" | "outline";
  href?: string;
  icon?: React.ReactNode;
}) {
  const styles = {
    dark: "bg-foreground text-background hover:bg-foreground/90",
    light: "bg-background text-foreground hover:bg-background/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border border-foreground/30 text-foreground hover:bg-foreground/5",
  }[variant];
  const cls = `inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-colors ${styles}`;
  if (href) return <a href={href} className={cls}>{children}{icon}</a>;
  return <button className={cls}>{children}{icon}</button>;
}

// ────────── 1. HERO ──────────

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const navItems = [
    { href: "#about", label: "О доме" },
    { href: "#program", label: "Программа" },
    { href: "#stories", label: "Истории" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <section className="px-4 pt-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px]">
        <img
          src={heroHouse}
          alt="Фасад дома милосердия с зелёной крышей и людьми у входа"
          className="h-[78vh] min-h-[560px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/55 to-foreground/80" />

        {/* top bar */}
        <div className="absolute inset-x-0 top-0 flex flex-wrap items-center justify-between gap-y-3 px-6 py-5 md:px-10">
          <div className="text-background">
            <div className="text-[11px] uppercase tracking-[0.25em] opacity-80">Редькино</div>
            <div className="text-lg font-semibold">Дом милосердия</div>
          </div>
          <nav className="hidden gap-7 text-sm text-background/90 md:flex md:ml-auto lg:ml-0">
            <a href="#about" className="hover:text-background">О доме</a>
            <a href="#program" className="hover:text-background">Программа</a>
            <a href="#stories" className="hover:text-background">Истории</a>
            <a href="#faq" className="hover:text-background">FAQ</a>
            <a href="#contacts" className="hover:text-background">Контакты</a>
          </nav>
          <div className="flex items-center gap-2 md:w-full md:justify-end lg:w-auto">
            <a
              href="https://vk.com/club229358857"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ВКонтакте"
              className="inline-flex h-10 w-10 items-center justify-center border border-background/50 text-background/90 transition-colors hover:bg-background/10"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                <path d="M3 7c.6 6 3.6 9.6 8.5 9.8h.6V13c1.9.2 3.3 1.6 3.9 3.8h2.9c-.7-2.9-2.8-4.6-4.1-5.2 1.3-.8 3.2-2.6 3.6-5.1h-2.6c-.6 2-2.2 3.8-3.7 4V6.5H9.5v7.7C8 14 6 12 5.9 7H3z"/>
              </svg>
            </a>
            <a
              href="https://t.me/NovayaZhi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="inline-flex h-10 w-10 items-center justify-center border border-background/50 text-background/90 transition-colors hover:bg-background/10"
            >
              <Send size={16} strokeWidth={1.6} />
            </a>
          </div>

        </div>

        {/* floating mobile hamburger — sticks while scrolling */}
        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className={`fixed right-4 z-40 inline-flex h-11 w-11 items-center justify-center border border-background/60 bg-foreground/70 text-background backdrop-blur-md transition-all duration-300 hover:bg-foreground/85 md:hidden ${scrolled ? "top-4" : "top-24"}`}
        >
          <Menu size={20} strokeWidth={1.6} />
        </button>



        {/* mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-foreground text-background md:hidden">
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] opacity-80">Редькино</div>
                <div className="text-lg font-semibold">Дом милосердия</div>
              </div>
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center border border-background/50 text-background/90 transition-colors hover:bg-background/10"
              >
                <X size={18} strokeWidth={1.6} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-2 px-6 pt-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-background/15 py-4 text-2xl font-medium tracking-tight hover:text-background/80"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 px-6 pb-8">
              <a
                href="https://vk.com/club229358857"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                className="inline-flex h-10 w-10 items-center justify-center border border-background/50 text-background/90 transition-colors hover:bg-background/10"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M3 7c.6 6 3.6 9.6 8.5 9.8h.6V13c1.9.2 3.3 1.6 3.9 3.8h2.9c-.7-2.9-2.8-4.6-4.1-5.2 1.3-.8 3.2-2.6 3.6-5.1h-2.6c-.6 2-2.2 3.8-3.7 4V6.5H9.5v7.7C8 14 6 12 5.9 7H3z"/>
                </svg>
              </a>
              <a
                href="https://t.me/NovayaZhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-10 w-10 items-center justify-center border border-background/50 text-background/90 transition-colors hover:bg-background/10"
              >
                <Send size={16} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        )}



        {/* bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
          <div className="max-w-3xl text-background">
            <h1 className="text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.05] whitespace-pre-line">
              Место, где помогают{"\n"}вернуться к жизни.
            </h1>
            <p className="mt-5 max-w-xl text-base text-background/85 md:text-lg">
              Реальный дом. Спокойная среда. Люди, которые рядом. Без давления, без обещаний чуда — только честная работа над собой и быт, в котором можно дышать.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+79262174777"
                className="group inline-flex h-16 items-center gap-4 bg-background px-7 text-left text-foreground transition-colors hover:bg-background/90"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-foreground/55">Позвонить</span>
                  <span className="text-[15px] font-medium">Владимир</span>
                </span>
              </a>
              <a
                href="tel:+79998653092"
                className="group inline-flex h-16 items-center gap-4 border border-background/55 px-7 text-left text-background transition-colors hover:border-background hover:bg-background/10"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-background/65">Позвонить</span>
                  <span className="text-[15px] font-medium">Виктория</span>
                </span>
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

// ────────── 2. Короткий смысловой блок ──────────

function MeaningStrip() {
  return (
    <section className="px-4 pb-24 pt-6 md:pb-32 md:pt-8">
      <div className="mx-auto mb-12 flex max-w-[1400px] justify-center md:mb-16 md:justify-start">
        <div className="inline-flex items-center gap-2 border-2 border-foreground px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.08_135)]" />
          Помощь людям с зависимостью
        </div>
      </div>
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Kicker>Главное</Kicker>
          <h2 className="mt-4 text-3xl leading-[1.15] md:text-5xl">
            Зависимость — не приговор.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-xl leading-relaxed text-foreground/80 md:text-2xl">
            Это сигнал, что человеку нужна помощь, среда и новый путь. Один шаг — позвонить или приехать — уже меняет всё. Дальше идём вместе.
          </p>
          <div className="mt-8 h-px w-24 bg-foreground/30" />
        </div>
      </div>
    </section>
  );
}

// ────────── 3. О доме (bento) ──────────

function AboutHouse() {
  return (
    <section id="about" className="relative bg-background">

      <div className="rounded-t-3xl bg-foreground/[0.04] px-4 pt-20 pb-20">
        <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>О доме</Kicker>
            <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl">
              Не клиника. Не центр продаж. Просто дом, в котором живут.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* wide */}
          <div className="relative col-span-1 overflow-hidden rounded-3xl md:col-span-2">
            <img src={quietCup} alt="Тишина и быт дома: кружка у окна" className="h-[460px] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-background/70">Тишина</div>
              <div className="mt-2 max-w-md text-xl text-background">Утро без спешки. Кружка чая. Окно, в которое можно смотреть и думать.</div>
            </div>
          </div>

          {/* narrow dark card */}
          <div className="rounded-3xl bg-card p-7 text-card-foreground">
            <Quote className="text-[oklch(0.7_0.08_115)]" size={32} />
            <p className="mt-5 text-lg leading-relaxed">
              «Сюда приезжают, когда сил уже нет. И отсюда уезжают, когда они появились снова».
            </p>
            <div className="mt-8 border-t border-card-foreground/15 pt-5">
              <div className="text-sm font-medium">Владимир Ткачёв</div>
              <div className="text-xs text-card-foreground/60">Руководитель дома</div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border-2 border-card p-7 text-foreground md:col-span-2">
            <div className="text-5xl font-semibold leading-none">Изнутри</div>
            <div className="mt-2 text-sm text-foreground/60">причины, а не последствия</div>
            <p className="mt-6 text-sm leading-relaxed text-foreground/80">
              Каждый день — занятия, направленные на выявление причин употребления. Употребление — это следствие; причины внутри: душевные и духовные. В доме меняются ценности человека — те, что были утрачены или искажены прежним образом жизни.
            </p>
          </div>
          <div className="rounded-3xl bg-card p-7 text-card-foreground">
            <div className="text-5xl font-semibold">365</div>
            <div className="mt-2 text-sm text-card-foreground/70">дней рядом</div>
            <p className="mt-6 text-sm leading-relaxed text-card-foreground/80">
              Распорядок, общие дела, разговоры по вечерам. Жизнь, в которой есть структура и тепло.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

// ────────── 4. Программа восстановления ──────────

function Program() {
  const items = [
    { n: "01", title: "Восстановление личности", text: "Возвращение к себе: тому, кем человек был до зависимости, и тому, кем хочет стать." },
    { n: "02", title: "Работа с ценностями и привычками", text: "Что важно, что разрушает, что строит. Простые честные разговоры и ежедневные шаги." },
    { n: "03", title: "Спокойный быт и ответственность", text: "Распорядок, общие дела, забота о месте, в котором живёшь. Маленькая ответственность — большая опора." },
    { n: "04", title: "Поддержка людей рядом", text: "Те, кто прошёл этот путь, и те, кто идёт сейчас. Никто не справляется в одиночку." },
  ];
  return (
    <section id="program" className="bg-foreground/[0.04]">
      <div className="rounded-t-3xl bg-background px-4 py-20">
        <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker>Программа</Kicker>
            <h2 className="mt-3 text-3xl md:text-5xl">Что происходит в восстановлении</h2>
          </div>
          <p className="text-lg text-foreground/75 md:col-span-6 md:col-start-7">
            Не лечение. Не курсы. Процесс, в котором человек постепенно собирает себя. Четыре опоры, на которых стоит всё остальное.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.n} className="border-t border-foreground/15 pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-accent">{it.n}</span>
                <ArrowUpRight size={18} className="text-foreground/50" />
              </div>
              <h3 className="mt-4 text-2xl">{it.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/70">{it.text}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

// ────────── 5. Жизнь в доме (3 фото) ──────────

function LifeInHouse() {
  return (
    <section className="rounded-t-3xl bg-foreground/[0.04] px-4 py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Жизнь в доме</Kicker>
            <h2 className="mt-3 text-3xl md:text-5xl">Обычные дни. Настоящие люди.</h2>
          </div>
          <p className="max-w-md text-base text-foreground/70">
            Без постановочных кадров. Двор, общая работа, простые разговоры — то, из чего складывается восстановление.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: peopleThree, label: "Люди", caption: "Те, кто рядом каждый день" },
            { src: yard, label: "Двор", caption: "Место, где можно дышать" },
            { src: gardenWork, label: "Дело", caption: "Огород, хозяйство, общий труд" },
          ].map((it) => (
            <figure key={it.label} className="group relative overflow-hidden rounded-3xl">
              <img src={it.src} alt={it.caption} className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-background">
                <div className="text-[11px] uppercase tracking-[0.2em] opacity-75">{it.label}</div>
                <div className="mt-1 text-lg">{it.caption}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────── 6. Видео-истории (карусель) ──────────

const stories = [
  { name: "", age: null, city: "", text: "Ролик с ребятами которые были в разных ситуациях разрушавших их жизнь и  жизнь близких. Теперь всё намного лучше. Мы рады", videoUrl: "https://vk.ru/clip_ext.php?oid=-229358857&id=456239040" },
  { name: "Ольга и Денис", age: null, city: "", text: "Ольга и Денис когда-то решили на время оставить ребёнка, чтобы восстановить свою жизнь и растить его уже в здоровой атмосфере. Пока человек в зависимости, желания вернуться к семье, помогать близким и закрывать долги только усугубляют ситуацию — сначала нужно восстановиться самому. Время на программе — это не потерянные месяцы, а вклад в здоровое будущее.", videoUrl: "https://vk.ru/clip_ext.php?oid=-229358857&id=456239144" },
  { name: "", age: null, city: "", text: "Если рядом с вами есть человек, попавший в зависимость, — обращайтесь за консультацией, не оставайтесь с этим один на один. Важно не соглашаться с проблемой и не позволять собой манипулировать, но и не переставать верить в человека. Именно эта позиция близких часто и помогает ему сделать первый шаг к восстановлению.", videoUrl: "https://vk.ru/clip_ext.php?oid=-229358857&id=456239066" },
  { name: "", age: null, city: "", text: "В гостях у ребят, в Доме Восстановления! Можно ли хорошо и весело проводить время в трезвости? Однозначно — да!", videoUrl: "https://vk.ru/clip_ext.php?oid=-229358857&id=456239058" },
  { name: "", age: null, city: "", text: "Когда ребёнок угасает от зависимости, материнский инстинкт командует «спасай» — и мать действует так, как умела всегда: с ветрянкой, ангиной, ушибами. Именно здесь стирается грань между здоровой помощью и созависимостью. Но наркомания — не ветрянка, и прежними методами её не победить.", videoUrl: "https://vk.ru/clip_ext.php?oid=-229358857&id=456239113" },
];


function VideoStories() {
  const [i, setI] = useState(0);
  const s = stories[i];
  return (
    <section id="stories" className="bg-foreground/[0.04] text-background">
      <div className="rounded-t-3xl bg-foreground px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6 lg:mb-4">
          <div>
            <Kicker><span className="text-background/60">Истории</span></Kicker>
            <h2 className="mt-3 text-3xl md:text-5xl">Живые голоса</h2>
          </div>
          <p className="max-w-md text-base text-background/70 lg:hidden">
            Люди, которе с нами. Без сценария, без правильных слов — как есть.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16 xl:gap-20">
          {/* video 9:16 */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative aspect-[9/16] w-full max-w-[380px] lg:w-[clamp(280px,38vh,360px)] overflow-hidden rounded-3xl bg-background/5 ring-1 ring-background/10">
              {s.videoUrl ? (
                <iframe
                  key={s.videoUrl}
                  src={s.videoUrl}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                  allowFullScreen
                  frameBorder="0"
                  title={`История ${s.name}`}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-background/40">
                  <div className="text-xs uppercase tracking-[0.2em]">VK Видео</div>
                  <div className="mt-2 text-sm">9:16 · история {i + 1}</div>
                </div>
              )}
              <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 bg-background/10 px-3 py-1.5 text-xs backdrop-blur-sm">
                {String(i + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* text */}
          <div className="order-2 flex flex-col justify-between">

            <div className="hidden md:block">
              <p className="hidden max-w-md text-base text-background/70 lg:mb-8 lg:block xl:mb-10">
                Люди, которе с нами. Без сценария, без правильных слов — как есть.
              </p>

              <div className="inline-flex items-center gap-2 border border-background/25 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-background/80">
                <Quote size={12} /> Цитата
              </div>
              <p className="mt-5 text-2xl leading-relaxed text-background/95 md:text-3xl lg:mt-6 lg:text-2xl xl:text-3xl">
                «{s.text}»
              </p>
              {s.name && (
                <>
                  <div className="mt-6 h-px w-16 bg-background/30" />
                  <div className="mt-5">
                    <div className="text-lg font-medium">
                      {s.name}{s.age ? `, ${s.age}` : ""}
                    </div>
                    {s.city && <div className="text-sm text-background/60">{s.city}</div>}
                  </div>
                </>
              )}
            </div>

            {/* controls */}
            <div className="mt-6 flex items-center gap-4 md:mt-10 lg:mt-8">
              <button
                onClick={() => setI((i - 1 + stories.length) % stories.length)}
                className="inline-flex h-12 w-12 items-center justify-center border border-background/30 text-background hover:bg-background/10"
                aria-label="Предыдущая история"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setI((i + 1) % stories.length)}
                className="inline-flex h-12 w-12 items-center justify-center bg-background text-foreground hover:bg-background/90"
                aria-label="Следующая история"
              >
                <ChevronRight size={18} />
              </button>
              <div className="ml-3 flex gap-1.5">
                {stories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    className={`h-1 transition-all ${idx === i ? "w-8 bg-background" : "w-4 bg-background/30 hover:bg-background/50"}`}
                    aria-label={`История ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

// ────────── 7 + 8. Адаптация + Родственники ──────────

function AfterAndFamily() {
  return (
    <section className="bg-foreground">
      <div className="bg-background px-4 py-24">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-card p-8 text-card-foreground md:p-12">
          <Kicker><span className="text-card-foreground/60">После программы</span></Kicker>
          <h3 className="mt-4 text-3xl md:text-4xl">Дальше — не в одиночку.</h3>
          <p className="mt-5 text-base leading-relaxed text-card-foreground/80">
            После дома человек не остаётся один. Есть адаптационная квартира, волонтёрское сообщество, помощь с возвращением к работе и в семью. Темп выбирает сам человек — никто не торопит.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-card-foreground/75">
            {["Адаптационная квартира", "Волонтёрское сопровождение", "Возвращение в работу и семью", "Спокойный темп без давления"].map((t) => (
              <li key={t} className="flex items-center gap-3 border-t border-card-foreground/10 pt-3">
                <span className="h-1.5 w-1.5 bg-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border-2 border-foreground/40 p-8 md:p-12">
          <Kicker>Для родственников</Kicker>
          <h3 className="mt-4 text-3xl md:text-4xl">Близким тоже нужна поддержка.</h3>
          <p className="mt-5 text-base leading-relaxed text-foreground/75">
            Желание спасти любимого человека часто переходит в созависимость и истощение. Мы говорим с родственниками отдельно — мягко, без оценок — и помогаем найти правильную форму помощи. Чтобы хватило сил на длинную дорогу.
          </p>
          <div className="mt-8">
            <SquareButton variant="dark" href="#contacts" icon={<ArrowUpRight size={16} />}>
              Поговорить с нами
            </SquareButton>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

// ────────── 9. Галерея ──────────

function Gallery() {
  return (
    <section className="relative bg-background">

      <div className="rounded-t-3xl bg-foreground/[0.04] px-4 pt-20 pb-24">
        <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker>Галерея</Kicker>
            <h2 className="mt-3 text-3xl md:text-5xl">Атмосфера дома</h2>
          </div>
        </div>

        {/* Mobile (<md) — старая раскладка */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          <img src={imgLilac} alt="Жильцы дома" className="col-span-2 aspect-[2/1] w-full rounded-2xl object-cover" />
          <img src={imgThreeGuys} alt="Гости дома во дворе" className="aspect-square w-full rounded-2xl object-cover" />
          <img src={imgBooklet} alt="Буклет «Выход есть»" className="row-span-2 h-full w-full rounded-2xl object-cover object-left" />
          <img src={imgCupWindow} alt="Кружка у окна" className="aspect-square w-full rounded-2xl object-cover object-top" />
          <img src={imgHouseBenches} alt="Дом со скамейками во дворе" className="aspect-square w-full rounded-2xl object-cover" />
          <img src={imgGardenBench} alt="Сад со скамейкой и дорожкой" className="aspect-square w-full rounded-2xl object-cover" />
          <div className="col-start-2 flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-foreground p-4">
            <div className="flex items-center gap-3">
              <a
                href="https://vk.com/club229358857"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                className="inline-flex h-10 w-10 items-center justify-center border border-foreground/40 text-foreground transition-colors hover:bg-foreground/5"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M3 7c.6 6 3.6 9.6 8.5 9.8h.6V13c1.9.2 3.3 1.6 3.9 3.8h2.9c-.7-2.9-2.8-4.6-4.1-5.2 1.3-.8 3.2-2.6 3.6-5.1h-2.6c-.6 2-2.2 3.8-3.7 4V6.5H9.5v7.7C8 14 6 12 5.9 7H3z"/>
                </svg>
              </a>
              <a
                href="https://t.me/NovayaZhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-10 w-10 items-center justify-center border border-foreground/40 text-foreground transition-colors hover:bg-foreground/5"
              >
                <Send size={16} strokeWidth={1.6} />
              </a>
            </div>
            <div className="text-center text-xs text-foreground/70">Больше медиа в наших группах</div>
          </div>
        </div>

        {/* Tablet + Desktop (md+) — бенто 13×2 */}
        <div className="hidden aspect-[1024/640] gap-4 grid-cols-[repeat(13,minmax(0,1fr))] grid-rows-2 md:grid lg:aspect-[1440/880] lg:gap-5">
          <img src={imgBookletField} alt="Буклет «Выход есть» в поле" className="h-full w-full rounded-2xl object-cover col-span-3" />
          <img src={imgFourGirls} alt="Гости дома у куста сирени" className="h-full w-full rounded-2xl object-cover col-span-7" />
          <img src={imgThreeGuys} alt="Гости дома во дворе" className="h-full w-full rounded-2xl object-cover col-span-3" />
          <img src={imgGardenPathFence} alt="Дорожка и сад у забора" className="h-full w-full rounded-2xl object-cover col-span-7" />
          <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-2xl border-2 border-foreground p-6 col-span-3">
            <div className="flex items-center gap-4">
              <a
                href="https://vk.com/club229358857"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                className="inline-flex h-10 w-10 items-center justify-center border border-foreground/40 text-foreground transition-colors hover:bg-foreground/5"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M3 7c.6 6 3.6 9.6 8.5 9.8h.6V13c1.9.2 3.3 1.6 3.9 3.8h2.9c-.7-2.9-2.8-4.6-4.1-5.2 1.3-.8 3.2-2.6 3.6-5.1h-2.6c-.6 2-2.2 3.8-3.7 4V6.5H9.5v7.7C8 14 6 12 5.9 7H3z"/>
                </svg>
              </a>
              <a
                href="https://t.me/NovayaZhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-10 w-10 items-center justify-center border border-foreground/40 text-foreground transition-colors hover:bg-foreground/5"
              >
                <Send size={16} strokeWidth={1.6} />
              </a>
            </div>
            <div className="text-center text-sm text-foreground/70">Больше медиа в наших группах</div>
          </div>
          <img src={imgHouseBenches} alt="Дом со скамейками во дворе" className="h-full w-full rounded-2xl object-cover col-span-3" />
        </div>



      </div>
      </div>
    </section>
  );
}

// ────────── 10. Помочь дому / QR ──────────

function Donate() {
  return (
    <section className="bg-foreground/[0.04]">
      <div className="rounded-t-3xl bg-background px-4 py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 rounded-3xl bg-card p-8 text-card-foreground md:grid-cols-12 md:p-14">
        <div className="md:col-span-7">
          <Kicker><span className="text-card-foreground/60">Помочь дому</span></Kicker>
          <h2 className="mt-4 text-3xl md:text-5xl">Дом живёт благодаря людям.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-card-foreground/80 md:text-lg">
            Любая поддержка — продукты, материалы, рубль или час времени — помогает дому оставаться открытым для тех, кому сейчас тяжелее всего. Если хочется помочь — отсканируйте QR или напишите нам.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <SquareButton variant="light" href="#contacts" icon={<ArrowUpRight size={16} />}>Написать</SquareButton>
            <SquareButton variant="outline" href="#contacts">
              <span className="text-card-foreground">Узнать, что нужно сейчас</span>
            </SquareButton>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <div className="flex aspect-square w-full max-w-[320px] items-center justify-center bg-background p-6 ml-auto">
            <div className="grid h-full w-full grid-cols-8 grid-rows-8 gap-[2px]">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className={`${(i * 7 + 3) % 5 < 2 ? "bg-foreground" : "bg-background"}`} />
              ))}
            </div>
          </div>
          <div className="mt-3 text-right text-xs text-card-foreground/60">QR · реквизиты для поддержки</div>
        </div>
        </div>
      </div>
    </section>
  );
}

// ────────── 11. FAQ ──────────

const faqs = [
  { q: "Сколько длится восстановление?", a: "Базовый этап — около года. Это не срок «излечения», а время, чтобы заново собрать жизнь: распорядок, ценности, отношения. Дальше человек выбирает темп сам — кто-то остаётся помогать, кто-то переходит в адаптационную квартиру." },
  { q: "Что происходит после программы?", a: "Поддержка не заканчивается с выпиской. Есть адаптационная квартира, волонтёрское сообщество, помощь с работой и возвращением в семью. Связь сохраняется столько, сколько нужно человеку." },
  { q: "Можно ли обратиться родственникам?", a: "Да, и это часто правильный первый шаг. Мы говорим с родственниками отдельно, мягко — без оценок и без давления. Объясняем, как помогать, чтобы не уйти в созависимость." },
  { q: "Есть ли духовная составляющая?", a: "Да, дом основан на христианской традиции милосердия. Но участие в религиозной жизни — личный выбор человека, не условие." },
  { q: "Нужно ли участие в религиозной жизни?", a: "Нет, не обязательно. Уважение к месту и людям — да. Молитва, исповедь, богослужения — только по желанию." },
  { q: "Что делать, если человек не хочет помощи?", a: "Сначала — позвонить нам без него. Мы поможем понять, что можно сделать сейчас, как разговаривать и где ваша зона ответственности. Силой никого привозить не нужно." },
  { q: "Как проходит первый разговор?", a: "Звонок или сообщение Виктории или Владимиру. Без анкет и медицинских справок — просто рассказываете ситуацию своими словами. Дальше договариваемся, как удобно встретиться." },
  { q: "Как помочь дому?", a: "Можно продуктами, материалами или временем, а также финансово. Перед помощью лучше написать — мы расскажем, что нужно прямо сейчас, чтобы не накапливалось лишнее." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-foreground/[0.04]">
      <div className="rounded-t-3xl bg-background px-4 py-24">
      <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-12">
        <div className="rounded-3xl bg-card p-8 text-card-foreground md:col-span-5 md:p-12">
          <Kicker><span className="text-card-foreground/60">FAQ</span></Kicker>
          <h2 className="mt-3 text-3xl md:text-5xl">Частые вопросы</h2>
          <p className="mt-6 text-base text-card-foreground/70">
            Если вашего вопроса здесь нет — просто позвоните. Мы всегда отвечаем сами.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-4 text-foreground md:col-span-7 md:p-6">
          <div className="divide-y divide-foreground/15">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-2 py-5 text-left md:px-4"
                  >
                    <span className="text-base font-medium md:text-lg">{f.q}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="px-2 pb-6 pr-10 text-base leading-relaxed text-foreground/75 md:px-4">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

// ────────── 12. Контакты + Footer ──────────

function Contacts() {
  return (
    <section id="contacts" className="bg-foreground">
      <div className="px-4 pt-20 pb-6">
      <div className="mx-auto max-w-[1400px] bg-foreground p-8 text-background md:p-14">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <Kicker><span className="text-background/70">Контакты</span></Kicker>
            <h2 className="mt-3 text-3xl md:text-5xl">Можно просто позвонить.</h2>
            <p className="mt-5 max-w-md text-base text-background/75 md:text-lg">
              Если вы или ваши близкие столкнулись с зависимостью — позвоните и поговорите. Без давления и обязательств. Один звонок ничего не обещает и никуда не обязывает.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-background/55">
              Позвоните напрямую
            </div>

            <div className="border-b border-background/15">
              <a href="tel:+79262174777" className="group flex items-center justify-between gap-4 border-t border-background/15 py-5 transition-colors hover:bg-background/[0.04]">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-background/55">Владимир</div>
                  <div className="mt-2 whitespace-nowrap text-2xl font-light tabular-nums md:text-3xl">+7 (926) 217-47-77</div>
                </div>
              </a>
              <a href="tel:+79998653092" className="group flex items-center justify-between gap-4 border-t border-background/15 py-5 transition-colors hover:bg-background/[0.04]">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-background/55">Виктория</div>
                  <div className="mt-2 whitespace-nowrap text-2xl font-light tabular-nums md:text-3xl">+7 (999) 865-30-92</div>
                </div>
              </a>
            </div>

            <div className="mb-3 mt-8 text-[11px] uppercase tracking-[0.2em] text-background/55">
              Или напишите
            </div>
            <div className="flex gap-3">
              <a
                href="https://vk.com/club229358857"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                className="inline-flex h-14 w-14 items-center justify-center border border-background/40 text-background transition-colors hover:border-background hover:bg-background/10"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
                  <path d="M3 7c.6 6 3.6 9.6 8.5 9.8h.6V13c1.9.2 3.3 1.6 3.9 3.8h2.9c-.7-2.9-2.8-4.6-4.1-5.2 1.3-.8 3.2-2.6 3.6-5.1h-2.6c-.6 2-2.2 3.8-3.7 4V6.5H9.5v7.7C8 14 6 12 5.9 7H3z"/>
                </svg>
              </a>
              <a
                href="https://t.me/NovayaZhi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="inline-flex h-14 w-14 items-center justify-center border border-background/40 text-background transition-colors hover:border-background hover:bg-background/10"
              >
                <Send size={22} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground px-4 py-10 text-background">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-background/15 pt-8 text-sm text-background/60">
        <div>© {new Date().getFullYear()} Дом милосердия · Редькино, Московская область</div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-background">О доме</a>
          <a href="#program" className="hover:text-background">Программа</a>
          <a href="#stories" className="hover:text-background">Истории</a>
          <a href="#contacts" className="hover:text-background">Контакты</a>
        </div>
      </div>
    </footer>
  );
}

// ────────── PAGE ──────────

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <MeaningStrip />
      <AboutHouse />
      <Program />
      <LifeInHouse />
      <VideoStories />
      <AfterAndFamily />
      <Gallery />
      {/* <Donate /> временно скрыт по просьбе клиента */}
      <FAQ />
      <Contacts />
      <Footer />
    </main>
  );
}
