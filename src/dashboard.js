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
        }} 
      />
      <Chart
        width={'400px'}
        height={'400px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title:TITULO,
          is3D: true
        }}
      />
      <Chart
        width={'400px'}
        height={'400px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
          pieHole: 0.4
        }}
      />
      <Chart
        width={'400px'}
        height={'400px'}
        chartType={'BarChart'}
        data={dados}
        options={{
          title: TITULO,
          chartArea: {width:'50%'},
          hAxis: {title: 'Quantidade'},
          vAxis: {title: 'Mês'},
          animation: {duration: 1000, easing: 'out', startup: true}
        }}
      />
    </>
  );
}

export default Dashboard;