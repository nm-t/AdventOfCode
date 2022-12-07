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

    compileMegaLayer(layers)

def compileMegaLayer(layers):
    megaLayerString = ''
    xIndex = 0

    while xIndex < len(layers):
        yIndex = 0
        while yIndex < layerSize:
            yIndex = yIndex + 1

        xIndex = xIndex + 1

    print(megaLayerString)

# For each of the lines in the input
file = open('input.txt', 'r')
if file.mode == 'r':
    for line in file:
        input = line
        splitIntoLayers(input)
