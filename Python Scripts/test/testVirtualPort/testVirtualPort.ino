void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(5000); // wait 5 secs
  Serial.print("{\"someinfo\":\"0\"}\n");
}
