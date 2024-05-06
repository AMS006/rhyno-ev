import Layout from "../layout"

const CompareAll = () => {
    return (
        <div className="flex justify-center items-center py-6">
            <table>
                <tr>
                    <th><h2>Specification</h2></th>
                    <th><h2>Rhyno SE03 Lite</h2></th>
                    <th><h2>Rhyno SE03</h2></th>
                    <th><h2>Rhyno SE03 Max</h2></th>
                </tr>
                <tr>
                    <th>Battery</th>
                    <td>1.8Kwh</td>
                    <td>2.7Kwh</td>
                    <td>2.7Kwh</td>
                </tr>
                <tr>
                    <th>Battery features</th>
                    <td>
                        <ul>
                            <li>LFP with 1500 cycles</li>
                            <li>Active Balancing</li>
                            <li>Waterproof (IP67)</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>LFP with 1500 cycles</li>
                            <li>Active Balancing</li>
                            <li>Waterproof (IP67)</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>LFP with 1500 cycles</li>
                            <li>Active Balancing</li>
                            <li>Waterproof (IP67)</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <th>Battery warranty</th>
                    <td>3 Years</td>
                    <td>3 Years</td>
                    <td>3 Years</td>
                </tr>
                <tr>
                    <th>Charging time</th>
                    <td>3 hours (12A)</td>
                    <td>4 hours (12A)</td>
                    <td>4 hours (12A)</td>
                </tr>
                <tr>
                    <th>Motor</th>
                    <td>1500W</td>
                    <td>1500W</td>
                    <td>2000W</td>
                </tr>
                <tr>
                    <th>Max speed</th>
                    <td>55 km/h</td>
                    <td>55 km/h</td>
                    <td>65 km/h</td>
                </tr>
                <tr>
                    <th>Warranty on electronics</th>
                    <td>1 year</td>
                    <td>1 year</td>
                    <td>1 year</td>
                </tr>
                <tr>
                    <th>Max range (@30km/h)</th>
                    <td>100 km</td>
                    <td>150 km</td>
                    <td>120 km</td>
                </tr>
                <tr>
                    <th>Max range (@45km/h)</th>
                    <td>90 km</td>
                    <td>110 km</td>
                    <td>100 km</td>
                </tr>
                <tr>
                    <th>Max range (@full speed)</th>
                    <td>60 km</td>
                    <td>90 km</td>
                    <td>80 km</td>
                </tr>
                <tr>
                    <th>Other key benefits</th>
                    <td>
                        <ul>
                            <li>Fire-safe battery</li>
                            <li>Range prediction</li>
                            <li>Comfortable ride</li>
                            <li>Stable and safe</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Fire-safe battery</li>
                            <li>Range prediction</li>
                            <li>Comfortable ride</li>
                            <li>Stable and safe</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>Fire-safe battery</li>
                            <li>Range prediction</li>
                            <li>Comfortable ride</li>
                            <li>Stable and safe</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}

const CompareAllPage = Layout(CompareAll)

export default CompareAllPage
