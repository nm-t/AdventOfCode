#!/usr/bin/env python3

# IN:   Encoded 'image' file, 25 x 6 pixels
# OUT:  The number of 1 digits multiplied by the number of 2 digits (in the layer containing the fewest 0 digits)

width = 25
height = 6
layerSize = width * height

def splitIntoLayers(input):
    count = 0
    numLayers = len(input)/layerSize
    layers = []

    start = 0
    end = layerSize

    currentSlice = ''

    while count < numLayers:
        currentSlice = input[start:end]
        # Store each of the layers in the array
        layers.insert(count, currentSlice)
        start = end
        end = end + layerSize
        count = count + 1

    checkCorruption(layers)

def checkCorruption(layers):
    lowestZeroCount = layerSize
    lowestZeroLayer = ''

    for layer in layers:
        zeroCount = 0

        for char in layer:
            # print(char)
            if (char == '0'):
                zeroCount = zeroCount + 1

        if zeroCount < lowestZeroCount:
            lowestZeroCount = zeroCount
            lowestZeroLayer = layer

    # Lowest zero count layer has been found
    # print(lowestZeroCount)
    # print(lowestZeroLayer)

    # Count the 1s and 2s in the layer with the lowest zero count
    oneCount = 0
    twoCount = 0
    for char in lowestZeroLayer:
        if (char == '1'):
            oneCount = oneCount + 1
        if (char == '2'):
            twoCount = twoCount + 1

    # print(lowestZeroCount + oneCount + twoCount)
    print(oneCount * twoCount)

# For each of the lines in the input
file = open('input.txt', 'r')
if file.mode == 'r':
    for line in file:
        input = line
        splitIntoLayers(input)
