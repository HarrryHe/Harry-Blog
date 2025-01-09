"use client";

import Blogs from "@/components/Blogs";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

export default function BlogListComponent({ blogs, itemNum=10 }) {
    const totalArticles = blogs.length;

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemNum;
    const endIndex = startIndex + itemNum;
    const currentBlogs = blogs.slice(startIndex, endIndex);

    return (
        <div className="flex flex-col">
            <Blogs blogs={currentBlogs} />

            <div className="flex justify-center mt-10 mb-6">
                <Pagination
                    count={Math.ceil(blogs.length / itemNum)}
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{
                            "& .MuiPaginationItem-root": {
                                color: 'rgb(var(--color-text-secondary))',
                            },
                            "& .MuiPaginationItem-root:hover": {
                                backgroundColor: 'rgb(var(--color-card))',
                            },
                            "& .MuiPaginationItem-root.Mui-selected": {
                                color: 'rgb(var(--color-text)',
                            },
                            "& .MuiPaginationItem-icon": {
                                color: 'rgb(var(--color-text-secondary))',
                            },
                            "& .MuiPaginationItem-ellipsis": {
                                color: 'rgb(var(--color-text-secondary))',
                            },

                    }}
                />
            </div>
        </div>
    );
}
