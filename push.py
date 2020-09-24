import os
import argparse

def getCommitMessage():
    parser = argparse.ArgumentParser(description="Commit message")
    parser.add_argument("message", action="store",  type=str, help="message for commit action")
    arg = parser.parse_args()
    return arg.message

def push(message):
    os.system('git add .')
    cmd = 'git commit -m "' + message + '"'
    os.system(cmd)
    os.system('git push origin master')

def start():
    message = getCommitMessage()
    push(message)

start()