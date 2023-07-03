import React from "react";
import { useContext } from "react";
import DistrictContext from "../../context/DistrictContext";

function TempSidebar({ sidebarActive, setSidebarActive }) {
    const className = sidebarActive
        ? "temp-sidebar sidebar-active"
        : "temp-sidebar";

    const { district } = useContext(DistrictContext);
    return (
        <div className={className}>
            <div className="sidebar-container">
                <h2>{district?.name}</h2>
                <p>Mean Temp: {district?.historicalData?.meanTemperature}</p>
                <p>Future Mean Temp: {district?.futureData?.meanTemperature}</p>
                <p>
                    Change:{" "}
                    {(
                        district?.futureData?.meanTemperature -
                        district?.historicalData?.meanTemperature
                    ).toFixed(2)}
                </p>
                <button
                    tabIndex="-1"
                    className="close-sidebar"
                    onClick={() => setSidebarActive(false)}>
                    +
                </button>
            </div>
        </div>
    );
}

export default TempSidebar;
