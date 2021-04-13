import redis as red
import sys

####* User defined variables START *####
try:
    sys.argv[1]
except IndexError:
    redisHost = '127.0.0.1'
else:
    redisHost = sys.argv[1]
####! User defined variables END !####

redis = red.Redis(host=redisHost, port=6379)

# This is how you add to a stream
redis.xadd(stream_name, {key: value})