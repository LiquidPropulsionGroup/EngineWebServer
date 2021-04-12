import redis as red
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

try:
    sys.argv[3]
except IndexError:
    redisHost = '127.0.0.1'
else:
    redisHost = sys.argv[3]

try:
    sys.argv[4]
except IndexError:
    stream_name = 'test'
else:
    stream_name = sys.argv[4]
####! User defined variables END !####

# Creating serial port object
ser = serial.Serial()
ser.baudrate = baudrate
ser.port = port
ser.open()

# Creating redis client
redis = red.Redis(host=redisHost, port=6379)

####* Script START *####
while ser.is_open == True:
    message = ser.readline()
    decodedMessage = message.decode('UTF-8')
    jsonObject = json.loads(decodedMessage)
    redis.xadd(stream_name, jsonObject)
####! Script END !####