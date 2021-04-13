# Terminates the python script
ps -a | grep "python" | tr --squeeze-repeats ' ' | cut --delimiter=' ' --fields=1 | xargs kill -9