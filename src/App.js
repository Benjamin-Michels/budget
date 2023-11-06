import './App.css';
import React,{useState} from 'react';

function App() {

  const [transaction, setTransaction] = useState(0)
  const [nameOfTransaction, setNameOfTransaction] = useState('')
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [receipt, setReceipt] = useState([])

  const buttonClickEventHandeler = () =>{
    if(transaction.includes("-")){
      setExpense(parseInt(expense)+parseInt(transaction))
      setBalance(balance+parseInt(transaction))
    }else{
      setIncome(parseInt(income)+parseInt(transaction))
      setBalance(parseInt(balance)+parseInt(transaction))

    }

    const newTransaction = {transactionName:nameOfTransaction,transactionPrice:transaction}
    const newTransactions =[...receipt,newTransaction]
    setReceipt(newTransactions)
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className='trackerbody'>
        <h3>Your Balance</h3>
        <h1>${balance}</h1>

        <div className='totalcards '>
          <div className='totalcard cardincome'>
            <h3>INCOME</h3>
            <h3 className='income'>{income}</h3>

          </div>
          <div className='totalcard cardexpense'>
            <h3>EXPENSE</h3>
            <h3 className='expense'>{expense}</h3>

          </div>
        </div>

        <div className='history'>
          <h2>History</h2>
          <div className='cardContainer'>
            {receipt.map((receipt)=>
              <div className={receipt.transactionPrice > 0 ? 'transactionCard':'transactionCardRed'}>
                <p>{receipt.transactionName}</p>
                <p>{receipt.transactionPrice}</p>
              </div>
            )}

          </div>

        </div>

        <div className='formSection'>
          <h2>Add New transaction</h2>
          <p>Name</p>
          <input placeholder="Enter Transaction Name" onChange={(event)=>setNameOfTransaction(event.target.value)}/>
          <p>Amount</p>
          <input placeholder="Enter Tracsaction Amount" onChange={(event)=>setTransaction(event.target.value)}/>
          <button onClick={buttonClickEventHandeler}>Add transaction</button>
        </div>


      </div>
      <div>
        
      </div>



    </div>
  );
}

export default App;
