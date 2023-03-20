x = int(input("Informe um número: "))
if (x*1 > 3.77):
    print("Opção 1")
elif(x*2 > 0.5):
    if(x*3 > 0.78):
        print("Opção 2")
    else:
        print("opção 1")
elif(x*4 > 0.25 and x*4 < 0.5):
    print("opção 1")
elif(x*4 == 0.5):
    print("Opção 3")
elif(x*4 > 0.5 or x*4 <= 0.25):
    print("Opção 2")