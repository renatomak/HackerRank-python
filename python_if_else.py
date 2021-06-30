# Se  é estranho imprimir Weird
#Se  é uniforme e está na faixa inclusiva de 2 para 5, impressão Not Weird
#Se  é uniforme e está na faixa inclusiva de 6 para 20, impressão Weird
#Se  é igual e maior do que 20, impressão Not Weird***

n = int(input())

if n%2 != 0 or ( n>=6 and n<=20):
    print('Weird')
else:
    print('Not Weird')

