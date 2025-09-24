import React, { use, useState } from 'react';
import Box from './Box';
import ToggleBtn from './ToggleBtn';
import Container from '../Container';
import Card from './Card';

const IssuesManagement = ({ fetchPromise }) => {
    const [toggleStatutes, setToggleStatus] = useState("All");
    const initialData = use(fetchPromise);
    const [data, setData] = useState(initialData);

    // console.log({toggleStatutes})
    const filteredData = toggleStatutes === 'All' ? data : data.filter(element => element.status === toggleStatutes);
    console.log(filteredData)

    return (
        <div>


            {/* box */}
            <Box data={data} />
            {/* Toggle Button  */}
            <ToggleBtn toggleStatutes={toggleStatutes} setToggleStatus={setToggleStatus} />

            {/*Card*/}
            
            <Container>
                {filteredData.length === 0 ? <div className='text-center text-4xl my-10 font-bold text-purple-500'>No Data</div>:
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-10'>
                    {
                        filteredData.map((issue, i) => {
                            return (
                                <Card 
                                key={i} 
                                issue={issue} 
                                data={data} 
                                setData={setData} ></Card>
                            );
                        })
                    }
                </div>}
            </Container>


        </div>
    );
};

export default IssuesManagement;