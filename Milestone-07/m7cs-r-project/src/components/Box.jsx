import React from 'react';
import Container from '../Container';

const Box = ({ data }) => {
  // console.log(data);
  const pendingData = data.filter(element => element.status === 'Pending');
  const submittedData = data.filter(element => element.status === 'Submitted');
  const reviewedData = data.filter(element => element.status === 'Reviewed');
  // console.log(pendingData, submittedData, reviewedData)

  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 gap-4 my-[50px]" >
          <div className="flex flex-col justify-center items-center rounded-md p-7 bg-teal-500 h-[250px]  text-white ">
            <h1 className="text-3xl font-bold" >Pending</h1>
            <p className="text-2xl font-bold">{pendingData.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-md p-7 bg-gray-500 h-[250px]  text-white ">
            <h1 className="text-3xl font-bold" >Submitted</h1>
            <p className="text-2xl font-bold">{submittedData.length}</p>
          </div>
          <div className="flex flex-col justify-center items-center rounded-md p-7 bg-pink-500 h-[250px]  text-white ">
            <h1 className="text-3xl font-bold" >Reviewed</h1>
            <p className="text-2xl font-bold">{reviewedData.length}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Box;