import '../../scss/chart.scss'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const itemValuesArray = props.dataPoints.map(item => item.value);
    const totalMax = Math.max(...itemValuesArray);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
            <ChartBar 
                key={dataPoint.label} 
                value={dataPoint.value} 
                label={dataPoint.label}
                maxValue={totalMax}
            />
            ))}
        </div>
    )
}
export default Chart;