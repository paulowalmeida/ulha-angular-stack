import os
import shutil
from templateframework.metadata import Metadata

eventPreffixes = ['Get', 'Get', 'Post', 'Put', 'Delete']
eventSuffixes = ['', 'Success', 'Failure']

def run(metadata: Metadata = None):
    computedInputs = metadata.computed_inputs
    entityName = metadata.computed_inputs['entity_pascal']

    buildEventsName(computedInputs, entityName)
    return metadata
             
def buildEventsName(computedInputs, entityName):
    for i in range(len(eventPreffixes)):
        prefix = eventPreffixes[i]

        for j in range(len(eventSuffixes)):
            sufix = eventSuffixes[j]
            eventVar = buildEventVar(prefix, sufix, i) 
            eventValue = buildEventValue(prefix, sufix, entityName, i, j)            
            computedInputs[eventVar] = eventValue 

def buildEventVar(prefix, sufix, i):
    return 'evt_' + prefix.lower() + ('_list' if i == 0 else '_item') + ( '_' + sufix.lower() if sufix != '' else '')

def buildEventValue(prefix, sufix, entityName, i, j):
    return prefix + ' ' + str(entityName) + ('s' if i == 0 else '') + (' ' + sufix if j != 0 else '')