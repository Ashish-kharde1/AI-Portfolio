export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Ashish Kharde.
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                    <p>Designed & Engineered with Next.js 14</p>
                </div>
            </div>
        </footer>
    );
};
