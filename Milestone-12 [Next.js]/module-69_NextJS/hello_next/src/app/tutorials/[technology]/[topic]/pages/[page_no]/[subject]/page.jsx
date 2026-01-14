import Title from '@/Components/Title';
import React from 'react';

const TutorialPage = async ({ params }) => {
    const { technology, topic, page_no, subject } = await params;
    return (
        <div className="grid grid-cols-2 gap-8 bg-white/5 p-20 rounded-3xl">
            {/* Full width title */}
            <Title className="col-span-2 text-center">
                {technology} - tutorials
            </Title>

            {/* Grid items */}
            <p className="font-medium">
                <span className="font-semibold">Topic:</span> {topic}
            </p>

            <p className="font-medium text-right">
                <span className="font-semibold">Page No:</span> {page_no}
            </p>

            <p className="font-medium">
                <span className="font-semibold">Subject:</span> {subject}
            </p>
        </div>

    );
};

export default TutorialPage;