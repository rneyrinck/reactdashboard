import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, Search } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className='m-2 md:m-10 p-2 mt-24 md:p-10 bg-white rounded-3xl'>
      {/* component for page titles */}
      <Header category="Page" title="Customers" />
      {/* syncfusion grid container -> allows sort and pagination */}
      <GridComponent
       dataSource={customersData}
       enableHover={false}
       allowPaging
       pageSettings={{ pageCount: 5 }}
       selectionSettings={selectionsettings}
       toolbar={toolbarOptions}
       editSettings={editing}
       allowSorting
      >
        {/* factory function to create all row items */}
        <ColumnsDirective>
        {customersGrid.map((item, index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        {/* link item functionality to gridcomponent container */}
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers
