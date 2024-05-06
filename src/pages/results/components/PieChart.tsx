import { PieChart } from "@mui/x-charts";

function ShowPieChart () {

    const data = [
        { id: 0, value: 10, label: 'Humanitarian', color: "#fcb849" },
        { id: 1, value: 5, label: 'Caretaker', color: "#ab49fc" },
        { id: 2, value: 15, label: 'Innovator', color: "#499cfc" },
        { id: 3, value: 70, label: 'Pragmatist', color: "#9cfa70"}
      ];
      
    return (
        <PieChart series={[
            {
               data,
               highlightScope: { faded: 'global', highlighted: 'item' },
               faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }
            }]} width={500} height={300}></PieChart>
    );
}

export default ShowPieChart;