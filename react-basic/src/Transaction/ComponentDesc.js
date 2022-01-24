import "./ComponentDesc.css"
import DataContext from "../ContextData/DataContext";
import { useContext } from "react";

const ComponentDesc = () => {
    const {income, expense} = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h4>Total :</h4><h2>฿ {formatNumber(income-expense)} </h2>
            <div className="report-container">
                <div>
                    <h4>income :</h4>
                    <p className="report plus">฿ {formatNumber(income)}</p>
                </div>
                <div>
                    <h4>expense :</h4>
                    <p className="report minus">฿ {formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    );
}

export default ComponentDesc