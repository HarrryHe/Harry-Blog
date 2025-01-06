"use client";

import Blogs from "@/components/Blogs";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

export default function BlogListComponent({ blogs }) {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentBlogs = blogs.slice(startIndex, endIndex);

    return (
        <div className="p-4 pt-8 px-12 md:px-16 lg:px-24 flex flex-col">
            <h1 className="font-bold text-2xl md:text-3xl text-text mb-8 md:mb-10 border-gstart border-l-4 px-4">
                ✒️ Blog List
            </h1>
            <Blogs blogs={currentBlogs} />

            <div className="flex justify-center mt-8">
                <Pagination
                    count={Math.ceil(blogs.length / ITEMS_PER_PAGE)}
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
