import React, { useState, useEffect } from 'react'
import Historylist from '../../components/HistoryList'
import DialogDelete from '../../components/DialogDelete'
import ViewDialog from '../../components/ViewDialog'
import PreviewContent from '../../components/PreviewContent'
const History = () => {
   const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("blogAiHistory")) || []);
    //tạo hai state open để kiểm soát việc hiển thị dialog
    const [openDelete, setOpenDelete] = useState(false);
    const [openView, setOpenView] = useState(false);

  const [selectedId, setSelectedId] = useState("");
  const [contentBlog, setContentBlog] = useState("");
  const openDialogDelete  = (id) => {
    setOpenDelete(true);
    setSelectedId(id);
  }
    const openViewDialog  = (id) => {
    setOpenView(true);
    setSelectedId(id);
    setContentBlog(posts.find((item) => item.id === id).content);
  }
  
  // tạo chức năng handleDelete để xóa bài viết
  const handleDelete = () => {
    const newPosts = posts.filter((item) => item.id !== selectedId);
    setPosts(newPosts);
    //lưu lại mảng posts mới vào localStorage
    localStorage.setItem("blogAiHistory", JSON.stringify(newPosts));
    setOpen(false);
  };
 
  return (
    <>
      <Historylist posts={posts} openDialogDelete={openDialogDelete} openViewDialog={openViewDialog} />
      <DialogDelete openDelete={openDelete} onOpenChange={setOpenDelete} handleDelete={handleDelete} />
      <ViewDialog  openView={openView} onOpenChange={setOpenView}  contentBlog={contentBlog} />
    </>
  )
}

export default History