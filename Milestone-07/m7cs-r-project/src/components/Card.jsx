import React from 'react';

const Card = ({ issue, data, setData }) => {

    const handleClick = () => {
        const currentData = data.find((elem) => elem.ticketId === issue.ticketId);
        const restData = data.filter((elem) => elem.ticketId !== issue.ticketId);
        
        if (currentData.status === 'Pending') {
            currentData.status = 'Submitted'
        } else if (currentData.status === 'Submitted') {
            currentData.status = 'Reviewed'
        }
        
        console.log({ currentData, restData });
        setData([...restData, currentData]);
    }
    return (
        <div>
            <div onClick={handleClick} className=' h-[100%] w-[100%] space-y-4 shadow-md rounded-md cursor-pointer bg-slate-100 p-8'>
                <div className="">
                    <img className='w-[50px] rounded-full' src={issue.userImg} alt={issue.requestedBy} />
                    <h1 className='font-bold text-[1rem]'>{issue.requestedBy}</h1>
                </div>

                <div className='flex justify-between items-center gap-4 '>
                    <h1 className='font-bold text-xl '>{issue.subject}</h1>
                    <div className='flex gap-1 '>
                        <span className={` text-xs py-1 px-2 shadow font-bold ${issue.priority === 'High' ? 'text-red-500 bg-red-100' : issue.priority === 'Medium' ? 'text-yellow-500 bg-yellow-100' : 'text-green-500 bg-green-100'}`}>{issue.priority}</span>
                        <span className={` text-xs py-1 px-2 shadow font-bold ${issue.priority === 'High' ? 'text-red-500 bg-red-100' : issue.priority === 'Medium' ? 'text-yellow-500 bg-yellow-100' : 'text-green-500 bg-green-100'}`}>{issue.status}</span>
                    </div>
                </div>
                <p className='text-xs font-medium text-gray-400'>{issue.description}</p>
            </div>
        </div>
    );
};

export default Card;