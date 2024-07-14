import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useMainContract } from './hooks/useMainContract';
import { useTonConnect } from './hooks/useTonconnec';
import { fromNano } from '@ton/core';
import WebApp from '@twa-dev/sdk';



// EQAw32_2O1fZGa3dgqezCCiLWSrEEsCgsRNkKpjWEgIZ6qlK

function App() {
  const {
    contract_address,
    counter_value, 
    contract_balance,
    sendIncrement,
    sendDeposit, 
    sendWithdrawal
  } = useMainContract();

  const { connected } = useTonConnect();

  const showAlert = () => {
    WebApp.showAlert("Hey there!");
  };

  return (
  <div>
    <div>
    <TonConnectButton />
    </div>
    <div> 
      <div className='Card'>
        <b>{WebApp.platform}</b>
        <b> Our contract Address </b>
        <div className='Hint'> {contract_address?.slice(0, 30) + "..."}</div>
        <b> Our contract balance </b>
        {contract_balance && (
          <div className='Hint'>{fromNano(contract_balance)}</div>
        )}
      </div>

      <div className='Card'>
        <b> Counter Value</b>
        <div>{counter_value ?? "Loading..."}</div>
      </div>
      
      <a onClick={() => {
            showAlert();
          }} >
          Show Alert </a>

      {
        connected && (
          <a onClick={() => {
            sendIncrement()
          }} >
          Increment by 5 </a>
        )
      }

      {
        connected && (
          <a onClick={() => {
            sendDeposit()
          }} >
          Deposit 0.5 TON </a>
          )
        }

        < br />

        {
          connected && (
            <a onClick={() => {
              sendWithdrawal()
            }} >
            Withdraw 0.2 TOM </a>
          )
        }
    </div>
  </div>
)}
export default App
