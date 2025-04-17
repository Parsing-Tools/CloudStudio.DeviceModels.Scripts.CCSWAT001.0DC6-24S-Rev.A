function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
   //config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Esta función le permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
  // la experiencia del usuario final, ya que permite a la plataforma crear 
  // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
  // crea el dispositivo.

endpoints.addEndpoint("1","EnergySum",endpointType.energyMeter);
endpoints.addEndpoint("2","EnergyPosSum",endpointType.energyMeter);
endpoints.addEndpoint("3","EnergySumNR",endpointType.energyMeter);
endpoints.addEndpoint("4","EnergyPosSumNR",endpointType.energyMeter);
endpoints.addEndpoint("5","PowerSum",endpointType.activePowerSensor);
endpoints.addEndpoint("6","PowerA",endpointType.activePowerSensor);
endpoints.addEndpoint("7","PowerB",endpointType.activePowerSensor);
endpoints.addEndpoint("8","PowerC",endpointType.activePowerSensor);
endpoints.addEndpoint("9","VoltAvgLN",endpointType.voltageSensor);
endpoints.addEndpoint("10","VoltA",endpointType.voltageSensor);
endpoints.addEndpoint("11","VoltB",endpointType.voltageSensor);
endpoints.addEndpoint("12","VoltC",endpointType.voltageSensor);
endpoints.addEndpoint("13","VoltAvgLL",endpointType.voltageSensor);
endpoints.addEndpoint("14","VoltAB",endpointType.voltageSensor);
endpoints.addEndpoint("15","VoltBC",endpointType.voltageSensor);
endpoints.addEndpoint("16","VoltAC",endpointType.voltageSensor);
endpoints.addEndpoint("17","Freq",endpointType.frequencyMeter);
endpoints.addEndpoint("18","EnergyA",endpointType.energyMeter);
endpoints.addEndpoint("19","EnerygB",endpointType.energyMeter);
endpoints.addEndpoint("20","EnergyC",endpointType.energyMeter);
endpoints.addEndpoint("21","EnergyPosA",endpointType.activePowerSensor);
endpoints.addEndpoint("22","EnergyPosB",endpointType.activePowerSensor);
endpoints.addEndpoint("23","EnergyPosC",endpointType.activePowerSensor);
endpoints.addEndpoint("24","EnergyNegSum",endpointType.activePowerSensor);
endpoints.addEndpoint("25","EnergyNegSumNR",endpointType.activePowerSensor);
endpoints.addEndpoint("26","EnergyNegA",endpointType.activePowerSensor);
endpoints.addEndpoint("27","EnergyNegB",endpointType.activePowerSensor);
endpoints.addEndpoint("28","EnergyNegC",endpointType.activePowerSensor);
endpoints.addEndpoint("29","EnergyReacSum",endpointType.reactivePowerSensor);
endpoints.addEndpoint("30","EnergyReacA",endpointType.reactivePowerSensor);
endpoints.addEndpoint("31","EnergyReacB",endpointType.reactivePowerSensor);
endpoints.addEndpoint("32","EnergyReacC",endpointType.reactivePowerSensor);
endpoints.addEndpoint("33","EnergyAppSum",endpointType.apparentPowerSensor);
endpoints.addEndpoint("34","EnergyAppA",endpointType.apparentPowerSensor);
endpoints.addEndpoint("35","EnergyAppB",endpointType.apparentPowerSensor);
endpoints.addEndpoint("36","EnergyAppC",endpointType.apparentPowerSensor);
endpoints.addEndpoint("37","PowerFactorAvg",endpointType.cosPhiSensor);
endpoints.addEndpoint("38","PowerFactorA",endpointType.cosPhiSensor);
endpoints.addEndpoint("39","PowerFactorB",endpointType.cosPhiSensor);
endpoints.addEndpoint("40","PowerFactorC",endpointType.cosPhiSensor);
endpoints.addEndpoint("41","PowerReacSum",endpointType.reactivePowerSensor);
endpoints.addEndpoint("42","PowerReacA",endpointType.reactivePowerSensor);
endpoints.addEndpoint("43","PowerReacB",endpointType.reactivePowerSensor);
endpoints.addEndpoint("44","PowerReacC",endpointType.reactivePowerSensor);
endpoints.addEndpoint("45","PowerAppSum",endpointType.reactivePowerSensor);
endpoints.addEndpoint("46","PowerAppA",endpointType.reactivePowerSensor);
endpoints.addEndpoint("47","PowerAppB",endpointType.reactivePowerSensor);
endpoints.addEndpoint("48","PowerAppC",endpointType.reactivePowerSensor);
endpoints.addEndpoint("49","CurrentA",endpointType.currentSensor);
endpoints.addEndpoint("50","CurrentB",endpointType.currentSensor);
endpoints.addEndpoint("51","CurrentC",endpointType.currentSensor);
endpoints.addEndpoint("52","Demand",endpointType.activePowerSensor);
endpoints.addEndpoint("53","DemandMin",endpointType.activePowerSensor);
endpoints.addEndpoint("54","DemandMax",endpointType.activePowerSensor);
endpoints.addEndpoint("55","DemandApp",endpointType.activePowerSensor);
endpoints.addEndpoint("56","DemandA",endpointType.activePowerSensor);
endpoints.addEndpoint("57","DemandB",endpointType.activePowerSensor);
endpoints.addEndpoint("58","DemandC",endpointType.activePowerSensor);

}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}