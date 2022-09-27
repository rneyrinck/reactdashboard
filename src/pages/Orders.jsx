import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* component for page titles */}
      <Header category="Page" title="Orders" />
      {/* syncfusion grid container -> allows sort and pagination */}
      <GridComponent
      id="gridcomp"
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        {/* factory function to create all row items */}
        <ColumnsDirective>
        {ordersGrid.map((item, index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        {/* link item functionality to gridcomponent container */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders
