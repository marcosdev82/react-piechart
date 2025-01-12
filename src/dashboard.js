import React, { useState } from "react";
import "./dashboard.css";
import Chart from "react-google-charts";

function Dashboard() {

  const TITULO = "Quantidade de cadastros primeiro semestre";

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 22],
    ['Abril', 42],
    ['Maio', 31],
    ['Junho', 73]
  ])

  return (
  <>
    <h2>Dashboard</h2>
    <Chart
      width={'400px'}
      height={'300px'}
      chartType={'PieChart'}
      data={dados}
      options={{
        title: TITULO
      }} />
    </>
  );
}

export default Dashboard;