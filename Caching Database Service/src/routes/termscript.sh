# Terminates the python script
ps aux | grep "python -u script.py" | tr --squeeze-repeats ' ' | cut --delimiter=' ' --fields=2 | xargs kill
