import React from "react";
// import "./Calculations.css";

const Calculations = ({ reportsData }) => {
  const firstColor = "#418a84";
  const secondColor = "#bf8b49";
  console.log(reportsData);
  const incomes = reportsData
    .map((report) => {
      if (report.amount[0] === "+") {
        return +report.amount.split(" ")[1];
      } else {
        return null;
      }
    })
    .filter((income) => income !== null);
  const totalIncome = incomes.reduce((sum, income) => sum + income, 0);

  const expenses = reportsData
    .map((report) => {
      if (report.amount[0] === "-") {
        return +report.amount.split(" ")[1];
      } else {
        return null;
      }
    })
    .filter((expense) => expense !== null);
  const totalExpenses = expenses.reduce((sub, expense) => sub + expense, 0);

  const netSum = totalIncome - totalExpenses;

  return (
    <div className="claculations rounded-4 overflow-hidden border border-1 border-black">
      <div className="w-100 h-100 d-flex justify-content-between ">
        <div
          style={{ width: "calc(100% / 3)" }}
          className="border border-1 border-black"
        >
          <div
            style={{ backgroundColor: firstColor }}
            className="title text-center py-3 text-light"
          >
            المداخيل
          </div>
          <div className="amount text-center py-3">{totalIncome}</div>
        </div>
        <div
          style={{ width: "calc(100% / 3)" }}
          className="border border-1 border-black"
        >
          <div
            style={{ backgroundColor: secondColor }}
            className="title text-center py-3 text-light"
          >
            المصاريف
          </div>
          <div className="amount text-center py-3">{totalExpenses}</div>
        </div>
        <div
          className="border border-1 border-black"
          style={{ width: "calc(100% / 3)" }}
        >
          <div
            style={{ backgroundColor: firstColor }}
            className="title text-center py-3 text-light"
          >
            صافي المبلغ
          </div>
          <div className="amount text-center py-3">{netSum} ر.س</div>
        </div>
      </div>
    </div>
  );
};

export default Calculations;
