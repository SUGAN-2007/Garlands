import { useState } from 'react'

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const products = [
    {
        name: 'Cardamom Garlands',
        description:
            'Fragrant, hand-tied elaichi strands for auspicious weddings and poojas.',
        image:
            '/type/car.jpeg',
    },
    {
        name: 'Clove Garlands',
        description:
            'Rich maroon cloves woven into luxe garlands with golden highlights.',
        image:
            '/type/clove.jpeg',
    },
    {
        name: 'Almond & Cashew Garlands',
        description:
            'Premium nut garlands that symbolize abundance for mandaps and welcome rites.',
        image:
            '/type/al.jpeg',
    },
    {
        name: 'Chocolate Model Garlands',
        description:
            'Festive chocolate creations for sangeet, receptions, and joyful gifting.',
        image:
            '/type/choco.jpeg',
    },
]

const galleryImages = [
    '/gallery/1.jpeg',
    '/gallery/2.jpeg',
    '/gallery/3.jpeg',
    '/gallery/4.jpeg',
    '/gallery/5.jpeg',
    '/gallery/6.jpeg',
    '/gallery/7.jpeg',
    '/gallery/8.jpeg',
]

const whatsappLink = 'https://wa.me/qr/ECOKAGU2GLKDI1'
const instagramLink = 'https://www.instagram.com/viji_garlands/?igsh=MThwdDFxcGQxeXpsZQ%3D%3D#'

const Icon = ({ type }) => {
    if (type === 'whatsapp') {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                    fill="currentColor"
                    d="M20.5 3.5A11.9 11.9 0 0 0 12 0a12 12 0 0 0-10 18.5L0 24l5.7-1.5A11.7 11.7 0 0 0 12 24a12 12 0 0 0 8.5-20.5Zm-8.5 18a9.5 9.5 0 0 1-4.9-1.3l-.4-.2-3.4.9.9-3.3-.2-.4A9.4 9.4 0 1 1 12 21.5Zm5.3-7.1c-.3-.1-1.8-.9-2-1s-.4-.1-.6.2-.7 1-.9 1.1-.3.2-.6.1a7.8 7.8 0 0 1-2.3-1.4 8.4 8.4 0 0 1-1.5-1.9c-.1-.3 0-.4.2-.6l.6-.7.1-.4a.5.5 0 0 0 0-.4c0-.1-.6-1.4-.8-2s-.4-.4-.6-.4h-.5a1 1 0 0 0-.8.4 3.3 3.3 0 0 0-1 2.4c0 1.4 1.1 2.7 1.3 2.9l.2.2a9.4 9.4 0 0 0 3.7 3.1 11.7 11.7 0 0 0 1.8.6 3.5 3.5 0 0 0 1.6.1c.5-.1 1.8-.8 2-1.5s.2-1.3.2-1.4-.2-.2-.5-.3Z"
                />
            </svg>
        )
    }

    if (type === 'instagram') {
        return (
            <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.3a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                />
            </svg>
        )
    }

    return null
}

const SectionHeader = ({ eyebrow, title, subtitle }) => (
    <div className="text-center max-w-3xl mx-auto space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-display text-maroon">
            {title}
        </h2>
        {subtitle && <p className="text-base text-brown/80 leading-relaxed">{subtitle}</p>}
    </div>
)

