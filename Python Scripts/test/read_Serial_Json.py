# importing serial, json, & sys libarys
import serial, json, sys

####* User defined variables START *####
try:
    sys.argv[1]
except IndexError:
    baudrate = 9600 # defult value
else:
    baudrate = sys.argv[1]

try:
    sys.argv[2]
except IndexError:
    port = 'COM3' # defult value
else:
    port = sys.argv[2]
####! User defined variables END !####

# Creating serial port object
ser = serial.Serial()
ser.baudrate = baudrate
ser.port = port
ser.open()

# Start loop to create json objects
while ser.is_open == True:
    msg = ser.readline()
    decodedMsg = msg.decode('UTF-8')
    jsonObject = json.loads(decodedMsg)
    print(jsonObject)