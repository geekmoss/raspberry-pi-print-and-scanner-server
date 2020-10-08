from pydantic import BaseModel
from typing import List


class File(BaseModel):
    name: str
    pass


class Files(BaseModel):
    files: List[File]
    pass


class Scan(BaseModel):
    filename: str
    format: str = "png"
    pass
