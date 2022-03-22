const DataList = ({ itemComponent: ItemComponent, dataList }) =>
  dataList.map(({ id, ...rest }, index) => (
    <ItemComponent key={id || index} {...rest} dataId={id} />
  ))

export default DataList
