bool valve_PRESS_FUEL_isActuated = false;
bool valve_PRESS_LOX_isActuated = false;
bool valve_VENT_FUEL_isActuated = false;
bool valve_VENT_LOX_isActuated = false;
bool valve_MAIN_FUEL_isActuated = false;
bool valve_MAIN_LOX_isActuated = false;
bool valve_PURGE_FUEL_isActuated = false;
bool valve_PURGE_LOX_isActuated = false;
char status[112];
String fromPi;

void setup() {
    Serial.begin(9600);
    pinMode(22, OUTPUT);
    pinMode(26, OUTPUT); 
    pinMode(30, OUTPUT); 
    pinMode(34, OUTPUT);
    pinMode(38, OUTPUT);
    pinMode(42, OUTPUT);
    pinMode(46, OUTPUT);
    pinMode(50, OUTPUT);
    // Potentially adding input pins later for verification of actuation
}


void loop() {
  if (Serial.available() > 0) {
    // Reading Message
    fromPi = Serial.read();
    
    // Valve: FUEL-Press (1), Solenoid NC
    if (fromPi == "FUEL-PRESS-OPEN") {valve_PRESS_FUEL_isActuated = true; digitalWrite(22, HIGH); Serial.print("CONFIRM");} // When actuated, valve is OPEN
    if (fromPi == "FUEL-PRESS-CLOSED") {valve_PRESS_FUEL_isActuated = false; digitalWrite(22, LOW); Serial.print("CONFIRM");}

    // Valve: LOX-Press (2), Solenoid NC
    if (fromPi == "LOX-PRESS-OPEN") {valve_PRESS_LOX_isActuated = true; digitalWrite(26, HIGH); Serial.print("CONFIRM");} // When actuated, valve is OPEN
    if (fromPi == "LOX-PRESS-CLOSED") {valve_PRESS_LOX_isActuated = false; digitalWrite(26, LOW); Serial.print("CONFIRM");}

    // Valve: FUEL-Vent (3), Pneumatic NO
    if (fromPi == "FUEL-VENT-CLOSED") {valve_VENT_FUEL_isActuated = true; digitalWrite(30, HIGH); Serial.print("CONFIRM");} // When actuated, valve is CLOSED
    if (fromPi == "FUEL-VENT-OPEN") {valve_VENT_FUEL_isActuated = false; digitalWrite(30, LOW); Serial.print("CONFIRM");}

    // Valve: LOX-Vent (4), Pneumatic NO
    if (fromPi == "LOX-VENT-CLOSED") {valve_VENT_LOX_isActuated = true; digitalWrite(34, HIGH); Serial.print("CONFIRM");} // When actuated, valve is CLOSED
    if (fromPi == "LOX-VENT-OPEN") {valve_VENT_LOX_isActuated = false; digitalWrite(34, LOW); Serial.print("CONFIRM");}
    
    // Valve: FUEL-Main (5), Pneumatic NC
    if (fromPi == "FUEL-MAIN-OPEN") {valve_MAIN_FUEL_isActuated = true; digitalWrite(38, HIGH); Serial.print("CONFIRM");} // When actuated, valve is OPEN
    if (fromPi == "FUEL-MAIN-CLOSED") {valve_MAIN_FUEL_isActuated = false; digitalWrite(38, LOW); Serial.print("CONFIRM");}
    
    // Valve: LOX-Main (6), Pneumatic NC
    if (fromPi == "LOX-MAIN-OPEN") {valve_MAIN_LOX_isActuated = true; digitalWrite(42, HIGH); Serial.print("CONFIRM");} // When actuated, valve is OPEN
    if (fromPi == "LOX-MAIN-CLOSED") {valve_MAIN_LOX_isActuated = false; digitalWrite(42, LOW); Serial.print("CONFIRM");}
    
    // Valve: FUEL-Purge (7), NC (Momentary)
    if (fromPi == "FUEL-PURGE-OPEN") {valve_PURGE_FUEL_isActuated = true; digitalWrite(46, HIGH); Serial.print("CONFIRM");} // When actuated, valve is OPEN
    if (fromPi == "FUEL-PURGE-CLOSED") {valve_PURGE_FUEL_isActuated = false; digitalWrite(46, LOW); Serial.print("CONFIRM");}
    
    // Valve: LOX-Purge (8), NC (Momentary)
    if (fromPi == "LOX-PURGE-OPEN") {valve_PURGE_LOX_isActuated = true; digitalWrite(50, HIGH); Serial.print("CONFIRM");} // When actuated, valve is OPEN
    if (fromPi == "LOX-PURGE-CLOSED") {valve_PURGE_LOX_isActuated = false; digitalWrite(50, LOW); Serial.print("CONFIRM");}

    // Status
    if (fromPi == "STATUS") {
      sprintf(status, '{"FUEL-PRESS":%d,"LOX-PRESS":%d,"FUEL-VENT":%d,"LOX-VENT":%d,"FUEL-MAIN":%d,"LOX-MAIN":%d,"FUEL-PURGE":%d,"LOX-PURGE":%d}',
              valve_PRESS_FUEL_isActuated, valve_PRESS_LOX_isActuated, valve_VENT_FUEL_isActuated, valve_VENT_LOX_isActuated, valve_MAIN_FUEL_isActuated, valve_MAIN_LOX_isActuated, valve_PURGE_FUEL_isActuated, valve_PURGE_LOX_isActuated);
      Serial.print(status);
    }
  }
}