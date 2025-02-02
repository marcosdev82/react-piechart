import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Chart } from "react-google-charts";

function Dashboard() {
  const TITULO = "Quantidade de cadastros no primeiro semestre";
  const ANIMATION = {
    duration: 1000,
    easing: "out",
  }

  const [dados, setDados] = useState([
    ["Mês", "Quantidade"],
    ["Janeiro", 33],
    ["Fevereiro", 68],
    ["Março", 22],
    ["Abril", 42],
    ["Maio", 31],
    ["Junho", 73],
  ]);

  useEffect(() => {
    function alteraDados() {
      const dadosGraficos = dados.map(linha => {
        if (Number.isInteger(linha[1])) {
          linha[1] = Math.floor(Math.random() * 101);
        }
        return linha;
      });
      setDados(dadosGraficos)
    }

    const intervalId = setInterval(() => alteraDados(), 2000);

    return () => {
      clearInterval(intervalId);
    }
    
  }, [dados]);

  return (
    <>
      <h2>Dashboard</h2>

      {/* Gráfico de Pizza */}
      <Chart
        width={"400px"}
        height={"300px"}
        chartType={"PieChart"}
        data={dados}
        options={{
          title: TITULO,
        }}
      />

      {/* Gráfico de Pizza 3D */}
      <Chart
        width={"400px"}
        height={"400px"}
        chartType={"PieChart"}
        data={dados}
        options={{
          title: TITULO,
          is3D: true,
        }}
      />

      {/* Gráfico de Pizza com buraco (Donut) */}
      <Chart
        width={"400px"}
        height={"400px"}
        chartType={"PieChart"}
        data={dados}
        options={{
          title: TITULO,
          pieHole: 0.4,
        }}
      />

      {/* Gráfico de Barras */}
      <Chart
        width={"400px"}
        height={"400px"}
        chartType={"BarChart"}
        data={dados}
        options={{
          title: TITULO,
          chartArea: { width: "50%" },
          hAxis: { title: "Quantidade" },
          vAxis: { title: "Mês" },
          animation: ANIMATION
        }}
      />

      <Chart
        width={"400px"}
        height={"400px"}
        chartType={"LineChart"}
        data={dados}
        options={{
          title: TITULO,
          hAxis: { title: "Mês" },
          vAxis: { title: "Quantidade" },
          animation: ANIMATION
        }}
      />

      <Chart
        width={"400px"}
        height={"400px"}
        chartType={"AreaChart"}
        data={dados}
        options={{
          title: TITULO,
          hAxis: { title: "Mês" },
          vAxis: { title: "Quantidade" },
          animation: ANIMATION
        }}
      />
     
    </>
  );
}

export default Dashboard;
