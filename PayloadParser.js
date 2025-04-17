function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Verificar que la dirección del dispositivo sea la correcta
    if (jsonPayload.deviceAddress.toString() !== device.address.toString()) {
        env.log('Invalid device address');
        return;
    }

    const posTimestamp = (jsonPayload.posTimestamp) ? jsonPayload.posTimestamp : null;
    
    // Actualizar estado de las Energias
        if (jsonPayload.EnergySum !== undefined && jsonPayload.EnergySum !== null) {
        var EnergySum = device.endpoints.byAddress(1);
        let temp = jsonPayload.EnergySum;
        env.log("EnergySum --->",temp);
        //EnergySum.updateEnergySensorValueSummationRaw(temp);
        
    }
    // Actualizar estado de la EnergyPosSum
        if (jsonPayload.EnergyPosSum !== undefined && jsonPayload.EnergyPosSum !== null) {
        var EnergyPosSum = device.endpoints.byAddress(2);
        let temp = jsonPayload.EnergyPosSum;
        env.log("EnergyPosSum --->",temp);
        //EnergyPosSum.(temp);
    }
    if (jsonPayload.EnergySumNR !== undefined && jsonPayload.EnergySumNR !== null) {
        var EnergySumNR = device.endpoints.byAddress(3);
        let temp = jsonPayload.EnergySumNR;
        env.log("EnergySumNR --->",temp);
        //EnergySumNR.(temp);
    }
    
    if (jsonPayload.EnergyPosSumNR !== undefined && jsonPayload.EnergyPosSumNR !== null ) {
        var EnergyPosSumNR = device.endpoints.byAddress(4);
        let temp = jsonPayload.EnergyPosSumNR;
        env.log("EnergyPosSumNR --->",temp);
        //EnergyPosSumNR.(temp);
    }
    if (jsonPayload.PowerSum !== undefined && jsonPayload.PowerSum !== null) {
        var PowerSum = device.endpoints.byAddress(5);
        let temp = jsonPayload.PowerSum;
        env.log("PowerSum --->",temp);
        PowerSum.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerA !== undefined && jsonPayload.PowerA !== null) {
        var PowerA = device.endpoints.byAddress(6);
        let temp = jsonPayload.PowerA;
        env.log("PowerA --->",temp);
        PowerA.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerB !== undefined && jsonPayload.PowerB !== null) {
        var PowerB = device.endpoints.byAddress(7);
        let temp = jsonPayload.PowerB;
        env.log("PowerB --->",temp);
        PowerB.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerC !== undefined && jsonPayload.PowerC !== null) {
        var PowerC = device.endpoints.byAddress(8);
        let temp = jsonPayload.PowerC;
        env.log("PowerC --->",temp);
        PowerC.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.VoltAvgLN !== undefined && jsonPayload.VoltAvgLN !== null) {
        var VoltAvgLN = device.endpoints.byAddress(9);
        let temp = jsonPayload.VoltAvgLN;
        env.log("VoltAvgLN --->",temp);
        VoltAvgLN.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.VoltA !== undefined && jsonPayload.VoltA !== null) {
        var VoltA = device.endpoints.byAddress(10);
        let temp = jsonPayload.VoltA;
        env.log("VoltA --->",temp);
        VoltA.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.VoltB !== undefined && jsonPayload.VoltB !== null) {
        var VoltB = device.endpoints.byAddress(11);
        let temp = jsonPayload.VoltB;
        env.log("VoltB --->",temp);
        VoltB.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.VoltC !== undefined && jsonPayload.VoltC !== null) {
        var VoltC = device.endpoints.byAddress(12);
        let temp = jsonPayload.VoltC;
        env.log("VoltC --->",temp);
        VoltC.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.VoltAvgLL !== undefined && jsonPayload.VoltAvgLL !== null) {
        var VoltAvgLL = device.endpoints.byAddress(13);
        let temp = jsonPayload.VoltAvgLL;
        env.log("VoltAvgLL --->",temp);
        VoltAvgLL.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.VoltAB !== undefined && jsonPayload.VoltAB !== null) {
        var VoltAB = device.endpoints.byAddress(14);
        let temp = jsonPayload.VoltAB;
        env.log("VoltAB --->",temp);
        VoltAB.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.VoltBC !== undefined && jsonPayload.VoltBC !== null) {
        var VoltBC = device.endpoints.byAddress(15);
        let temp = jsonPayload.VoltBC;
        env.log("VoltBC --->",temp);
        VoltBC.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.VoltAC !== undefined && jsonPayload.VoltAC !== null) {
        var VoltAC = device.endpoints.byAddress(16);
        let temp = jsonPayload.VoltAC;
        env.log("VoltAC --->",temp);
        VoltAC.updateVoltageSensorStatus(temp);
    }
    if (jsonPayload.Freq !== undefined && jsonPayload.Freq !== null) {
        var Freq = device.endpoints.byAddress(17);
        let temp = jsonPayload.Freq;
        env.log("Freq --->",temp);
        Freq.updateFrequencySensorStatus(temp);
    }
    if (jsonPayload.EnergyA !== undefined && jsonPayload.EnergyA !== null) {
        var EnergyA = device.endpoints.byAddress(18);
        let temp = jsonPayload.EnergyA;
        env.log("EnergyA --->",temp);
        //EnergyA.(temp);
    }
    if (jsonPayload.EnerygB !== undefined && jsonPayload.EnerygB !== null) {
        var EnerygB = device.endpoints.byAddress(19);
        let temp = jsonPayload.EnerygB;
        env.log("EnerygB --->",temp);
        //EnerygB.(temp);
    }
    if (jsonPayload.EnergyC !== undefined && jsonPayload.EnergyC !== null) {
        var EnergyC = device.endpoints.byAddress(20);
        let temp = jsonPayload.EnergyC;
        env.log("EnergyC --->",temp);
        //EnergyC.(temp);
    }
    if (jsonPayload.EnergyPosA !== undefined && jsonPayload.EnergyPosA !== null) {
        var EnergyPosA = device.endpoints.byAddress(21);
        let temp = jsonPayload.EnergyPosA;
        env.log("EnergyPosA --->",temp);
        EnergyPosA.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyPosB !== undefined && jsonPayload.EnergyPosB !== null) {
        var EnergyPosB = device.endpoints.byAddress(22);
        let temp = jsonPayload.EnergyPosB;
        env.log("EnergyPosB --->",temp);
        EnergyPosB.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyPosC !== undefined && jsonPayload.EnergyPosC !== null) {
        var EnergyPosC = device.endpoints.byAddress(23);
        let temp = jsonPayload.EnergyPosC;
        env.log("EnergyPosC --->",temp);
        EnergyPosC.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyNegSum !== undefined && jsonPayload.EnergyNegSum !== null) {
        var EnergyNegSum = device.endpoints.byAddress(24);
        let temp = jsonPayload.EnergyNegSum;
        env.log("EnergyNegSum --->",temp);
        EnergyNegSum.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyNegSumNR !== undefined && jsonPayload.EnergyNegSumNR !== null) {
        var EnergyNegSumNR = device.endpoints.byAddress(25);
        let temp = jsonPayload.EnergyNegSumNR;
        env.log("EnergyNegSumNR --->",temp);
        EnergyNegSumNR.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyNegA !== undefined && jsonPayload.EnergyNegA !== null) {
        var EnergyNegA = device.endpoints.byAddress(26);
        let temp = jsonPayload.EnergyNegA;
        env.log("EnergyNegA --->",temp);
        EnergyNegA.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyNegB !== undefined && jsonPayload.EnergyNegB !== null) {
        var EnergyNegB = device.endpoints.byAddress(27);
        let temp = jsonPayload.EnergyNegB;
        env.log("EnergyNegB --->",temp);
        EnergyNegB.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyNegC !== undefined && jsonPayload.EnergyNegC !== null) {
        var EnergyNegC = device.endpoints.byAddress(28);
        let temp = jsonPayload.EnergyNegC;
        env.log("EnergyNegC --->",temp);
        EnergyNegC.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyReacSum !== undefined && jsonPayload.EnergyReacSum !== null) {
        var EnergyReacSum = device.endpoints.byAddress(29);
        let temp = jsonPayload.EnergyReacSum;
        env.log("EnergyReacSum --->",temp);
        EnergyReacSum.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyReacA !== undefined && jsonPayload.EnergyReacA !== null) {
        var EnergyReacA = device.endpoints.byAddress(30);
        let temp = jsonPayload.EnergyReacA;
        env.log("EnergyReacA --->",temp);
        EnergyReacA.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyReacB !== undefined && jsonPayload.EnergyReacB !== null) {
        var EnergyReacB = device.endpoints.byAddress(31);
        let temp = jsonPayload.EnergyReacB;
        env.log("EnergyReacB --->",temp);
        EnergyReacB.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyReacC !== undefined && jsonPayload.EnergyReacC !== null) {
        var EnergyReacC = device.endpoints.byAddress(32);
        let temp = jsonPayload.EnergyReacC;
        env.log("EnergyReacC --->",temp);
        EnergyReacC.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyAppSum !== undefined && jsonPayload.EnergyAppSum !== null) {
        var EnergyAppSum = device.endpoints.byAddress(33);
        let temp = jsonPayload.EnergyAppSum;
        env.log("EnergyAppSum --->",temp);
        EnergyAppSum.updateApparentPowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyAppA !== undefined && jsonPayload.EnergyAppA !== null) {
        var EnergyAppA = device.endpoints.byAddress(34);
        let temp = jsonPayload.EnergyAppA;
        env.log("EnergyAppA --->",temp);
        EnergyAppA.updateApparentPowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyAppB !== undefined && jsonPayload.EnergyAppB !== null) {
        var EnergyAppB = device.endpoints.byAddress(35);
        let temp = jsonPayload.EnergyAppB;
        env.log("EnergyAppB --->",temp);
        EnergyAppB.updateApparentPowerSensorStatus(temp);
    }
    if (jsonPayload.EnergyAppC !== undefined && jsonPayload.EnergyAppC !== null) {
        var EnergyAppC = device.endpoints.byAddress(36);
        let temp = jsonPayload.EnergyAppC;
        env.log("EnergyAppC --->",temp);
        EnergyAppC.updateApparentPowerSensorStatus(temp);
    }
    if (jsonPayload.PowerFactorAvg !== undefined && jsonPayload.PowerFactorAvg !== null) {
        var PowerFactorAvg = device.endpoints.byAddress(37);
        let temp = jsonPayload.PowerFactorAvg;
        env.log("PowerFactorAvg --->",temp);
        PowerFactorAvg.updateCosPhiSensorStatus(temp);
    }
    if (jsonPayload.PowerFactorA !== undefined && jsonPayload.PowerFactorA !== null) {
        var PowerFactorA = device.endpoints.byAddress(38);
        let temp = jsonPayload.PowerFactorA;
        env.log("PowerFactorA --->",temp);
        PowerFactorA.updateCosPhiSensorStatus(temp);
    }
    if (jsonPayload.PowerFactorB !== undefined && jsonPayload.PowerFactorB !== null) {
        var PowerFactorB = device.endpoints.byAddress(39);
        let temp = jsonPayload.PowerFactorB;
        env.log("PowerFactorB --->",temp);
        PowerFactorB.updateCosPhiSensorStatus(temp);
    }
    if (jsonPayload.PowerFactorC !== undefined && jsonPayload.PowerFactorC !== null) {
        var PowerFactorC = device.endpoints.byAddress(40);
        let temp = jsonPayload.PowerFactorC;
        env.log("PowerFactorC --->",temp);
        PowerFactorC.updateCosPhiSensorStatus(temp);
    }
    if (jsonPayload.PowerReacSum !== undefined && jsonPayload.PowerReacSum !== null) {
        var PowerReacSum = device.endpoints.byAddress(41);
        let temp = jsonPayload.PowerReacSum;
        env.log("PowerReacSum --->",temp);
        PowerReacSum.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerReacA !== undefined && jsonPayload.PowerReacA !== null) {
        var PowerReacA = device.endpoints.byAddress(42);
        let temp = jsonPayload.PowerReacA;
        env.log("PowPowerReacBerReacA --->",temp);
        PowerReacA.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerReacB !== undefined && jsonPayload.PowerReacB !== null) {
        var PowerReacB = device.endpoints.byAddress(43);
        let temp = jsonPayload.PowerReacB;
        env.log("PowerReacB --->",temp);
        PowerReacB.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerReacC !== undefined && jsonPayload.PowerReacC !== null) {
        var PowerReacC = device.endpoints.byAddress(44);
        let temp = jsonPayload.PowerReacC;
        env.log("PowerReacC --->",temp);
        PowerReacC.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerAppSum !== undefined && jsonPayload.PowerAppSum !== null) {
        var PowerAppSum = device.endpoints.byAddress(45);
        let temp = jsonPayload.PowerAppSum;
        env.log("PowerAppSum --->",temp);
        PowerAppSum.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerAppA !== undefined && jsonPayload.PowerAppA !== null) {
        var PowerAppA = device.endpoints.byAddress(46);
        let temp = jsonPayload.PowerAppA;
        env.log("PowerAppA --->",temp);
        PowerAppA.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerAppB !== undefined && jsonPayload.PowerAppB !== null) {
        var PowerAppB = device.endpoints.byAddress(47);
        let temp = jsonPayload.PowerAppB;
        env.log("PowerAppB --->",temp);
        PowerAppB.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.PowerAppC !== undefined && jsonPayload.PowerAppC !== null) {
        var PowerAppC = device.endpoints.byAddress(48);
        let temp = jsonPayload.PowerAppC;
        env.log("PowerAppC --->",temp);
        PowerAppC.updateReactivePowerSensorStatus(temp);
    }
    if (jsonPayload.CurrentA !== undefined && jsonPayload.CurrentA !== null) {
        var CurrentA = device.endpoints.byAddress(49);
        let temp = jsonPayload.CurrentA;
        env.log("CurrentA --->",temp);
        CurrentA.updateCurrentSensorStatus(temp);
    }
    if (jsonPayload.CurrentB !== undefined && jsonPayload.CurrentB !== null) {
        var CurrentB = device.endpoints.byAddress(50);
        let temp = jsonPayload.CurrentB;
        env.log("CurrentB --->",temp);
        CurrentB.updateCurrentSensorStatus(temp);
    }
    if (jsonPayload.CurrentC !== undefined && jsonPayload.CurrentC !== null) {
        var CurrentC = device.endpoints.byAddress(51);
        let temp = jsonPayload.CurrentC;
        env.log("CurrentC --->",temp);
        CurrentC.updateCurrentSensorStatus(temp);
    }
    if (jsonPayload.Demand !== undefined && jsonPayload.Demand !== null) {
        var Demand = device.endpoints.byAddress(52);
        let temp = jsonPayload.Demand;
        env.log("Demand --->",temp);
        Demand.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.DemandMin !== undefined && jsonPayload.DemandMin !== null) {
        var DemandMin = device.endpoints.byAddress(53);
        let temp = jsonPayload.DemandMin;
        env.log("DemandMin --->",temp);
        DemandMin.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.DemandMax !== undefined && jsonPayload.DemandMax !== null) {
        var DemandMax = device.endpoints.byAddress(54);
        let temp = jsonPayload.DemandMax;
        env.log("DemandMax --->",temp);
        DemandMax.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.DemandApp !== undefined && jsonPayload.DemandApp !== null) {
        var DemandApp = device.endpoints.byAddress(55);
        let temp = jsonPayload.DemandApp;
        env.log("DemandApp --->",temp);
        DemandApp.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.DemandA !== undefined && jsonPayload.DemandA !== null) {
        var DemandA = device.endpoints.byAddress(56);
        let temp = jsonPayload.DemandA;
        env.log("DemandA --->",temp);
        DemandA.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.DemandB !== undefined && jsonPayload.DemandB !== null) {
        var DemandB = device.endpoints.byAddress(57);
        let temp = jsonPayload.DemandB;
        env.log("DemandB --->"temp);
        DemandB.updateActivePowerSensorStatus(temp);
    }
    if (jsonPayload.DemandC !== undefined && jsonPayload.DemandC !== null) {
        var DemandC = device.endpoints.byAddress(58);
        let temp = jsonPayload.DemandC;
        env.log("DemandC --->",temp);
        DemandC.updateActivePowerSensorStatus(temp);
    }
    

}
