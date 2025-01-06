export default function Footer() {
    return (
        <footer className="mt-auto w-full border-t border-border text-text py-6">
            <div className="mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-center justify-between gap-y-4">

                <div className="p-2 text-sm text-text2 border-l-2 border-gstart">
                © {new Date().getFullYear()} Jiacheng He (Harry). All rights reserved.
                </div>
            </div>
        </footer>
    )
}