import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { BlogProvider } from "./shared/BlogContext";
import { IoMdAddCircle } from "react-icons/io";
import { Blog } from "./types";
import ArticleList from "./components/ArticleList";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [editingBlog, setEditingBlog] = useState<Blog | undefined>(undefined);

  const openModelForNewBlog = () => {
    setEditingBlog(undefined);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-between">
          <section className="flex justify-center">
            <div className="mx-auto p-4">
              <div>
                <button
                  onClick={openModelForNewBlog}
                  className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
                >
                  Add new Blog <IoMdAddCircle />
                </button>
                <ArticleList onEdit={openModalForEdit} />
                {/* Article List component */}
                {isModalOpen && (
                  <Modal onClose={() => setModalOpen(false)}>
                    <BlogForm
                      existingBlog={editingBlog}
                      onClose={() => setModalOpen(false)}
                    />
                  </Modal>
                )}
              </div>
            </div>
          </section>
          <div className="w-[30%] mr-[7rem]">
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};
export default App;
