import re
regexp = re.compile("a")

def search():
    with open("/usr/share/dict/words") as f:
        for i in f:
            if regexp.search(i):
                print "Found : %s"%i

search()