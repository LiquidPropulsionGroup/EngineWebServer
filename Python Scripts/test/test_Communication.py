import serial
import json

ser = serial.Serial()
ser.baudrate = 9600
ser.port = 'COM3'
ser.open()

while ser.is_open == True:
    tmp_msg = ser.readline()
    info = tmp_msg.decode('UTF-8')
    someJson = json.loads(info)
    print(someJson)
    print(type(someJson))