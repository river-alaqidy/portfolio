function ExpPanel() {
     return <div className="flex px-20 gap-20 pt-20">
        <a 
            href="#"
             className="transition-color duration-200 block border-2 border-amber bg-off-dark text-off-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-amber hover:translate-3 hover:bg-amber-dark hover:shadow-none hover:text-off-white sm:p-6"
        >
            <span className="inline-flex items-center gap-1.5">
                <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
                >
                <path
                    fill-rule="evenodd"
                    d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                    clip-rule="evenodd"
                />
                </svg>

                <time datetime="2025-04-01" className="text-xs/none font-semibold uppercase">
                April 1, 2025
                </time>
            </span>

            <h3 className="mt-1 text-xl font-semibold">
                How I built my first website with Nuxt, Tailwind CSS and Vercel
            </h3>

            <p className="mt-2 line-clamp-2 text-pretty">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                maiores deleniti consectetur nobis et eaque.
            </p>
        </a>
        <a
            href="#"
            className="transition-color duration-200 block border-2 border-amber bg-off-dark text-off-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-amber hover:translate-3 hover:bg-amber-dark hover:shadow-none hover:text-off-white sm:p-6"
        >
            <span className="inline-flex items-center gap-1.5">
                <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
                >
                <path
                    fill-rule="evenodd"
                    d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                    clip-rule="evenodd"
                />
                </svg>

                <time datetime="2025-04-01" className="text-xs/none font-semibold uppercase">
                April 1, 2025
                </time>
            </span>

            <h3 className="mt-1 text-xl font-semibold">
                How I built my first website with Nuxt, Tailwind CSS and Vercel
            </h3>

            <p className="mt-2 line-clamp-2 text-pretty">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                maiores deleniti consectetur nobis et eaque.
            </p>
        </a>

    </div>
}
export default ExpPanel;