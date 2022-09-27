import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* component for page titles */}
      <Header category="Page" title="Employees" />
      {/* syncfusion grid container -> allows sort and pagination */}
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        {/* factory function to create all row items */}
        <ColumnsDirective>
        {employeesGrid.map((item, index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        {/* link item functionality to gridcomponent container */}
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
