import  './ComponentTransaction.css';
import FormTransaction from './FormTransaction';
import Transaction from './Transaction';
import ComponentDesc from './ComponentDesc';
import { useEffect,useState } from 'react'
import DataContext from '../ContextData/DataContext';
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"

const Title = () => <h1>This is Application</h1>

function ComponentTransaction() {
  // const initReportState = [
  //   {id:1, item:"ค่าเช่าบ้าน", amount: -4000},
  //   {id:2, item:"เงินเดือน", amount: 20000},
  //   {id:3, item:"ค่าเดินทาง", amount: -2000},
  //   {id:4, item:"เทรดเหรียญ", amount: 3000},
  // ]

  const [itemLists, setItemLists] = useState([])

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItemLists((prevItem) => {
      return [newItem, ...prevItem]
    })

    //  console.log("This data from FormComponent = " , newItem)
  }

  useEffect(() => {
    const amounts = itemLists.map(itemLists => itemLists.amount)
    const incomes = amounts.filter(element => element >0).reduce((resultIncome,element) => resultIncome += element, 0)
    const expenses = amounts.filter(element => element <0).reduce((resultExpense,element) => resultExpense -= element, 0)

    setReportIncome(incomes)
    setReportExpense(expenses)
  }, [itemLists, reportIncome, reportExpense])
  
  return (

    <DataContext.Provider value={{income: reportIncome, expense: reportExpense,}}>
      <div className="TransactionComponent">
          <div className="component-section">
            <Title/>
            <Router>
              <div>
                <ul className='horizontal-menu'>
                  <li>
                    <Link to="/">Asset Records</Link>
                    </li>
                  <li>
                  <Link to="/insert">Add Transaction</Link>
                  </li>
                </ul>
                <Routes>
                  <Route path="/" exact element={<ComponentDesc/>} />
                  <Route path="/insert" element={[<FormTransaction onAddItem={onAddNewItem}/>, <Transaction items = {itemLists}/>]} />
                  {/* <Route path="/insert" element={<Transaction items = {itemLists}/>} /> */}
                </Routes>
              </div>
            </Router>
            {/* <ComponentDesc/> */}
          </div>
          {/* <FormTransaction onAddItem={onAddNewItem}/>
          <Transaction items = {itemLists}/> */}
      </div>
    </DataContext.Provider>
  );
}

export default ComponentTransaction;
