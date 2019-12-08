#!/usr/bin/env python3

# IN:   Encoded 'image' file, 25 x 6 pixels
# OUT:  The number of 1 digits multiplied by the number of 2 digits (in the layer containing the fewest 0 digits)

width = 25
height = 6
layer = width * height

layers = []

def checkCorruption(input):
    numLayers = len(input)/layer
    print:numLayers

# For each of the lines in the input
file = open('input.txt', 'r')
if file.mode == 'r':
    for line in file:
        input = line
        checkCorruption(input)
