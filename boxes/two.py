

string = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle grgl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
print(''.join([chr(((ord(s) + 2) - ord('a')) % 26 + ord('a')) if s >= 'a' and s <= 'z' else s for s in string]))



 import numpy as np

 a = ([1, 3, 2, 4, 5])

 def sort(n,inputArray):
    arr = np.array(inputArray)
    print(arr[arr.argsort()[-1:-(n+1):-1]])
sort(2,a)
sort(3,a)
sort(4,a)



list = range(1,1001)
print([pow(x,2) for x in list if x % 2 == 1])


import random

def ham(l):
    x = [random.choice([0,1]) for _ in range(l)]
    y = [random.choice([0,1]) for _ in range(l)]
    return len([1 for tuple in zip(x,y) if tuple[0] != tuple[1] ])


print(ham(10))

def con(a,b):
    return [element for element in a if element in b ]


con(b,a)


a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

def con(a,b):
    return [element for element in a if element in b ]

def stiFor(list):
    out = []
    for element in list:
        out.append(len(element))
    return out

    def stiMap(list):
        return map(len,list)

    def sti(list):
        return [len(element) for element in list]

print(sti(["house", "boat", "wife"]))




a = [ [1,2,3], [4,5,6], [7,8,9] ]


import copy

def transpose(mtx):
    out = copy.deepcopy(mtx)
    index = -1
    second = 0
    for lists in mtx:
        index += 1
        second = 0
        for e in lists:
            out[second][index] = e
            second += 1
    return out


def transpose(mtx):
    out = [][]
    index = -1
    second = 0
    for lists in mtx:
        index += 1
        second = 0
        for e in lists:
            out[second][index] = e
            second += 1
    return out

# one line as reference:
m = [[1,2],[3,4],[5,6]]
rez = [[m[j][i] for j in range(len(m))] for i in range(len(m[0]))]


print(transpose(a))



import copy
a = [ [1,2,3], [4,5,6], [7,8,9] ]
b = [ [1,2,3], [4,5,6], [7,8,9] ]

def addMtx(a,b):
    col = 0
    row = -1
    out = copy.deepcopy(a)
    for e in a:
        col = 0
        row +=1
        for x in e:
            out[row][col] = a[row][col] + a[row][col]
            col +=1
    return out

print(addMtx(a,b))
