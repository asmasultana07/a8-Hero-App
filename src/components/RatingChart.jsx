import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer,  Tooltip,  XAxis, YAxis, } from 'recharts';


const RatingChart = ({ ratings}) => {
    const data = ratings; 

    return (
        <div>
            {/* rating chart */}
                  <div className="space-y-3">
                    
                    <h2 className="text-bb text-2xl font-semibold">Ratings </h2>
                    <div className="border-y border-gray-400  p-4 h-80">
                      <ResponsiveContainer width='100%' height='100%'>
                        <BarChart layout="vertical" data={data}
                        margin={{top:10, right:30, left: 20, bottom:5 }}>
                          <CartesianGrid strokeDasharray='3 3'/>
                          <XAxis type="number" dataKey='count'
                            />
                          <YAxis type="category" dataKey='name'  reversed 
                          />
                          <Tooltip  formatter={(value) => [value.toLocaleString(), 'Reviews']}/>
                          <Legend/>
            
                          <Bar dataKey='count' fill='#FF8811' barSize={36} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
            
                  </div>
            
                  
        </div>
    )
}

export default RatingChart;