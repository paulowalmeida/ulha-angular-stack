import os
import shutil
from templateframework.metadata import Metadata

methodsName = ['get', 'get', 'save', 'edit', 'remove']

def run(metadata: Metadata = None):
    computedInputs = metadata.computed_inputs
    entityName = metadata.computed_inputs['entity_pascal']

    buildHttpMethodNames(computedInputs, entityName)
    return metadata

def buildHttpMethodNames(computedInputs, entityName):
    for index in range(len(methodsName)):
        methodName = methodsName[index]
        methodVar = ''
        methodValue = ''

        if index == 0:
            methodVar = str(methodName + '_list')
            methodValue = methodName + str(entityName) + 's'
        else:
            methodVar = str(methodName + '_item')
            methodValue = methodName + str(entityName) + ('Byid' if index == 1 else '')

        computedInputs[methodVar] = methodValue
