import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Search } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* component for page titles */}
      <Header category="Page" title="Employees" />
      {/* syncfusion grid container -> allows sort and pagination */}
      <GridComponent
      dataSource={employeesData}
      width="auto"
      allowPaging
      allowSorting
      pageSettings={{ pageCount: 5 }}
      editSettings={editing}
      toolbar={toolbarOptions}
      >
        {/* factory function to create all row items */}
        <ColumnsDirective>
        {employeesGrid.map((item, index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        {/* link item functionality to gridcomponent container */}
        <Inject services={[Page, Search]} />
      </GridComponent>
    </div>
  )
}

export default Employees