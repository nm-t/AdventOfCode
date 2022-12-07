#!/usr/bin/env python3

# IN:   List of module masses, each on a separate line
# OUT:  Sum of the fuel requirements for all modules (taking into account the fuel requirements for the fuel itself)

sumTotalFuelReqs = 0

def calculateFuel(mass):
    fuel = mass/3 - 2
    if fuel > 0:
        return fuel + calculateFuel(fuel)
    else: # fuel <= 0
        return 0

# For each of the lines in the input
file = open('input.txt', 'r')
if file.mode == 'r':
    for line in file:
        # Add fuel calculation on to sum
        sumTotalFuelReqs += calculateFuel(int(line))

print(sumTotalFuelReqs)

# Tests using example data
# print(calculateFuel(14) == 2)
# print(calculateFuel(1969) == 966)
# print(calculateFuel(100756) == 50346)