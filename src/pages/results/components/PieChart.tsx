import { PieChart } from "@mui/x-charts";

interface ShowPieChartProps {
    pieChartValues: string;
}

function ShowPieChart ({ pieChartValues }: ShowPieChartProps) {
    if (!pieChartValues) {
        return null;
    }
    let valuesJSON = JSON.parse(pieChartValues)
    let humanitarian: number = valuesJSON.humanitarian;
    let caretaker:  number = valuesJSON.caretaker;
    let innovator: number = valuesJSON.innovator;
    let pragmatist: number = valuesJSON.pragmatist;

    let data = [
        { id: 0, value: humanitarian, label: 'Humanitarian', color: "#fcb849" },
        { id: 1, value: caretaker, label: 'Caretaker', color: "#ab49fc" },
        { id: 2, value: innovator, label: 'Innovator', color: "#499cfc" },
        { id: 3, value: pragmatist, label: 'Pragmatist', color: "#9cfa70"}
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