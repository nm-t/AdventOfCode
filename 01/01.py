#!/usr/bin/env python3

# IN:   List of module masses, each on a separate line
# OUT:  Sum of the fuel requirements for all modules

sumTotalFuelReqs = 0

def calculateFuel(mass):
    return mass/3 - 2

# For each of the lines in the input
# Add fuel calculation on to sum

# Tests using example data
# print(calculateFuel(12) == 2)
# print(calculateFuel(14) == 2)
# print(calculateFuel(1969) == 654)
# print(calculateFuel(100756) == 33583)