function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="bg-cream text-brown min-h-screen" id="top">
            {/* Navbar */}
            <header className="sticky top-0 z-40 backdrop-blur bg-cream/80 border-b border-gold/10">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-maroon to-maroonDeep text-cream shadow-glow grid place-items-center font-display text-xl">
                            VG
                        </div>
                        <div>
                            <p className="text-lg font-display text-maroon">Viji Garlands</p>
                            <p className="text-xs text-brown/70">All Spices Garlands Available Here</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative text-brown/80 transition hover:text-maroon"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-sm font-semibold text-cream shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                        >
                            <Icon type="whatsapp" />
                            Order Now
                        </a>
                        <a
                            href={instagramLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-maroon/20 px-3 py-2 text-sm font-semibold text-maroon transition hover:bg-maroon/5"
                        >
                            <Icon type="instagram" />
                            Instagram
                        </a>
                    </div>

                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-maroon/20 bg-cream text-maroon shadow-soft transition hover:-translate-y-0.5"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <div className="space-y-1.5">
                            <span className="block h-0.5 w-6 bg-maroon rounded-full" />
                            <span className="block h-0.5 w-5 bg-maroon rounded-full" />
                            <span className="block h-0.5 w-6 bg-maroon rounded-full" />
                        </div>
                    </button>
                </nav>

                {menuOpen && (
                    <div className="md:hidden border-t border-gold/15 bg-cream shadow-soft">
                        <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 space-y-3 text-sm font-semibold">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-lg px-3 py-2 text-brown/90 transition hover:bg-gold/10 hover:text-maroon"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex flex-wrap gap-3 pt-2">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-cream shadow-soft transition hover:-translate-y-0.5"
                                >
                                    <Icon type="whatsapp" />
                                    Order Now
                                </a>
                                <a
                                    href={instagramLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-maroon/15 px-4 py-2 text-maroon transition hover:bg-maroon/5"
                                >
                                    <Icon type="instagram" />
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section
                id="hero"
                className="relative overflow-hidden bg-hero-gradient"
            >
                <div className="absolute inset-0 opacity-70 border-[1px] border-[#ede3d7]">
                    <img
                        src="/head.jpeg"
                        alt="Traditional South Indian wedding garlands"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/100 to-cream/60" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:pt-32">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div className="space-y-6 animate-fade-in text-center lg:text-left">
                            <p className="inline-flex items-center gap-2 rounded-full bg-maroon/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-maroon">
                                Premium Handmade Garlands
                            </p>
                            <h1 className="font-display text-4xl leading-tight text-maroon sm:text-5xl lg:text-6xl">
                                Viji Garlands
                            </h1>
                            <p className="text-base sm:text-lg font-medium text-brown/90">
                                All Spices Garlands Available Here
                            </p>
                            <p className="max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-brown/80 leading-relaxed">
                                Crafted with devotion using cardamom, clove, nuts, and rich
                                spices. Perfect for weddings, temple poojas, festivals, and
                                cherished family occasions. Each strand is handmade with
                                traditional care for an unforgettable fragrance and presence.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center lg:items-start">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-maroon px-5 py-3 text-base font-semibold text-cream shadow-glow transition hover:-translate-y-0.5"
                                >
                                    <Icon type="whatsapp" />
                                    WhatsApp Order Now
                                </a>
                                <a
                                    href="#gallery"
                                    className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-maroon/20 bg-cream px-5 py-3 text-base font-semibold text-maroon shadow-soft transition hover:-translate-y-0.5 hover:bg-maroon/5"
                                >
                                    View Gallery
                                </a>
                            </div>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-3 text-xs sm:text-sm text-brown/80">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-gold" />
                                    Handmade in Tamil Nadu
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-gold" />
                                    Bulk & Wedding Orders Accepted
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-gold" />
                                    Temple & Festival Ready
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-float">
                            <div className="rounded-[28px] shadow-soft overflow-hidden ring-4 ring-cream/60 bg-cream/80 border border-gold/10">
                                <img
                                    src="/public/head.jpeg"
                                    alt="Luxurious spice garlands on wedding platter"
                                    className="aspect-[4/5]"
                                />
                            </div>
                            <div className="absolute -left-6 -bottom-6 rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-maroon shadow-glow">
                                Trusted for Weddings & Temple Poojas
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section id="products" className="bg-cream">
                <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
                    <SectionHeader
                        eyebrow="Signature Garlands"
                        title="Handmade Spice Collections"
                        subtitle="Curated for weddings, temple offerings, and grand celebrations."
                    />
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product, index) => (
                            <article
                                key={product.name}
                                className="group rounded-2xl border border-gold/15 bg-white/70 shadow-soft backdrop-blur transition hover:-translate-y-2 hover:shadow-glow animate-fade-in"
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                <div className="overflow-hidden rounded-2xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="aspect-square transition duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-2 px-5 pb-6 pt-4">
                                    <h3 className="font-display text-xl text-maroon">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-brown/75 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="bg-sand/60">
                <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
                    <SectionHeader
                        eyebrow="Crafted With Love"
                        title="Recent Garlands & Celebrations"
                        subtitle="Real work from weddings, poojas, and festive orders."
                    />
                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image}
                                className="overflow-hidden rounded-2xl border border-gold/10 shadow-soft transition hover:-translate-y-1 hover:shadow-glow animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <img
                                    src={image}
                                    alt="Handmade garland showcase"
                                    className="aspect-[3/4] transition duration-700 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-cream">
                <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-6">
                            <SectionHeader
                                eyebrow="About Viji Garlands"
                                title="Traditional Craft, Modern Elegance"
                                subtitle="Rooted in South Indian heritage, every garland is made by hand with devotion and premium spices."
                            />
                            <div className="space-y-4 text-brown/85 leading-relaxed">
                                <p>
                                    We specialize in spice garlands that carry the aroma and
                                    blessing of tradition. Each strand is hand-tied, ensuring
                                    every wedding mandap, temple entrance, and festive home
                                    receives a graceful welcome.
                                </p>
                                <p>
                                    From cardamom and clove to almond, cashew, and bespoke
                                    chocolate models, our creations are crafted to stay fresh,
                                    photogenic, and ceremony-ready.
                                </p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-gold/15 bg-white/70 p-4 shadow-soft">
                                    <p className="text-sm font-semibold text-maroon">
                                        Wedding Expertise
                                    </p>
                                    <p className="text-sm text-brown/75">
                                        Designed for muhurtham, reception, and sangeet elegance.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-gold/15 bg-white/70 p-4 shadow-soft">
                                    <p className="text-sm font-semibold text-maroon">
                                        Temple & Festival Ready
                                    </p>
                                    <p className="text-sm text-brown/75">
                                        Crafted to honor traditions with fragrance and purity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-float">
                            <div className="rounded-[28px] bg-white/80 p-3 shadow-soft ring-4 ring-cream/70 border border-gold/15">
                                <img
                                    src="/god.jpg"
                                    alt="Artisan preparing spice garlands"
                                    className="rounded-2xl"
                                />
                            </div>
                            <div className="absolute -right-5 -top-5 rounded-xl bg-maroon text-cream px-4 py-3 text-xs font-semibold shadow-glow">
                                Handmade • Fresh • Premium
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-sand/60">
                <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
                    <SectionHeader
                        eyebrow="Book Your Garlands"
                        title="Ready to Craft Your Order"
                        subtitle="Quick responses for wedding dates, temple poojas, and bulk needs."
                    />
                    <div className="mt-10 flex flex-col items-center gap-4 text-center">
                        <p className="text-brown/85 max-w-2xl">
                            Share your date, quantity, and preferred spices. We help with
                            sizing, delivery plans, and custom colors for your celebration.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-maroon px-6 py-3 text-base font-semibold text-cream shadow-glow transition hover:-translate-y-0.5"
                            >
                                <Icon type="whatsapp" />
                                WhatsApp Order Now
                            </a>
                            <a
                                href={instagramLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full border border-maroon/15 bg-cream px-6 py-3 text-base font-semibold text-maroon shadow-soft transition hover:-translate-y-0.5 hover:bg-maroon/5"
                            >
                                <Icon type="instagram" />
                                View Instagram
                            </a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 pt-4 text-sm text-brown/70">
                            <span className="px-3 py-1 rounded-full bg-white/80 shadow-soft " >
                                •   Handmade in Tamil Nadu
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/80 shadow-soft">
                                •   Bulk & recurring orders welcome
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gold/15 bg-cream">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div>
                        <p className="font-display text-lg text-maroon">Viji Garlands</p>
                        <p className="text-sm text-brown/70">All Spices Garlands Available Here</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-semibold">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-maroon px-3 py-2 text-cream shadow-soft transition hover:-translate-y-0.5"
                        >
                            <Icon type="whatsapp" />
                            WhatsApp
                        </a>
                        <a
                            href={instagramLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-maroon/15 px-3 py-2 text-maroon transition hover:bg-maroon/5"
                        >
                            <Icon type="instagram" />
                            Instagram
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
