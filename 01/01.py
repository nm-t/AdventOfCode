#!/usr/bin/env python3

# IN:   List of module masses, each on a separate line
# OUT:  Sum of the fuel requirements for all modules

sumTotalFuelReqs = 0

def calculateFuel(mass):
    return mass/3 - 2

# For each of the lines in the input
file = open('input.txt', 'r')
if file.mode == 'r':
    for line in file:
        # Add fuel calculation on to sum
        sumTotalFuelReqs += calculateFuel(int(line))

print(sumTotalFuelReqs)

# Tests using example data
# print(calculateFuel(12) == 2)
# print(calculateFuel(14) == 2)
# print(calculateFuel(1969) == 654)
# print(calculateFuel(100756) == 33583)