import React from "react"
import "./App.css"
import {useDispatch, useSelector} from "react-redux"
import {bindActionCreators} from "redux"
import {actionCreators, State} from "./state"
import Swal from "sweetalert2"
function App() {
  const dispatch = useDispatch()
  const {depositMoney, withDrawMoney, bankrupt} = bindActionCreators(
    actionCreators,
    dispatch
  )

   const swalWithBootstrapButtons = Swal.mixin({
     customClass: {
       confirmButton: "btn btn-success",
       cancelButton: "btn btn-danger",
     },
     buttonsStyling: true,
   })
  const state = useSelector((state: State) => state.bank)
  const handleWithdraw = (id: number) => {
    withDrawMoney(id)
    if (state === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Account Balance is insufficient!. Please fund it"
      })
    }
  }
   const handleBankrupt = ()=> {
    
     if(state >= 2 || state === 1){
     swalWithBootstrapButtons
       .fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonText: "Yes, take all!",
         cancelButtonText: "No, cancel!",
         reverseButtons: true,
       })
       .then(result => {
         if (result.isConfirmed) {
           swalWithBootstrapButtons.fire(
             "Thanks!",
             "Payment successfully made",
             "success"
           )
           bankrupt()
         } else if (
           /* Read more about handling dismissals below */
           result.dismiss === Swal.DismissReason.cancel
         ) {
           swalWithBootstrapButtons.fire(
             "Cancelled",
             "Your money is intact ",
            "success"
           )
         }
       })  
     }
    

     
   }
  return (
    <div className="App">
      <div>
        <h2>Bank Name: Fidelity Bank plc</h2>
        <h2>User account Name: Iskilu Rasheed O.</h2>
        <h1>Account Balance: {state} NGN</h1>
        <button className="btn-desposit" onClick={() => depositMoney(5)}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={() => handleWithdraw(2)}>
          Withdraw
        </button>
        <button disabled={state <= 0} className="btn-bankrupt" onClick={() => handleBankrupt()}>
          Bankrupt
        </button>
      </div>
    </div>
  )
}

export default App
