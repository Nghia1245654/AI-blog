import React from 'react'
import { Link } from 'react-router-dom';
const HomeIntro = () => {
  return (
     <main className="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <div class="space-y-4">
            <h1 class="text-4xl font-bold text-foreground">
              AI Blog Generator
            </h1>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into compelling blog posts with AI
              assistance. Generate outlines, write content, and export beautiful
              articles.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6 mt-12">
            <div class="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-[#e5e5e5] py-6 shadow-sm">
              <h3 class="text-[18px] font-bold text-foreground">AI-Powered</h3>
              <p class="text-muted-foreground text-[14px]">
                Generate blog outlines and content suggestions using advanced AI
              </p>
            </div>
            <div class="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-[#e5e5e5] py-6 shadow-sm">
              <h3 class="text-[18px] font-bold text-foreground">Rich Editor</h3>
              <p class="text-muted-foreground text-[14px]">
                Full-featured text editor with formatting tools and live preview
              </p>
            </div>
            <div class="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-[#e5e5e5] py-6 shadow-sm">
              <h3 class="text-[18px] font-bold text-foreground">
                Export Ready
              </h3>
              <p class="text-muted-foreground text-[14px]">
                Export your finished articles in multiple formats
              </p>
            </div>
          </div>
          <div class="pt-8">
            <Link to="/editor" data-discover="true">
              <button
                data-slot="button"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3"
              >
                Start Writing
              </button>
            </Link>
          </div>
        </div>
      </main>
  )
}

export default HomeIntro
