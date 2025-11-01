import React from "react";
import BlogTopicForm from "../../components/BlogTopicForm";
import PreviewContent from "../../components/PreviewContent";
import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Editor = ({  }) => {
  const [inputValue, setInputValue] = useState("");
  const [blogAiHistory, setBlogAiHistory] = useState(JSON.parse(localStorage.getItem("blogAiHistory")) || []);
    
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
      debugger;
      setContentBlog(text);
      const item = {
        id: Date.now(),
        topic: inputValue,
        content: text,
      };
      //add item vào blogAiHistory
      setBlogAiHistory([item, ...blogAiHistory]);
      //save localStorage 
      localStorage.setItem("blogAiHistory", JSON.stringify([item, ...blogAiHistory]));
      

      // Thêm vào lịch sử để không mất bản cũ
      // try {
      //   const raw = localStorage.getItem("blogAiHistory");
      //   let history;
      //   try {
      //     history = raw ? JSON.parse(raw) : [];
      //   } catch {
      //     history = [];
      //   }
      //   const item = {
      //     id: Date.now(),
      //     topic: inputValue ?? "",
      //     content: text ?? "",
      //     createdAt: new Date().toISOString(),
      //   };
      //   const updated = [item, ...(Array.isArray(history) ? history : [])].slice(0, 100);
      //   localStorage.setItem("blogAiHistory", JSON.stringify(updated));
      // } catch (e) {
      //   console.warn("Không thể lưu lịch sử vào localStorage:", e);
      // }
    } catch (err) {
      console.error("generateContent error:", err);
    } finally {
      setIsLoading(false);
    }
  
  
  };
 
  // Lưu contentBlog vào localStorage khi được cập nhật
  // const [localStorageBlog, setLocalStorageBlog] = useState("");
  // useEffect(() => {
  //   localStorage.setItem("blogAi", JSON.stringify(contentBlog));
  //   // Lưu inputValue vào localStorage khi được cập nhật
  //   localStorage.setItem("inputValue", JSON.stringify(inputValue));
  //   setLocalStorageBlog(contentBlog);
  // }, [contentBlog, inputValue]);


  return (
    <div className="grid gap-6">
      <BlogTopicForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleCreate={handleCreate}
        isLoading={isLoading}
      />
      <PreviewContent inputValue={inputValue} contentBlog={contentBlog} />
    </div>
  );
};

export default Editor;
