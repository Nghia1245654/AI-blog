import React from "react";
import { useState, useEffect } from "react";

const HistoryList = () => {
  // Đọc mảng lịch sử từ localStorage: blogAiHistory
  const loadHistory = () => {
    const raw = localStorage.getItem("blogAiHistory");
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const [posts, setPosts] = useState(loadHistory);

  useEffect(() => {
    setPosts(loadHistory());
  }, []);

  if (!posts.length) return <p>Không tìm thấy lịch sử bài viết nào.</p>;

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="grid gap-6">
        <h1 className="text-3xl font-bold">Hi, here is your history</h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {posts.map((item) => (
            <div key={item.id} className="bg-card w-full text-card-foreground gap-6 justify-between rounded-xl border p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-ellipsis overflow-hidden whitespace-nowrap">
                {item.topic}
              </h2>
              <div className="text-sm whitespace-pre-line break-words">
                {item.content}
              </div>
              <div className="flex justify-start gap-2 mt-4">
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[>svg]:px-3 bg-primary text-primary-foreground px-4 py-2 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 has-[>svg]:px-3 bg-destructive text-destructive-foreground px-4 py-2 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash2 lucide-trash-2 w-4 h-4 stroke-amber-50"
                    aria-hidden="true"
                  >
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HistoryList;
