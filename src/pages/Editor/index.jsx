import React from "react";
import BlogTopicForm from "../../components/BlogTopicForm";
import PreviewContent from "../../components/PreviewContent";
import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Editor = ({  }) => {
  const [inputValue, setInputValue] = useState("");
    
  const [contentBlog, setContentBlog] = useState("");
    
  const [isLoading, setIsLoading] = useState(false);
  const handleCreate = async () => {
    const prompt = `Write a blog post about ${inputValue}`;
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
    // tạo const loading để gọi hàm buttonLoading và tắt khi kết thúc gọi api
    try {
      setIsLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);
      console.log(result);
      // lấy text trả về và cập nhật state
      const text = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      console.log(text);
      setContentBlog(text);

      // Thêm vào lịch sử để không mất bản cũ
      try {
        const raw = localStorage.getItem("blogAiHistory");
        let history;
        try {
          history = raw ? JSON.parse(raw) : [];
        } catch {
          history = [];
        }
        const item = {
          id: Date.now(),
          topic: inputValue ?? "",
          content: text ?? "",
          createdAt: new Date().toISOString(),
        };
        const updated = [item, ...(Array.isArray(history) ? history : [])].slice(0, 100);
        localStorage.setItem("blogAiHistory", JSON.stringify(updated));
      } catch (e) {
        console.warn("Không thể lưu lịch sử vào localStorage:", e);
      }
    } catch (err) {
      console.error("generateContent error:", err);
    } finally {
      setIsLoading(false);
    }
  
  
  };
 
  // Lưu contentBlog vào localStorage khi được cập nhật
  useEffect(() => {
    localStorage.setItem("blogAi", JSON.stringify(contentBlog));
    // Lưu inputValue vào localStorage khi được cập nhật
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
    setLocalStorageBlog(contentBlog);
  }, [contentBlog, inputValue]);

  const handleCopy = async () => {
  // Dùng Clipboard API của trình duyệt để ghi text vào bộ nhớ tạm
  await navigator.clipboard.writeText(contentBlog);
};
  const handleDownload = () => {
  // 1️⃣ Tạo blob từ nội dung
  const blob = new Blob([contentBlog], { type: "text/plain" });

  // 2️⃣ Tạo URL tạm thời cho blob
  const url = URL.createObjectURL(blob);

  // 3️⃣ Tạo thẻ <a> để mô phỏng hành động tải xuống
  const a = document.createElement("a");
  a.href = url;
  a.download = "blog-content.txt";

  // 4️⃣ Thêm vào DOM và click tự động
  document.body.appendChild(a);
  a.click();

  // 5️⃣ Dọn dẹp
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
  return (
    <div className="grid gap-6">
      <BlogTopicForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCreate={handleCreate}
        isLoading={isLoading}
        localStorageBlog={localStorageBlog}
      />
      <PreviewContent contentBlog={contentBlog} handleCopy={handleCopy} handleDownload={handleDownload} />
    </div>
  );
};

export default Editor;
