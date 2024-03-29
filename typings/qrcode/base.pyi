"""
This type stub file was generated by pyright.
"""

EXP_TABLE = ...
LOG_TABLE = ...
RS_BLOCK_OFFSET = ...
RS_BLOCK_TABLE = ...
def glog(n): # -> int:
    ...

def gexp(n): # -> int:
    ...

class Polynomial:
    def __init__(self, num, shift) -> None:
        ...
    
    def __getitem__(self, index):
        ...
    
    def __iter__(self):
        ...
    
    def __len__(self): # -> int:
        ...
    
    def __mul__(self, other): # -> Polynomial:
        ...
    
    def __mod__(self, other): # -> Self@Polynomial:
        ...
    


class RSBlock:
    def __init__(self, total_count, data_count) -> None:
        ...
    


def rs_blocks(version, error_correction): # -> list[Unknown]:
    ...

