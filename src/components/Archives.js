'use client';
import Tag from '@/components/assets/Tag';
import Blogs from '@/components/Blogs';
import MotionWrapper from '@/components/MotionWrapper';
import { useState } from 'react';

export default function Archives({ tagMap }) {
    const [selectedTag, setSelectedTag] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        setFilteredBlogs(tagMap.get(tag) || []);
    };

    return (
        <>
            <h1 className="font-bold text-xl md:text-2xl text-text mb-8 md:mb-10 border-gstart border-l-4 px-4 mx-2">
                Tag Cloud/标签云
            </h1>
            <div className=''>
                <MotionWrapper
                        className="flex flex-wrap gap-4 border-border border-b p-2 pb-4 mb-4 m-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        >
                {Array.from(tagMap.keys()).map((tag) => (
                    <button key={tag} onClick={() => {handleTagClick(tag)}}>
                        <div
                            className={`transition-transform duration-300 hover:scale-110 text-lg text-text2 flex flex-row items-center`}
                            aria-label={`View blogs tagged with ${tag}`}
                        >
                            <Tag className='text-text2 h-6 w-6'/>
                            <p className='p-2 relative'>{tag} <span className='text-sm absolute -top-1 -right-1'>{tagMap.get(tag).length}</span></p>
                        </div>
                    </button>
                ))}
                </MotionWrapper>
            </div>

            <div className="mt-8">
                <h2 className="text-lg text-text md:text-xl mx-2">{selectedTag || ''}</h2>
                <div>
                    <Blogs blogs={filteredBlogs} />
                </div>
            </div>
        </>
    )
}