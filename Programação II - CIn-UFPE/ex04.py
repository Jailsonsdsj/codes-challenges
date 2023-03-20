def prime_number(number):
    prime = [1]

    for m in range(2, number):
        div = 0
        for n in range(2, m):
            if(m % n == 0):
                div+=1
        if(div == 0):
            prime.append(m)
    return prime


print(prime_number(20))
